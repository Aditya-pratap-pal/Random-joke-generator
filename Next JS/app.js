// const express = require('express');
import express from 'express';
// const {PORT} = require('./env.js');
import {PORT} from './env.js';

const app = express();

app.get("/",(req,res)=>{
    //  console.log(__dirname);
    //  console.log(__filename);
     console.log(import.meta.dirname);
     console.log(import.meta.url);
     
})

app.listen(PORT,()=>{
    console.log("Server starting on port 3000.");
}); 