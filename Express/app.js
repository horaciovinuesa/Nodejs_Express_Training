const express = require('express');
const app = express();

const {infoCourses} = require('./data/courses.js');
const routerProgramming = require ('./routers/programming.js');
const routerMath = require('./routers/math.js');

//Routers
app.use('/api/courses/programming', routerProgramming);
app.use('/api/courses/math', routerMath);

//Routing
app.get('/', (req, res) => {
    return res.send('This is the homepage, make yourself at home :)');
});

//General courses
app.get('/api/courses', (req, res) => {
    return res.end(JSON.stringify(infoCourses));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}...`);
});