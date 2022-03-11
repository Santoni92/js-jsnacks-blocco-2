/*Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.*/ 
//PSEUDOCODICE
//1. inizializzo array con numeri interi
//2. inizializzo a zero la variabile 'somma' che mi serve per memorizzare la somma dei numeri in posizione dispari dell'array
//2. PER i DA 0 A (lunghezza_array - 1) ESEGUI
//2b.   SE (i % 2 diverso da zero )  
//      ALLORA (somma += elemento i-esimo)
//      FINE SE
//    RIPETI    

console.log('JS OK!');  //controllo che lo script sia ben linkato dall'html

//creo array di dieci numeri interi
const arrayNumeriInteri = []; 
for(let i = 0; i < 10; i++)
{
    arrayNumeriInteri.push( Math.floor(Math.random() * 100));
}
let somma = 0;

for(let i = 0; i < arrayNumeriInteri.length; i++)
{
    if( i % 2 !== 0)
    {
        console.log('elemento in posizione dispari: ' + arrayNumeriInteri[i]);
        somma += arrayNumeriInteri[i];
    }
}

console.log("La somma dei numeri presenti in posizione dispari nell'array risulta: " + somma);