class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.api = new API();
    }

    init() {
        this.api.fetchMemes()
            .then(response => {
                const memes = response.data.memes;
                this.model.setMemes(memes)
                this.view.renderMemSelector(this.model.getMemNames());

                // this.view.renderMemImage(this.model.getSelectedMemUrl())

                console.log(this.model.getMemes())

            })
    }
}
