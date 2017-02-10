const express = require('express')
const app = express()

app.get('/', (req, res) {
  console.log(req.ip)
  res.end()
})

app.listen(process.env.PORT || 3000)
