# Inject content/widget/component into application using ESI inlcude

### Requirements
 - Python3
 - Node

### Run customer app

Simple html css page
```shell
$ cd customer
$ python -m http.server 8000
```

OR

Laravel App will run on port 8000
```shell
$ cd customerApp
$ composer install
$ npm install
$ npm run dev
$ php artisan serve
```

### Run server with components

```shell
$ cd components
```

Simple HTTP Server
```shell
$ python -m http.server 8050
```

OR 

Simple HTTP Server with CORS enabled, will run on port 8050
```shell
$ python simple-cors-http-server.py
```

### Run proxy server

```shell
$ cd proxy
$ npm install
$ node server.js
```

Open 
```shell
http://localhost:3000/
```

