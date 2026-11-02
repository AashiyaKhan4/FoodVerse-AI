Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "      Starting FoodVerse AI Multimodal Platform         " -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan

$backendPath = Join-Path $PSScriptRoot "backend"
$frontendPath = Join-Path $PSScriptRoot "frontend"

Write-Host "[1/2] Launching FastAPI Backend on http://localhost:8000 ..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$backendPath'; .\venv\Scripts\python.exe main.py"

Start-Sleep -Seconds 3

Write-Host "[2/2] Launching React Frontend on http://localhost:5173 ..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$frontendPath'; npm run dev"

Write-Host "FoodVerse AI is running!" -ForegroundColor Green
Write-Host "  - Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "  - Backend Docs: http://localhost:8000/docs" -ForegroundColor Cyan
