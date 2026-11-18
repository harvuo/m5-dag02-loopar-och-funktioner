const kafe = "Kardemumma";

function visaNamn() {
  const recept = "hemligt";
  console.log(kafe); // gissning: Kardemumma
  console.log(recept); // gissning: hemligt
}
visaNamn();

let räknare = 0;
function ökaRäknare() {
  räknare = räknare + 1;
}
ökaRäknare();
ökaRäknare();
console.log(räknare); // gissning: 2

function lokal() {
  let räknare = 100;
  räknare++;
  return räknare;
}
console.log(lokal()); // gissning: 101
console.log(räknare); // gissning: 2

// Ta bort kommentaren på nästa rad och läs felet:
// console.log(recept); // gissning: undefined

for (let i = 0; i < 3; i++) {
  console.log("varv", i);
}

// Ta bort kommentaren på nästa rad och läs felet:
// console.log(i); // gissning: undefined

// ## Skriv din regel

// Variabler och konstanter definierade med let resp. const syns i det scope de är definerade
// d.v.s. antingen globalt eller enbart lokalt i de funktioner resp. block de är definierade

// Fyll i med egna ord:

// - En variabel som skapas inuti en funktion kan inte ses utanför funktionen.
// - En funktion kan se variabler som ligger utanför den.
// - `let i` i en for-loop lever endast i loopen
