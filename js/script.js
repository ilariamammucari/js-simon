// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var numeriGenerati = [numeriRandom(1,100),numeriRandom(1,100),numeriRandom(1,100),numeriRandom(1,100),numeriRandom(1,100)];
alert(numeriGenerati);
console.log(numeriGenerati);

setTimeout(indovinaNumeri, 1000);





// ****funzioni
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function indovinaNumeri(){
  var numeriCorretti = [];
  for ( var i = 0; i < 5; i++){

    var utente = parseInt(prompt('Inserisci un numero che si trova in un intervallo tra 1 e 100'));

    while ( (utente > 100) || (utente < 0) ){
      alert('Inserisci un numero tra 1 e 100!!')
      utente = parseInt(prompt('Inserisci un numero che si trova in un intervallo tra 1 e 100'));
    }

    if ( (numeriGenerati.includes(utente)) && (!numeriCorretti.includes(utente)) ){
      numeriCorretti.push(utente);
      var numeriIndovinati = numeriCorretti.length;
    } else if ( numeriCorretti.length == 0 ){
      numeriIndovinati = 0;
      numeriCorretti = 'Mi dispiace non hai indovinato nessun numero..'
    }

  }
  console.log(numeriCorretti);
  document.getElementById('gioco').innerHTML = 'Hai indovinato ' + numeriIndovinati + ' numeri/o! I/Il numeri/o indovinati/o sono/è: ' + numeriCorretti;
}