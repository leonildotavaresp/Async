async function fetchProducts() {
    try {
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

        if(!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error(`Nao foi possivel obter os produtos: ${error}`);
    }
}

const promise = fetchProducts();
console.log(promise);
promise.then(data => console.log(data))