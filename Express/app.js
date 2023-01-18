    const http = require ('http');
    const courses = require('./courses');

const server = http.createServer((req, res) =>{
    const {method} = req;

    switch(method){
        case 'GET':
            return handleGET(req, res);
        
        
        default:
            console.log(`The requested method could not be handled by server: ${method}`);
    }
});

function handleGET(req, res){
    let path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        res.end('Welcome to my first server and API created with NodeJS!');
    }else if(path === '/courses'){
        res.statusCode = 200;
        res.end(JSON.stringify(courses.infoCourses))
    }
}

const PORT = 3000;

server.listen(() => {
    console.log(`Server is listening at port ${PORT}...`);
});
