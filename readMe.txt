install node.js from https://nodejs.org/en/download/
edit path Environment-Variables > User-Variables > PATH C:\Program Files\nodejs 
restart vsCode
node -v
npm install npm@latest -g
npm install --save express socket.io

node index.js
http://localhost:3000/
ref: https://expressjs.com/en/starter/hello-world.html

npm init
"name": "stay-connected"
npm install express --save
> run || node index.js
> open http://localhost:3000/
> create public folder
> inside index.js add > app.use(express.static("public"));
> http://localhost:3000/hello.html
npm i body-parser

ref: https://www.npmjs.com/package/socket.io
npm i socket.io

> node index.js
npm i express socket.io --> was a fix for error
