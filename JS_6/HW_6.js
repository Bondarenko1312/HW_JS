

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.length);
// let str2 = 'hello world';
// console.log(str2.length);
// let str3 = 'javascript is cool';
// console.log(str3.length);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.toUpperCase());
// let str2 = 'lorem ipsum';
// console.log(str2.toUpperCase());
// let str3 = 'javascript is cool';
// console.log(str3.toUpperCase());



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// console.log(str1.toLowerCase());
// let str2 = 'LOREM IPSUM';
// console.log(str2.toLowerCase());
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str3.toLowerCase());




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// let str = ' dirty string   ';
// let str_clean = str.trim();
// console.log(str_clean);




// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let stringToarray = (str) => {
//     return str.split(``);
// };
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']




// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// };
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let insert_dash = (str) => {
//     let upper_join = str.split(``).toUpperCase().join(`-`);
//     return upper_join;
// };
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'




// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let Name = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
// console.log(Name(`lorem ipsum`));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     return str.split(` `).map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(` `);
// };
// document.write(capitalize(`The best of the best`))

