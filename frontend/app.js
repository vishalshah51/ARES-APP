var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:8000/api';

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', async function(req, res) {
  const options = {
    method: 'GET'
  };
  
   try {
    let response = await fetch(URL, options);
    const apiData = await response.json();
    res.render('index', { data: apiData });
    
     } catch (err) {
    console.log(err);
    // You should also render an error page or send an error response here
    res.status(500).send('Internal Server Error while fetching data.');
  }
});
  
app.listen(3000, function() {
  console.log('Ares Listening on port 3000!');
});
