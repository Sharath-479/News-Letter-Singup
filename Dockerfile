FROM node:14

# Create a working directory for the app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port that the app will listen on
EXPOSE 3000

# Start the app
CMD [ "node", "app.js" ]
