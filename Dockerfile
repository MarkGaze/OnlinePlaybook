FROM nginx:alpine
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN apk add --no-cache nodejs
RUN apk add --no-cache git
RUN npm install
RUN npm install -g bower
RUN bower install --allow-root
