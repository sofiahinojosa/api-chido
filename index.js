const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send({
    "available:urls": [
      "/",
      "/hello",
      "/posts/:id",
      "/random/:min/:max"
    ]
  })
})

app.get('/posts/:id', (req, res) => {
  res.send({
    "id": parseInt((req.params["id"]))
  })
})

app.get('/random/:min/:max', (req, res) => {
  var max = parseInt(req.params["max"]);
  var min = parseInt(req.params["min"]);
  res.send({
    "result": (Math.floor(Math.random() * (max) - (min) + 1)) + min
  })
})

app.listen(8080, () => console.log('http://localhost:8080/'))