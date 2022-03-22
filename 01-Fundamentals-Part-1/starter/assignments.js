/*
let country = "UK";
let continent = "Europe";
let population = 66700000;
console.log(country, continent, population);
*/

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

//const markWeight = 95;
//const markHeight = 1.88;
//const johnWeight = 85;
//const johnHeight = 1.76;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / (johnHeight * johnHeight);
// let markHigherBMI = (markBMI > johnBMI);
/*
console.log(markBMI, johnBMI);
console.log(markHigherBMI);
*/


// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`Mark's BMI (${markBMI}) is lower than John's (${johnBMI})`);
// }

//const dolphinsAverageScore = (96 + 108 + 89) / 3;
// const koalasAverageScore = (88 + 91 + 110) / 3;

// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log(`Dolphin's are the winner (${dolphinsAverageScore}) vs (${koalasAverageScore})!`);
// } else if (dolphinsAverageScore < koalasAverageScore) {
//     console.log(`Koala's are the winner (${koalasAverageScore}) vs (${dolphinsAverageScore}!`);
// } else {
//     console.log(`Dolphin's (${dolphinsAverageScore}) and Koala's (${koalasAverageScore} drew!`);
// }

//Bonus 1
// const dolphinsAverageScore = (97 + 112 + 101) / 3;
// const koalasAverageScore = (109 + 95 + 123) / 3;

// if (dolphinsAverageScore >= 100 && dolphinsAverageScore > koalasAverageScore) {
//     console.log(`Dolphin's are the winner (${dolphinsAverageScore}) vs (${koalasAverageScore})!`);
// } else if (koalasAverageScore >= 100 && dolphinsAverageScore < koalasAverageScore) {
//     console.log(`Koala's are the winner (${koalasAverageScore}) vs (${dolphinsAverageScore}!`);
// } else if (dolphinsAverageScore >= 100 && koalasAverageScore >= 100 && dolphinsAverageScore === koalasAverageScore) {
//     console.log(`Dolphin's (${dolphinsAverageScore}) and Koala's (${koalasAverageScore} drew!`);
// }

//Bonus 2
// const dolphinsAverageScore = (97 + 112 + 80) / 3;
// const koalasAverageScore = (109 + 95 + 50) / 3;

// if (dolphinsAverageScore >= 100 && dolphinsAverageScore > koalasAverageScore) {
//     console.log(`Dolphin's are the winner (${dolphinsAverageScore}) vs (${koalasAverageScore})!`);
// } else if (koalasAverageScore >= 100 && dolphinsAverageScore < koalasAverageScore) {
//     console.log(`Koala's are the winner (${koalasAverageScore}) vs (${dolphinsAverageScore}!`);
// } else if (dolphinsAverageScore >= 100 && koalasAverageScore >= 100 && dolphinsAverageScore === koalasAverageScore) {
//     console.log(`Dolphin's (${dolphinsAverageScore}) and Koala's (${koalasAverageScore} drew!`);
// } else {
//     console.log(`No one wins the trophy!`);
// }

// Coding Challenge #4
const bill = 430;
const tip = bill <= 50 || bill >= 300 ? 0.2 : 0.15;
console.log(`The bill was ${bill}, the tip was ${tip * bill}, and the total value was ${bill + (tip * bill)}`);

//Part 2: Coding Challenge #2
function calcTip(bill) {
    if (bill <= 50 || bill >= 300) {
        const tip = 0.2;
        console.log(`Please tip 20%`);
        return tip;
    } else if (bill > 50 || bill < 300) {
        const tip = 0.15;
        console.log(`Please tip 15%`);
        return tip;
    }
}

const tip = calcTip(100);