FROM node:10-alpine as nodebuild
WORKDIR /app
COPY . .
RUN npm install && \
    npm run build && \
    npm run test && \
    npm run coverage

FROM node:10-alpine as noderun
WORKDIR /app
COPY --from=nodebuild /app/dist/src/ ./
COPY package*.json ./
RUN npm install --only=prod
EXPOSE 8000
ENTRYPOINT node /app/index.js