FROM node:18-alpine

WORKDIR /app

# Install git and other dependencies
RUN apk add --no-cache git

# Clone Quartz
RUN git clone https://github.com/jackyzha0/quartz.git .
RUN npm ci

# Copy entire repository content to Quartz content directory
# excluding git and CI files
COPY . temp_content/

# Move content while excluding unnecessary files
RUN mkdir -p content && \
    cd temp_content && \
    find . -name "*.md" -exec cp --parents {} ../content/ \; && \
    if [ -d "attached" ]; then cp -r attached ../content/; fi && \
    cd .. && \
    rm -rf temp_content

# Build the site
RUN npx quartz build

# Serve the site
EXPOSE 8080
CMD ["npx", "quartz", "serve", "--port", "8080", "--host", "0.0.0.0"]
