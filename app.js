const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const queries = require('./queries')

app.use(cors());
app.use(bodyParser.json());

//get all profiles
app.get('/profiles', (req,res,next) =>{
    queries.getProfiles().then(profiles => {
      res.json({profiles});
    })
  })

//get all boards
app.get('/boards', (req,res,next) =>{
  queries.getBoards().then(boards => {
    res.json({boards});
  })
  })

//get all characters
app.get('/characters', (req,res,next) =>{
  queries.getCharacters().then(characters => {
    res.json({characters});
    })
  })


//get all characters by board
  app.get('/characters/board/:id', (req,res,next) => {
    queries.getCharactersByBoard(req.params.id).then(characters => {
      res.json({characters});
    })
  })

//create new user
  app.post('/profiles', (req,res,next) => {
  queries.newUser(req.body).then((data) => {
    res.status(201).json(req.body);
  })
})


app.listen(port, () => {
  console.log(`running on port ${port}`);
})
