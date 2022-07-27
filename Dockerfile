# My favorite node version
FROM node:16.14.2

# Set the directory to run commands from inside the contain
WORKDIR /usr/app

# Copy all json files into the current working directory ^
COPY *.json ./

# Copy the src folder into the current wd
COPY ./src ./src

# Install packages using only the package-lock (npm ci)
RUN npm ci --only=production

# Build a production optimized image from the src folder to the dist folder (specified in tsconfig.json)
RUN npm run build

# Remove the src folder since we're no longer using it
RUN rm -rf src/

# Expose the app port
EXPOSE 8080

# Start the application
CMD ["npm", "run", "start"]
