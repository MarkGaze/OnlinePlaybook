FROM nginx:alpine
RUN apk add --no-cache nodejs
RUN npm install
RUN npm install -g bower
RUN bower install
COPY . /usr/share/nginx/html
