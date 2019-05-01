FROM nginx:alpine

COPY ./server/nginx.conf /etc/nginx/nginx.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'

WORKDIR /usr/share/nginx/html

COPY dist/ .
