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
                if (!response.success) {
                    alert('Ошибка получения данных!');
                    return 
                }

                const memes = response.data.memes;
                this.model.setMemes(memes)
                this.view.renderMemSelector(this.model.getMemNames());
                this.view.renderImg(this.model.getMemImgUrl(this.view.getSelectedMemName()))
            })
    }

    handleViewChangeMem = (memName) => {
        const memUrl = this.model.getMemImgUrl(memName);
        return memUrl;
    }
}
