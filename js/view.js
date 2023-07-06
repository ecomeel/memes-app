class View {
    constructor({ onChangeMem }) {
        this.chooseMemNode = document.getElementById('chooseMem');
        this.setTopTextNode = document.getElementById('setTopText')
        this.setBottomTextNode = document.getElementById('setBottomText');
        this.previewNode = document.getElementById('preview')

        this.chooseMemHTML = '';

        this.onChangeMem = onChangeMem;

        this.chooseMemNode.addEventListener('change', this.handleSelectMem);
        this.setTopTextNode.addEventListener('change', this.handleSetTopText);
        this.setBottomTextNode.addEventListener('change', this.handleSetBottomText);
    }

    renderMemSelector(memNames) {
        memNames.forEach(memName => {
            this.chooseMemHTML += `
                <option value="${memName}">${memName}</option>
            `
        });
        this.chooseMemNode.innerHTML = this.chooseMemHTML;
    }

    renderImg(url) {
        const previewImgNode = this.previewNode.querySelector('#previewImg');
        previewImgNode.setAttribute('src', url)
    }

    renderTopText(text) {
        const previewTopTextNode = this.previewNode.querySelector('#previewTopText');
        previewTopTextNode.innerText = text;
    }
    
    renderBottomText(text) {
        const previewBottomTextNode = this.previewNode.querySelector('#previewBottomText');
        previewBottomTextNode.innerText = text;
    }

    getSelectedMemName() {
        return this.chooseMemNode.value;

    }

    handleSelectMem = () => {
        const memUrl = this.onChangeMem(this.getSelectedMemName());

        this.renderImg(memUrl);        
    }

    handleSetTopText = () => {
        const text = this.setTopTextNode.value;
        this.renderTopText(text)

    }

    handleSetBottomText = () => {
        const text = this.setBottomTextNode.value;
        this.renderBottomText(text);
    }
}