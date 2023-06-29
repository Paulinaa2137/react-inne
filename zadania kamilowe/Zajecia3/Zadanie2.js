//napisz funkcje ktora pobiera ciag znakow a zwraca kolejną liczbe

let ciag = [2, 4, 7, 11];
let ciag1 = [5,6,8,11]
let ciag2 = [1,2,4,7]
const liczenieCiagu = (ciagLiczb) => {
  let liczba = ciagLiczb[3] - ciagLiczb[2];
  liczba++;
  sum = liczba + ciagLiczb[3];
  return sum;
};
console.log(liczenieCiagu(ciag));
console.log(liczenieCiagu(ciag1));
console.log(liczenieCiagu(ciag2));
