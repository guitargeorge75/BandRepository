const Band = require('../Schema/bandschema.js')


//create new bandname

exports.create = (req, res) =>{
  if (!req.body){
    return res.status(400).send({
      message: "Band Information Cannot Be Empty"
    });
  }

  const band = new Band({
    bandname: req.body.bandname || "No Name",
    members: req.body.members
  })

  band.save()
  .then(data =>{
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message:"Oops. Sorry something went wrong. " + err.message
    })
  })


}

exports.get = (req, res) => {
  res.status(200).send('Hello!')
}
