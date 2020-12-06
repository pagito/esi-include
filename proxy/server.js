const express = require('express');
const proxy = require('express-http-proxy');
const ESI = require('nodesi');

const esi = new ESI({});

const app = express();
app.use('/', proxy('localhost:8000', {
	userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
		//console.log(proxyRes.headers['content-type'])
		let headers = {};
  		//return proxyRes.headers['content-type'] == 'text/html' ? esi.process(proxyResData.toString()) : proxyResData;
		return esi.process(proxyResData.toString());

	}
}));

app.listen(3000);