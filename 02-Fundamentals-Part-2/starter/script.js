"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// //const interface = "Audio";
// //const private = 534;

// function logger() {
//     console.log("My name is Jonas");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }
// }
// //     

// yearsUntilRetirement(1991, "Jonas");
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// let calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);
// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}.`);
//         return checkWinner;
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}.`);
//         return checkWinner;
//     } else {
//         console.log(`No one wins 😥.`);
//         return checkWinner;
//     }
// }
// checkWinner(avgDolphins, avgKoalas);

// checkWinner(576, 111);

// // Test 2
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins, avgKoalas);
// checkWinner(avgDolphins, avgKoalas);

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// //array position starts at 0

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// //Gives you last element of an array
// console.log(friends[friends.length - 1]);

// //You can add elements to array using square brackets

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = ["Jonas", "Schmedtman", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[years.length - 1])];
// console.log(ages);

//Push method adds elements to end of array
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

//Unshift method adds elements to beginning of array
friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop(); //Last element of array
const popped = friends.pop();
console.log(popped); //Shows element that was removed
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf("Steven"));

//includes method returns true of false value as to whether element exists in an array (using strict equality, does not do type conversion)
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

//Part 2: Coding Challenge #2
// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         const tip = 0.15 * bill;
//         console.log(`Please tip £${tip}`);
//         return tip;
//     } else {
//         const tip = 0.2 * bill;
//         console.log(`Please tip £${tip}`);
//         return tip;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

// calcTip(100);
// console.log(bills);
// console.log(tips);
// console.log(total);

const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

// // const jonas = {
// //     firstName: "Jonas",
// //     lastName: "Schmedtmann",
// //     age: 2037 - 1991,
// //     job: "teacher",
// //     friends: ["Michael", "Peter", "Steven"]
// // };
// // console.log(jonas);
// // console.log(jonas.lastName);
// // const nameKey = "Name";
// // console.log(jonas["first" + nameKey]);

// // console.log(jonas."last" + nameKey)

// // //const interestedIn = prompt("What do you want to know about Jonas?  Choose between firstName, lastName, age, job and friends");
// // console.log(jonas[interestedIn]);

// // if (jonas[interestedIn]) {
// //     console.log(jonas[interestedIn]);
// // } else {
// //     console.log("Wrong request!  Choose between firstName, lastName, age, job and friends")
// // }

// // jonas.location = "Portugal";
// // jonas["twitter"] = "@jonasschmedtman";
// // console.log(jonas);

// //Challenge

// //"Jonas has 3 friends, and his best friend is called Michael"

// // console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

// // const jonas = {
// //     firstName: "Jonas",
// //     lastName: "Schmedtmann",
// //     birthYear: 1991,
// //     job: "teacher",
// //     friends: ["Michael", "Peter", "Steven"],
// //     hasDriversLicense: true,

// // calcAge: function (birthYear) {
// //     return 2037 - birthYear;
// // }

// //     calcAge: function () {
// //         console.log(this);
// //         return 2037 - this.birthYear;
// //     }
// // };

// // Challenge
// // "Jonas is a 46 year old teacher, and he has a/no driver's license"

// // const jonas = {
// //     firstName: "Jonas",
// //     lastName: "Schmedtmann",
// //     birthYear: 1991,
// //     job: "teacher",
// //     friends: ["Michael", "Peter", "Steven"],
// //     hasDriversLicense: false,

// //     calcAge: function () {
// //         this.age = 2037 - this.birthYear;
// //         return this.age;
// //     },

// //     getSummary: function () {
// //         return `${this.firstName} is a ${this.calcAge()} -year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
// //     }
// // };

// // console.log(jonas.calcAge());

// // console.log(jonas.age);
// // console.log(jonas.age);
// // console.log(jonas.age);


// // console.log(jonas.getSummary());

// // const mark = {
// //     firstName: "Mark",
// //     lastName: "Miller",
// //     mass: 78,
// //     height: 1.69,

// //     calcBMI: function () {
// //         this.BMI = this.mass / this.height ** 2;
// //         return this.BMI;
// //     }
// // };

// // const john = {
// //     firstName: "John",
// //     lastName: "Smith",
// //     mass: 92,
// //     height: 1.95,

// //     calcBMI: function () {
// //         this.BMI = this.mass / this.height ** 2;
// //         return this.BMI;
// //     }
// // };

// // console.log(mark.calcBMI());
// // console.log(john.calcBMI());


// // if (mark.BMI > john.BMI) {
// //     console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s (${john.BMI})!`);
// // } else if (john.BMI > mark.BMI) {
// //     console.log(`${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.BMI})!`);
// // }

// // //for loop keeps running while condition is TRUE
// // for (let rep = 1; rep <= 30; rep++) {
// //     console.log(`Lifting weights repitition ${rep} 🏋️‍♂️`);
// // }

// // const jonas = [
// //     "Jonas",
// //     "Schmedtmann",
// //     2037 - 1991,
// //     "teacher",
// //     ["Michael", "Peter", "Steven"],
// //     true
// // ];

// // const types = [];

// // // console.log(jonas[0])
// // // console.log(jonas[1])
// // // ...
// // // console.lgo(jonas[4])

// // for (let i = 0; i < jonas.length; i++) {
// //     //Reading from jonas array
// //     console.log(jonas[i], typeof jonas[i]);

// //     //Filling types array
// //     types.push(typeof jonas[i]);
// // }

// // console.log(types);

// // const years = [1991, 2007, 1969, 2020];
// // const ages = [];

// // for (let i = 0; i < years.length; i++) {
// //     ages.push(2037 - years[i]);
// // }

// // console.log(ages);

// // // continue and break
// // console.log('---ONLY STRINGS---')
// // for (let i = 0; i < jonas.length; i++) {
// //     if (typeof jonas[i] !== "string") continue;

// //     console.log(jonas[i], typeof jonas[i]);
// // }

// // console.log('---BREAK WITH NUMBER---')
// // for (let i = 0; i < jonas.length; i++) {
// //     if (typeof jonas[i] === "number") break;

// //     console.log(jonas[i], typeof jonas[i]);
// // }

const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

// 0, 1, ...., 4
// 4, 3, ...., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// }


// ///////////////////////////////////////
// // The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }


//     let dice = Math.trunc(Math.random() * 6) + 1;
//     console.log(dice);

//     while (dice !== 6) {
//         console.log(`You rolled a ${dice}`);
//         dice = Math.trunc(Math.random() * 6) + 1;
//         if (dice === 6) console.log(`Loop is about to end...`);
//     }

//     //Coding Challenge #4

//     const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//     const tips = []
//     const totals = []

//     const calcTip = function (bill) {
//         return bill >= 50 && bill <= 300 ? bill * 0.15 :
//             bill * 0.2;
//     }

//     for (let i = 0; i < bills.length; i++) {
//         const tip = calcTip(bills[i]);
//         tips.push(tip);
//         totals.push(tip + bills[i]);
//     }


//     console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;

// }

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

//Avantutor 10 javascript for loop exercises

//Exercise 1. Get the sum of two arrays…actually the sum of all their 
//elements.
// P.S. Each array includes only integer numbers. Output is a 
//number too.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];


// const calcSum = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;

// }

// const arr_1Total = (calcSum(arr_1));
// const arr_2Total = (calcSum(arr_2));
// const arr_Total = arr_1Total + arr_2Total;

// console.log(calcSum(arr_1) + " " + calcSum(arr_2));
// console.log(`The total of arr_1 is ${arr_1Total}.`);
// console.log(`The total of arr_2 is ${arr_2Total}.`);
// console.log(`The total of arr_1 and arr_2 is ${arr_Total}.`);

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--------Starting exercise ${ exercise } `);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${ exercise }: Lifting weight repetition ${ rep } 🏋️‍♀️`);
//     }
// }


// ///////////////////////////////////////
// // The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${ rep } 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${ rep } 🏋️‍♀️`);
//     rep++;
// }

//Exercise 2. Using a for loop print all even numbers up to and including n.
//Don’t include 0.

// let n1 = 22;
// for (n1 = 22; n1 > 0; n1--) {
//     if (n1 % 2 === 0) {
//         console.log(n1);
//     }
// }

// let n1 = 0;
// for (n1 = 0; n1 < 23; n1 += 2) {
//     console.log(n1);
// }

// //Exercise 3
// //Using a for loop output the elements in reverse order

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(i, arr[i]);
// }

//Exercise 4
//Given two s of integers. Add up each element in the same 
//position and create a new array containing the sum of each pair. 
//Assume both arrays are of the same length.
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let arr_3and4total = [];
// for (let i = 0; i <= arr_3.length; i++) {
// }

// let sum = 0;
// for (let i = 0; i < arr_3.length; i++) {
//     sum = arr_3[i] + arr_4[i];
// }

// console.log(i, sum[i]);

for (let i = 0; i < arr_3.length; i++) {
    arr_3and4total.push(arr_3[i] + arr_4[i]);
}

console.log(arr_3and4total);

//Exercise 5 - COME BACK TO LATER WHEN LEARNT STRING FUNCTIONS
//Given a string change the every second letter to an uppercase 
//‘Z’. Assume there are no space.

// let str1 = "javascript";
// let result = '';
// for (let i = 0; i <= str1.length; i++) {
//     if ((i + 1) % 2 == 0)
//         let result = str1.replace("z");
//     //result += str1[i];
//     //str1 = str1(i).replace("Z");
}

console.log(result);