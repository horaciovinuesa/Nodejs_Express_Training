const salutations = require('./salutations.js');
const EventEmitter = require ('events');

//Simple call to imported class
//console.log(salutations.simpleSalutation());


const productEmitter = new EventEmitter();

productEmitter.on('purchase', (total, prodAmount) => {
    console.log(`Purchase completed for a total of $${total}`);
    console.log(`The amount of items is ${prodAmount}`);
});

productEmitter.emit('purchase', 1234, 11);

