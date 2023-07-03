class View {
    constructor() {
        this.chooseMemNode = document.getElementById('chooseMem');

        this.chooseMemHTML = '';
    }

    renderChooseMem(memNames) {
        memNames.forEach(memName => {
            this.chooseMemHTML += `
                <option value="${memName}">${memName}</option>
            `
        });
        this.chooseMemNode.innerHTML = this.chooseMemHTML;
    }

    getChooseMemValue() {
        return this.chooseMemNode.value;
    }
}