const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.json())

const users = []


app.get('/users',(req, res)=>{
    res.json(users)
})

app.post('/users',(req, res)=>{
    const user={ name : req.body.name, password : req.body.password }
    users.push(user)
    res.status(201).send()

})

app.post('/users/login',(req, res)=>{
    const user=users.find(user=> user.name=req.body.name)
    if(user==null){
        return res.status(400).send('Nu exista user cu acest nume')
    }
    

})

app.listen(3000)


