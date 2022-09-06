//  Array destructuring

const numbers = [23, 44, 55, 666, 77 ];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] =[23, 44];
const [x, y] = numbers;
console.log(x, y);

function boxify(num1){
    return [num1, num1 + 5];
}

// const boxed = boxify(8);
const [box1, box2] = boxify(8);
console.log([box1, box2] );

// object destructuring

// const person = {name: 'Abdur Rahim', age: 52, }

// const {name, salary}= {id:333, salary: 35000, name: 'Abdur Rahim', age: 52, }
// console.log(name, salary)
const person =  {id:333, salary: 35000, name: 'Abdur Rahim', age: 52 };
const {name, salary}= person;

console.log(name, salary)

// create object shortcut

const one = 3;
const two = 4;
const obj ={x:x, y:y}
const obj2 = {one , two};
console.log(obj2);

// new array using three dots
// numbers.push(56)
const newNumbers = [...numbers, 56];




