// ES7 JS Library for HTTP Requests (Await & Async)
// Async function = return Promise.
// Await, wait until finish.
//
// Vanilla JavaScript Test
// @author Anton Zekeriev Rodin
// @mail azr@azr.es
// @licence MIT
// @version 1.0.0

class HttpLib {

    //Get Method
    async get(url) {

        let response = await fetch(url);
        if (response.status >= 200 && response.status < 300) {
            return await response.json()
        } else {
            let error = await `Error: ${response.status} ${response.statusText}`;
            return error;
        }

    }

    //Post method
    async post(url, data) {

        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        return await response.json();
    }

    //Put Method
    async put(url, data) {
        let response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        return await response.json();
    }

    //Patch Method
    async patch(url, data) {
        let response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        return await response.json();
    }

    //Delete method
    async delete(url) {
        let response = await fetch(url, { method: 'DELETE' });
        if (response.status >= 200 && response.status < 300) {
            return await response.json()
        } else {
            let error = `Error: ${response.status} ${response.statusText}`;
            return await error;
        }

    }
}