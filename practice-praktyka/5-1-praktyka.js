//TODO:============task-01=========================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName (callback) {
//     const userName = prompt('Enter your name');
//     if (!userName) {
//        return alert('Error');
//     }
//     return callback(userName);
// }
// function greet (name) {
//     return `Hello ${name}`;
// }
// console.log(letMeSeeYourName(greet));

//TODO:============task-02=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. 
// Функція повинна помножити числа між собою та передати результат 
// дії до колбек-функції. Колбек-функція повинна, у разі, якщо, 
// це число є парним - помножити це число на себе, якщо ні - взяти 
// квадратний корінь з цього числа, та вивести результат у консоль лог.

// function performOperation (a, b, callback) {
//     return callback(a * b);
// }

// function callbackFunction(number){
//     return number % 2 === 0 ? Math.pow (number, 2) : Math.sqrt(number);
// }

// console.log(performOperation(1,2, callbackFunction));

// * =========== Стрілочна функція ============

// const performOperation = (a, b, callback) => callback(a * b);

// const callbackFunction = (number) => {
//         return number % 2 === 0 ? Math.pow (number, 2) : Math.sqrt(number);
//     }

// console.log(performOperation(1, 3, callbackFunction));

//TODO:============task-03=========================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// setInterval(() => {
//   console.log(Date.now());
//  }, 1000);

// function generateUniqueId() {
//   const timestamp = Date.now();
//   const uniqueId = `${timestamp}${Math.floor(Math.random() * 10000)}`;
//     return uniqueId;
// }
// console.log(new Date().getTime());
// function makeProduct(name, price, callback) {
//     const id = generateUniqueId();
//     const product = {
//         id,
//         name,
//         price,
//     };
//     return callback(product);
// }

// const showProduct = product => `id: ${product.id}, Product: ${product.name}, price: ${product.price}`;

// console.log(makeProduct('Banana', 300, showProduct));
// console.log(makeProduct('Apple', 100, showProduct));
// console.log(makeProduct('Orange', 250, showProduct));

//TODO:============task-04=========================
//Напишіть функцію each(array, callback), яка
//першим параметром приймає масив, а другим - функцію,
//Яка застосовується до кожного елементу масиву.
//Функція each повинна повернути новий масив, елементами
//якого будуть результати виклику callback
//callback функції повинна множити елементи на 2
//! Використай анонімну колбєк функцію

const numbers = [1, 2, 4]
const each = (array, callback) => {
    const Newarray = []; 
    array.forEach ((number) => {
        newArray.push(callback(number))
    });
    return newArray;
}
console.log(each(numbers, (number) => number * 2));