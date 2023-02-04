const express = require('express')
const app = express()
const fs = require('fs')
const port = 5500

//Home page

app.get('/', (req, res) => {
  fs.readFile(__dirname + "/" + 'index.html', (err, data) => {
    res.end(data);
  })
});

//Static json db render

app.get('/list', (req, res) => {
  fs.readFile(__dirname + "/" + 'list.json', (err, data) => {
    res.end(data);
  })
});

//Static html page renders

app.get('/Anupam', (req, res) => {
  fs.readFile(__dirname + "/" + 'am.html', (err, data) => {
    res.end(data);
  })
});

app.get('/Aman', function (req, res) {
  fs.readFile(__dirname + "/" + 'agu.html', (err, data) => {
    res.end(data);
  })
});

app.get('/Ghazal', (req, res) => {
  fs.readFile(__dirname + "/" + 'ga.html', (err, data) => {
    res.end(data);
  })
});

app.get('/Ashneer', (req, res) => {
  fs.readFile(__dirname + "/" + 'ag.html', (err, data) => {
    res.end(data);
  })
});

app.get('/Vineeta', (req, res) => {
  fs.readFile(__dirname + "/" + 'vs.html', (err, data) => {
    res.end(data);
  })
});

app.get('/Peyush', (req, res) => {
    fs.readFile(__dirname + "/" + 'pb.html', (err, data) => {
      res.end(data);
    })
  });
  app.get('/Namita', (req, res) => {
    fs.readFile(__dirname + "/" + 'nt.html', (err, data) => {
      res.end(data);
    })
  });

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});