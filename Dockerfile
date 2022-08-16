FROM node:14
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard to ensure both package.json AND package-lock.json are copied where available
COPY package*.json ./
# For a clean install
RUN npm ci 
# Bundle app source
COPY . .
CMD [ "npm", "run", "start" ]
