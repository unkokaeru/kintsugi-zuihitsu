FROM node:22-bullseye

WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Clone Quartz
RUN git clone https://github.com/jackyzha0/quartz.git .
RUN npm ci

# Copy your vault content (adjust as needed for your structure)
COPY . temp_vault/
RUN mkdir -p content && \
    cd temp_vault && \
    find . -name "*.md" -not -path "./.git/*" -not -path "./.github/*" -not -path "./.obsidian/*" | \
    while read file; do \
        mkdir -p "$(dirname "../content/$file")" && \
        cp "$file" "../content/$file"; \
    done && \
    if [ -d "attached" ]; then cp -r attached ../content/; fi && \
    cd .. && \
    rm -rf temp_vault

# Build the site
RUN npx quartz build

EXPOSE 8080
CMD ["npx", "quartz", "serve", "--port", "8080", "--host", "0.0.0.0"]
