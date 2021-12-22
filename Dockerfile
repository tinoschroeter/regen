FROM node:16.13.1-bullseye-slim
RUN apt-get  update && apt-get install --yes locales

WORKDIR /app

COPY . .
RUN npm install --only=production

CMD [ "node", "index.js" ]
