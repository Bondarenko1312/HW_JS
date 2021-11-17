// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


// let numbers = [1,2,3,5,8];
// console.log(numbers);
// let string = ['home','work','name','suggestions','lol'];
// console.log(string);
// let num_str_bool = [1,'just do it',-1,true,false]
// console.log(num_str_bool)

//
// let empty = [];
// empty[0] = 'home';
// empty[1] = 3;
// empty[2] = 'relax';
// empty[3] = 188;
// empty[4] = 'study';
// console.log(empty)


// for (let i = 0; i < 10; i++)    {
//     document.write(`<div>lorem ipsum</div>`)
// }
// for (let i = 1; i < 11; i++)    {
//     document.write(`<div>${i}lorem ipsum</div>`)
// }
// let i = 0;
// while (i < 10)  {
//     document.write(`<div>lorem ipsum</div>`);
//     i++;
// }
// let i = 1;
// while (i < 11)  {
//     document.write(`<div>${i}lorem ipsum</div>`);
//     i++;
// }


// let numbers = [1,2,3,5,8,13,21,34,55,88];
// for (i = 0; i < numbers.length; i++)    {
//     console.log(numbers[i])
// }

// let string = ['home','work','name','suggestions','lol',`javascript`,`python`,`java`,`c++`,`c#`];
// for (i = 0; i < string.length; i++) {
//     console.log(string[i])
// }
// let num_str_bool = [1,'just do it',-1,true,false,'programming','sport',-22,11,'cyber sport'];
//     for (i = 0; i < num_str_bool.length; i++) {
//         console.log(num_str_bool[i])
// }


// let num_str_bool = [1, 'just do it', -1, true, false, 'programming', 'sport', -22, 11, 'cyber sport'];
// for (i = 0; i < num_str_bool.length; i++)   {
//     if (typeof num_str_bool[i] === `boolean`)  {
//     console.log(num_str_bool[i]);
//     }
// }

// let num_str_bool = [1, 'just do it', -1, true, false, 'programming', 'sport', -22, 11, 'cyber sport'];
// for (i = 0; i < num_str_bool.length; i++)   {
//     if (typeof num_str_bool[i] === `number`)  {
//         console.log(num_str_bool[i]);
//     }
// }

// let num_str_bool = [1, 'just do it', -1, true, false, 'programming', 'sport', -22, 11, 'cyber sport'];
// for (i = 0; i < num_str_bool.length; i++)   {
//     if (typeof num_str_bool[i] === `string`)  {
//         console.log(num_str_bool[i]);
//     }
// }


//
// let empty = [];
// empty[0] = `hello`
// empty[1] = `world`
// empty[2] = `it is`
// empty[3] = true
// empty[4] = `or`
// empty[5] = false
// empty[6] = 88
// empty[7] = -10
// empty[8] = 15
// empty[9] = `qqq`
// for (let i = 0; i < empty.length; i++)  {
//     console.log(empty[i])
// }

//
// for (let i = 0; i < 10; i++)    {
//     console.log(`step` + i);
//     document.write(`step` + i)
//
// }


// for (let i = 0; i < 100; i++)    {
//     console.log(`step` + i);
//     document.write(`step` + i)
//
// }
// for (let i = 0; i < 100; i+=2)    {
//     console.log(`step` + i );
//     document.write(`step` + i )
//
// }
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`step` + i);
//         document.write(`step` + i)
//     }
// }

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(`step` + i);
//         document.write(`step` + i)
//     }
// }
