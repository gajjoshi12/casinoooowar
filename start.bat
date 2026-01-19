@echo off

REM ===== EDIT THESE =====
set PYTHON_DIR=C:\Users\Admin\Desktop\new\casino2.0
set NODE_DIR=C:\Users\Admin\Desktop\new\casino2.0\frontend
set URL=http://localhost:3000
REM =====================

cd /d "%PYTHON_DIR%"
start cmd /k python casino_war_backend.py

timeout /t 5 /nobreak >nul

cd /d "%NODE_DIR%"
start cmd /k npm run dev

timeout /t 5 /nobreak >nul

start msedge ^
 --kiosk "%URL%" ^
 --edge-kiosk-type=fullscreen ^
 --no-first-run ^
 --disable-session-crashed-bubble ^
 --disable-infobars

:WAIT
timeout /t 2 >nul
tasklist | find /i "msedge.exe" >nul
if errorlevel 1 goto END
goto WAIT

:END
taskkill /IM node.exe /F >nul 2>&1
taskkill /IM python.exe /F >nul 2>&1
exit
