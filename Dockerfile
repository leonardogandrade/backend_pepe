FROM node:18.7.0

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install\
    && npm install typescript -g\
    && npm install tsx

COPY . .
# CMD [ "node", "src/server.js" ]
CMD ["npm", "run", "dev"]
