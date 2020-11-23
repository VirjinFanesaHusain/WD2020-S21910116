
// const  person = ["Virgin", 19, "programmer",true];

// const sayHello = function(){
    
// }

// const person = {
//     name: "Virjin",
//     age: 19,
//     job: "Pramugari",
//     isMarried: false,
//     sayHello: function(){
//         console.log("Annyeong Haseyo");
//     },
// };



// person.age = 20;
// person.address = "Korea";

// //2 cara mengakses properti dalam objek
// console.log(person.name);
// console.log(person['age']);

// delete person.address;
// console.log(person);

// person.sayHello();

let title = document.getElementsByTagName("h1")[0].innerText;

title = document.getElementsByTagNameNS("header2").innerText;
console.log(title);

let umur = document.getElementsByTagNameNS("umur").value;
console.log(umur);

function helloWorld(){
    let value = document.getElementById("umur").value;
    document.getElementsByTagName('p')[1].innerText = "test";
}
