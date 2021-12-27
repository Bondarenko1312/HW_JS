fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let wraper = document.createElement('div');
        wraper.classList.add('wraper');
        for (const post of posts) {
            let div_card = document.createElement('div');
            div_card.classList.add('card');
            div_card.innerHTML = `
                        <h3>ID: ${post.id}</h3>
                        <h4>Title: ${post.title}</h4>
                        <h5>Body: ${post.body}</h5>
                        `;
            let button = document.createElement('button');
            button.innerText = 'Click Comments';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {

                            if (post.id === comment.postId) {
                                let div_card_comments = document.createElement('div');
                                div_card_comments.classList.add('cardComments');
                                div_card_comments.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;
                                div_card.appendChild(div_card_comments)
                            }
                            button.disabled = true;
                        }
                    })
            }
            div_card.appendChild(button);
            wraper.appendChild(div_card);
            document.body.appendChild(wraper);
        }
    });