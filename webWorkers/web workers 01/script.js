const worker = new Worker('worker')
const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", e => {
    /*let sum = 0
    for (let i = 0; i < 1000000000000; i++) {
        sum += i;
        
       alert(`The final sum is ${sum}`);
    }
    */
    worker.postMessage("Ola worker")
})
/*
bgButton.addEventListener("click", e => {
    if(document.body.style.background !== 'green')
        document.body.style.background = 'green';
    else 
        document.body.style.background = 'blue';
})*/