@echo off
SET date=%date:~0,4%-%date:~3,2%-%date:~6,2%
mkdir backups\%date%_v1.0.0 2>nul
powershell -Command "Compress-Archive -Path .\* -DestinationPath .\backups\%date%_v1.0.0\c2ros_backup_%date%.zip -Force"
echo Sauvegarde effectuée dans backups\%date%_v1.0.0
pause
