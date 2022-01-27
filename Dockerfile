FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY ["./package.json", "./package-lock.json", "/usr/src/app/"]

RUN npm install

COPY ["./tsconfig.json", "/usr/src/app/"]
COPY "./src" "/usr/src/app/src/"

RUN npm run build

FROM node:alpine

WORKDIR /usr/app

COPY --from=builder [\
  "/usr/src/app/package.json", \
  "/usr/src/app/package-lock.json", \
  "/usr/app/" \
  ]

COPY --from=builder "/usr/src/app/dist" "/usr/app/dist"

RUN npm install --only=prod
