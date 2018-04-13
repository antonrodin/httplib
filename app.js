// Use https://jsonplaceholder.typicode.com/
// to check API
// Some kind of rudimentary tests...

const http = new HttpLib();

// GET
http.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .catch(error => console.error(error));

//POST
let post = {
    title: "Foo POST SUCCESS",
    body: "Bar POST SUCESS",
    userId: 1
}

http.post("https://jsonplaceholder.typicode.com/posts", post)
    .then(data => console.log(data))
    .catch(error => console.log(error));

//PUT
post = {
    id: 5,
    title: "Foo PUT Title SUCCESS",
    body: "Bar PUT BODY SUCCESS",
    userId: 2
}

http.put("https://jsonplaceholder.typicode.com/posts/5", post)
    .then(data => console.log(data))
    .catch(error => console.error(error));

//PATCH
post = { title: "Foo PATCH Title SUCCESS" }

http.patch("https://jsonplaceholder.typicode.com/posts/5", post)
    .then(data => console.log(data))
    .catch(error => console.error(error));

//DELETE
http.delete("https://jsonplaceholder.typicode.com/posts/5")
    .then(data => console.log(data))
    .catch(error => console.error(error));