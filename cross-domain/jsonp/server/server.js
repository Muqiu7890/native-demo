const express = require('express')

const app = express()

app.get('/test',function (req,res) {
    const {callback} = req.query
    console.log(callback)
    res.send(`${callback}('cross domain success')`)
})

app.listen(5000,function () {
    console.log('app running at port 5000')
})