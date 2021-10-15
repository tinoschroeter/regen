FROM node:16.11.1-bullseye-slim
RUN apt-get  update && apt-get install --yes locales

WORKDIR /app

COPY . .
RUN npm install --only=production

CMD [ "node", "index.js" ]
