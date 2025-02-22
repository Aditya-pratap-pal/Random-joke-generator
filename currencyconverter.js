const http = require('https');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const api = "a6ce06cb234a1de1fdff403e";
const url = `https://v6.exchangerate-api.com/v6/${api}/latest/USD`;

http.get(url,(res)=>{
    let data="";
    res.on('data',(word)=>{
        data+=word;
    })
    res.on('end',()=>{
        const answer = JSON.parse(data).conversion_rates;
        console.log(answer);
        rl.question("Enter the amount: ",(amt)=>{
            rl.question("Currency: ",(cur)=>{
                console.log(amt*answer[cur.toUpperCase()]);
            })
        })
    })
})

