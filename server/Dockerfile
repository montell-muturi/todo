FROM node:16
WORKDIR /server
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 5000
CMD [ "yarn", "serve" ]