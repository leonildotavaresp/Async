async function calcula() {
    let soma = 0
    try {
        for (let index = 0; index < 20000; index++) {
            soma = await index + 2;
        }
    } catch (error) {
        console.log(`Erro ${error}`);
    }
    return soma
} 

calcula()
    .then(valor_await => {
        console.log(valor_await);
    });

console.log("Aguardando o resultado...");

console.log(`Outras Operacoes...${400/2}`);