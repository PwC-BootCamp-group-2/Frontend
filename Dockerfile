FROM node:14
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard to ensure both package.json AND package-lock.json are copied where available
COPY package*.json ./
# For a clean install
RUN npm ci
# Install react icons
RUN npm install react-icons
# Install bootstrap
RUN npm install react-bootstrap bootstrap
# Bundle app source
COPY . .
# Expose the port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]
