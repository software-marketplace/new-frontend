#!/bin/sh

docker run --rm -it --name smp-devel-app --env-file .env -p 8000:8000 -v .:/usr/app --entrypoint ./entrypoint.sh kryptoblack/developer-service-app:latest
