// Всі функції повинні бути описані стрілочним типом!!!!
//

// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let S_Rect = (a, b) => a * b;
// console.log(S_Rect(4,4))


// - створити функцію яка обчислює та повертає площу кола
// let S_Circle = (r) => {
//     return Math.PI * Math.pow(r, 2);
// };
// console.log(S_Circle(10))


// - створити функцію яка обчислює та повертає площу циліндру
// let S_Cylinder = (r, h) => {
//     return 2 * Math.PI * r * h
// };
// console.log(S_Cylinder(10, 80))


// - створити функцію яка приймає масив та виводить кожен його елемент
// let some_arr = [`qwerty`, (1 > 3),15,`yes`,true ];
// let foo_for_arr = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// };
// foo_for_arr(some_arr);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let foo_P = (text) => {
//     document.write(`<p>${text}</p>`)
// };
// foo_P(`hello world`)


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ul_foo = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// };
// ul_foo(`study every day`)


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ul_foo = (text, num) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// };
// ul_foo(`how are you`, 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let easy_arr = [15,`hello`,`man`,22,(2 > 15),20,20,true];
// let foo_list = (arr) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`)
//
// };
// foo_list(easy_arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let profile_arr = [
//     {id: 1, name: `Mykola`, age: `20`},
//     {id: 2, name: `Igor`, age: `19`},
//     {id: 3, name: `Rayan`, age: `88`},
// ];
// let foo_profile = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} - ${arrElement.name} - ${arrElement.age}</div>`);
//     }
// }
// foo_profile(profile_arr);