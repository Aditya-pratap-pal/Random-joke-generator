const https = require('https');
// const chalk = require('chalk');

const jokeCreater = ()=>{
    const url= 'https://official-joke-api.appspot.com/jokes/random';
    https.get(url,(response)=>{
        let data="";
        response.on('data',(word)=>{
            data+=word;
        })
        response.on('error',(error)=>{
            console.error(`error is: ${error.message}`);
        })
        response.on('end',()=>{
            const ans=JSON.parse(data);
            console.log(ans);
            // console.log(data);
        })
    })
}
jokeCreater();