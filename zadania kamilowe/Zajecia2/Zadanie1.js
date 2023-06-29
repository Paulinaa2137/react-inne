//Napisz funkcje ktora ma 2 argumenty. Funkcja pobiera dwie tablice, sumuje pojedyncze elementy ze sobą i zwraca nową tablice

let arr1 = [1, 5, 10, 2, 3];
let arr2 = [2, 3, 7, 8, 1];
const sumowaniePoIndexach = (ar1, ar2) => {
  let newArr = [];
  for (i = 0; i < arr1.length; i++) {
    for (i = 0; i < arr2.length; i++) {
      newArr.push(arr1[i] + arr2[i]);
    }
  }
  return newArr;
};
console.log(sumowaniePoIndexach(arr1, arr2));
