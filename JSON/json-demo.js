// const { title } = require('process');
// const randomData = require('./randomData.json');

// console.log(randomData.titles);

let infoCourse = {
    "title": "learn nodejs",
    "viewCount": 15,
    "likesCount": 10000,
    "titles": [
        "javascript",
        "nodejs"
    ],
    "isPublic": true
}

//Transform JS Object into JSON Object
let inforCourseJSON = JSON.stringify(infoCourse);

console.log(typeof inforCourseJSON);
console.log(inforCourseJSON);

//Transform JSON Object into JS Object
let infoCourseObject = JSON.parse(inforCourseJSON);

console.log(typeof infoCourseObject);
console.log(infoCourseObject);