    const http = require ('http');
    const courses = require('./courses');

const server = http.createServer((req, res) =>{
    const {method} = req;

    switch(method){
        case 'GET':
            return handleGET(req, res);
        case 'POST':
            return handlePOST(req, res);
        default:
            res.statusCode = 501;
            return res.end(`The requested method could not be handled by server: ${method}`);
    }
});

function handleGET(req, res){
    let path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        return res.end('Welcome to my first server and API created with NodeJS!');
    }else if(path === '/courses'){
        res.statusCode = 200;
        return res.end(JSON.stringify(courses.infoCourses))
    }else if (path === '/courses/programming'){
        res.statusCode = 200;
        return res.end(JSON.stringify(courses.infoCourses.programming));
    }

    res.statusCode = 404;
    return res.end("The requested resource does not exist...");
}

function handlePOST(req, res) {
    const path = req.url;

    if (path === '/courses/programming'){
        
        let body = '';
        
        req.on('data', content => {
            body += content.toString();
        });

        req.on('end', () => {
            console.log(body);
            console.log(typeof body);

            body = JSON.parse(body);
            console.log(typeof body);

            console.log(body.title)

            return res.end('The server received the POST request for /courses/programming');
        });
      
    }
}

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}...`);
});
