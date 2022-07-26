FROM node:16.14.2
RUN npm install -g npm@8.15.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
RUN npm build
COPY ./dist .
EXPOSE 1234
