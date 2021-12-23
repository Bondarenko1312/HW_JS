// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//

let form1 = document.form1User;
form1.onsubmit = function (save_local) {
    save_local.preventDefault();
    let name = this.name.value
    let age = this.age.value
    console.log(name, age);
    localStorage.setItem(`users_data`, JSON.stringify([name, age]));
};


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form2Car = document.form2Car;

form2Car.onsubmit = function (save_loc) {
    save_loc.preventDefault();
    let model = this.model.value;
    let type = this.type.value;
    let volume = this.volume.value;
    let car = {model: model, type: type, volume: volume};
    let cars = JSON.parse(localStorage.getItem(`cars`));
    console.log(cars);
    if (!cars) {
        cars = [];
        cars.push(car);
        localStorage.setItem(`cars`, JSON.stringify(cars));
    } else {
        cars.push(car);
        localStorage.setItem(`cars`, JSON.stringify(cars));
    }
};

