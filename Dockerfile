FROM node

COPY . .

EXPOSE 4000

CMD node index.js