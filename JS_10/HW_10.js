// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// //
// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// //
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// //
// // - Создайте меню, которое раскрывается/сворачивается при клике
// //
// //
// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вывести список комментариев в документ, каждый в своем блоке.
// //     Добавьте каждому комментарию по кнопке для сворачивания его body.о body.

//----------- 1 --------
let click = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = function () {
    click.style.display = 'none';
}


//------------- 2 -------------
document.getElementById('button1').onclick = function () {
    let age = document.getElementById('age').value;
    if (!age) {
        alert('try again');
    } else if (+age < 18) {
        alert('Sorry, you so young');
    } else {
        alert('WELCOME');
    }
}
//------------------ 3 -------------
let menuElement = document.querySelector('.menu');
let titleElement = menuElement.querySelector('.title');

titleElement.onclick = function () {
    menuElement.classList.toggle('hidden');
};
//---------------- 4 ------------------
let comments = [
    {name: 'Vasil', body: 'driver'},
    {name: 'Petro', body: 'chief'},
    {name: 'Igor', body: 'plumber'},
    {name: 'Mykola', body: 'teacher'},
];

let divFather = document.createElement('div');
for (const item of comments) {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');

    h3.innerText = item.name;
    p.innerHTML = item.body;
    btn.innerHTML = 'close'

    div.append(h3, p, btn);
    divFather.append(div, hr);
}
document.body.appendChild(divFather)


