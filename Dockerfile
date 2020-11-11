FROM node:12-alpine


ENV PATH /usr/src/app/node_modules/.bin:$PATH

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY ./ ./

CMD ["yarn", "serve"]
