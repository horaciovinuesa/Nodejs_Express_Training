const express = require('express');

const {programming} = require('../data/courses.js').infoCourses;

const routerProgramming = express.Router();

//Programming courses

routerProgramming.get('/', (req, res) => {
    return res.end(JSON.stringify(programming));
});

//Filter with query 
routerProgramming.get('/:language', (req, res) => {
    const language = req.params.language;
    const results = programming.filter(course => course.language === language);

    if(results.length === 0){
        return res.status(404).send(`No courses were found for the language "${language}"`);
    }else if (req.query.order){
        return res.end(JSON.stringify(results.sort((a, b) => b.views - a.views)))
    }else{
        return res.end(JSON.stringify(results));
    }
});

routerProgramming.get('/:language/:level', (req, res) => {
    const language = req.params.language;
    const level = req.params.level;

    const result = programming.filter(course => course.language === language && course.level === level);

    if(result.length === 0){
        return res.status(404).send(`No courses were found for "${language}" and level "${level}"...`);
    }else{
        return res.end(JSON.stringify(result));
    }
})

module.exports = routerProgramming;