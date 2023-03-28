const numeroUtente = prompt('Inserisci un numero di 4 cifre');
let sommaCifre = 0

for (let i = 0; 1 < numeroUtente.length; i++) {
  
  sommaCifre += parseInt(numeroUtente[i]);
}

console.log(sommaCifre)