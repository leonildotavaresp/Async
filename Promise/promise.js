import { AsyncPromise } from './myclassPromise.js'

const Objecto_da_Promese = new AsyncPromise({
    nome: 'Tavares',
    idade: 12
});

Objecto_da_Promese.PromiseExecute(true)
    .then((retorno_do_parametro_do_resolve) => {
        console.log(retorno_do_parametro_do_resolve);
        console.log("Sucesso!");
        return 'foi bem executado o primeiro then';
    })
    .then(retorno_do_primeiro_then => {
        console.log(retorno_do_primeiro_then);
    })
    .catch((err) => {
        console.log(err);
        console.log("Dados nao dispoiveis!");
    })
    .finally(() => {
        console.log("Independentemento do que aconteca a Promise eu irei executar!");
    });


console.log("O Programa segue...");