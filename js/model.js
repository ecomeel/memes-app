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

    getMemImgUrl(memName) {
        let memUrl;
        this.memes.forEach(mem => {
            if (mem.name == memName) {
                memUrl = mem.url
            }
        });
        return memUrl
    }
}