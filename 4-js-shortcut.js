// Ex-1
const money = 150;
const active = false;
let food;
if(money > 100){
    food = 'pizza';
}
else{
    food = 'burger';
}

// shortcut ternary system for above this condition
let food2 = money > 100 ? 'pizza' : 'burger';



// ex2


let cssClass;
if(active === true){
    cssClass = 'active';
}
else{
    cssClass = 'inactive';
}

        //    shortcut
const cssClass2 = active ? 'active' : 'inactive';

// function call shortcut alternative   ex-3
// active? displayUser(): hideUser();

// If you have only one option
// active && displayUser();

const x = active && 5;
console.log(x);

// string to number
const number = +'45';
console.log(45);

// number to string
const numText = 45 + '';
console.log(numText);

// Default parameter using in a function
function add(num1, num2 = 5){
    // num2 = num2 || 5;
    return num1 + num2;
}
const total = add(15, 10);
console.log(total);