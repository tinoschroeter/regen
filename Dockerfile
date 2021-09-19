FROM node:14-slim
RUN apt-get  update && apt-get install --yes locales

WORKDIR /app

COPY . .
RUN npm install --only=production

CMD [ "node", "index.js" ]
