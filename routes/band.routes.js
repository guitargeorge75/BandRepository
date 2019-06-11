module.exports = (app) =>{
  const bands = require('../controller/band.controller.js')

  //create new bands
    app.post('/bands',bands.create);
    app.get('/getBands',bands.get);
}
