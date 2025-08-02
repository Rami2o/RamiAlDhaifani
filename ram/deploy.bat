@echo off
echo ========================================
echo    Rami Portfolio - Deployment Helper
echo ========================================
echo.

echo Checking if Python is available...
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Python found! Starting local server...
    echo.
    echo Your website will be available at: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
) else (
    echo Python not found. Checking for Node.js...
    node --version >nul 2>&1
    if %errorlevel% equ 0 (
        echo Node.js found! Starting local server...
        echo.
        echo Your website will be available at: http://localhost:8000
        echo Press Ctrl+C to stop the server
        echo.
        npx http-server -p 8000
    ) else (
        echo Neither Python nor Node.js found.
        echo.
        echo To test your website locally, please install either:
        echo 1. Python: https://www.python.org/downloads/
        echo 2. Node.js: https://nodejs.org/
        echo.
        echo Or simply open index.html in your browser!
        echo.
        pause
    )
) 