// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let create_div = document.createElement(`div`);
create_div.classList.add(`wrap`,`collapse`,`alpha`,`beta`)
create_div.style.backgroundColor = `red`
create_div.style.color = `black`
create_div.style.fontSize = `50px`
create_div.innerText = `qwerty`
document.body.appendChild(create_div)

let clone_div = create_div.cloneNode(true);
document.body.appendChild(clone_div)





// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
    let menu_arr = ['Main','Products','About us','Contacts'];
let menu_div = document.getElementsByClassName(`menu`)[0];
menu_arr.forEach(item=> {
    let create_li = document.createElement(`li`);
    create_li.innerText = item
    menu_div.appendChild(create_li)
})




// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
coursesAndDurationArray.forEach(value => {
    let create_div = document.createElement(`div`);
    let text = ``
    for (let key in value)  {
        text+=`==${key}: ${value[key]}`
    }
    create_div.innerText = text.slice(2)
    document.body.appendChild(create_div)
})



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
coursesAndDurationArray.forEach(value => {
    let div = document.createElement(`div`);
    div.classList.add(`item`)
    let h1 = document.createElement(`h1`);
    div.classList.add(`heading`)
    let p = document.createElement(`p`);
    div.classList.add(`description`)
    p.innerText = value.monthDuration
    h1.innerText = value.title
    div.append(h1,p)
    document.body.appendChild(div)
})