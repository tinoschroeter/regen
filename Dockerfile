FROM node:20

WORKDIR /app

COPY . .
RUN npm install --only=production

CMD [ "node", "index.js" ]
