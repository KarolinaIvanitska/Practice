//TODO:=========task-01=================
// Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та метод, який виводить
// повну інформацію про користувача.


//TODO:=========task-02=================
// Для обьекта "user", написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові
//потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)



//TODO:=========task-03=================
// Створити глобальну функцію для обьекта "user", що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:



//TODO:=========task-04=================
//  Викликати метод user.showUser() таким чином, щоб він вивів результатом  ({name: 'Bob', lastName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

// const obj = {
//   userName: 'Bob',
//   lastName: 'Lasso',
//   age: 50,
//   email: 'BodLasso@gmail.com',
// };




//TODO:=========task-05=================
//  Викличте функцію showFullName у контексті об'єкта user

// function showFullName(message, number) {
//   console.log(`${message}, ${this.userName} ${this.lastName}, ${number}`);
// }

const user = {
    name: "Robert",
    lastName: "Vojdik",
    age: 18
}


//TODO:=========task-06=================
// Виправте помилки, щоб код працював

// const product = {
//   price: 5000,

//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(callback) {
//   callback();
// }