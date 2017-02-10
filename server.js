const express = require('express')
const app = express()

app.get('/', (req, res) => {
  var system = req.headers['user-agent'].substring(req.headers['user-agent'].indexOf('(') + 1, req.headers['user-agent'].indexOf(')'))
  var ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(",")[0];
  ip = ip.replace('::ffff:', '')
  var languages = req.acceptsLanguages()

  var responseObject = {
    language: languages[0],
    ip: ip,
    system: system
  }
  res.send(responseObject)
})

app.all('*', (req, res) => {
  res.redirect('/')
})

app.listen(process.env.PORT || 3000)
