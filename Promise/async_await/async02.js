class MyAsync {
    
    constructor(objesct) {
        this._objesct = objesct
    }

    get objesct() {
        return this._objesct
    }

    set objesct(altobj) {
        this._objesct = altobj
    }

    funcAsync(controler) {
        try {
            if (!controler) console.log("Controlador deve ser um boolean");
        setTimeout(async () => {
            const getObjs = await this._objesct
            console.log(getObjs);
        },100000)
        } catch (error) {
            console.log(`Err: ${error}`);
        }
    }
};

const obj = {anime:'Naruto', eps:'500'};

const view_obj = new MyAsync(obj);

for (let index = 0; index < 2000; index++) {
    console.log(index + 2);
}
view_obj.funcAsync(true)