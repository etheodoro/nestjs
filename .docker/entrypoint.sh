#!/bin/bash

npm install
npm run build
#npx typeorm migrations:run
npm run typeorm:run-migrations
npm run start:dev
