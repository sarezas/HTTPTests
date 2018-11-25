const posts = [
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            //change to true to test if error catching works
            const error = false;
            
            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong!');
            }

        }, 2000);
    });
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is the third post'})
.then(getPosts)
.catch(function(error){
    console.log(error);
});

