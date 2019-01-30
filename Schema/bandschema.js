const mongoose = require('mongoose')

const BandSchema = mongoose.Schema({
  	bandname: String,
  	members: [{
      name: String,
      instrument: String,
    }],
      created: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Bands', BandSchema)
