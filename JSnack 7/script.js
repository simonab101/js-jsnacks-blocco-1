let numero = -2;
let potenza = 0;
let risultato;

while (numero ** potenza < 1000){
  risultato = numero ** potenza;
  potenza++

  console.log(risultato)
  document.querySelector('h1').append(risultato + '')
}