/*Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri
  inseriti. Esegui questo programma in due versioni, con il for e con il while.*/ 

  console.log('JS OK!');
  let indice = 0;
  let somma = 0;
  while(indice < 4)
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