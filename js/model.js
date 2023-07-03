class Model {
    constructor() {
        this.memes = [];
        this.memNames = [];
        

    }

    setMemes(mms) {
        this.memes = mms;
    }

    getMemes() {
        return this.memes
    }

    getMemNames() {
        this.memes.forEach(mem => {
            this.memNames.push(mem.name)
        });
        return this.memNames;
    }
}