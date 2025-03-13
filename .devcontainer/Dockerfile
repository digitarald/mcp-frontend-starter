FROM mcr.microsoft.com/devcontainers/javascript-node:0-20

# Install latest Playwright browsers and dependencies
RUN apt-get update && \
    apt-get install -y \
    libgconf-2-4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libgdk-pixbuf2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnss3-dev \
    libxss-dev && \
    rm -rf /var/lib/apt/lists/*

# Setup non-root user for Playwright
USER node
RUN mkdir -p /home/node/.cache/ms-playwright && \
    npx playwright install --with-deps

# Set the working directory
WORKDIR /workspace

# Switch back to root for permissions
USER root