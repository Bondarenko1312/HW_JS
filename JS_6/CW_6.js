


// 1- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// //
// let normal_name = (str, element) => {
//     let normal_arr = [];
//     if (str.includes(element)) {
//         let str_split = str.split(element)
//         str_split.forEach((item) => {
//             if (item) normal_arr.push(item);
//         })
//         document.write(normal_arr.join(` `))
//     }
// }
// normal_name(n1,`.`);
// normal_name(n2,`-`);
// normal_name(n3,`_`);


// 2- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let rand1_100 = (length, num) => {
//     let new_arr = [];
//     for (let i = 0; i < length; i++) {
//         new_arr.push(Math.floor(Math.random() * num));
//     }
//     return new_arr;
// };
//
// document.write(rand1_100(100,100));


// 3- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let sorted_rand = (length, num) => {
//     let new_arr = [];
//     for (let i = 0; i < length; i++) {
//         new_arr.push(Math.floor(Math.random() * num));
//
//     }
//     return new_arr.sort((a,b) => a-b);
// };
// document.write(sorted_rand(100,100));


// 4- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// num_arr = [1,2,3,4,5,6];
// let foo_filter = (num_arr) => {
//     for (let i = 0; i < num_arr.length; i++) {
//
//     }
//     return num_arr.filter(value => value % 2 === 0 );
// };
// document.write(foo_filter(num_arr));


// 5- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let rand_arr = [10, 20, 30, 40, 50];
// let arr_to_str = (rand_arr) => {
//     for (let i = 0; i < rand_arr.length; i++) {
//
//     }
//     return rand_arr.map(value => value.toString());
// };
// document.write(arr_to_str(rand_arr));
// console.log(arr_to_str(rand_arr));
// console.log(typeof rand_arr);


// 6- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// //
// let sortNums = (arr, direction) => {
//     if (direction === `ascending`) return arr.sort((a,b) => a - b);
//     if (direction === `descending`) return arr.sort((a,b) => b - a);
// };
// document.write(sortNums([1,10,20,800,44,20],`ascending`));
// document.write(sortNums([1,10,20,800,44,20],`descending`));




// 7- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//

// -- відсортувати його за спаданням за monthDuration
// let arr_filter = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
//
// console.log(arr_filter);




// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let more_5_month = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration >= 5;
// });
// console.log(more_5_month)



// 8- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//     let result = [];
//     while (str.length) {
//         result.push(str.substr(0, n))
//         str = str.slice(n)
//     }
//     console.log(result)
//     return result
// };
//
// document.writeln(cutString(`razrazrazrazrazraz`, 3))