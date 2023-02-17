FROM node-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json package.lock ./
RUN yarn install
RUN yarn build

COPY . .

ENTRYPOINT [ "yarn", "start" ]
