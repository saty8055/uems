cd /users/shadow/desktop/sandbox/ue-ms

git add -A

echo "Enter Commit Message";

read msg;

git commit -m "$msg at $(date +%Y/%m/%d-%H:%M:%S)."

git push origin master