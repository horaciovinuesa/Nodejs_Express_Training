//Funciones para ejecutar codigo en ciertos periodos de tiempo
// setTimeout()
// setInterval()
// setImmediate()

function showTopic(topic){
    console.log(`I'm learning ${topic} :)`);
}

function addition(a , b){
    let c = a + b;
    console.log(c);
}

setTimeout(showTopic, 1000, 'NodeJS');

setTimeout(addition, 60000, 3, 5);

setImmediate(showTopic, 'Priorities!');

setInterval(addition, 1500, 3,19);