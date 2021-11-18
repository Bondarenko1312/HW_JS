// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function S_Rect (a, b)  {
//     return a * b;
// }
// console.log(S_Rect(4,4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function S_Circle (r)  {
//     return Math.PI * Math.pow(r, 2);
// }
// console.log(S_Circle(15));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function S_Cylinder(r, h)  {
//     return 2 * Math.PI * r * h
// }
// console.log(S_Cylinder(33,70));


// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [(3>3),`qwe`, 8, true , `orange`,`apple`,315,20,false,(5>1),(3>3), ];
// function Array(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// Array(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraph(`today is very cold`);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function Array(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// Array(`never give up!!!`)

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function Array(text, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// Array(`never give up!!!`, 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let easy_arr = [(3 > 3), `qwe`, 8, true, `orange`, `apple`, 315, 20, false, (5 > 1), (3 > 3),];
//
// function array_list(easy_arr) {
//     document.write(`<ul>`);
//     for (let element of easy_arr) {
//         document.write(`<li>${element}</li>`);
//     }
//     document.write(`</ul>`);
//
// }
// array_list(easy_arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array_objects = [
//     {id: 117, name: `Petro`, age: 40},
//     {id: 220, name: `Vasyl`, age: 28},
//     {id: 440, name: `Igor`, age: 55},
//     {id: 404, name: `Mykola`, age: 23},
//     {id: 800, name: `John`, age: 46},
// ];
//
// function display_array_obj(array_objects) {
//     for (let object of array_objects) {
//         document.write(`<div>${object.id} - ${object.name} - ${object.age}</div`);
//     }
// }
//
// display_array_obj(array_objects);