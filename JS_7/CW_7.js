// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function Car(model,maker,year,maxspeed,engine) {
//     this.model = model;
//     this.maker = maker;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
//     };
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== `function`) console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.increaseMaxSpeed = this.maxspeed + newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let newCar = new Car(`Mercedes-Benz`,`Germany`,2021,380,4.0)
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(40);
// newCar.changeYear(2023);
// newCar.addDriver(`Mykola`);
// console.log(newCar);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, maker, year, maxspeed, engine) {
//         this.model = model;
//         this.maker = maker;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//     info() {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver(driver) {
//         this.driver = driver;
//     };
// }
// let newCar = new Car(`BMW`,`Germay`,2005,320,4.4);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(33);
// newCar.changeYear(2020);
// newCar.addDriver(`Nalisnik`);
// console.log(newCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// -Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//    - За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     -Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let popelushka_arr = [
    new Popelushka(`Yarina`, 25, 45),
    new Popelushka(`Olga`, 20, 37),
    new Popelushka(`Vasylina`, 40, 40),
    new Popelushka(`Marichka`, 23, 38),
    new Popelushka(`Galya`, 22, 35),
    new Popelushka(`Karina`, 80, 47),
    new Popelushka(`Mandarina`, 31, 42),
    new Popelushka(`Mykola`, 21, 41),
    new Popelushka(`Nastia`, 27, 38),
    new Popelushka(`Olenka`, 30, 36),
];
console.log(popelushka_arr);

class Prince {
    constructor(name, age, find_size) {
        this.name = name;
        this.age = age;
        this.find_size = find_size;
    }
}

let prince = new Prince(`Igorko Korabel`, 40, 38);

let wedding = (popelushka_arr, prince) => {
    for (const item of popelushka_arr) {
        if (item.find_size === prince.find_size) {
            return `your Popelushka is ${item.name}`
        }
    }
};
console.log(wedding(popelushka_arr, prince));

let find_Popelushka = popelushka_arr.find((item) => item.size === prince.find_size);
console.log(find_Popelushka);