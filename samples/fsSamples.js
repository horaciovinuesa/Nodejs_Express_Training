const fs = require('fs');

// let targetFile = './fileSamples/main.html';
// let altFileName = './fileSamples/index.html';

//Read a file
// fs.readFile(targetFile, 'utf-8', (err, content) => {
//     if(err){
//         console.log(err);
//         throw(err);
//     }else{
//         console.log(content);
//     }
// });

//Rename a file
// fs.rename(targetFile, altFileName, (err) => {
//     if(err){
//         throw err;
//     }
//     console.log("Name successfully changed"); 
// })

//Add content to end of file
// fs.appendFile('./fileSamples/simpleFile.txt', 'This is a simple append test', (err) => {
//     if(err){
//         console.log('Something went wrong');
//         throw err;
//     }
//     console.log('Append Successful');
// });

//Replace all file content
// fs.writeFile('./fileSamples/simpleFile3.txt', 'This is another simple test replacing all 2', (err) => {
//     if(err){
//         throw err;
//     }
//     console.log('File written successfully');
// })

//Delete file
fs.unlink('./fileSamples/simpleFile3.txt', (err) =>{
    if (err){
        throw err;
    }
    console.log('File deleted!');
})