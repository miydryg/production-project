FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 6006
CMD ["npm", "run", "storybook"]
CMD ["npx", "loki", "test"]
