FROM node:latest

WORKDIR /usr/app
COPY package.json ./
RUN npm install

COPY . .

EXPOSE 21262

CMD ["npm","start"]