FROM node:18

WORKDIR /app

COPY package.json .env.* pnpm-lock.yaml .npmrc ./

COPY dist ./dist

RUN npm install pnpm -g

RUN pnpm i

CMD ["npm", "run", "start:prod"]