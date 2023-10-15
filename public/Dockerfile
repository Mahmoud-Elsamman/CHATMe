FROM node:14 as build

WORKDIR /app/client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Use a lightweight Nginx image to serve the built React app
FROM nginx:alpine

COPY --from=build /app/client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
