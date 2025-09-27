FROM node:22-alpine

WORKDIR /app

# Install git and other dependencies
RUN apk add --no-cache git

# Clone Quartz
RUN git clone https://github.com/jackyzha0/quartz.git .
RUN npm ci

# Copy entire repository content excluding unwanted files
COPY . temp_vault/

# Process and move content to Quartz content directory
RUN mkdir -p content && \
    cd temp_vault && \
    # Copy all markdown files preserving directory structure
    find . -name "*.md" -not -path "./.git/*" -not -path "./.github/*" -not -path "./.obsidian/*" | \
    while read file; do \
        mkdir -p "$(dirname "../content/$file")" && \
        cp "$file" "../content/$file"; \
    done && \
    # Copy attached folder if it exists
    if [ -d "attached" ]; then \
        cp -r attached ../content/; \
    fi && \
    # Copy any other asset folders you might have
    if [ -d "images" ]; then \
        cp -r images ../content/; \
    fi && \
    cd .. && \
    rm -rf temp_vault

# Copy custom Quartz configuration if it exists in your repo
# COPY quartz.config.ts . 

# Build the site
RUN npx quartz build

# Serve the site
EXPOSE 8080
CMD ["npx", "quartz", "serve", "--port", "8080", "--host", "0.0.0.0"]
