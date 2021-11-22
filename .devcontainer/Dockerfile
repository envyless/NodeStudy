# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.202.5/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# # [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends "package*.json"

# # [Optional] Uncomment if you want to install an additional version of node using nvm
# # ARG EXTRA_NODE_VERSION=10
# #RUN su node -c "main.js"

# # [Optional] Uncomment if you want to install more global node packages
RUN su node -c "npm install -g package.json"

# RUN npm install -g "package.json"
# EXPOSE 4000

# CMD [ "node", "main.js" ]

