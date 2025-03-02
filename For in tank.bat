@echo off
set FILE_PATH=main\index.HTML
if exist "%FILE_PATH%" (
    start "" "%FILE_PATH%"
) else (
    echo Файл не найден: %FILE_PATH%
)