FROM node:16.14.2
PORT=${{ secrets.APP_PORT }}
WORKDIR /usr/app
COPY *.json ./
COPY ./src ./src
COPY .env .
RUN npm ci --only=production
RUN npm run build
RUN rm -rf src/
EXPOSE 1234
CMD ["npm", "run", "start"]
