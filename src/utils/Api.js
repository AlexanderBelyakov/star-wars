class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getCards(pageNumber) {
        return fetch(this._baseUrl + `people/?page=${pageNumber}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then(this._checkResponse)
    }
}

const api = new Api({
    baseUrl:"https://swapi.dev/api/"
})

export default api;