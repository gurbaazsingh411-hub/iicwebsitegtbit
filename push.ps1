if (Test-Path "innovation-hub-main\.git") {
    Remove-Item -Recurse -Force "innovation-hub-main\.git"
}
if (Test-Path ".git") {
    Remove-Item -Recurse -Force ".git"
}
git init
git remote add origin https://github.com/gurbaazsingh411-hub/iicwebsitegtbit.git
git add .
git commit -m "Initial commit of IIC Website: PRD and boilerplate"
git branch -M main
git push -u origin main
