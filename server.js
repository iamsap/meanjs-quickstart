/**
  meanjs-quickstart:
    by Robby Millsap (robbymillsap@gmail.com)
  
  purpose:
    I'm always wanting a simple little application for testing front-end components
    and find that I throw my code away and have to rebuild this little template every 
    time.  So I thought, why not save this in Github so I, or anyone who wants a turnkey
    MEANJS app can use this.
  
*/
var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
    console.log('meanjs-quickstart is running! open your browser to http://localhost:3000/ to start prototyping');
});