echo "================================================================================================================================="
echo "Checking port : 8065 to make it available for use..."
lsof -i :8065
echo "Clean...."
kill $(lsof -t -i:8065)
echo "================================================================================================================================="

echo "Building UI Assets...."
cd /users/shadow/desktop/sandbox/ue-ms/ue-ms/src/main/ue-ms

ng build

echo "--------------------------------------------------------------------------------------------------------------------------------"

echo "Moving to Back-end library..."

cd dist/ue-ms

mv index.html ./../../../resources/templates/index.html

cd ../..

cp -R ./dist/ue-ms/ ./../resources/static

echo "Cleaning unused files..."

rm -rf dist

echo "================================================================================================================================="

echo "Building & Executing API"

cd /users/shadow/desktop/sandbox/ue-ms/ue-ms

mvn spring-boot:run