// ES6 JS Library for HTTP Requests
// Vanilla JavaScript Test
// @author Anton Zekeriev Rodin
// @mail azr@azr.es
// @licence MIT
// @version 1.0.0

class HttpLib {

    //Get Method
    get(url) {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json()
                    } else {
                        let error = `Error: ${response.status} ${response.statusText}`;
                        return reject(error);
                    }
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        })
    }

    //Post method
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

    //Put Method
    put(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => resolve(json))
                .catch(error => reject("HttpLib error: " + error));
        })
    }

    //Patch Method
    patch(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => resolve(json))
                .catch(error => reject("HttpLib error: " + error));
        })
    }

    //Delete method
    delete(url) {
        return new Promise(function (resolve, reject) {
            fetch(url, { method: 'DELETE'} )
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json()
                    } else {
                        let error = `Error: ${response.status} ${response.statusText}`;
                        return reject(error);
                    }
                })
                .then(json => resolve("Delete success!"))
                .catch(error => reject("Httplib delete error: " + error));
        })
    }

}