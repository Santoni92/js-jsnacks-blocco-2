/*Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri
  inseriti. Esegui questo programma in due versioni, con il for e con il while.*/ 

  console.log('JS OK!');
  /*****************************************implementazione col while***************************************************/
  /*
  let indice = 0;
  let somma = 0;
  while(indice < 5)
  {
    let numeroInserito;
      while(isNaN(numeroInserito))
      {
          numeroInserito = parseInt(prompt('Inserisci numero: '));
      }
     indice++;
     somma += numeroInserito;
  }
  console.log('La somma dei numeri inseriti risulta: ' + somma);
*/

let indice = 0;
let somma = 0;
while(indice < 5){
    const numeroInserito = parseInt(prompt('Inserisci numero: '));
    if(!isNaN(numeroInserito))
    {
        somma += numeroInserito;
        indice++;
    }
}
console.log('La somma dei numeri inseriti risulta: ' + somma);

  /***********************************************implementazione con il for**********************************************/
  /*
  let somma = 0;
  for(let i = 0; i < 5; ){
      const numeroInserito = parseInt(prompt('inserisci numero: '));
      if(!isNaN(numeroInserito))
      {
          somma += numeroInserito;
          i++;  //quando il numero inserito è effettivamente un numero allora aggiorno la somma ed incremento il contatore così da far terminare il ciclo
      }
  }
  console.log('La somma dei numeri inseriti risulta: ' + somma);
*/




  