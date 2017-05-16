FROM nginx:alpine
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN apt-get nodejs git
RUN npm install
RUN npm install -g bower
RUN bower install --allow-root
