# Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

# Define ARG to pass build-time env variables
ARG VITE_API_URL

# Set the environment variable inside the container
ENV VITE_SERVER_URL=${VITE_API_URL}

COPY . .
RUN npm run build

# Production Stage: Serve with Nginx
EXPOSE 4173

CMD ["npm","run","preview"]