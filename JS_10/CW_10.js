//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let div_One = document.createElement(`div`);
// div_One.innerText = `1 element`;
// div_One.style.margin = `5px`;
// document.body.appendChild(div_One);
//
// let div_Two = document.createElement(`div`);
// div_Two.innerText = `2 element`;
// div_Two.style.margin = `5px`;
// document.body.appendChild(div_Two);
//
//
// let form_One = document.createElement(`form`);
// form_One.setAttribute(`name`, `form_One`);
// div_One.appendChild(form_One)
//
// let form_Two = document.createElement(`form`);
// form_Two.setAttribute(`name`, `form_One`);
// div_Two.appendChild(form_Two);
//
//
// let input_One = document.createElement(`input`);
// input_One.setAttribute(`name`,`input_One`);
//
// let input_Two = document.createElement(`input`);
// input_Two.setAttribute(`name`,`input_Two`);
//
// let input_Three = document.createElement(`input`);
// input_Three.setAttribute(`name`,`input_Three`);
//
// let input_Four = document.createElement(`input`);
// input_Four.setAttribute(`name`,`input_Four`);
//
// let button = document.createElement(`button`);
// button.innerText = `bla-bla-bla`;
//
// document.body.appendChild(button);
//
// form_One.append(input_One,input_Two);
// form_Two.append(input_Three,input_Four);
//
//
//
// button.addEventListener(`click`, function (){
//     console.log(document.forms.form_One.input_One.value);
//     console.log(document.forms.form_One.input_Two.value);
//     console.log(document.forms.form_Two.input_Three.value);
//     console.log(document.forms.form_Two.input_Four.value);
// })


//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let input_One = document.createElement(`input`);
// let input_Two = document.createElement(`input`);
// let input_Three = document.createElement(`input`);
// let button = document.createElement(`button`);
// button.innerText = 'make table';
// document.body.append(input_One, input_Two, input_Three, button);
//
//
// button.addEventListener('click', function () {
//     let tr = input_One.value;
//     let td = input_Two.value;
//     let enterText = input_Three.value;
//
//     function generationTable(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '3px solid black';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generationTable(tr, td, enterText);
// })

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// let bad_words = [`asshole`, `motherfucker`, `retard`];
// let input = document.createElement(`input`);
// let button = document.createElement(`button`);
// button.innerText = `check`;
// document.body.append(input, button);
// button.addEventListener(`click`, function () {
//     let value_Input = input.value;
//
//     for (let element of bad_words) {
//         if (element === value_Input) {
//             alert(`tell me your address`);
//             input.value = ``;
//             return;
//         }
//     }
//     if (value_Input) {
//         alert(`welcome`);
//         input.value = ``;
//     }
// });