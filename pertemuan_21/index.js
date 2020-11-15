console.log(""Basic JavaScript);

//Conditional JavaScript

let firstName = "Virjin";
let isMarried = true;

if(isMarried){
    console.log(firstName + "is Married");
} else {
    console.log(firstName + "is not married");
}

/* Jika umur < 13 tahun maka tampilkan kategori anak-anak
    Jika umur 13 tahun sampai 16 tahun tampilkan kategori remeja
    jika umur 17 sampai 25 tahun tampilkan kategori anak muda
    jika umur 25 sampai 50 tahun tampilkan kategori orang dewasa
*/

// let umur = 25;

// if (umur < 13){
//     console.log("Kategori anak-anak");
// }else if (umur >= 13 && umur < 17){
//     console.log("Kategori remaja");
// }else if (umur >= 17 && umur < 26){
//     console.log("Kategori anak muda");
// }else if (umur >= 26 && umur < 50){
//     console.log("Kategori orang dewasa");
// }

// let firstName = "Virjin";
// let job = "Pramugari";

// switch (job) {
//     case "Pramugari":
//         console.log(firstName + "is a Cabin Crew");
//         break;
//     case "driver":
//         console.log(firstName + "is a driver");
//         break;
//     case "instructor":
//             console.log(firstName + "is a instructor");
//             break;
//     default:
//             console.log(firstName + "does something else");
//             break;
// }


let umur = 25;

// if (umur < 13){
//     console.log("Kategori anak-anak");
// }else if (umur >= 13 && umur < 17){
//     console.log("Kategori remaja");
// }else if (umur >= 17 && umur < 26){
//     console.log("Kategori anak muda");
// }else if (umur >= 26 && umur < 50){
//     console.log("Kategori orang dewasa");
// }

// switch (true) {
//     case umur < 13:
//         console.log("Kateori anak-anak");
//         break;
//     case umur >= 13 && umur < 17:
//         console.log("Kateori remaja");
//         break;
//     case umur >= 17 && umur < 26:
//         console.log("Kateori orang muda");
//         break;
//     case umur >= 26 && umur < 50:
//         console.log("Kateori orang dewasa");
//         break;
//     default:
//         console.log("Tidak ada dalam range");
//         break;
// }

// JavaScript Function


// // function helloWorld(){
//     console.log("Hello world function declaration");
// }

let helloWorld = function (nama){
    let age = 19;
    console.log("Hello" + nama + ".Umur saya adalah" + age + "tahun.");
};

helloWorld("Virjin Fanesa");