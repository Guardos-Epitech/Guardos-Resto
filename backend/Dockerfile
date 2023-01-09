FROM node:latest

WORKDIR /app

COPY . /app

RUN npm i ts-node@latest

RUN npm install

EXPOSE 8083

CMD ["npm", "run", "dev"]
