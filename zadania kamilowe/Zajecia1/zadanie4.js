// napisz fukcje ktora przyjmuje string skladajacy sie z wielu wyrazow, funkcja ma zwracac jeden wyraz z dużych liter, składa się z pierwszych liter słów

let jakisString = "mała ala ma zielonego kota";

const pobieraniePierwszychLiter = () => {
  const slowa = jakisString.split(" ");
  for (let i = 0; i < slowa.length; i++) {
    slowa[i] = slowa[i][0].toUpperCase();
   
  }

  return slowa.join('')
};
console.log(pobieraniePierwszychLiter());
