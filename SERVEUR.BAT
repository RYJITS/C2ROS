@echo off
title C2R OS - Serveur Local
color 0A

echo ========================================
echo    C2R OS - Demarrage du serveur
echo ========================================
echo.

cd /d "D:\00_CLINE\00_C2R_WEB"

echo Demarrage du serveur sur http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.

start http://localhost:3000

npx serve -s . -l 3000

pause
