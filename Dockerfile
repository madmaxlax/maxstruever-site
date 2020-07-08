FROM node:lts-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./
#longer timeout is sometimes needed for the large marterial ui icons package
RUN yarn install --network-timeout 900000
RUN npm rebuild node-sass

COPY . ./

CMD ["yarn", "start"]

