// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

const calcAge = birthYear => 2037 - birthYear;

console.log(1994);

const totalPizzaCalc = function (child, adult) {
  const childPieces = child * 2;
  const adultPieces = adult * 4;
  const totalPieces = childPieces + adultPieces;
  const totalPizza = `We need ${
    totalPieces / 4
  } pizzas for the party on Saturday.`;
  return totalPizza;
};

console.log(totalPizzaCalc(30, 15));

const ingredientPackSize = {
  butter: 250,
  darkChocolate: 100,
  plainFlour: 1500,
  cocoaPowder: 200,
  whiteChocolate: 200,
  milkChocolate: 200,
  eggs: 12,
  casterSugar: 1000,
};

const ingredientCost = {
  butter: 1.48,
  darkChocolate: 1,
  plainFlour: 0.6,
  cocoaPowder: 1.8,
  whiteChocolate: 1,
  milkChocolate: 1,
  eggs: 1.69,
  casterSugar: 1.6,
};

const brownieIngredients = {
  butter: 185,
  darkChocolate: 185,
  plainFlour: 85,
  cocoaPowder: 40,
  whiteChocolate: 50,
  milkChocolate: 50,
  eggs: 3,
  casterSugar: 275,
  browniesMade: 16,

  calcIngredients: function (portions, brownieOrder) {
    let result = {};
    result.butter = Math.round((this.butter / portions) * brownieOrder);
    result.darkChocolate = Math.round(
      (this.darkChocolate / portions) * brownieOrder
    );
    result.plainFlour = Math.round(
      (brownieIngredients.plainFlour / portions) * brownieOrder
    );
    result.cocoaPowder = Math.round(
      (brownieIngredients.cocoaPowder / portions) * brownieOrder
    );
    result.whiteChocolate = Math.round(
      (brownieIngredients.whiteChocolate / portions) * brownieOrder
    );
    result.milkChocolate = Math.round(
      (brownieIngredients.milkChocolate / portions) * brownieOrder
    );
    result.eggs = Math.round(
      (brownieIngredients.eggs / portions) * brownieOrder
    );
    result.casterSugar = Math.round(
      (brownieIngredients.casterSugar / portions) * brownieOrder
    );
    return result;
  },
};

const brownieOrder = 500;

const result = brownieIngredients.calcIngredients(16, brownieOrder);
console.log(result);

const cost = {
  butter: (result.butter / ingredientPackSize.butter) * ingredientCost.butter,
  darkChocolate:
    (result.darkChocolate / ingredientPackSize.darkChocolate) *
    ingredientCost.darkChocolate,
  plainFlour:
    (result.plainFlour / ingredientPackSize.plainFlour) *
    ingredientCost.plainFlour,
  cocoaPowder:
    (result.cocoaPowder / ingredientPackSize.cocoaPowder) *
    ingredientCost.cocoaPowder,
  whiteChocolate:
    (result.whiteChocolate / ingredientPackSize.whiteChocolate) *
    ingredientCost.whiteChocolate,
  milkChocolate:
    (result.milkChocolate / ingredientPackSize.milkChocolate) *
    ingredientCost.milkChocolate,
  eggs: (result.eggs / ingredientPackSize.eggs) * ingredientCost.eggs,
  casterSugar:
    (result.casterSugar / ingredientPackSize.casterSugar) *
    ingredientCost.casterSugar,
};

console.log(cost);

const ingredientsCost = Object.values(cost);

console.log(ingredientsCost);

const calcSum = function (ingredientsCost) {
  let sum = 0;
  for (let i = 0; i < ingredientsCost.length; i++) {
    sum += ingredientsCost[i];
  }
  return sum;
};

const totalCost = calcSum(ingredientsCost);
// const arr_2Total = (calcSum(arr_2));
// const arr_Total = arr_1Total + arr_2Total;

// console.log(calcSum(arr_1) + " " + calcSum(arr_2));
console.log(
  `The total of cost of the ingredients is £${totalCost} to make ${brownieOrder} brownie(s). We need the following ingredients to make the brownies: ${Object.keys(
    result
  )} in these amounts: ${Object.values(result)}`
);

//THIS FUNCTION IS NOT WORKING
// function consoleLogScript(brownieOrder) {
//   if (brownieOrder >= 1) {
//     console.log(
//       `The total of cost of the ingredients is £${totalCost} to make ${brownieOrder} brownies.`
//     );
//     return consoleLogScript;
//   } else if ((brownieOrder = 0))
//     console.log(
//       `The total of cost of the ingredients is £${totalCost} to make ${brownieOrder} brownie.`
//     );
//   return consoleLogScript;
// }

// consoleLogScript();

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// calcTempAmplitude([3, 7, 4, 1, 8]);
// calcTempAmplitude(temperatures);

// PROBLEM 2:
//Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO!  Just merge two arrays

//2) Breaking into sub-problems
// - How to merge 2 arrays

//Merge 2 arrays in Javascript
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsisus',
//     // C) FIX
//     //   value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };

//   // B) FIND THE BUG
//   console.log(measurement);
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY BUG
// console.log(measureKelvin());

// // Using a debugger

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

//Coding Challenge #1

//Identify

//Sub-problems
//How to log ... to console log
//Where to find temperature in degrees symbol
//How to isolate individual values from array and concat with text
//How to convert number array to string
//How to find position in array

//Research
// const array1 = [5, 12, 8, 130, 44];

// const found = array1.findIndex(element => element);
// const days = found + 1;

// console.log(days);

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - Strings need to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C...${data1[1]}°C...${data1[2]}°C...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log(str);
};
printForecast(data1);

//Exercise 5) Avantutor - Thinking about selecting every second letter in string and replacing it

let str = 'javascript';
let outputStr = str.split('');
for (let i = 0; i < outputStr.length; i++) {
  if ((i + 1) % 2 == 0) outputStr[i] = 'Z';
}

console.log('Before: ' + str + '\nAfter: ' + outputStr.join(''));

// Exercise 6) Avantutor
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str2 = 'hello';
let answer = '';

if (str2.includes('y')) {
  answer = 'yes';
} else {
  answer = 'no';
}

console.log(answer);

cl