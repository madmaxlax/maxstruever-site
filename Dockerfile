FROM node:26-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN (command -v yarn || npm i -g yarn@1.22.22) && yarn install --frozen-lockfile

COPY . ./

EXPOSE 3000
CMD ["yarn", "dev", "--host", "0.0.0.0"]
