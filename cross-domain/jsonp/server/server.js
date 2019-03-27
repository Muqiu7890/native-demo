const express = require('express')

const app = express()

app.get('/test',function (req,res) {
    const {params,callback} = req.query
    res.send(`${callback}('cross domain success')`)
})

app.listen(3000,function () {
    console.log('app running at port 3000')
})