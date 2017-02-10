const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(req.headers['user-agent'])

  var ip = req.ip
  var languages = req.acceptsLanguages()
  var responseObject = {
    language: languages[0],
    ip: ip
  }
  res.send(responseObject)
})

app.listen(process.env.PORT || 3000)
