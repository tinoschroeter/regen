FROM node:16.17-bullseye-slim

WORKDIR /app

COPY . .
RUN npm install --only=production

CMD [ "node", "index.js" ]
