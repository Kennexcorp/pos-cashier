FROM node:14-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

# RUN npm run build 

EXPOSE 4200

CMD ["yarn", "serve"]

