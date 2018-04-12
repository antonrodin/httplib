// Use https://jsonplaceholder.typicode.com/
// to check the library

const http = new HttpLib();

var post = {
    title: "Foo",
    body: "Bar",
    userId: 1
}

http.get("https://jsonplaceholder.typicode.com/users")
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    });

http.post("https://jsonplaceholder.typicode.com/posts", post)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    });