// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//


// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min_num(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     }else if (b < a && b < c) {
//         console.log(b);
//     }else if (c < a && c < b) {
//         console.log(c)
//     }
// }
// min_num(2200,200,220)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max_num(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     }else if (b > a && b > c) {
//         console.log(b);
//     }else if (c > a && c > b) {
//         console.log(c)
//     }
// }
// max_num(2200,200,220)


// - створити функцію яка повертає найбільше число з масиву
// let num_arr = [20,80,100,404];
// function max_num(num_arr) {
//     let max = num_arr[0];
//     for (const num of num_arr) {
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max;
// }
// console.log(max_num(num_arr))


// - створити функцію яка повертає найменьше число з масиву
// let num_arr = [20, 80, 100, 404];
//
// function min_num(num_arr) {
//     let min = num_arr[0];
//     for (const num of num_arr) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
//
// console.log(min_num(num_arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let num_arr = [20, 80, 100, 404];
// function sum_of_nums(num_arr) {
//     let res = 0;
//     for (const num of num_arr) {
//         res += num;
//     }
//     return res;
// }
// console.log(sum_of_nums(num_arr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let num_arr = [20, 80, 100, 404];
// function arithmetic_nums(num_arr) {
//     let res = 0;
//     for (const num of num_arr) {
//         res += num;
//     }
//     return res/num_arr.length;
//
// }
// console.log(arithmetic_nums(num_arr))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let num_arr = [20, 80, 100, 404];
// function display_max(num_arr) {
//     let max = num_arr[0];
//     let min = num_arr[0];
//     for (const num of num_arr) {
//         if (num > max) {
//             max = num;
//         }
//
//         if (num < min) {
//             min = num;
//         }
//     }
//     console.log(max)
//     return min;
// }
// console.log(display_max(num_arr))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random_array(size) {
//     let empty_arr = [];
//     for (let i = 0; i < size; i++) {
//         empty_arr.push(Math.floor(Math.random() * 100));
//     }
//     return empty_arr;
// }
// console.log(random_array(80))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random_array(size,limit) {
//     let empty_arr = [];
//     for (let i = 0; i < size; i++) {
//         empty_arr.push(Math.floor(Math.random() * limit));
//     }
//     return empty_arr;
// }
// console.log(random_array(10,100))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function revers(arr) {
//     let reversed_arr = [];
//     for (let i = arr.length - 1, j = 0;i >= 0; i++) {
//         reversed_arr[j] = reversed_arr[i];
//     }
//     return reversed_arr;
// }
// console.log(revers())