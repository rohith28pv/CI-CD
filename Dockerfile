# 1. Use an official lightweight Node.js base image 
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy package dependency files 
COPY package*.json ./

#4. Install production dependencies only (skip test tools to keep image small
RUN npm ci --only=production

# 5. Copy the rest of your applicaiton code
COPY . .

# 6. Expose the port your app runs on
EXPOSE 3000

# 7. Command to run the applucation
CMD ["node", "server.js"]
