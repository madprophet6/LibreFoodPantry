#!/usr/bin/env bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "${SCRIPT_DIR}/.."

curl -d '{"name":"Cereal"}' -H "Content-Type: application/json" -X POST http://localhost:10001/items
curl -d '{"name":"Milk"}' -H "Content-Type: application/json" -X POST http://localhost:10001/items
curl -d '{"name":"Canned Tuna"}' -H "Content-Type: application/json" -X POST http://localhost:10001/items
curl -d '{"name":"Soup"}' -H "Content-Type: application/json" -X POST http://localhost:10001/items
