const express = require('express')

const app = express()

app.use(function (req,res,next) {
    // 设置哪个源可以访问我
    res.header('Assess-Control-Allow-Origin', 'http://localhost:63342')
    // 允许携带哪个头访问我
    res.header('Assess-Control-Allow-Header', 'Content-Type')
    // 允许哪个方法访问我
    res.header('Assess-Control-Allow-Methods','GET,PUT,OPTIONS')
    // 允许携带cookie
    res.header('Assess-Control-Allow-Credentials',true)
    // 预检的存活时间
    res.header('Assess-Control-Max-Age',6)
    if (req.method === 'OPTIONS') {
        return next() // OPTIONS请求不做任何处理
    }
})



app.listen('3000',() => {
    console.log('app running at port 3000...')
})