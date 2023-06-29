

// const dodawanieWTablicy = (liczby) => {
//     sum=0
//   for (i=0;i<array.length;i++) {
//     sum +=Number(liczby[i]);

//   }
//  return sum;
// };
// console.log(dodawanieWTablicy(array));

//Polecenie
//Array: [1, "2", 3, "4", "5", 6, 7, 8, 9, 10];
//Output:
//Consola, linia 1: 11 -> '2' + '4' + '5'
//Consola, linia 2: 44 -> 1 + 3 + 6 + 7 + 8 + 9 + 10
//Consola, linia 3: 55 -> 11 + 44

let array = [1, "2", 3, "4", "5", 6, 7, 8, 9, 10];
const addingInArray = (num) => {
  let numberSum = 0;
  let stringSum = 0;
  let useNum = 0;
  let useStr = 0;
  let useAll = 0;
  for (i = 0; i < num.length; i++) {
    if (typeof num[i] === "number") {
      numberSum += Number(num[i]);
      useNum += String(" + " + num[i]);
    } else {
      stringSum += Number(num[i]);
      useStr += String(" + " + num[i]);
    }
  }
  useAll += Number(numberSum + stringSum);

  console.log(stringSum + " -> " + useStr.substring(3));
  console.log(numberSum + " -> " + useNum.substring(3));
  console.log(useAll + " ->  " + stringSum + " + " + numberSum);
};
addingInArray(array);
