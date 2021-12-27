// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
        return response.json()
    })
    .then(posts => {
        let wraper = document.createElement(`div`);
        wraper.classList.add(`wraper`);
        for (const post of posts) {
            let div_card = document.createElement(`div`);
            div_card.classList.add(`post`);
            div_card.innerHTML = `
            <h3>ID: ${post.id}</h3>
           <h4>Title: ${post.title}</h4>
            <h5>Body: ${post.body}</h5>
            `;
            wraper.appendChild(div_card);
            document.body.appendChild(wraper);
        }
    });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then(comments => {
        let wraper = document.createElement(`div`);
        wraper.classList.add(`wraper`);
        for (const comment of comments) {
            let div_card = document.createElement(`div`);
            div_card.classList.add(`post`);
            div_card.innerHTML = `
            <h3>ID: ${comment.id}</h3>
           <h4>Title: ${comment.title}</h4>
            <h5>Body: ${comment.body}</h5>
            `;
            wraper.appendChild(div_card);
            document.body.appendChild(wraper);
        }
    });

