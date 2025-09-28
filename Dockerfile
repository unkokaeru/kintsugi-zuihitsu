FROM node:22-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y git

# Copy your minimal Quartz backbone into the image
COPY quartz/ .

# Install Quartz's dependencies
RUN npm ci --omit=dev || npm install --omit=dev

# Copy your notes and attachments into the Quartz content source directory
COPY . temp_vault/
RUN mkdir -p content && \
    cd temp_vault && \
    find . -name "*.md" -not -path "./quartz/*" -not -path "./.git/*" -not -path "./.github/*" -not -path "./.obsidian/*" | \
    while read file; do \
        mkdir -p "$(dirname "../content/$file")" && \
        cp "$file" "../content/$file"; \
    done && \
    if [ -d "attached" ]; then cp -r attached ../content/; fi && \
    cd .. && \
    rm -rf temp_vault

RUN npx quartz build

RUN npm install -g serve
EXPOSE 8080
CMD ["serve", "public", "-l", "8080"]
