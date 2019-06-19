const promiseTeste  =  require("./Promise-01");
const msgSuccess = "Passou";
const msgError = "Não passou";
/*
    Executar esses testes para validar os resultados aplicados
*/

//@params array soma, array subtracao, array multiplicacao
//@result soma dos valores correspondentes aos arrays
promiseTeste.result([1, 2, 3, 4], [5, 2, 1, 1], [1, 2, 3, 4]).then((x) =>{
    if(x == 35)
       console.log(`Promise Test: ${msgSuccess}, resultado: ${x}`)
      else
       console.log(`Promise Test: ${msgError}, resultado: ${x}`)
});

//@params array soma, array subtracao, array multiplicacao
//@result soma dos valores correspondentes aos arrays
promiseTeste.result([1, 2, 3, 4], [5, 2, 2, 2], [1, 2, 3, 4]).then((x) =>{
    if(x == 34)
       console.log(`Promise Test: ${msgSuccess}, resultado: ${x}`)
      else
       console.log(`Promise Test: ${msgError}, resultado: ${x}`)
});