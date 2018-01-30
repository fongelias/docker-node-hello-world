const app = require('express')();


app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});


const server = app.listen(3000);


