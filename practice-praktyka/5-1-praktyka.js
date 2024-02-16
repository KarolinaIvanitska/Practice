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

// const numbers = [1, 2, 4]
// const each = (array, callback) => {
//     const newArray = []; 
//     array.forEach ((number) => {
//         newArray.push(callback(number))
//     });
//     return newArray;
// }

// const multiply = number => number * 2;
// console.log(each(numbers, multiply));

//ABO:

// console.log(each(numbers, (number) => number * 2));

//TODO:============task-05=========================
// Напишіть функцію, яка приймає масив чисел і колбек-функцію. 
// Функція повинна повернути новий масив, у якому кожен елемент 
// масиву перетворено згідно з логікою, яка визначається в 
// колбек-функції. Колбек-функція приймає число, і повертає 
// його ж, помножене на рандомне число від 1 до цього числа.

// const numbers = [1, 23, 54, 212, 45, 7];
// function transformArray(array, callback) {
//     const result = [];

//     array.forEach(element => {
//         result.push(callback(element))
//     });
//     return result
// }
// function tranformNumber(num) {
//     return Math.floor(Math.random() * num) + 1;
// }

// console.log(transformArray(numbers, tranformNumber));


//TODO:============task-06=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. 
// Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. 
// Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. 
// При використанні першого колбеку має
// повертатись перше парне число. При використанні другого 
// - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.


// const numbers = [1, 3, 6, 7, 9, 20];
// const words = ["apple", "banana", "orange", "pear"];

//! Зауважте, що використання методу forEach не дозволяє 
// прямо вийти з циклу після знаходження першого підходящого 
// елемента. Тому ми використовуємо додаткову змінну result, 
// щоб зберегти перший підходящий елемент та перевіряти, чи 
// він вже був знайдений. forEach нічого не повертає, 
// а просто перебирає масив!

// function findEl(arr, callback) {
//   let result = null;

//   arr.forEach((el) => {
//     if (callback(el) && result === null) {
//       result = el;
//     }
//   });
//   return result;
// }
// function isEven(number) {
  //   if (number % 2 === 0) {
  //     return true;
  //   }
  //   return false;
//   return number % 2 === 0;
// }
// function statrWithO(str) {
  //   if (str.toLowerCase().startsWith("o")) {
  //     return true;
  //   }
  //   return false;
//   return str.toLowerCase().startsWith("o");
// }

// console.log(findEl(numbers, isEven));
// console.log(findEl(words, statrWithO));

