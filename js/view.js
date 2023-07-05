class View {
    constructor() {
        this.chooseMemNode = document.getElementById('chooseMem');
        this.previewNode = document.getElementById('preview');

        this.chooseMemHTML = '';
        this.previewHTML = '';

        this.chooseMemNode.addEventListener('change', this.changeMemHandler)
    }

    renderMemSelector(memNames) {
        memNames.forEach(memName => {
            this.chooseMemHTML += `
                <option value="${memName}">${memName}</option>
            `
        });
        this.chooseMemNode.innerHTML = this.chooseMemHTML;
    }

    renderMemImage(url) {
        const imgTag = `<img src=${url}>`;
        this.previewHTML += imgTag;
    }

    getChooseMemValue() {
        return this.chooseMemNode.value;
    }

    changeMemHandler = () => {
        // this.renderMemImage(this.getChooseMemValue()); 
    }
}