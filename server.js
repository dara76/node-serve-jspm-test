const express = require('express')
const app = express()
const path = require('path');
const serveJspm = require('serve-jspm').default;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/config.js', function (req, res) {
  res.sendFile(__dirname + '/config.js');
})
app.use('/jspm_packages', serveJspm(path.join(__dirname, 'jspm_packages')));
app.use('/app', serveJspm(path.join(__dirname, 'app')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

