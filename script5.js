// let poeng = 95;
// if (poeng<=30) {
//     console.log('Karakter er 1')
// } else if (poeng<=45) {
//     console-log('Karakter er 2')
// }
//   else if (poeng<=60) {
//     console-log('Karakter er 3')
// }

//   else if (poeng<=75) {
//     console-log('Karakter er 4')
// }

//   else if (poeng<=90) {
//     console-log('Karakter er 5')
// }

//   else if (poeng<=100) {
//     console-log('Karakter er 6')
// }

var res = '*';


for (let i = 0; i < 4; i++) {
    console.log(res);
    res += '*';
}


for (let i = 4; i > 0; i--) {
    console.log(res);
    res = res.slice(0, -1);  
}

//prøvde å søke litt og brukte chat gpt til slutt. utfordringen ble ikke perfekt men jeg prøvde:)
