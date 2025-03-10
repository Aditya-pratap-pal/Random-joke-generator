const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET="harkirat123";
const app = express();
app.use(express.json());
const users=[];

app.post("/signup",(req,res) => {
    const username=req.body.username;
    const password=req.body.password;
    users.push({
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
    let founduser=null
    for(let i=0;i<users.length;i++){
        if(users[i].username===username && users[i].password===password){
            founduser = users[i];
        }
    }
    if(founduser){
        const token=jwt.sign({
            username
        },JWT_SECRET)
        // response ki help se header ke andar kuch daalne ka method..
        res.header("jwt",token);
        res.header("random","kuchBhiDaalDo.")
        //res.json run karane par server response dega..
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
    const token=req.headers.token;
    console.log(token);
    // const decodeddata=jwt.decode(token);
    const decodeddata=jwt.verify(token,JWT_SECRET);
    if(decodeddata.username){
        let founduser=null;
        for(let i=0;i<users.length;i++){
            if(decodeddata.username===users[i].username){
                founduser=users[i];
            }
        }
        res.json({
            username:founduser.username,
            password:founduser.password
        })
    }
    // console.log("req---" ,req.headers);
    // res.json({
    //     message: "hello.."
    // })
})

app.listen(3000);