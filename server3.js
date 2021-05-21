const express = require('express')
const app = express()
const router = express.Router()
const request = require('request')


router.get('/',(req, res) => {
    const url = `https://api.github.com/${req.originalUrl}`
    request(url, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            res.send(body)
        }
        else {
            const students = [
                { id: '001', name: 'tom', age: 18 },
                { id: '002', name: 'jerry', age: 18 },
                { id: '003', name: 'tony', age: 18 },
            ]
            res.send(students)
        }
    })
})


app.use('/search/users', router)

app.listen(5000, (err) => {
    if (!err) console.log('服务器启动成功了\n请求github真实数据请访问：http://localhost:5000/search/'
    +'users\n请求本地模拟数据请访问:http://localhost:5000/search/users2')
})