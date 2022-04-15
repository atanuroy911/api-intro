// Javascript Object

const user = {name: 'John', age: 20, gender: 'male'};
const stringyfied = JSON.stringify(user);
console.log(user);
console.log(stringyfied);
console.log('Hello API');

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);