// napisz funkcje która bedzie sprawdzała ile w wyrazie jest samoglosek
let jakisWyraz = "imponderabilia";
let samogloski = "aeiouy";

const sprawdzanie = (wyraz) => {
  let iloscSamoglosek = 0;
  for (let litery of wyraz) {
    if (samogloski.includes(litery)) {
      iloscSamoglosek++;
    }
  }
  console.log("wyraz " + jakisWyraz + " ma " + iloscSamoglosek + " samoglosek");
};
console.log(sprawdzanie(jakisWyraz));
