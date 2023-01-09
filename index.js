const express = require('express')
const app = express()
const port = 5000

app.use(express.json()) //For JSON requests, application/json 분석해서 가져올수 있도록
app.use(express.urlencoded({extended: true}));//application/x-www-form-urlencoded 분석해서 가져올수 있도록
const { User } = require("./models/User");

const config = require('./config/key');

//몽고db 연결
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(()=>console.log('MongoDb Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~~안녕하세요~~ 새해 복 많이 받으세요 !')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/register', (req, res) => {

    /**
     * 회원 가입 할 때 필요한 정보들을 client에서 가져오면
     * 그것들을 데이터베이스에 넣어준다.
     */

    const user = new User(req.body)

    user.save((err, doc) => { // 정보들이 user모델에 저장됨
        if (err) return res.json({ success: false, err})
        return res.status(200).json({ // status(200)은 성공했다는 표시
            success: true
        })
    }) 
})