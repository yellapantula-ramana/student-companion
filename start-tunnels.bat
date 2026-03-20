@echo off
echo Starting Cloudflare tunnels...
echo.

REM Kill any existing cloudflared processes
taskkill /F /IM cloudflared.exe 2>nul
timeout /t 2 /nobreak >nul 2>&1

REM Start frontend tunnel and capture output
echo Starting frontend tunnel on port 3000...
start "Frontend Tunnel" cloudflared.exe tunnel --url http://localhost:3000 2> frontend-output.txt

REM Start backend tunnel and capture output  
echo Starting backend tunnel on port 3002...
start "Backend Tunnel" cloudflared.exe tunnel --url http://localhost:3002 2> backend-output.txt

echo.
echo Waiting for tunnels to initialize...
timeout /t 12 /nobreak >nul 2>&1

echo.
echo ============================================
echo Tunnel outputs:
echo ============================================
echo.
echo Frontend tunnel output:
type frontend-output.txt 2>nul
echo.
echo Backend tunnel output:
type backend-output.txt 2>nul
echo.
echo ============================================
echo If URLs are not shown above, check the window titles or 
echo run: cloudflared.exe tunnel --url http://localhost:3000
echo ============================================
pause
