FROM node:18-alpine

WORKDIR /app

# Install git and other dependencies
RUN apk add --no-cache git

# Clone Quartz
RUN git clone https://github.com/jackyzha0/quartz.git .
RUN npm ci

# Copy vault content to Quartz content directory
COPY --exclude=.git --exclude=.github --exclude=Dockerfile --exclude=README.md . content/

# Copy custom Quartz configuration if exists
# COPY quartz.config.ts .
# COPY custom.scss static/styles/

# Build the site
RUN npx quartz build

# Serve the site
EXPOSE 8080
CMD ["npx", "quartz", "serve", "--port", "8080", "--host", "0.0.0.0"]
