// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// genero numeri random nell'alert
var numeriGenerati = [];
while ( numeriGenerati.length < 5 ){
    var random = numeriRandom(1,100);
    if ( !numeriGenerati.includes(random) ){
      numeriGenerati.push(random);
    }
}
alert(numeriGenerati);
console.log(numeriGenerati);


// inserimento numeri dell'utente con i vari controlli ( guardare la funzione indovinaNumeri() )
var numeriInseriti = [];
var numeriIndovinati;
var numeriCorretti = [];
setTimeout(indovinaNumeri, 5000);



// countdown
var secondi = 5;
var countdown = setInterval(function(){
  if ( secondi == 0 ){
    clearInterval(countdown);
    document.getElementById('gioco').innerHTML = ' ';
  } else {
    document.getElementById('gioco').innerHTML = secondi;
    --secondi;
  }
}, 799);









// ****funzioni
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function indovinaNumeri(){
  while ( numeriInseriti.length != 5 ){
      var utente = parseInt(prompt('Inserisci un numero che si trova in un intervallo tra 1 e 100'));

      // controllo che non ci siano numeri doppioni e che siano compresi tra 1 e 100
      if ( numeriInseriti.includes(utente) ){
        alert('Hai già inserito questo numero!');
      } else if( utente < 0 || utente > 100 ){
        alert('iL NUMERO DEVE ESSERE TRA 1 E 100');
      }
      else{
        numeriInseriti.push(utente);
      }



      // controllo quanti e quali numeri inseriti sono corretti
      if ( numeriGenerati.includes(utente)  &&  !numeriCorretti.includes(utente) ){
        numeriCorretti.push(utente);
        numeriIndovinati = numeriCorretti.length;
      } 
      else if ( numeriCorretti.length == 0 ){
        numeriIndovinati = 0;
        numeriCorretti = 'Mi dispiace non hai indovinato nessun numero..'
      }
  }
  console.log(numeriCorretti);
  document.getElementById('gioco').innerHTML = 'Hai indovinato ' + numeriIndovinati + ' numeri/o! I/Il numeri/o indovinati/o sono/è: ' + numeriCorretti;
}