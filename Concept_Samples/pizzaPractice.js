const requestStatus = () => {
    return Math.random() < 0.8;
};

const pizzaRequest = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (requestStatus()) {
            resolve('Pizza being prepared!, thanks!');
        } else {
            reject('Something went wrong, retry your request...')
        }
    }, 1000);
});

for (let i = 0; i < 10; i++) {
    pizzaRequest
        .then((confirmationMessage) => {
            console.log(confirmationMessage);
        })
        .catch((rejectRequest) => {
            console.log(rejectRequest);
        });
}