FROM node:14.10.1-stretch-slim
WORKDIR /app
COPY package.json /app
RUN npm install\
  && npm install typescript -g
COPY . /app
RUN npm run tsc 
CMD ["npm", "start"]