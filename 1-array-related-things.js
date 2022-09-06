const number = [2,3, 5, 6, 7];
const friends = ['Abdullah', 'Emon', 'Rakib', 'Rasel', 'Riaz'];

const products =[
    {id: 1, name: 'Laptop', price: 600},
    {id:2,  name: 'phone', price: 700},
    {id: 3, name: 'watch', price: 800},
    {id: 4, name: 'tablet', price: 20}

];

// map
const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(pd =>{

   return  pd.price;
} );
// console.log(prices);


// filter

const pricesUpto600 = products.filter(pd => pd.price > 600);
// console.log(pricesUpto600);
// remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);

// forEach

// products.forEach(pd => console.log(pd.id));

// find
const hasLaptop = products.find(pd => pd.name === 'Laptop');
console.log(hasLaptop);

