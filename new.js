const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello! This is a GET request.');
    } 
    else if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Received POST data: ${body}`);
        });
    } 
    else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
