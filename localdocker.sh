
#!/bin/bash
set -e

docker-compose -f ./docker-compose.yml up --build -d
docker attach maxstruever-site
