/*Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, 
  fino a quando ne avrà tanti quanti l’altro.*/ 

  console.log('JS OK!');

  //let array1 = [1,2,3,4,5,6];
  //let array2 = [1,2];
  // let lunghezzaArray1 = array1.length;
 //let lunghezzaArray2 = array2.length;
const array1 = [];
const array2 = [];
lunghezzaArray1 = Math.floor(Math.random() * 10);   //inizializzo con un numero random la lunghezza del primo array
lunghezzaArray2 = Math.floor(Math.random() * 10);   //inizializzo con un numero random la lunghezza del secondo array
for(let i = 0; i < lunghezzaArray1; i++){
    array1.push(Math.floor(Math.random() * 10));    //inizializzo il primo array con numeri random generati nel range 0-10
}
for(let i = 0; i < lunghezzaArray2; i++){
    array2.push(Math.floor(Math.random() * 10));
}
 

console.log('Il primo array é: ' + array1);
console.log('Il secondo array é: ' + array2);


  if(lunghezzaArray1 > lunghezzaArray2)
  {
    console.log("Il primo array é più lungo del secondo array,allora aggiungo elementi a quest'ultimo così da averli con la stessa quantità di elementi");
    for(let i = 0; i < (lunghezzaArray1 - lunghezzaArray2); i++ ) /*se l'array1 ha più elementi dell'array2 allora 
                                                                    dovrò aggiungere all'array2 un numero di elementi pari alla differenza 
                                                                    tra le lunghezze dei due array ( dovrò aggiungere all'array2 un numero di 
                                                                    elementi pari alla differenza tra le rispettive quantità di elementi)*/
                                                                    
    {
        array2.push(i); //non creo elementi random ma semplicemento aggiungo all'array2 il valore del contatore del ciclo
    }
    console.log("Dopo l'aggiunta di elementi al secondo array, i due array vengono ad avere la stessa quantità di elementi" );
    console.log('Array 1 risulta: ' + array1);
    console.log('Array 2 risulta: ' + array2);
  }else if(lunghezzaArray2 > lunghezzaArray1){
    console.log("Il secondo array é più lungo del primo array,allora aggiungo elementi a quest'ultimo così da averli con la stessa quantità di elementi");
    for(let i = 0; i < (lunghezzaArray2 - lunghezzaArray1); i++ )
    {
        array1.push(i);
    }
    console.log("Dopo l'aggiunta di elementi al primo array, i due array vengono ad avere la stessa quantità di elementi" );
    console.log('Array 1 risulta: ' + array1);
    console.log('Array 2 risulta: ' + array2);

  }else{
      console.log('gli array hanno ugual numero di elementi');
  }