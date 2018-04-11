// Use https://jsonplaceholder.typicode.com/
// to check the library

const http = new httpLib();

// http.get("https://jsonplaceholder.typicode.com/users", function(error, response) {
//     if(error) {
//         console.error(error);
//     } else {
//         console.log(response);
//     }
// });

// var user = {
//     name: "Anton Cabezon",
//     username: "antonrodin",
//     email: "example@example.org"
// }

// http.post("https://jsonplaceholder.typicode.com/users", user, function(error, response) {
//     console.log(response);
// });

// var post = {

//     id: 1,
//     title: "Foo",
//     body: "Bar",
//     userId: 1

// }

// http.put("https://jsonplaceholder.typicode.com/posts/1", post, function(error, response) {
//     console.log(response);
// })

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(error, response) {
    if(error) {
        console.error(error);
    } else {
        console.log(response);
    }
});