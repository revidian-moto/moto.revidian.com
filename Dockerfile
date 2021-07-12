FROM nginx:alpine-slim

LABEL org.opencontainers.image.source https://github.com/revidian-moto/moto.revidian.com

COPY src/public /usr/share/nginx/html
