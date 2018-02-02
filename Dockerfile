# Use node runtime as parent image
FROM node:carbon

# Set working directory to /app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN npm install

#  Copy app source code
COPY . .

# Expose port
EXPOSE 3000

# Start runtime
CMD ["node", "index.js"]
