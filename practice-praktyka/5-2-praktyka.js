//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].
// const numbers = [1, 2, 3, 4, 5];

// const square = (arr) => arr.map((number) => number ** 2);
// console.log(square(numbers))

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const objects = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [4, 5, 6] },
//     { id: 3, values: [7, 8, 9] },
// ];

// const faltArray = (arr) => arr.flatMap(el => el.values)
// console.log(faltArray(objects));

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const checkAge = array => array.some(el => el.age < 20);

// console.log(checkAge(people));

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const checkEvenArray = array => array.every(el => el % 2 === 0);

// console.log(checkEvenArray(numbers));

//TODO:=========task-05=================
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const oddNumberInArr = arr => arr.find(number => number % 2 !== 0);

// console.log(oddNumberInArr(numbers));

//TODO:=========task-06=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const arr = [1, 2, 3, 4, 5];
// const getNumber = arr => arr.find(number => number > 3);

// console.log(getNumber(arr));

//TODO:=========task-07=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbers = [4, 200, 5, 1, 3];

// const sortedArray = arr => [...arr].sort();

// const sortedArray = arr => arr.toSorted((a, b) => b - a);

// console.log(sortedArray(numbers));

// console.log(numbers);

//TODO:===============task-08===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const string = ["banana", "orange", "apple", "pear"]

// const sortedArray = arr => arr.toSorted((a, b) => a.localeCompare(b) );

// console.log(sortedArray(string))

//TODO:===============task-09===============================
//  Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
//   ];

//   const sortedArray = arr => arr.toSorted((a, b) => a.age-b.age);

//   console.log(sortedArray(users))

// TODO:=========task-10=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//         { name: 'John', age: 27 },
//         { name: 'Jane', age: 31 },
//         { name: 'Bob', age: 19 },
//       ]

//       const getAge = array => array.filter(el => el.age > 20);

//       console.log(getAge(users))

//TODO:=========task-11=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод  для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5]

// const sum = (arr) => arr.reduce((acc, num) => acc + num, 0)
// console.log(sum(numbers));

// const sum = (arr) => arr.reduce((acc, num) => {
//     acc.push(num * 2)
//     return acc
// }, [])

// console.log(sum(numbers));

// const sum = (arr) => arr.map(el => el * 2);
// console.log(sum(numbers));

//TODO:=========task-12=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.
// const arr = [1, 2, 3, 4, 5];

// const averageValue = (array) =>
//   array.reduce((acc, num, _, arr) => acc + num / arr.length, 0);

// console.log(averageValue(arr));

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const fn = (arr) => arr.filter((el) => el.age > 20).map((el) => el.name);

// console.log(fn(users));