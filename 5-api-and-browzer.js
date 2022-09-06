// API fetch
// fetch('url')
//  .then(res => res.json())
//  .then(data => console.log(data));


//  object to JSON conversion
const person ={
    name: 'Abdul',
    age: 22
}
 console.log(JSON.stringify(person));

//  JSON To Object Conversion
const data = JSON.stringify(person) ;
const dataParsed = JSON.parse(data);
console.log(dataParsed.name);

// local storage
// localStorage.setItem('userId', 1200);
const userId = localStorage.getItem('userId');
console.log(userId);

localStorage.setItem('person', JSON.stringify(person) );
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson.age);
const keys = Object.keys(parsedPerson);
const values = Object.values(parsedPerson);
console.log(keys);
console.log(values);
