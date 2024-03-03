FROM ubuntu:latest
LABEL authors="htetahyan"
# Use an official Node.js runtime as the base image
FROM node:20.10.0

# Set the working directory in the Docker image
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock files to the Docker image
COPY package*.json ./

# Install dependencies in the Docker image
RUN npm install

# Copy the rest of the application files to the Docker image
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port  3000 for the application
EXPOSE  3000

# Start the application
CMD ["npm", "start"]


ENTRYPOINT ["top", "-b"]