const http = require('node:http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 800;
const filecontent = fs.readFileSync('calculator.html' , 'utf-8');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', "text/html");
  res.end(filecontent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});