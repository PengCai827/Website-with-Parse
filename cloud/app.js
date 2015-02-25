
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/head', function(req, res) {
  res.render('head', { message: 'Congrats, you just set up your app!' });
});
app.post('/head', function(req, res) {
  res.render('head', { message: req.body.message });
});

app.listen();
