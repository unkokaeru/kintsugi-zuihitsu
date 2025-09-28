FROM node:22-bullseye

WORKDIR /app

RUN apt-get update && apt-get install -y git

# Copy your minimal Quartz backbone into the image
COPY quartz/ .

# Copy your vault notes and attachments into the Quartz content source directory
COPY . temp_vault/
RUN mkdir -p content && \
    # Move notes
    cd temp_vault && \
    find . -name "*.md" -not -path "./quartz/*" -not -path "./.git/*" -not -path "./.github/*" -not -path "./.obsidian/*" | \
    while read file; do \
        mkdir -p "$(dirname "../content/$file")" && \
        cp "$file" "../content/$file"; \
    done && \
    # Move attached files/folders if they exist
    if [ -d "attached" ]; then cp -r attached ../content/; fi && \
    cd .. && \
    rm -rf temp_vault

# Build the static site using minimal Quartz setup
RUN npx quartz build

# Use a minimal static file server
RUN npm install -g serve
EXPOSE 8080
CMD ["serve", "public", "-l", "8080"]
