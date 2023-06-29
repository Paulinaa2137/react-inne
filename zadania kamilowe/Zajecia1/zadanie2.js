
//napisz funkcje ktora sprawdza parzystość liczb w array



// let jakiesLiczbyy = [
//   1574, -22, 49, 555, 3, 2, 785, 698, 1.5, 0, 744, 8456, 323,
// ];
// const number = () => {
//   for (let i = 0; i < jakiesLiczbyy.length; i++) {
//     let num = jakiesLiczbyy[i];
//     if (num % 2) {
//       return true;
//     }
//   }
// };
// console.log(number());


let jakiesLiczbyy = [
  1574, -22, 49, 555, 3, 2, 785, 698, 1.5, 0, 744, 8456, 323,
];
const number = () => {
  for (let i = 0; i < jakiesLiczbyy.length; i++) {
    let num = jakiesLiczbyy[i];
    num %2==0 ? console.log('tak'): console.log('nie')
  }
};
console.log(number());