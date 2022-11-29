#!/bin/bash

npm install
npm run build
npx typeorm migrations:run
npm run start:dev
