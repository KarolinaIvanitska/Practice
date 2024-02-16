/* 
- filter
- reduce
- sort - мутуючий
- some
- every
- splice - мутуючий
- pop - мутуючий
- push
*/

// =======================================

/**
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

/* const numbers = [5, 10, 15, 20, 25, 30, 35];

const filteredNumbers = numbers.filter(el => {
  return el % 2 === 0;
});

console.log(filteredNumbers); */

/**
 * ---------------------------
 */

// const allCars = [
//     {
//       make: 'Honda',
//       model: 'CR-V',
//       type: 'suv',
//       amount: 14,
//       price: 24045,
//       onSale: true,
//     },
//     {
//       make: 'Honda',
//       model: 'Accord',
//       type: 'sedan',
//       amount: 2,
//       price: 22455,
//       onSale: true,
//     },
//     {
//       make: 'Mazda',
//       model: 'Mazda 6',
//       type: 'sedan',
//       amount: 8,
//       price: 24195,
//       onSale: false,
//     },
//     {
//       make: 'Mazda',
//       model: 'CX-9',
//       type: 'suv',
//       amount: 7,
//       price: 31520,
//       onSale: true,
//     },
//     {
//       make: 'Toyota',
//       model: '4Runner',
//       type: 'suv',
//       amount: 19,
//       price: 34210,
//       onSale: false,
//     },
//     {
//       make: 'Toyota',
//       model: 'Sequoia',
//       type: 'suv',
//       amount: 16,
//       price: 45560,
//       onSale: false,
//     },
//     {
//       make: 'Toyota',
//       model: 'Tacoma',
//       type: 'truck',
//       amount: 4,
//       price: 24320,
//       onSale: true,
//     },
//     {
//       make: 'Ford',
//       model: 'F-150',
//       type: 'truck',
//       amount: 11,
//       price: 27110,
//       onSale: true,
//     },
//     {
//       make: 'Ford',
//       model: 'Fusion',
//       type: 'sedan',
//       amount: 13,
//       price: 22120,
//       onSale: true,
//     },
//     {
//       make: 'Ford',
//       model: 'Explorer',
//       type: 'suv',
//       amount: 6,
//       price: 31660,
//       onSale: false,
//     },
//   ];
  
  /**
   * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
   * значення параметра threshold.
   */
  
//   const filterByPrice = (cars, threshold) => {
//     const filteredCars = cars.filter(car => car.price < threshold);
  
//     return filteredCars;
//   };
  
  // console.table(filterByPrice(allCars, 30000));
  // console.table(filterByPrice(allCars, 25000));
  
  /**
   * Нехай функція getCarsWithDiscount повертає масив автомобілів
   * властивість onSale яких true.
   */
  
  /* const getCarsWithDiscount = cars => {
    const filteredArr = cars.filter(car => car.onSale);
    return filteredArr;
  };
  
  console.table(getCarsWithDiscount(allCars)); */
  
  /**
   * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
   * зі значенням параметра type.
   */
  
  /* const getCarsWithType = (cars, type) => {
    return cars.filter(car => car.type === type);
  };
  
  console.table(getCarsWithType(allCars, 'suv'));
  console.table(getCarsWithType(allCars, 'sedan'));
   */
  
  // ====================
  /* const arr = [1, 3, 4, 0, 1, 0, 2, 0, 4, 5, 6, 0, 6, 0];
  
  const filteredArr = arr.filter(num => num);
  
  console.log(filteredArr); */

  /**
 * Метод find
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає перший елемент, що задовольняє умові або undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// const res1 = numbers.find(num => num % 7 === 0);

/**
 * -----------------------------
 */
// const allCars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//   { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//   { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//   { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//   { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// ];

/**
 * Шукаємо машину за моделлю
 */
// const getCarByModel = (cars, model) => {
//   return cars.find(car => car.model === model);
// };

// console.log(getCarByModel(allCars, 'F-150'));
// console.log(getCarByModel(allCars, 'CX-9'));
// console.log(getCarByModel(allCars, 'Cayenne'));

/**
 * Шукаємо машину за типом кузова
 */
// const getCarByType = (cars, type) => {
//   return cars.find(car => {
//     return car.type === type;
//   });
// };

// console.log(getCarByType(allCars, 'sedan'));
// console.log(getCarByType(allCars, 'truck'));
// console.log(getCarByType(allCars, 'tank'));


/* const numbers = [1, 2, 3, 4, 5, 6, 0, 87, 8, 9, 9];

const res1 = numbers.find(num => num > 10); // 87
const res2 = numbers.filter(num => num > 10); // [87]
const res3 = numbers.every(num => num > 0); // false
const res4 = numbers.some(num => num > 10); // true

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
 */
// =====================================
// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
//   ];
  
  /**
   * Метод every
   *
   * - Поелементно перебирає оригінальний масив
   * - Повертає true якщо всі елементи масиву задовольняють умову
   */
  const isAllOnline = players.every(player => player.online);
  console.log('isAllOnline: ', isAllOnline);
  
  /**
   * Метод some
   *
   * - Поелементно перебирає оригінальний масив
   * - Повертає true якщо хоча б один елемент масиву задовольняє умову
   */
//   const isAnyOnline = players.some(p => p.online);
//   console.log('isAnyOnline: ', isAnyOnline);
  
//   const anyHardcorePlayers = players;
  // console.log('anyHardcorePlayers: ', anyHardcorePlayers);


  /**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */
// =======================================

/* const numbers = [2, 6, 3, 7];

const sum = numbers.reduce((acc, elem, idx, arr) => {}, 0);

console.log(sum); */

// =======================================
/* const numbers = [5, 10, 15, 20, 25];
const total = numbers;
console.log(total); */

/**
 * Рахуємо загальну зарплату
 */

/* const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce((sum, el) => {
  return sum + el;
}, 1);

console.log(totalSalary); */

/**
 * Рахуємо загальну кількість годин
 */

/* const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce((acc, player) => {
  return acc + player.timePlayed;
}, 0);

console.log(totalTimePlayed); */

/**
 * Рахуємо загальну суму товарів кошика
 */

/* const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((acc, product) => {
  return acc + product.price * product.quantity;
}, 0);

console.log(totalAmount); */

//=============================
// const users = [
//     {
//       firstName: 'Alice',
//       lastName: 'Johnson',
//       age: 28,
//       email: 'alice@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Bob',
//       lastName: 'Smith',
//       age: 42,
//       email: 'bob@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Eva',
//       lastName: 'Williams',
//       age: 35,
//       email: 'eva@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'David',
//       lastName: 'Brown',
//       age: 22,
//       email: 'david@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Sophia',
//       lastName: 'Davis',
//       age: 29,
//       email: 'sophia@example.com',
//       isActive: false,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Michael',
//       lastName: 'Miller',
//       age: 50,
//       email: 'michael@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Olivia',
//       lastName: 'Wilson',
//       age: 19,
//       email: 'olivia@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Daniel',
//       lastName: 'Thompson',
//       age: 31,
//       email: 'daniel@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Ava',
//       lastName: 'Harris',
//       age: 27,
//       email: 'ava@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'James',
//       lastName: 'Jackson',
//       age: 38,
//       email: 'james@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Emma',
//       lastName: 'Taylor',
//       age: 23,
//       email: 'emma@example.com',
//       isActive: false,
//       gender: 'Female',
//     },
//     {
//       firstName: 'William',
//       lastName: 'Anderson',
//       age: 45,
//       email: 'william@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Mia',
//       lastName: 'Martin',
//       age: 29,
//       email: 'mia@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Joseph',
//       lastName: 'Clark',
//       age: 33,
//       email: 'joseph@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Charlotte',
//       lastName: 'Rodriguez',
//       age: 26,
//       email: 'charlotte@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'John',
//       lastName: 'Lopez',
//       age: 31,
//       email: 'john@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Amelia',
//       lastName: 'Lee',
//       age: 20,
//       email: 'amelia@example.com',
//       isActive: false,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Benjamin',
//       lastName: 'Gonzalez',
//       age: 40,
//       email: 'benjamin@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Chloe',
//       lastName: 'Hernandez',
//       age: 24,
//       email: 'chloe@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Daniel',
//       lastName: 'Young',
//       age: 37,
//       email: 'daniel@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Olivia',
//       lastName: 'Miller',
//       age: 38,
//       email: 'olivia@example.com',
//       isActive: false,
//       gender: 'Female',
//     },
//     {
//       firstName: 'James',
//       lastName: 'Jones',
//       age: 29,
//       email: 'james@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Sophia',
//       lastName: 'Davis',
//       age: 31,
//       email: 'sophia@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'William',
//       lastName: 'Wilson',
//       age: 52,
//       email: 'william@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Ava',
//       lastName: 'Taylor',
//       age: 19,
//       email: 'ava@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Michael',
//       lastName: 'Clark',
//       age: 40,
//       email: 'michael@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Emma',
//       lastName: 'Lee',
//       age: 27,
//       email: 'emma@example.com',
//       isActive: false,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Daniel',
//       lastName: 'Martinez',
//       age: 35,
//       email: 'daniel@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Isabella',
//       lastName: 'Hernandez',
//       age: 42,
//       email: 'isabella@example.com',
//       isActive: false,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Liam',
//       lastName: 'Garcia',
//       age: 26,
//       email: 'liam@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Mia',
//       lastName: 'Rodriguez',
//       age: 30,
//       email: 'mia@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Noah',
//       lastName: 'Lopez',
//       age: 24,
//       email: 'noah@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//   ];
  
  /* const filteredUsersByAge = users.reduce((acc, user) => {
    if (user.age > 40) {
      acc.push(user);
    }
  
    return acc;
  }, []);
  
  console.table(filteredUsersByAge); */




  /**
 * Метод toSorted / sort
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */
// ==========================================

/* const letters = ['b' , 'B', 'a', 'A'];
/* 
/* const result = lette rs.toSorted();
/*  
/* console.log(letters) ;
/* console.log(result); */

// ==========================================
/* const numbers = [1, 4, 2, 6];
// const numbers = [1, 2, 4, 6];

const newArr = numbers.toSorted((b, a) => {
  return a - b;
});

console.log(newArr); */
// ==========================================

/* 
const numbers = [1, 9, 6, 2, 3];

const sorted = numbers;
console.log('sorted ', sorted);

const letters = ['b', 'B', 'a', 'A'];
console.log('letters', letters); */

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

/* console.log(
  numbers.toSorted((curEl, nextEl) => {
    return nextEl - curEl;
  }),
);

const descSortedNumbers = numbers;
const ascSortedNumbers = numbers;
console.log('descSortedNumbers', descSortedNumbers);
console.log('ascSortedNumbers', ascSortedNumbers); */

/**
 * Сортування масиву об'єктів
 *
 */
/* 
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const sortedByBestPlayers = players.toSorted((a, b) => {
  return a.timePlayed - b.timePlayed;
});
console.table(sortedByBestPlayers); */

// const sortedByWorstPlayers = players;
// console.table(sortedByWorstPlayers);

// По первой букве имени
// const byName = players;
// console.table(byName);

// ==================
// const users = [
//     {
//       firstName: 'Olivia',
//       lastName: 'Wilson',
//       age: 19,
//       email: 'olivia@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Daniel',
//       lastName: 'Thompson',
//       age: 31,
//       email: 'daniel@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Ava',
//       lastName: 'Harris',
//       age: 27,
//       email: 'ava@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'James',
//       lastName: 'Jackson',
//       age: 38,
//       email: 'james@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Emma',
//       lastName: 'Taylor',
//       age: 23,
//       email: 'emma@example.com',
//       isActive: false,
//       gender: 'Female',
//     },
//     {
//       firstName: 'William',
//       lastName: 'Anderson',
//       age: 45,
//       email: 'william@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Mia',
//       lastName: 'Martin',
//       age: 29,
//       email: 'mia@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Joseph',
//       lastName: 'Clark',
//       age: 33,
//       email: 'joseph@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Charlotte',
//       lastName: 'Rodriguez',
//       age: 26,
//       email: 'charlotte@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'John',
//       lastName: 'Lopez',
//       age: 31,
//       email: 'john@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Amelia',
//       lastName: 'Lee',
//       age: 20,
//       email: 'amelia@example.com',
//       isActive: false,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Benjamin',
//       lastName: 'Gonzalez',
//       age: 40,
//       email: 'benjamin@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Chloe',
//       lastName: 'Hernandez',
//       age: 24,
//       email: 'chloe@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Daniel',
//       lastName: 'Young',
//       age: 37,
//       email: 'daniel@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//   ];
  
  /* const sortedUser = users.toSorted((a, b) => {
    return a.age - b.age;
  });
  
  console.table(sortedUser); */
  
  /* users.sort((user1, user2) => {
    return user1.isActive - user2.isActive;
  });
  
  console.table(users); */
  
  // ============================
  
//   users
//     .sort((user1, user2) => {
//       return user1.age - user2.age;
//     })
//     .sort((user1, user2) => {
//       return user1.lastName.localeCompare(user2.lastName);
//     })
//     .sort((user1, user2) => {
//       return user1.firstName.localeCompare(user2.firstName);
//     });
  
//   console.table(users);


/**
 * Ланцюжки методів
 */
/* 

const result = numbers
  .map(el => el ** 2)
  .filter(el => el % 5 === 0)
  .map(el => el.toString());

console.log(result); */

// ==============================================
/* 
const numbers = [1, 5, 15, 10, 3];

const greaterThenTwo = numbers.filter(el => el > 2);
console.log(greaterThenTwo);

const multByThree = greaterThenTwo.map(el => el / greaterThenTwo.length);
console.log(multByThree);

const sorted = multByThree.toSorted((a, b) => a - b);
console.log(sorted);

const sortedbyChaining = numbers
  .filter(el => el > 2)
  .map((el, i, arr) => el / arr.length)
  .toSorted((a, b) => a - b)
  .map((el, i, arr) => el * arr[0]);

console.log(sortedbyChaining); */

/**
 * -------------------------------------
 */
const allCars = [
    {
      make: 'Honda',
      model: 'CR-V',
      type: 'suv',
      amount: 14,
      price: 24045,
      onSale: true,
    },
    {
      make: 'Honda',
      model: 'Accord',
      type: 'sedan',
      amount: 2,
      price: 22455,
      onSale: true,
    },
    {
      make: 'Mazda',
      model: 'Mazda 6',
      type: 'sedan',
      amount: 8,
      price: 24195,
      onSale: false,
    },
    {
      make: 'Mazda',
      model: 'CX-9',
      type: 'suv',
      amount: 7,
      price: 31520,
      onSale: true,
    },
    {
      make: 'Toyota',
      model: '4Runner',
      type: 'suv',
      amount: 19,
      price: 34210,
      onSale: false,
    },
    {
      make: 'Toyota',
      model: 'Sequoia',
      type: 'suv',
      amount: 16,
      price: 45560,
      onSale: false,
    },
    {
      make: 'Toyota',
      model: 'Tacoma',
      type: 'truck',
      amount: 4,
      price: 24320,
      onSale: true,
    },
    {
      make: 'Ford',
      model: 'F-150',
      type: 'truck',
      amount: 11,
      price: 27110,
      onSale: true,
    },
    {
      make: 'Ford',
      model: 'Fusion',
      type: 'sedan',
      amount: 13,
      price: 22120,
      onSale: true,
    },
    {
      make: 'Ford',
      model: 'Explorer',
      type: 'suv',
      amount: 6,
      price: 31660,
      onSale: false,
    },
  ];
  
  /**
   * Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
   * але тільки тих, які зараз на розпродажі.
   */
  
  // console.table(allCars);
  
  // filter map
  /* const getModelsOnSale = cars => {
    return cars.filter(car => car.onSale).map(car => car.model);
  };
  
  console.table(getModelsOnSale(allCars)); */
  
  /**
   * Нехай функція getSortedCarsOnSale повертає масив автомобілів
   * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
   */
  /* const getSortedCarsOnSale = cars => {
    return cars
      .filter(car => car.onSale)
      .toSorted((a, b) => {
        return a.price - b.price;
      });
  };
  
  console.table(getSortedCarsOnSale(allCars));
   */
  
  // ================================
  
//   const users = [
//     {
//       firstName: 'Eva',
//       lastName: 'Williams',
//       age: 35,
//       email: 'eva@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'David',
//       lastName: 'Brown',
//       age: 22,
//       email: 'david@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Sophia',
//       lastName: 'Davis',
//       age: 29,
//       email: 'sophia@example.com',
//       isActive: false,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Michael',
//       lastName: 'Miller',
//       age: 50,
//       email: 'michael@example.com',
//       isActive: true,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Olivia',
//       lastName: 'Wilson',
//       age: 19,
//       email: 'olivia@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//     {
//       firstName: 'Daniel',
//       lastName: 'Thompson',
//       age: 31,
//       email: 'daniel@example.com',
//       isActive: false,
//       gender: 'Male',
//     },
//     {
//       firstName: 'Ava',
//       lastName: 'Harris',
//       age: 27,
//       email: 'ava@example.com',
//       isActive: true,
//       gender: 'Female',
//     },
//   ];
  
//   function task1() {
    // map filter
//     return users
//       .map(user => {
//         const copy = { ...user };
//         delete copy.firstName;
//         delete copy.lastName;
  
//         copy.fullName = `${user.firstName} ${user.lastName}`;
  
//         return copy;
//       })
//       .filter(user => user.age > 40)
//       .toSorted((a, b) => {
//         return a.fullName.localeCompare(b.fullName);
//       })
//       .map(user => {
//         return `<li>${user.fullName}</li>`;
//       })
//       .join('\n');
//   }
  
//   console.log(task1());