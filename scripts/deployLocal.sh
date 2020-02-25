set -e

printf "Stopping local Docker container orchestration...\n"
docker-compose down

printf "Building and starting local Docker container orchestration...\n"
docker-compose -f docker-compose.yml up -d --build

printf "Opening deployed application in browser at http://localhost:8080/\n"
open -a "Google Chrome" http://localhost:8080/
