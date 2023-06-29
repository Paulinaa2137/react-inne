//napisz funkcje ktora pobiera ciag znakow a zwraca kolejną liczbe

let ciag = [2, 4, 6];
let ciag1 = [3,6,9];
const liczenieCiagu = (ciagLiczb) => {
  let liczba = ciagLiczb[1] - ciagLiczb[0];
 let sum = liczba + ciagLiczb[2]

  return sum;
};
console.log(liczenieCiagu(ciag));
console.log(liczenieCiagu(ciag1));
