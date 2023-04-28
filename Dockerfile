FROM node:12.2.0-alpine

# Create a working directory for the app
WORKDIR /app

# Copy the rest of the application files to the container
COPY . .

# Install the app's dependencies
RUN npm install

# Expose the port that the app will listen on
EXPOSE 3000

# Start the app
CMD [ "node", "app.js" ]
