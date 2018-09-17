const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/profiles', (req,res,next) =>{
  res.send('profiles baby');
  })

app.get('/boards', (req,res,next) =>{
  res.send('boards baby');
  })

app.get('/characters', (req,res,next) =>{
  res.send('characters baby');
  })

app.listen(port, () => {
  console.log(`running on port ${port}`);
})
