# -----------------------------------------------------
# React アプリをビルド
# -----------------------------------------------------
FROM --platform=linux/amd64 node:12.18.2 as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# -----------------------------------------------------
# Nginx の Docker 環境を構築する
# -----------------------------------------------------
FROM --platform=linux/amd64 nginx

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD nginx -g 'daemon off;'