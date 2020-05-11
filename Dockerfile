#FROM node:10-alpine
FROM node:10.17.0-slim@sha256:17df3b18bc0f1d3ebccbd91e8ca8e2b06d67cb4dc6ca55e8c09c36c39fd4535d
RUN  apt-get update \
     # Install latest chrome dev package, which installs the necessary libs to
     # make the bundled version of Chromium that Puppeteer installs work.
     && apt-get install -y wget --no-install-recommends \
     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
     && apt-get update \
     && apt-get install -y google-chrome-unstable --no-install-recommends \
     && rm -rf /var/lib/apt/lists/* \
     && wget --quiet https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh -O /usr/sbin/wait-for-it.sh \
     && chmod +x /usr/sbin/wait-for-it.sh

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

RUN mkdir -p /home/node/app/pdf && chown -R node:node /home/node/app/pdf

# Add a volume pointing to /home/node/app/pdf
VOLUME /home/node/app/pdf

# Make port 3000 available to the world outside this container 
EXPOSE 3000

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .


ENTRYPOINT [ "npm", "run" ,"server"]

#docker build -t test .
# docker run --rm -d -p 3007:3000 -p 33871:33871 -v //c/pdf:/home/node/app/pdf puppeteersandbox:latest 
# docker run --rm -d -p 3007:3000 -p 33871:33871 --mount type=bind,target=/home/node/app/pdf,source=//c/pdf puppeteersandbox:latest