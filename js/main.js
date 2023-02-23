/* 
1) Chiedere ad utente numero di chilometri da percorrere 
2)Chiedere età del passeggero
3)Calcolare prezzo del viaggio  tenendo conto che 

4)il prezzo del biglietto è definito in base a 0.21centesimi al km 
5)se passeggero minorenne va applicato sconto del 20% 
6) se passeggero è over 65 va applicato sconto del 40%
*/


const numeroChilometri = parseInt(prompt('Inserisci Numero di Chilometri da Percorrere'));
     console.log(numeroChilometri);

const numeroEta = parseInt(prompt('Inserisci la tua età'));
     console.log(numeroEta);    
     
const prezzoKm = 0.21;

const prezzoViaggio = numeroChilometri * prezzoKm;


const  minorenne = (prezzoViaggio * 20 / 100)    

   
 const  over = (prezzoViaggio * 40 / 100)    
     


if (numeroEta < 18 ){

    document.getElementById('bigliettoPrezzo').innerHTML = (prezzoViaggio - minorenne) + '€ ' ;

} else if (numeroEta > 65){

    document.getElementById('bigliettoPrezzo').innerHTML = (prezzoViaggio - over) + '€ ' ;

} else {
    document.getElementById('bigliettoPrezzo').innerHTML = (prezzoViaggio) + '€ ' ;
}
  



   


