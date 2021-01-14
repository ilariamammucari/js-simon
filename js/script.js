// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
var a = numeriRandom(1,100);
var b = numeriRandom(1,100);
var c = numeriRandom(1,100);
var d = numeriRandom(1,100);
var e = numeriRandom(1,100);
var numeriGenerati = [a,b,c,d,e];
var numeriInseriti = [];
var numeriIndovinati;
var numeriCorretti = [];

alert(numeriGenerati);
console.log(numeriGenerati);


setTimeout(indovinaNumeri, 5000);

var secondi = 5;
var countdown = setInterval(function(){
  if (secondi == 0){
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

          if ( numeriInseriti.includes(utente) ){
            alert('Hai già inserito questo numero!');
          } else if( utente < 0 || utente > 100 ){
            alert('iL NUMERO DEVE ESSERE TRA 1 E 100');
          }
          else{
            numeriInseriti.push(utente);
          }
        
          if ( (numeriGenerati.includes(utente) ) && ( !numeriCorretti.includes(utente) ) ){
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