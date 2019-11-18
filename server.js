var express = require('express')
var app = express()
const port = 80

app.use('index2.html', function (req, res) {
  console.log("HELLO")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))