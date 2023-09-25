const fetchPromise = fetch( 
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

fetchPromise
    .then( estado_da_promise => {
        if(!estado_da_promise.ok){
            throw new Error(`HTTP error: ${estado_da_promise.status}`)
        }
        return estado_da_promise.json();
    })
    .then(resposta_da_promise => {
        console.log(`Dados da Requisicao: ${resposta_da_promise}`);
    })
    .catch((error) => {
        console.error(`Não foi possível obter os produtos: ${error}`);
      });

console.log("Requisicao Iniciada...");