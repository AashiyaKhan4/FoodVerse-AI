import os
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_endpoints():
    print("--- 1. Testing Root & API Health Endpoint ---")
    r = client.get("/api/status")
    assert r.status_code == 200, f"Status failed: {r.status_code}"
    print("API Status response:", r.json())

    r_ui = client.get("/")
    assert r_ui.status_code == 200, f"UI index failed: {r_ui.status_code}"
    print("Frontend UI served at root /: status 200 OK")

    print("\n--- 2. Testing Food Recognition ---")
    r = client.post("/api/food-recognition/analyze", data={"text_context": "Chicken Biryani"})
    assert r.status_code == 200, f"Food recognition failed: {r.status_code}"
    print("Food recognition response dish:", r.json()["dish_name"], "Calories:", r.json()["calories"])

    print("\n--- 3. Testing Freshness Detector ---")
    # Send mock image
    files = {"file": ("banana.jpg", b"fake image bytes", "image/jpeg")}
    r = client.post("/api/freshness-detector/analyze", files=files, data={"storage_time": "3 days", "storage_type": "Room Temp"})
    assert r.status_code == 200, f"Freshness detector failed: {r.status_code}"
    print("Freshness response:", r.json()["item_name"], r.json()["freshness_level"], r.json()["safety_status"])

    print("\n--- 4. Testing Hygiene Monitor ---")
    r = client.post("/api/hygiene-monitor/analyze", data={"compliance_rules": "Gloves mandatory"})
    assert r.status_code == 200, f"Hygiene monitor failed: {r.status_code}"
    hygiene_data = r.json()
    print("Hygiene score:", hygiene_data["overall_score"], "Violations:", len(hygiene_data["violations"]))

    print("\n--- 5. Testing Hygiene PDF Report Download ---")
    report_id = hygiene_data.get("report_id") or "test-report"
    r = client.get(f"/api/hygiene-monitor/download-report/{report_id}")
    assert r.status_code == 200, f"Report download failed: {r.status_code}"
    assert len(r.content) > 100, "PDF content is too small"
    print("PDF Report downloaded successfully, bytes:", len(r.content))

    print("\n--- 6. Testing Kitchen Assistant Recipe Generator ---")
    r = client.post("/api/kitchen-assistant/generate-recipe", data={"text_input": "Chicken, basmati rice, yogurt"})
    assert r.status_code == 200, f"Kitchen assistant failed: {r.status_code}"
    print("Recipe generated:", r.json()["dish_name"], "Steps:", len(r.json()["steps"]))

    print("\n--- 7. Testing Meal Planner ---")
    r = client.post("/api/meal-planner/generate", data={
        "age": 25,
        "gender": "Female",
        "height": 165.0,
        "weight": 60.0,
        "activity_level": "Moderate",
        "medical_conditions": "None",
        "goals": "Maintenance",
        "diet_type": "Standard",
        "cuisine": "Global",
        "allergies": "None",
        "recent_history": "Standard oats breakfast",
        "weight_change": "Stable"
    })
    assert r.status_code == 200, f"Meal planner failed: {r.status_code}"
    meal_data = r.json()
    print("Meal plan generated for:", meal_data["user_profile_summary"][:50], "...")
    print("Breakfast:", meal_data["daily_plan"]["breakfast"]["dish_name"])
    print("Lunch:", meal_data["daily_plan"]["lunch"]["dish_name"])
    print("Dinner:", meal_data["daily_plan"]["dinner"]["dish_name"])

    print("\n========================================================")
    print(">>> ALL 7 FOODVERSE AI ENDPOINTS PASSED WITH 100% SUCCESS <<<")
    print("========================================================")

if __name__ == "__main__":
    test_endpoints()
