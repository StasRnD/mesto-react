
class ApiRequest {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    getUserInfo () {
        return fetch(this._url + '/users/me', {
            method: 'GET',
            headers: this._headers
        })

        .then(this._checkPesponsive)

    }

    getCards () {
        return fetch(this._url + '/cards', {
            method: 'GET',
            headers: this._headers
        })

        .then(this._checkPesponsive)

    }

    editUserInfo (formdata) {
        return fetch(this._url + '/users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: formdata.name,
                about: formdata.profession
              })
        })
        
        .then(this._checkPesponsive)

    }

    addCard (item) {
        return fetch(this._url + '/cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: item.name,
                link: item.link
              })
        })

        .then(this._checkPesponsive)

    }

    addLike (id) {
        
        return fetch(this._url + `/cards/likes/${id}`, {
            
            method: 'PUT',
            headers: this._headers
        })

        .then(this._checkPesponsive)

    }

    deleteLike (id) {
        return fetch(this._url + `/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })

        .then(this._checkPesponsive)
    }

    editAvatar (data) {
        return fetch(this._url + `/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
              })
        })

        .then(this._checkPesponsive)        
    }

    deleteCard(id) {
        return fetch(this._url + `/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })

        .then(this._checkPesponsive)
    }

    _checkPesponsive(res) {
        if (res.ok) {
            return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }
}


const api = new ApiRequest ({
    url: 'https://nomoreparties.co/v1/cohort-26',
    headers: {
        "Content-type" : "application/json",
        authorization: '640d843b-08f0-411c-a605-cadf9f4018c0'
    },
});

export default api