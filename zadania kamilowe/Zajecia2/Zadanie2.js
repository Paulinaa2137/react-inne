//Napisz funkcje ktora ma 2 argumenty. Funkcja przyjmuje obiekt a ma zwracac liste

const krolAutostrad = { imie: "DanielSan", miasto: "Cieszyn", error: 404 };
function zmianaObjektuNaListe(obj) {
  let arr = [];
  for (let val in obj) {
    arr.push([val, obj[val]]);
    arr.sort();
  }
return arr
}
console.log(zmianaObjektuNaListe(krolAutostrad));



