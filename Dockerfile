FROM nginx:stable-alpine

COPY build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
