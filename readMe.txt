I've tried:
pip install python-socketio
- didn't work when trying to run python script from server.py


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
=================================================
"Run Python script on clicking HTML button | Script Output on Html Page"
ref: https://www.youtube.com/watch?v=ERMRVORGvZM

django - used to execute python script to html

vsCode:
    - open file request.py
    - to run, click run (same as in CLI python3 request.py)
CLI:
    - python3 request.py
    - cat request.py

pip -v 
pip install django
For Linux:
    sudo apt install python-django-common = Fix: linux
    sudo apt-get update
    sudo apt-get install python-django
    django-admin startproject buttonpython
For Windows: 
django-admin startproject buttonpython
-  cd buttonpython
-  vsCode:
    - open manage.py (this starts a Python terminal)
python3 manage.py runserver 127.0.0.1:8002
- ctrl click http://127.0.0.1:8002
python3 manage.py migrate - fixes warning error

set path in django https://youtu.be/s6Xi7x4G7yg?t=391
pwd = gets path, then change / to //
/home/kitt/Documents/Repositories/Stay-Connected
//home//kitt//Documents//Repositories//Stay-Connected
==================================================
error on import django in urls.py
FIX: You need Django version 2
    pip install --upgrade django
    pip3 install --upgrade django
===================================================
Presentation:
node index.js
python manage.py runserver 127.0.0.1:8002
