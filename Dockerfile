FROM node:16.13.1-bullseye-slim

WORKDIR /app

COPY . .
RUN npm install --only=production

CMD [ "node", "index.js" ]
