const express = require('express');

const {math} = require('../data/courses.js').infoCourses;

const routerMath = express.Router();

//Math courses

routerMath.get('/', (req, res) => {
    return res.end(JSON.stringify(math));
});

routerMath.get('/:level', (req, res) => {
    const level = req.params.level;
    const result = math.filter(course => course.level === level);

    if(result.length === 0){
        return res.status(404).send(`No results found for course level "${level}"`);
    }else{
        res.end(JSON.stringify(result));
    }
});

module.exports = routerMath;