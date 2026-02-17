FROM oven/bun:1-alpine

# Install build dependencies for better-sqlite3 native module
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files only
COPY package.json ./

# Expose port
EXPOSE 3000

# Start dev server
CMD ["bun", "--bun", "run", "dev", "--no-fork"]
