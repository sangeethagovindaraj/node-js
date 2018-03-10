var express = require('express')
var path =require('path')
var app = express()
app.get('/',function (reg,res)

{
res.send('hello world')
})
console.log("hi am here")
app.use('/ routing',express.static(path.join(__dirname,'routing')))
app.use(express.static(__dirname));
console.log(__dirname)
app.listen(2000)
