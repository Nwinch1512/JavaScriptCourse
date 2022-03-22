/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName);

let year;
console.log(year);
console.log(typeof year);
*/

//Math operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

2 ** 3 means 2 to the power of 3 = 2* 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);
*/
//Assignment operators
/*let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; //decreases value by 1
x--;
console.log(x);
*/
//Comparison operators
/*console.log(ageJonas > ageSarah); // <, >, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
/*const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + " a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`String
multiple
lines`);

console.log('String with \n\
multiple \n\
lines');
*/
/*
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗")
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(String(23));

//type coercion
console.log("I am" + 23 + "years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, " ", undefined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log("7 is also a cool number")
} else if (favourite === 9) {
    console.log("9 is also a cool number!")
} else {
    console.log("Number is not 23 or 7")
}

if (favourite !== 23) console.log("Why not 23?");
*/

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive....");

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive....");
}

//Swith statement
const day = "Sunday";

// switch (day) {
//     case "Monday": // day === "Monday"
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "Tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "Wednesday":
//     case "Thursday":
//         console.log("Write code examples");
//         break;
//     case "Friday":
//         console.log("Record videos");
//     case "Saturday":
//     case "Sunday":
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

// if (day === "Monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "Tuesday") {
//     console.log("Prepare theory videos");
// } else if (day === "Wednesday" || day === "Thursday") {
//     console.log("Write code examples");
// } else if (day === "Friday") {
//     console.log("Record videos");
// } else if (day === "Saturday" || day === "Sunday") {
//     console.log("Enjoy the weekend :D");
// } else {
//     console.log("Not a valid day");
// }

const age = 23;
// age >= 18 ? console.log("I like to drink wine 🍷") :
//     console.log("I like to drink water 🧊");

const drink = age >= 18 ? "wine 🍷" : "water 🧊";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine 🍷";
} else {
    drink2 = "water 🧊";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 🧊"}`)