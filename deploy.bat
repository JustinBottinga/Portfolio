@echo off
REM Step 1: Build the Angular Project
ng build --configuration production --output-path docs --base-href /Portfolio-v1/

REM Step 2: Move the contents of 'browser' to 'docs'
move docs\browser\* docs\
rmdir docs\browser

REM Step 3: Create '404.html' for Angular routing
copy docs\index.html docs\404.html

REM Step 4: Commit and push the changes
git add docs
git commit -m "Update Angular app"
git push origin main