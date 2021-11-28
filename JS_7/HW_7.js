// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let User_arr = [
//     new User(1, `Vasyl`, `Golova`, `golova7777@gmail.com`, 0o671313777),
//     new User(22, `Igor`, `Nalisnik`, `nalisnik2020@gmail.com`, 0o671312121),
//     new User(3, `Mikola`, `Nikolas`, `nikolas100000@gmail.com`, 0o637771515),
//     new User(44, `Nazik`, `Lesyk`, `nazkamaz100000@gmail.com`, 0o637771212),
//     new User(5, `Petro`, `Noname`, `error1515@gmail.com`, 0o637771010),
//     new User(62, `Olya`, `Stepanchuk`, `oli4ka55555@gmail.com`, 0o637772525),
//     new User(75, `niko`, `triko`, `salto_perednie@gmail.com`, 0o637773333),
//     new User(8, `Zenyk`, `Starshiy`, `hadjime0@gmail.com`, 0o637774444),
//     new User(999, `Radik`, `kola`, `cocacola00@gmail.com`, 0o637776666),
//     new User(10, `Oleg`, `lasos`, `olko0@gmail.com`, 0o637777777),
//
// ];
// console.log(User_arr);
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter_pair_User = User_arr.filter((item) => {
//     if (item.id % 2 === 0) {
//         return item;
//     }
// });
// console.log(filter_pair_User);
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sorted_id_User = User_arr.sort((a, b) => a.id - b.id);
// console.log(sorted_id_User);
//
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client extends User {
//     constructor(id, name, surname, email, phone, order) {
//         super(id, name, surname, email, phone);
//         this.order = order;
//     }
// }
//
// console.log(Client)
// ////// 2 version  ///////
// //
// // class Client  {
// //     constructor(id, name, surname, email, phone, order) {
// //         this.id = id;
// //         this.name = name;
// //         this.surname = surname;
// //         this.email = email;
// //         this.phone = phone;
// //         this.order = order;
// //     }
// // }
// // console.log(Client)
//
// // створити пустий масив, наповнити його 10 об'єктами Client
// let Client_arr = [
//     new Client(1, `Vasyl`, `Golova`, `golova7777@gmail.com`, 0o671313777, [`PC`, `PS4`, `gamepad`]),
//     new Client(22, `Igor`, `Nalisnik`, `nalisnik2020@gmail.com`, 0o671312121, [`iphone 13Pro`]),
//     new Client(3, `Mikola`, `Nikolas`, `nikolas100000@gmail.com`, 0o637771515, [`macbook,ipad`]),
//     new Client(44, `Nazik`, `Lesyk`, `nazkamaz100000@gmail.com`, 0o637771212, [`t-shirt`, `shorts`, `hat`, `shoes`]),
//     new Client(5, `Petro`, `Noname`, `error1515@gmail.com`, 0o637771010, [`ball`]),
//     new Client(62, `Olya`, `Stepanchuk`, `oli4ka55555@gmail.com`, 0o637772525, [`mottorola`, `sony ericson`]),
//     new Client(75, `niko`, `triko`, `salto_perednie@gmail.com`, 0o637773333, [`ipad`]),
//     new Client(8, `Zenyk`, `Starshiy`, `hadjime0@gmail.com`, 0o637774444, [`create design ios mobile app`, `create website with Figma`]),
//     new Client(999, `Radik`, `kola`, `cocacola00@gmail.com`, 0o637776666, [`keyboard`, `gaming mouse`, `monitor`]),
//     new Client(10, `Oleg`, `lasos`, `olko0@gmail.com`, 0o637777777, [`Iphone 7`]),
// ];
// console.log(Client_arr);
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sorted_orders_Client = Client_arr.sort((a, b) => a.order.length - b.order.length);
// console.log(sorted_orders_Client)