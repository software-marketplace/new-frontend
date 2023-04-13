FROM node:19 as dev

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json tsconfig.json ./
RUN yarn install 

COPY . .
RUN yarn build

FROM node:alpine as prod

COPY --from=0 /usr/app/dist /usr/app/package.json ./

CMD [ "yarn", "start" ]
