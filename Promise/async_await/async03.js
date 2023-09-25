function promesaMult (a,b) {
    return new Promise((resolve, reject) => {
        let soma = a + b
        resolve(soma)
    })
}

async function calcula() {
    try {
            soma = await promesaMult(34546523423423442360,3343545423424243424234242);
    } catch (error) {
        console.log(`Erro ${error}`);
    }
    return soma
} 

calcula()
    .then(valor_await => {
        console.log(valor_await);
    });

console.log(promesaMult());   
console.log(calcula());   

console.log("Aguardando o resultado...");

console.log(`Outras Operacoes...${400/2}`);