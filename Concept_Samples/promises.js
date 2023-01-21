const promiseCompleted = false;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(promiseCompleted){
            resolve('Promise was success');
        }else{
            reject('Promise failed');
        }
    }, 3000);
});


const successPromise = (value) => {
    console.log(value);
}

const rejectPromise = (rejectReason) => {
    console.log(rejectReason);
}

myPromise.then(successPromise, rejectPromise);