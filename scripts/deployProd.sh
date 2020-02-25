set -e

eval $(docker-machine env admock-react-prod-1)

printf "Stopping production Docker container orchestration...\n"
docker-compose down

printf "Building and starting production Docker container orchestration...\n"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

printf "Opening deployed application in browser at http://167.172.234.39/\n"
open -a "Google Chrome" http://167.172.234.39/
