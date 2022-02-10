FROM node:16 AS dev

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install @angular/cli@13.2.3

COPY . .

EXPOSE 4200

CMD npm run start:dev

##### PROD #####

FROM nginx:1.19.6-alpine AS prod

RUN apk --no-cache add npm git bash curl

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY ./ /app/

ARG configuration=production
RUN npm run build -- --output-path=/app/dist/out --configuration $configuration

RUN cp -R /app/dist/out/* /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
