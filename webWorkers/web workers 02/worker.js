// Código para o Web Worker (worker.js)
onmessage = function (e) {
    const n = e.data;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Enviar o resultado de volta para a thread principal
    postMessage(sum);
};
