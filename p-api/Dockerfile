FROM node:16 AS dev

# Working directory
WORKDIR /app

# Copy package-lock.json & package.json
COPY package.json /app/

RUN npm install @nestjs/cli
RUN npm install

EXPOSE 3000

CMD npm run start:dev

FROM node:16 AS prod

WORKDIR /app

COPY package.json /app/

RUN npm install

EXPOSE 3000

CMD nest start --exec "npm run start:dev"