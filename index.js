const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://minhwan:a12345@cluster0.mi9fstm.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('MongoDb Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~~안녕하세요~~')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))