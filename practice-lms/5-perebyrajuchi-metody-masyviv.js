//=================CALL-BACK-FUNCTION=========

//===========TASK-1=================================?

// Функція makePizza повертає рядок з повідомленням клієнту.
// Доповни код таким чином, щоб у змінній result був результат 
// виконання функції makePizza, а у змінній pointer було 
// посилання на функцію makePizza.

//Вирішення:

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   const result = null;
//   const pointer = null;
  
//==================================================

//===========TASK-2=================================?

// Функція makeMessage приймає один параметр ім'я піци, 
// що доставляється, pizzaName та повертає рядок з 
// повідомленням клієнту.
// Доповни функцію makeMessage таким чином, щоб вона 
// очікувала другим параметром (параметр callback) колбек-функцію
//  і повертала результат її виклику. Функції deliverPizza або 
//  makePizza будуть передаватися як колбек для makeMessage 
//  і очікувати аргументом ім'я готової піци, що доставляється.

//Вирішення:

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName) {
//     return;
//   }
  
//==================================================


//===========TASK-3=================================?

// Функція makePizza має два параметри: pizzaName - ім'я 
// піци та callback - колбек-функцію. Під час виконання, 
// makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.
// Доповни другий виклик функції makePizza(pizzaName, callback),
//  передавши другим аргументом інлайн колбек-функцію 
//  eatPizza(pizzaName). Колбек eatPizza логує рядок 
//  "Eating pizza <назва піци>", де <назва піци> це 
//  значення параметра pizzaName.

//Вирішення:

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}`);
//   });
  
//   makePizza("Ultracheese");

//==================================================

//===========TASK-4=================================?

// Функція calculateTotalPrice(orderedItems) приймає
// один параметр orderedItems - масив чисел, і розраховує
// загальну суму його елементів, яка зберігається у 
// змінній totalPrice і повертається як результат роботи функції.
// Доповни виклик метода forEach, передавши йому колбек-функцію,
// яка на кожній ітерації додає до totalPrice значення 
// поточного елемента масива orderedItems.

//Вирішення:

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
  
//     orderedItems.forEach();
  
//     return totalPrice;
//   }
  
//==================================================

//===========TASK-5=================================?

// Функція filterArray(numbers, value) приймає першим
// параметром масив чисел numbers і повертає новий масив,
// в якому будуть тільки ті елементи оригінального масиву,
// які більші за значення другого параметра числа value.
// Якщо таких значень не буде знайдено, функція 
// повертає порожній масив.
// Виконай рефакторинг функції таким чином, щоб замісmь 
// циклу for, вона використовувала метод forEach.

//Вирішення:

// function filterArray(numbers, value) {}

//==================================================

//=================Strilochni-funkcji=========

//===========TASK-6=================================

// Виконай рефакторинг функції calculateTotalPrice() 
// таким чином, щоб вона була оголошена як стрілочна.

//Вирішення:

// calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   }
//   calculateTotalPrice(5, 100);
//   calculateTotalPrice(8, 60);
//   calculateTotalPrice(3, 400);

//==================================================

//===========TASK-7=================================

// Виконай рефакторинг функції calculateTotalPrice() таким
//  чином, щоб вона використовувала неявне повернення.

//Вирішення:

// const calculateTotalPrice = (quantity, pricePerItem) =>  quantity * pricePerItem;

//==================================================


//===========TASK-8=================================

// Виконай рефакторинг функції calculateTotalPrice(orderedItems), 
// замінивши її оголошення на стрілочну функцію. 
// Також заміни колбек-функцію, передану в метод forEach(), 
// на стрілочну функцію.

//Вирішення:

// calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach((item) => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
  
//==================================================

//===========TASK-9=================================

// Заміни оголошення функції filterArray() і колбек 
// для методу forEach() на стрілочні функції.

//Вирішення:

// filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
//   }
  
//==================================================

//==============MAP&FLAPMAP=========================

//===========TASK-10=================================?

// Функція changeEven(numbers, value) приймає масив чисел 
// numbers і оновлює кожен елемент, значення якого - це парне число,
//  додаючи до нього значення параметра value, який точно є числом.
// Виконай рефакторинг функції таким чином, щоб вона стала чистою
//  - не змінювала масив чисел numbers, а створювала, наповнювала 
//  і повертала новий масив з оновленими значеннями.

//Вирішення:

//==================================================


//===========TASK-11=================================?
// В масиві planets зберігаються назви планет. Доповни 
// код таким чином, щоб у змінній planetsLengths вийшов масив,
//  що буде складатися з довжин назв кожної планети з масиву planets.
//   Обов'язково використовуй метод map().

//Вирішення:

//==================================================

//===========TASK-12=================================

// Масив books містить колекцію об'єктів книг, кожен з яких
// містить властивості title, author, rating. Використовуючи 
// метод map(), зроби так, щоб у змінній titles вийшов масив 
// назв усіх книг (властивість title) з масиву books.

//Вирішення:

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const titles = books.map(book => book.title);
//   console.log(titles);
  
//==================================================

//===========TASK-13=================================

// Масив books містить колекцію об'єктів книг, кожен з яких
// містить властивість genres, значенням якої є масив жанрів. 
// Використовуючи метод flatMap(), зроби так, щоб у змінній 
// genres вийшов масив жанрів усіх книг (властивість genres) з масиву books.

//Вирішення:
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
  
//   const genres = books.flatMap(book => book.genres);
//   console.log (genres);
  
//==================================================

// ===========TASK-14=================================?

// Доповни стрілочну функцію getUserEmails(users) таким чином, 
// щоб вона повертала масив поштових адрес користувачів 
// (властивість email) з масиву об'єктів в параметрі users.

//Вирішення:

// const getUserEmails = (users) => {};

// const users = 
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];


// const emails = users.map( user => user.email);
// console.log (emails);

//==================================================

//========METODY-FILTER-FIND=========================

//===========TASK-15=================================


// Доповни код так, щоб у змінній evenNumbers був масив 
// парних чисел із масиву numbers, а у змінній oddNumbers — 
// масив непарних. Обов'язково використовуй метод filter().

//Вирішення:

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number%2==0);
// const oddNumbers = numbers.filter(number => number%2!==0);

//==================================================

//===========TASK-16=================================

// Масив books містить колекцію об'єктів книг, кожен з яких 
// містить властивості title, author, rating. Використовуючи 
// метод filter(), доповни код таким чином, щоб:
// У змінній topRatedBooks утворився масив книг, рейтинг яких 
// (властивість rating) більший за або дорівнює значенню 
// змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних 
// автором з ім'ям (властивість author), яке збігається зі 
// значенням у змінній AUTHOR.

//Вирішення:

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
  
//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   console.log(topRatedBooks);
//   const booksByAuthor = books.filter(book => book.author === AUTHOR);
//   console.log(booksByAuthor);

//==================================================

//===========TASK-17=================================?

// Доповни функцію getUsersWithEyeColor(users, color) таким 
// чином, щоб вона повертала масив користувачів, у яких колір 
// очей (властивість eyeColor) збігається зі значенням 
// другого параметра color.

//Вирішення:

// const getUsersWithEyeColor = (users, color) => {};

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// let colorEye = "";
// colorEye = "green";
// colorEye = "blue";
// colorEye = "brown";
// const usersEyeColor = users.filter(user => user.eyeColor === colorEye);
// console.log(usersEyeColor);

//==================================================

// ===========TASK-18=================================?

// Доповни код функції getUsersWithAge(users, minAge, maxAge), 
// щоб повернути масив користувачів, вік (збережений у властивості age) 
// яких потрапляє у заданий діапазон від minAge до maxAge.
// Поради:
// Використай метод filter() для створення нового масиву, в якому 
// зберігаються тільки елементи, які задовольняють певну умову.
// Використай оператори >= (більше або дорівнює) та <= (менше або 
// дорівнює), щоб відфільтрувати користувачів, вік яких точно 
// потрапляє у діапазон між мінімальним minAge та максимальним 
// maxAge значеннями.

//Вирішення:

// const getUsersWithAge = (users, minAge, maxAge) => {};

//==================================================

// ===========TASK-19=================================?

// Масив books містить колекцію об'єктів книг, кожен з 
// яких містить властивості title, author, rating.

// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої 
// (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої 
// (властивість author) збігається зі значенням змінної AUTHOR.

//Вирішення:

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   ];
//   const BOOK_TITLE = "The Dream of a Ridiculous Man";
//   const AUTHOR = "Robert Sheckley";
  
//   const bookWithTitle = books.find((title) => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find((athor) => book.author === AUTHOR);

//==================================================

//===========TASK-20=================================?

// Доповни функцію getUserWithEmail(users, email) таким чином, 
// щоб вона повертала об'єкт користувача, пошта якого 
// (властивість email) збігається зі значенням другого 
// параметра email.

//Вирішення:

// const getUserWithEmail = (users, email) => {};

//==================================================


//======METODY-EVERY-SOME-REDUCE=====================

//===========TASK-21=================================?

// Доповни функцію isEveryUserActive(users) таким чином, 
// щоб вона перевіряла, чи всі користувачі зараз активні 
// (властивість isActive) і повертала true або false.

//Вирішення:


//==================================================

//===========TASK-22=================================?

// Доповни функцію isAnyUserActive(users) таким чином, 
// щоб вона перевіряла наявність хоча б одного активного 
// користувача (властивість isActive) і повертала true або false.

//Вирішення:


//==================================================

//===========TASK-23=================================?

// Ігровому сервісу необхідний функціонал підрахунку середнього 
// часу, проведеного в іграх, одним гравцем. У змінній 
// players зберігається об'єкт, де ключ це ім'я гравця, 
// а значення - його ігровий час. У змінній playtimes 
// зберігається масив значень об'єкта players, тобто масив 
// ігрового часу усіх гравців. Значенням змінної 
// averagePlayTime буде середній час, проведений 
// одним гравцем в іграх.

// Доповни код таким чином, щоб у змінній totalPlayTime 
// вийшов загальний ігровий час з масиву playtimes. 
// Використовуй метод reduce().


//Вирішення:
//==================================================


//===========TASK-24=================================?

// Нашому сервісу необхідно розрахувати середній час, 
// проведений в одній грі для кожного гравця, і 
// отримати загальну суму цих значень часу у змінній 
// totalAveragePlaytimePerGame. Розрахувати час для 
// кожного з гравців можна, розділивши його час 
// (властивість playtime) на кількість ігор 
// (властивість gamesPlayed).

// Поради:

// Використовуй метод reduce() для ітерації по масиву 
// players та обчислення загальної суми середнього часу на одну гру.
// Усередині колбек функції reduce(), поділи playtime 
// гравця на gamesPlayed, щоб отримати середній час, 
// витрачений на одну гру кожним гравцем.
// Накопичуй результат у змінній acc і повертай його 
// в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим 
// значенням 0, щоб уникнути отримання NaN при виконанні 
// обчислень.
// В результаті змінна totalAveragePlaytimePerGame 
// міститиме загальну суму середнього часу на одну гру для всіх гравців.

//Вирішення:

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
  
//   const totalAveragePlaytimePerGame = players;
//==================================================

//===========TASK-25=================================

// Доповни функцію calculateTotalBalance(users) таким чином, 
// щоб вона рахувала і повертала суму всіх коштів 
// (властивість balance), які зберігають користувачі з масиву users.

//Вирішення:

// const calculateTotalBalance = (users) => {};

//==================================================

//=======METOD-TO-SORTED=============================

//===========TASK-26=================================?

// Змінна releaseDates - це масив чисел, років видання книг. 
// Змінна authors - це масив рядків, авторів книг.

// Доповни код таким чином, щоб у змінній ascendingReleaseDates 
// вийшла копія масиву releaseDates, відсортована за зростанням, 
// а у змінній alphabeticalAuthors - копія масиву імен авторів 
// authors, відсортована за алфавітом. Використовуй метод toSorted()

//Вирішення:

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates;

// const alphabeticalAuthors = authors;

//==================================================

//===========TASK-27=================================?

// Змінна releaseDates - це масив чисел, років видання книг.

// Онлайн бібліотеці необхідно відображати книги, відсортовані 
// за датою видання, за їх зростанням або спаданням. Доповни код таким чином, 
// щоб у змінній ascendingReleaseDates вийшла копія масиву 
// releaseDates, відсортована за зростанням, а у змінній 
// descendingReleaseDates - копія, відсортована за спаданням.

//Вирішення:

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates;

// const descendingReleaseDates = releaseDates;

//==================================================

//===========TASK-28=================================?

// Змінна authors - це масив рядків, авторів книг.
// Онлайн бібліотеці необхідно відображати книги, відсортовані 
// за автором в алфавітному і в зворотному алфавітному порядку. 
// Доповни код таким чином, щоб у змінній authorsInAlphabetOrder 
// вийшла копія масиву authors, відсортована за алфавітом, 
// а у змінній authorsInReversedOrder - копія, відсортована 
// у зворотному алфавітному порядку.

//Вирішення:

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
  
//   const authorsInAlphabetOrder = authors;
  
//   const authorsInReversedOrder = authors;

//==================================================

//===========TASK-29=================================?

// Масив books містить масив об'єктів книг, кожен з яких 
// містить властивості title, author, rating.
// Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, 
// відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, 
// відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, 
// відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, 
// відсортований за спаданням рейтингу.

//Вирішення:

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       rating: 7.94,
//     },
//     {
//       title: "Enemy of God",
//       author: "Bernard Cornwell",
//       rating: 8.67,
//     },
//   ];
  
//   const sortedByAuthorName = books;
  
//   const sortedByReversedAuthorName = books;
  
//   const sortedByAscendingRating = books;
  
//   const sortedByDescentingRating = books;

//==================================================

//===========TASK-30=================================?

// Масив books містить масив об'єктів книг, кожен з яких 
// містить властивості title, author, rating.
// Доповни код таким чином, щоб у змінній names вийшов масив 
// імен авторів в алфавітному порядку, рейтинг книг яких 
// більший за значення змінної MIN_BOOK_RATING. 
// Використовуй ланцюжок методів.

//Вирішення:

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
  
//   const names = books;

//==================================================



//===========TASK-31=================================?


//Вирішення:

//==================================================



