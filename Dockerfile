# ==============================================================
# Stage 1: Build the React Application
# ==============================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency specifications
COPY package*.json ./

# Install all dependencies (clean install)
RUN npm install

# Copy application source code
COPY public/ ./public/
COPY src/ ./src/

# Build optimized production bundle
RUN npm run build

# ==============================================================
# Stage 2: Serve with High-Performance Nginx Web Server
# ==============================================================
FROM nginx:alpine AS runner

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy custom Nginx configuration for React SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build artifacts from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose standard HTTP web port
EXPOSE 80

# Health check to ensure web server is responding
HEALTHCHECK --interval=20s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:80/health || exit 1

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
