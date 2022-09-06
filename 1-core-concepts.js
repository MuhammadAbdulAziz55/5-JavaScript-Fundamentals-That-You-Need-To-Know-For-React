// variable: let, const
let money = 20;
money = 12;
const name = 'Abdullah';

const isConfident = true;
const person = {
    name: 'Abdullah',
    age: 22,
    city: 'Dhaka'
}

const statement = `this person ${name} with age ${person.age}`


// condition
 
if(money > 30 && age >= 20){

}
else{

}


// array

const friendsName = ['Muhammad', 'Abdullah', 'Abdur Rahman'];
const friendsAge = [22,23,44,33,55];

const products = [{name:'laptop', price: 500}, {name:'mobile', price:100}]

// loop: for loop
for (let i = 0; i < friendsAge.length; i++) {
    const element = friendsAge[i];
    
}



// function: regular && arrow

function add(num1, num2) {

    return num1 + num2;
}

const total = add(22, 33);

// arrow function
const tenTimes = num => num * 10;

const add2 = (num1, num2) => num1 + num2;

const doMath = (x, y) =>{
    const sum = x + y;
    return sum * 3;

}
