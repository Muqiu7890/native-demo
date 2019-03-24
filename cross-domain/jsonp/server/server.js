const express = require('express')

const app = express()

app.get('/',function (req,res) {
    const {params,callback} = req.query
    res.end(`${callback}('cross domain success')`)
})

app.listen(3000,function () {
    console.log('app running at port 3000')
})