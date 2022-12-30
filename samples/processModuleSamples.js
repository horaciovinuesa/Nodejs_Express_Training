//console.log(process.argv[2]);
//console.log(process.argv[3]);

console.log("Testing the process module");

for (let i = 2; i < process.argv.length; i++){
    console.log(process.argv[i]);
}

console.log(process.memoryUsage());