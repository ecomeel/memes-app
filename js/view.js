class View {
    constructor({ onChangeMem }) {
        this.chooseMemNode = document.getElementById('chooseMem');
        this.setTopTextNode = document.getElementById('setTopText')
        this.setBottomTextNode = document.getElementById('setBottomText');
        this.previewNode = document.getElementById('preview')

        this.chooseMemHTML = '';

        this.onChangeMem = onChangeMem;

        this.chooseMemNode.addEventListener('change', this._handleSelectMem);
        this.setTopTextNode.addEventListener('change', this._handleSetTopText);
        this.setBottomTextNode.addEventListener('change', this._handleSetBottomText);
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

    getSelectedMemName() {
        return this.chooseMemNode.value;
    }

    _renderTopText(text) {
        const previewTopTextNode = this.previewNode.querySelector('#previewTopText');
        previewTopTextNode.innerText = text;
    }
    
    _renderBottomText(text) {
        const previewBottomTextNode = this.previewNode.querySelector('#previewBottomText');
        previewBottomTextNode.innerText = text;
    }

    _handleSelectMem = () => {
        const memUrl = this.onChangeMem(this.getSelectedMemName());
        this._clearOldMemText();

        this.renderImg(memUrl);

    }

    _handleSetTopText = () => {
        const text = this.setTopTextNode.value;
        this._renderTopText(text)

    }

    _handleSetBottomText = () => {
        const text = this.setBottomTextNode.value;
        this._renderBottomText(text);
    }

    _clearOldMemText = () => {
        console.log('clear text');
        document.getElementById('previewTopText').innerText = '';
        document.getElementById('previewBottomText').innerText = '';
        document.getElementById('setTopText').value = '';
        document.getElementById('setBottomText').value = '';
    }
}