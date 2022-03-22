'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = ` 
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);

  // Display balance

  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

// Event handlers

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    // Display movements

    // Update UI
    updateUI(currentAccount);

    console.log('LOGIN');
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hid UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE METHOD
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// //SPLICE METHOD - changes original array.  Deletes part of array.  Splice (start position, number of elements to be removed).  If you use a minus number, it will delete elements from end of array.  If you don't specify number of elements to be removed, splic will just return elements from the specified start position.
// console.log(arr.splice(2));
// // returns c, d, e
// arr.splice(-1);
// console.log(arr);
// // returns a, b, c, d
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE METHOD - mutates(or changes) the original array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT - does not mutate original array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN - takes elements from array and joins them with a specified character
// console.log(letters.join('-'));

// AT METHOD - gives value at array position specified
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-2));

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited £${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew £${Math.abs(movement)}`);
//   }
// }

// console.log('---- FOREACH ----');
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited £${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew £${Math.abs(movement)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: funcion(400)
// ...

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, arr) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// Coding challenge

// const dogsJulia1 = [3, 5, 2, 12, 7];
// const dogsKate1 = [4, 1, 15, 8, 3];
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (arr1, arr2) {
//   const JuliaCorrected = arr1.slice(1, -2);
//   const totalDogs = JuliaCorrected.concat(arr2);
//   totalDogs.forEach(function (age, i) {
//     const type = age >= 3 ? 'an adult' : 'still a puppy';
//     if (type === 'an adult') {
//       console.log(`Dog ${i + 1} is ${type}, and is ${age} years old`);
//     } else {
//       console.log(`Dog ${i + 1} is ${type} 🐶`);
//     }
//   });
// };

// checkDogs(dogsJulia1, dogsKate1);

// Coding Challenge #2

const dogAges = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(dogAge =>
//     dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
//   );
//   const adults = humanAges.filter(humanAge => humanAge >= 18);
//   console.log(adults);
//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return average;
// let averageHumanAgeAdult = 0;
// for (const dog of adults) average += dog;
// average /= adults.length;
// };

// const interest = movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * 1.2) / 100)
//     .filter((int, i, arr) => {
//       console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge(dogAges);
const avg2 = calcAverageHumanAge(dogAges2);
console.log(avg1, avg2);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} $${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescriptions);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(movements);

// // accumulator is like a SNOWBALL, adds all elements
// // const balance = movements.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);

// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value of movements array - can use reduce to do this

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// console.log(max);

// // PIPELINE
// console.log(movements);
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// // FIND METHOD - returns first element within array to meet condition.  Does not create a new array (in the way that the filter method does)

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// // for (const account of accounts) {
// //   if (account.owner === 'Jessica Davis') console.log(account);
// // }

// // EQUALITY
// console.log(movements);
// console.log(movements.includes(-130));

// // SOME: CONDITION
// console.log(movements.some(mov => mov === -130));
// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
// console.log(arrDeep.flat(2));

// // flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // flatMap
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// // SORT METHOD mutates original array
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // Numbers
// console.log(movements);

// // Sort ascending
// // return <0, A, B (keep order)
// // return >0, B, A (switch order)
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });

// movements.sort((a, b) => a - b);
// console.log(movements);

// // Sort descending
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });

// movements.sort((a, b) => b - a);

// console.log(movements);

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);

console.log(z);

// const diceRoll = Array.from(
//   { length: 100 },
//   i => Math.trunc(Math.random() * 100) + 1
// );
// console.log(diceRoll);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});

const movementsUI2 = [...document.querySelectorAll('.movements__value')];

// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000));
console.log(numDeposits1000);

let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalise = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalise(word)))
    .join(' ');
  return capitalise(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Coding Challenge

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

console.log(dogs.owners);

// 2.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
const amount =
  dogSarah.curFood >= dogSarah.recommendedFood * 1.1
    ? 'too much'
    : 'too little';

// const amount = if (dogSarah.curFood > dogSarah.recommendedFood * 1.1 ) {'too much'}
// else if(dogSarah.curFood >= dogSarah.recommendedFood * 0.9 && dogSarah.curFood <= dogSarah.recommendedFood * 1.1) {'right amount'}
// else {'too little'};

console.log(`Sarah's dog is eating ${amount}`);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood >= dog.recommendedFood * 1.1)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

// 4.

// ownersEatTooMuch.forEach(owner => {
//   const string = owner.join('and');
//   console.log(string);
// });

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much.`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little.`);

// console.log(
//   dogs.find(dog =>
//     dog.curFood >= recommendedFood * 0.9 && dog.curFood <= recommendedFood * 1.1?)
// );

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood >= dog.recommendedFood * 0.9 &&
  dog.curFood <= dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSorted);
