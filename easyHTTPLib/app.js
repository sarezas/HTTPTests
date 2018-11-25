const http = new easyHTTP();

// GET posts
http.get('http://jsonplaceholder.typicode.com/posts', function(error, posts){
    if (error) {
        console.log(error);
    } else {
        console.log(posts);
    }
});

// Get single post
http.get('http://jsonplaceholder.typicode.com/posts/100', function(error, post){
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

// POST posts
// create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post.'
};

// // create POST
http.post('http://jsonplaceholder.typicode.com/posts', data, function(error, post){
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});
 
// update POST (PUT request)
http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

// DELETE posts
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});