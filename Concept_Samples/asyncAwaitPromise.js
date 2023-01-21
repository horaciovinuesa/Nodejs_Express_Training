function orderProduct(producto){
    return new Promise((resolve, reject) => {
        console.log(`Ordering: ${producto}`);
        setTimeout(() => {
            if(producto === 'cup'){
                resolve('Ordering a cup from amazon');
            }else{
                reject('This product is not available at this moment');
            }
        }, 2000);
    });
}

function processRequest(response){
    return new Promise((resolve) => {
        console.log('Processing request');
        console.log(`The response was ${response}`);
        setTimeout(() => {
            resolve('Thanks for your purchase, enjoy your product');
        },4000);
    });
}

orderProduct('tea')
    .then(response => {
        console.log(response);
        return processRequest(response);
    })
    .then(response => {
        console.log(response);
    })
    .catch(error =>{
        console.log(error);
    });