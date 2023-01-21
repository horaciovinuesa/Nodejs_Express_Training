const http = require ('http');

const server = http.createServer((req, res) => {
    return res.end('Hello, World!, this is a nodemon test');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}...`);
});