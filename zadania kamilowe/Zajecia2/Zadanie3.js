// napisz funkcje ktora przyjmuje liczbe a zwraca sume cyfr z tej liczby

function sumaCyfr(mojaLiczba) {
  let sum = 0;
  let num = mojaLiczba + "";
  for (i = 0; i < num.length; i++) {
    sum += num[i] - "";
  }
  return sum;
}
console.log(sumaCyfr(12345678));
