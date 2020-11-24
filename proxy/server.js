const express = require('express');
const proxy = require('express-http-proxy');
const ESI = require('nodesi');

const esi = new ESI({});

const app = express();
app.use('/', proxy('http://localhost:8000', {
	userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
		return proxyRes.headers['content-type'] == 'text/html' ? esi.process(proxyResData.toString()) : proxyResData;

	}
}));

app.listen(3000);