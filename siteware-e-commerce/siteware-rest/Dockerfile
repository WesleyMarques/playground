FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

ENV MONGO_DB_URI=mongodb://swecommerce:sw1234@ds018258.mlab.com:18258/sw01db
ENV NODE_ENV=production

RUN npm install -g pm2
RUN pm2 update
#RUN yarn install --production=true

CMD [ "npm", "start" ]
