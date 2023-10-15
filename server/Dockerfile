FROM node:14

WORKDIR /app/server

COPY package*.json ./

RUN npm install

COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 5000

CMD ["npm", "start"]
