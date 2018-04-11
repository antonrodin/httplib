// ES5 JS Library for HTTP Requests
// Vanilla JavaScript Test
// Author Anton Zekeriev Rodin
// azr@azr.es

function httpLib() {
    this.http = new XMLHttpRequest();
}

//GET HTTP Request
httpLib.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    var self = this;
    this.http.onload = function() {
        if(self.http.status == 200) {
            callback(null, self.http.responseText);
        } else {
            callback("HTTPLib error status code: " + self.http.status, self.http.responseText)
        }
    }

    this.http.send();
}

//POST HTTP Request
httpLib.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    var self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//PUT HTTP Request
httpLib.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    var self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//DELETE HTTP Request
httpLib.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    var self = this;
    this.http.onload = function() {
        if(self.http.status == 200) {
            callback(null, "Deleted");
        } else {
            callback("HTTPLib error status code: " + self.http.status, self.http.responseText)
        }
    }

    this.http.send();
}