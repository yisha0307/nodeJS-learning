var express = require('express')
var app = express()
var fs = require('fs')
var util = require('util')

app.get('/listUsers', function (req,res) {
    fs.readFile(__dirname+'/'+'user.json', 'utf8', function (err, data) {
        if(err){
            console.error(err)
        }
        console.log(data)
        res.end(data)
    })
})

var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
     }
}
app.get('/addUser', function(req, res) {
    fs.readFile(__dirname + '/' + 'user.json', 'utf8', function(err, data) {
        data = JSON.parse(data)
        data['user4'] = user
        console.log(data)
        fs.writeFile(__dirname + '/user.json', JSON.stringify(data), function(e, d) {
            res.end(JSON.stringify(data))
        })
    })
})
app.get('/:id', function (req, res) {
    fs.readFile(__dirname + '/user.json', function(err, data) {
        const resp = JSON.parse(data)
        const user = resp["user" + req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})
app.get('/deleteUser/:id', function(req,res) {
    fs.readFile(__dirname + '/user.json', 'utf8', function(err, data){
        const users = JSON.parse(data)
        delete users['user'+req.params.id]

        console.log(users)
        res.end(JSON.stringify(users))
    })
})
app.listen(8080)