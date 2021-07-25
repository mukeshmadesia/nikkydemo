#to include node image
From node:latest

#defaul location of commands
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json



# To install node_modules
RUN npm install

#to copy all the files in current directory to docker image 
COPY . .

CMD ["node" ,"app.js"]
