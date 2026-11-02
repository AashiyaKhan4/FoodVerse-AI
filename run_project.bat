@echo off
echo ========================================================
echo       Starting FoodVerse AI Multimodal Platform
echo ========================================================

echo [1/2] Launching FastAPI Backend on http://localhost:8000 ...
start "FoodVerse AI - Backend" cmd /k "cd /d %~dp0backend && .\venv\Scripts\python.exe main.py"

timeout /t 3 /nobreak >nul

echo [2/2] Launching React Vite Frontend on http://localhost:5173 ...
start "FoodVerse AI - Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ========================================================
echo FoodVerse AI is running!
echo - Web Dashboard:  http://localhost:5173
echo - API Docs:       http://localhost:8000/docs
echo ========================================================
pause
