const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Its a Random Page that I want to launch through Jenkins')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
