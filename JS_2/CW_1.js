// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .











// let a = +prompt(`type first number`);
// let b = +prompt(`type second number`);
//     if (a>b){
//         console.log('first number is greater')
//     }
//     else if (a<b){
//         console.log(`second number is greater`)
//     }else if (a===b){
//         console.log(`numbers are the same`)
//     }
//





//
// let number_flat = +prompt(`type flat number!`);
// if (number_flat > 0 && number_flat <= 20) {
//     console.log(`1 entrance`)
// }else if (number_flat >= 21 && number_flat >=48) {
//     console.log(`2 entrance`)
// }else if (number_flat>=49 && number_flat <=90)  {
//     console.log(`3 entrance`)
// }






// +prompt(`type number`)===10 ? console.log(`true`) : console.log(`false`)






// let x = 0;
// if (typeof x === 'number') {
//     console.log(1)
// }else if (typeof x === 'string') {
//     console.log(2)
// }else if (typeof x === `boolean`) {
//     console.log(3)
// }else if (typeof x ===`object`){
//     console.log(4)
// }else {
//     console.log(`try more`)
// }







// let temp = +prompt(`Рow many degrees celsius today`)
// if (temp >= 10 && temp <= 22) {
//     console.log(`go study every day)))`)
// }else {
//     console.log(`Weather is not a problem, we will study online`)
// }




// let random_game = +prompt(`Type number 1-5`);
// switch (random_game){
//     case 1:console.log(`You win Iphone 13ProMAx`);
//     break;
//     case 2:console.log(`You win BMW X5M`);
//         break;
//     case 3:console.log(`You win motorcycle`);
//         break;
//     case 4:console.log(`You win  renault laguna`);
//         break;
//     case 5:console.log(`You win  motorola`);
//         break;
//     default:
//         console.log(`try next time`)
// }

