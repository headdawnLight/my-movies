# Dockerfile for client

# Build react client
FROM node:18-alpine AS development
ENV NODE_ENV development

# Working directory be app
WORKDIR /app/client/
COPY package.json ./
COPY package-lock.json ./

# Installing dependencies
RUN npm install

# Copy local client files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm","start"]