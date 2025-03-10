// const http = require('https');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// const api = "a6ce06cb234a1de1fdff403e";
// const url = `https://v6.exchangerate-api.com/v6/${api}/latest/USD`;

// http.get(url,(res)=>{
//     let data="";
//     res.on('data',(word)=>{
//         data+=word;
//     })
//     res.on('end',()=>{
//         const answer = JSON.parse(data).conversion_rates;
//         console.log(answer);
//         rl.question("Enter the amount: ",(amt)=>{
//             rl.question("Currency: ",(cur)=>{
//                 console.log(amt*answer[cur.toUpperCase()]);
//             })
//         })
//     })
// })
























const http = require("https");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const api = "a6ce06cb234a1de1fdff403e";
const url = `https://v6.exchangerate-api.com/v6/${api}/latest/USD`;

const repeat = () =>{
        http.get(url,(bigData)=>{
            // while(true){
                let answer="";
                bigData.on('data',(data)=>{
                    answer+=data;
                })
                bigData.on('end',()=>{
                    const finalAnswer = JSON.parse(answer).conversion_rates;
                    // console.log
                    console.log(finalAnswer);
                    rl.question("Choose your option: ",option);
                    while(true){
                        if(option==='1'){
                            rl.question("Enter your Ammount: ",(amt)=>{
                                rl.question("Your currency: ",(cur)=>{
                                    console.log(amt*finalAnswer[cur.toUpperCase()]);
                                })
                            })
                        }
                        else{
                            
                        }
                    }
                })
            // }
        })
}
// while(true){
    repeat();
// }