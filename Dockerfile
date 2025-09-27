FROM node:22-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y git

# Clone Quartz and build dependencies
RUN git clone https://github.com/jackyzha0/quartz.git .
RUN npm ci

# Vault content copy (adjust to match your repo structure as before)
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

# Build the static site with Quartz
RUN npx quartz build

# Install 'serve' to host the files
RUN npm install -g serve

EXPOSE 8080

# Use 'serve' to host the output static files
CMD ["serve", "public", "-l", "8080"]
