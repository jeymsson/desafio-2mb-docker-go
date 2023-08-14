FROM node:18-alpine
WORKDIR /www
RUN npm init -y && \
    npm install express mysql

COPY . .
EXPOSE 3000
CMD ["node", "index.js"]