
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

        .then((res) => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        
    }

    getCards (query) {
        return fetch(this._url + query, {
            method: 'GET',
            headers: this._headers
        })

        .then((res) => {
            if (res.ok) {
            return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
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
        
        .then((res) => {
            if (res.ok) {
            return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })

        
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
        .then((res) => {
            if (res.ok) {
            return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
       
    }

    addLike (id) {
        
        return fetch(this._url + `/cards/likes/${id}`, {
            
            method: 'PUT',
            headers: this._headers
        })

        .then((res) => {
            if (res.ok) {
            return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        

        
    }

    deleteLike (id) {
        return fetch(this._url + `/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
            return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })

    }

    editAvatar (data) {
        return fetch(this._url + `/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
              })
        })

        .then((res) => {
            if (res.ok) {
            return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        
        
    }

    deleteCard(id) {
        return fetch(this._url + `/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
            return res.json()
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
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