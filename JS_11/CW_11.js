// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
for (const user of users) {
    let div_User = document.createElement(`div`);
    div_User.innerText = JSON.stringify(user);
    let button_fav = document.createElement(`button`);
    button_fav.innerText = `Add favorites`
    button_fav.onclick = function () {
        let favorites = JSON.parse(localStorage.getItem(`favorites`)) || [];
        favorites.push(user);
        localStorage.setItem(`favorites`, JSON.stringify(favorites))
    };
    div_User.appendChild(button_fav);
    document.body.appendChild(div_User)
};