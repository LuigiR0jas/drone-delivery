//First, we define the variables we're gonna use given the libraries we will use, and specify a port.
var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 1337; //means port will be whatever it's in the environmental variable PORT,
    //or 1337 if there's nothing there.

//Here, Express will now that whatever is up on this level of the path, can be used by the application.
app.use(express.static(__dirname + '/'));

//We define a homepage, a file we are going to send our clients should they ask for our root route.
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//We tell our express app which port we're going to work with.
app.listen(port);

//And a last but not least mandatory console.log so we can know what we're doing.
console.log(port + ' is the magic port!');
