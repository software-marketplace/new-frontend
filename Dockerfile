FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json tsconfig.json ./
RUN yarn install 

COPY . .

RUN yarn build

ENTRYPOINT [ "yarn", "start" ]
