import express from 'express';

const app= express();

app.get('/', (req, res) => 
    res.send("Hello World")
)
const Port=3000;

app.listen(Port, ()=>{
    console.log("Server runn")
});
