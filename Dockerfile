FROM node:20.9-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20.9-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json ./

RUN npm install --only=production

COPY --from=builder /usr/src/app/dist ./dist

ENV API_CLIENT=http://localhost:3001 \
    API_PORTFOLIO=http://localhost:3002 \
    PORT=3000

EXPOSE 3000

CMD ["node", "dist/main"]