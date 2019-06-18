const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config.js')
const mongoose = require('mongoose')
const app = express();
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({"extended":true}))
app.use(bodyParser.json())

require('./routes/band.routes.js')(app)



//Enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/',(req, res) =>{
  res.json({"message": "welcome to register your band"});
});

app.listen(config.serverport,() =>{
  console.log("app is up and running on " + config.serverport)
})

mongoose.connect(config.url,{
  useNewUrlParser: true
}).then(() =>{
  console.log('successfully connected to nodeJsTest database')
}).catch(err =>{
  console.log('could not connect', err)
  process.exit()
})
