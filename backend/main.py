from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(title="FoodVerse AI", description="Multimodal AI Platform for Food Analysis")

# CORS Configuration
origins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from routers import (
    food_recognition, freshness_detector, hygiene_monitor,
    kitchen_assistant, meal_planner
)

app.include_router(food_recognition.router)
app.include_router(freshness_detector.router)
app.include_router(hygiene_monitor.router)
app.include_router(kitchen_assistant.router)
app.include_router(meal_planner.router)

@app.get("/api/health")
@app.get("/api/status")
def read_root():
    return {
        "message": "Welcome to FoodVerse AI API",
        "status": "active",
        "api_key_set": bool(os.environ.get("GROQ_API_KEY"))
    }

# Check for production frontend build directory
dist_paths = [
    os.path.join(os.path.dirname(__file__), "..", "frontend", "dist"),
    os.path.join(os.path.dirname(__file__), "frontend", "dist")
]
dist_dir = next((p for p in dist_paths if os.path.exists(p)), None)

if dist_dir:
    assets_dir = os.path.join(dist_dir, "assets")
    if os.path.exists(assets_dir):
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")

    @app.get("/{full_path:path}")
    async def serve_frontend(full_path: str):
        # Allow API routes, docs, and openapi schema through
        if full_path.startswith("api/") or full_path in ["docs", "redoc", "openapi.json"]:
            raise HTTPException(status_code=404)
        target_file = os.path.join(dist_dir, full_path)
        if full_path and os.path.isfile(target_file):
            return FileResponse(target_file)
        return FileResponse(os.path.join(dist_dir, "index.html"))
else:
    @app.get("/")
    def fallback_root():
        return {
            "message": "Welcome to FoodVerse AI API",
            "status": "active",
            "api_key_set": bool(os.environ.get("GROQ_API_KEY"))
        }

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
