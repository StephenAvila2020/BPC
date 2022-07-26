FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
RUN npm build
COPY ./dist .
EXPOSE 1234
