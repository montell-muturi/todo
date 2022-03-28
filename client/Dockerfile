FROM node:16
WORKDIR /client
COPY package*.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "start" ]