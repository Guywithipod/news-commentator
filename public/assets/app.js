

const clickHandler = () => document.getElementById("post-comment").addEventListener('click', function (event) {
    console.log('I work')
    const modal = document.querySelector('.modal');
    const button = modal.querySelector('.submit');
    const titleInput = modal.querySelector('[name="title"]');
    const commentInput = modal.querySelector('[name="comment"]');
    const articleId =  event.target.getAttribute('data-id')
    button.setAttribute('data-id',articleId)
    axios.get('/article/comment/' + articleId)
    .then(result => {
        if(result.data.length > 0){
            titleInput.setAttribute('value', result.data[0].title);
            commentInput.setAttribute('value', result.data[0].comment);
            modal.classList.remove('hide');
            modal.classList.add('show');
        }
    })
    .catch(err => console.log(err));

});

const submitHandler = () => document.getElementById("submit-comment").addEventListener('click', function () {
    //We need some way to know whether we are editing a comment or creating one
    //We need a route to update a commnet
    //RIght below this we need to get real data from our form to be able to save real comments
    axios.post("article/comment", {
        "title": "Some fancy article title",
        "comment": "https://www.google.com",
        
        "articleId": "5da6910619bbac2c9808c05f"
        })
        // write code to clear comment box
    // .catch show an error to the user.
    //consider an update request
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
    modal.classList.add('hide');
});
