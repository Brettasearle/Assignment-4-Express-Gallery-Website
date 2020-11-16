const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const ski = require('./gallery');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('./pages'));
app.get('/api/v0/gallery', (req, res) => res.json(ski));

app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});


