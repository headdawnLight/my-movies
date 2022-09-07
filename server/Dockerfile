# Dockerfile for server

# Build node express server
FROM node:18-alpine AS builder

# Working directory be app
WORKDIR /app/server/
COPY package.json ./
COPY package-lock.json ./

# Installing dependencies
RUN npm install

# Copy local client files
COPY . .

# Expose port
EXPOSE 5000

# Start the app
CMD ["npm","start"]