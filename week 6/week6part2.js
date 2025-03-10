const express = require('express');
const jwt = require('jwt');
const JWT_SECRET="harkirat123";
const app = express();
app.use(express.json());
const users=[];

app.post("/signup",(req,res) => {
    const username=req.body.username;
    const password=req.body.password;
    user.push({
        username: username,
        password: password
    })
    res.json({
        message: "you are signed in"
    })
})
app.post("/signin",(req,res) => {
    const username=req.body.username;
    const password=req.body.password;
    const founduser=null
    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password===password){
            founduser = users[i];
        }
    }
    if(founduser){
        const token=jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token: token
        })
    }
    else{
        res.json({
            message: "User doesn't found."
        })
        return
    }
})
app.get("/get-password",(req,res) => {
    const token=req.header.token;
    // const decodeddata=jwt.decode(token);
    const decodeddata=jwt.verify(token,JWT_SECRET);
    if(decodeddata.username){
        const founduser=null;
        for(let i=0;i<users.length;i++){
            if(username===users[i].username){
                founduser=users[i];
            }
        }
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }
})

app.listen(3000);