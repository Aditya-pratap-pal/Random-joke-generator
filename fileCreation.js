const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreation = ()=>{
    rl.question("\nEnter file name:" ,(fileName)=>{
        rl.question("\nEnter content: ",(content)=>{
            fs.writeFile(`${fileName}.txt`, content,(err)=>{
                if(err){
                    console.error(`Error writing file ${err}`);
                }
                else{
                    console.log("file successfully created..");
                }
                rl.close();
            })
        })
    })
}
fileCreation();