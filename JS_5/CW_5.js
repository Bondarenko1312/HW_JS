// Всі функції повинні бути описані стрілочним типом!!!!


//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let foo_min = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c)
//     }
// }
// foo_min(500, 1000,2700)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let foo_max = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c)
//     }
// }
// foo_max(888, 222000, 33333);

// - створити функцію яка повертає найбільше число з масиву
// let arr_num = [10, 20, 30];
// let max_num = (arr_num) => {
//     let max = arr_num[0];
//     for (const num of arr_num) {
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max;
// }
// document.write(max_num(arr_num));


// - створити функцію яка повертає найменьше число з масиву
// let arr_num = [10, 20, 30];
// let min_num = (arr_num) => {
//     let min = arr_num[0];
//     for (const num of arr_num) {
//         if (num <min) {
//             min = num;
//         }
//     }
//     return min;
// }
// document.write(min_num(arr_num));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr_num = [100, 200, 400];
// let foo_sum = (arr) => {
//     let res = 0;
//     for (const num of arr) {
//         res += num;
//     }
//     return res;
// };
// document.write(foo_sum(arr_num));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr_num = [150,250,200];
// let foo_mid = (arr) => {
//     let res = 0;
//     for (const num of arr) {
//         res += num;
//     }
//     return res/arr.length;
// }
// document.write(foo_mid(arr_num));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let arr_num = [100,200,500,1000];
// let display_max = (arr_num) => {
//     let max = arr_num[0];
//     let min = arr_num[0];
//     for (const num of arr_num) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//     }
//     console.log(max)
//     return min;
// }
// document.write(display_max(arr_num))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let foo_random_num = (size) => {
//     let empty_arr = [];
//     for (let i = 0; i < size; i++) {
//         empty_arr.push(Math.floor(Math.random()* 100));
//
//     }
//     return empty_arr;
// }
// document.write(foo_random_num(100));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let foo_random_num = (size, limit) => {
//     let empty_arr = [];
//     for (let i = 0; i < size; i++) {
//         empty_arr.push(Math.floor(Math.random() * limit));
//     }
//     return empty_arr;
// }
// document.write(foo_random_num(100,100));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr_num = [10,20,30];
// let foo_revers = (arr) => {
//     let reversed_arr = [];
//     for (let i = arr.length - 1,j = 0; i >= 0; i--,j++) {
//         reversed_arr[j] = arr[i];
//
//     }
//     return reversed_arr;
// }
// document.write(foo_revers(arr_num));