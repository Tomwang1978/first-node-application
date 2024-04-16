const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Tom wang is a superman', (req, res) => {
    res.send('Tom wang is a superman!')
  })

app.post('/world', (req, res) => {
    res.send('Hello World Post!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})