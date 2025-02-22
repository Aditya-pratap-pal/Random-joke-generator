const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("Kya huwi....");
        res.end();
    }
    if(req.url === "/fuck"){
        res.write("second request...");
        res.end();
    }
    if(req.url === "/suck"){
        res.write("Third request...");
        res.end();
    }
});

const port = 3000;
server.listen(port,()=>{
    console.log(`Chala ja bsdk...🙃..${port}`);
});
