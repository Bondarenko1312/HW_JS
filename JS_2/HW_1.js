// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!


// let time = +prompt(`type number from 1 to 59`);
//
// if (time >= 0 && time <= 14) {
//     alert('first quarter');
// }
// if (time >= 15 && time <= 30) {
//     alert('the second quarter');
// }
// if (time >= 31 && time <= 45) {
//     alert('third quarter');
// }
// if (time >= 46 && time <= 59) {
//     alert('fourth quarter.');
// }







// // let day = +prompt('type random number from 1 to 31')
// // if(day <=15 ){
// //     console.log(`first half`);
// // } else if (day<= 31) {
// //     console.log(`second half`);
// // } else if (day>31) {
// //     alert(`error`)
// }






// let test = 'qwe';
// if (test === true) {
//     console.log(`вірно`);
// } else {
//     console.log(`Невірно`);
// }

// (TERNARY)
// let test = 'qwe';
// test ===true ? console.log('true!') : console.log('false');






// let a = +prompt('type number 1, 0, -3');
// if (a !==0) {
//     console.log('true')
// } else {
//     console.log('false')
// }
//(TERNARY)

// let a = +prompt('type a 1, 0, -3');
// (number != 0) ? console.log('true') : console.log('false')








// let plan_for_week = +prompt('type form 1 to 7')
// switch (plan_for_week) {
//     case 1:
//         console.log('Monday-swimming');
//         break;
//     case 2:
//         console.log('Tuesday-boxing');
//         break;
//     case 3:
//         console.log('Wednesday-kickboxing');
//         break;
//     case 4:
//         console.log('Thursday-english');
//         break;
//     case 5:
//         console.log('Friday-spanish');
//         break;
//     case 6:
//         console.log('Saturday-drink some whisky');
//         break;
//     case 7:
//         console.log('Sunday-drink some beer');
//         break;
//     default:
//         console.log('Did you get drunk yesterday')
// }







// let year = +prompt(`type year`);
// if (year % 4 === 0) {
//     console.log('this is a leap year');
// }else {
//     console.log('this is not a leap year');
// }
//
//





//
// let official_name = prompt('What is the official name of JavaScript?');
// if (official_name === 'ECMAScript'){
//     console.log(`True!!!`);
// } else {
//     console.log(`Don't know? ECMAScript!`);
// }
