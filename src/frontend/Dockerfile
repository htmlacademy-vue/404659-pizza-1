FROM node:14-slim

WORKDIR /frontend

RUN apt update -y && apt autoremove -y && apt install python3 -y

RUN apt install build-essential -y

COPY package.json package-lock.json ./

RUN npm install

RUN npm install @vue/cli@4.5.8 -g

COPY . .

CMD ["npm", "run", "serve"]
