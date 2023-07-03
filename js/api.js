class API {
    constructor() {
        this.apiUrl = 'https://api.imgflip.com/get_memes';
    }

    fetchMemes() {
        return fetch(this.apiUrl)
            .then(data => data.json())
    }
}