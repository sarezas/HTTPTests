const http = new EasyHTTP;

// GET users
// http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(error => console.log(error));

// create user data
const data = {
    name: 'Sharis Maris',
    username: 'sharism',
    email: 'sharis@sharis.lt'
}

// POST user
// http.post('http://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// PUT (update) user
// http.put('http://jsonplaceholder.typicode.com/users/1', data)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// DELETE user
http.delete('http://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(error => console.log(error));


