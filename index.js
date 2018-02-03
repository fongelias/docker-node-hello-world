const app = require('express')();
const mongoose = require('mongoose');

//Setup DB
mongoose.connect("mongodb://mongo:27017");


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});


const server = app.listen(3000, () => {
	console.log("app is listening on port 3000!")
});


