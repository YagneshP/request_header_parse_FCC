// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var PORT = process.env.port || 3001;
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/whoami", function (req, res) {
	// console.log("req",req.connection.remoteAddress);
	let langauge = req.headers['accept-language'];
	let software = req.headers["user-agent"];
	let ip =  req.ip

  res.json(
		{"ipaddress":`${ip}`,
		"language":`${langauge}`,
		"software":`${software}`});
});



// listen for requests :)
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + PORT);
});
