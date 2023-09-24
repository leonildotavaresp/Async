export class AsyncPromise {
    // obj de retorno caso a promise seja resolvida
    constructor(obj) {
        this._obj = obj
    }

    set obj(ob) {
        this._obj = ob;
    }

    get obj() {
        return this._obj;
    }

    PromiseExecute(estado) {
        if (!typeof (estado) == Boolean || estado == '') console.log("O Argumento deve ser um valor booleano");

        return new Promise((resolve, reject) => {
            if (estado) {
                setTimeout(() => {
                    resolve(this.obj)
                }, 1000);
            } else reject("Ocorreu algum erro")
        })
    }
}