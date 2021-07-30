FROM node:15

WORKDIR /app

COPY package*.json ./

COPY . ./

# ENV PORT 8080
# EXPOSE ${PORT}

CMD ["npm", "start"]