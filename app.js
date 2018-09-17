const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req,res,next) =>{
  res.send('boom baby');
  })

app.listen(port, () => {
  console.log(`running on port ${port}`);
})
