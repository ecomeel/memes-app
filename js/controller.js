class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View({
            onChangeMem: this.handleViewChangeMem
        });
        this.api = new API();
    }

    init() {
        this.api.fetchMemes()
            .then(response => {
                const memes = response.data.memes;
                this.model.setMemes(memes)
                this.view.renderMemSelector(this.model.getMemNames());
                this.view.renderImg(this.model.getMemImgUrl(this.view.getSelectedMemName()))

                console.log(this.model.getMemes());
            })
    }

    handleViewChangeMem = (memName) => {
        const memUrl = this.model.getMemImgUrl(memName);
        return memUrl;
    }
}
