// ES6 JS Library for HTTP Requests
// Vanilla JavaScript Test
// @author Anton Zekeriev Rodin
// @mail azr@azr.es
// @licence MIT
// @version 1.0.0

class HttpLib {

    get(url) {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        })
    }

    post(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => resolve(json))
                .catch(error => reject(error));
        })
    }

}