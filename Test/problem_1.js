
const hasPairWithSum = (numbers, sum) => {
    if (numbers.length >= 2) {
  for(let i = 0; i < numbers.length; i++){
  if( numbers.find((item) =>{
    return sum === numbers[i] + item
  })){
    return true
  }
  }
    }
    return false
  }



// const hasPairWithSum = (numbers, sum) => {
//   if (numbers.length >= 2) {

// for (number1 of numbers) {
//   for (number2 of numbers) {
//     let addedNumbers = number1 + number2;

//     if (addedNumbers == sum) {
//       return true;
//     }
 
//   }

// }
// }
// return false;
// };
module.exports = hasPairWithSum;