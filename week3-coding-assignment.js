let  array = [3, 9, 23, 64, 2, 8, 28, 93];// this the beginning array
console.log("This is the starting array: " + array);

let newAge = array.pop() - array.shift();//array.pop takes the last element and 
//array.shift takes the first element and the first is being subtracted from the last

console.log("This is an array of ages, the first and the last age from the starting array have been subtracted: " + array);

console.log("This is the age of the first element subtracted from the last element: " + newAge);

array.push(newAge);// the new age variable holds the value of the first element subtracted
//from the last element

console.log("This is the new array with the new age added at the end: " + array);

array.push(77);//push adds a new element to the end of the array
console.log("This is the new array with another number added to the end: " + array);

newAge = array.pop() - array.shift();
console.log("This is the array tested , 77 - 9: " + newAge); //testing the newAge variable

let sum = 0; //declaring the variable sum and assigning the value 0
for(let i = 0; i < array.length; i++){//declaring and assigning the value of index, 
  //and setting the index to less than the length of the number of elements in the array
  // and incrementing the index
 sum += array[i]; // saying sum equals the values of each element in the array added
 //together
};


let avgAge = sum / array.length;//the sum of each element in the array divided by 
//number of elements in the array
console.log("This is the average age of the age array: " + avgAge);

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];//starting array
console.log("This is array of names: " + names);
let numberOfLetters = 0;//setting the variable avgNumberOfLetters to 0 to use later
for( let i = 0; i < names.length; i++){//index is 0, index is less than the length
  //elements in the array, index incremented
  numberOfLetters += names[i].length;// adds the length of each element to the 
  //variable numberOfLetters
};
 console.log("Average number of letters: ", numberOfLetters/names.length);
// //divides the number of letters in each element by the number of elements for the average
//let letters = names.join(" "); --- this is what I want to do only dynamically
//console.log(letters);


let spaces = "";
for (let i = 0; i < names.length; i++){
  spaces += names[i] + " ";
  //takes the string ('spaces') and assigns and adds the each name (index)
  //plus a space
}console.log("This is the new string with spaces: " + spaces);
console.log("You access the last element of an array with pop.");
console.log("You access the first element of an array with shift.")

//New Array nameLengths

let nameLengths = [];
for (let i = 0; i < names.length; i++){
  nameLengths += names[i].length + ",";
}console.log("This is the sum of letters in each name in an array seperated by commas: " + nameLengths.split());
//In the array this problem I made a new array of the title nameLengths 
//and wrote a for loop in which i is the index of the length of elements
//in the array. I set nameLengths equal to the sum of letters in each 
//element while assigning the value of them as well and concatenated them
//with a comma. The split method makes the string of numbers an array
//again. 
let nameSum = 0;
for (let i = 0; i < names.length; i++){
 nameSum += names[i].length;
}console.log("This is the sum of all the letters in the names array: " + nameSum);

//Functions
function manyWords(word, n){
  return word.repeat(n);
}
console.log("This is a function which repeats a word n number of times: " +(manyWords("Hello", 3)));

function fullName(firstName, lastName){
  return firstName + " " + lastName;
};
console.log("This is the result of the fullName function: " + (fullName("Jana","Taylor")));


let numbers = [99, 5];
let numberSum = 0;
function arrayOfNumbers(){
  for(let i = 0; i < numbers.length; i++){
    numberSum += numbers[i];
    if (numberSum < 100){
      return true; 
    } else {
      return false;
    }
  }
}console.log("This is the result of the funcion if the sum of an array of numbers is greater than 100: " + (arrayOfNumbers(numbers)));


let numbersArray = [21,45,59,68];
let numbersArraySum = 0;
function arrayOfNumbers2(){
  for(let i = 0; i < numbersArray.length; i++){
    numbersArraySum += numbersArray[i]; 
  }return numbersArraySum / numbersArray.length;
}console.log("This is the average of numbers in the array titled numbersArray: " + (arrayOfNumbers2(numbersArray)));

let firstArray = [21,33,95,101];
let secondArray = [78,96,65,34];
let firstSum = 0;
let secondSum = 0;
let firstAvg = 0;
let secondAvg= 0;
function averagesOfTwoArraysCompared(firstArray, secondArray){
  for (let i = 0; i < firstArray.length; i++){
    firstSum += firstArray[i];
  } firstAvg = firstSum /firstArray.length;
  console.log("First average: " + firstAvg);
  for (let i = 0; i < secondArray.length; i++){
    secondSum += secondArray[i];
  } secondAvg = secondSum / secondArray.length;
  console.log("Second average: " + secondAvg);
  if (firstAvg > secondAvg){
    return true;
  } else {
    return false;
  }};
  
  
  console.log("Is the average of the first array greater than the average of the second array?:  " + averagesOfTwoArraysCompared(firstArray,secondArray));

const willBuyDrink = (isHotOutside, moneyInPocket) => {
  if((isHotOutside == true) && (moneyInPocket > 10.50)){
  return true;
  } else {
    return false;
  }
};
console.log("Will I be buying a drink if it is hot outside and I have $15.00 in my pocket?: " + willBuyDrink(true, 15));

let counter = 0;
let arrayOfOneThroughTwelve = [1,2,3,4,5,6,7,8,9,10,11,12];
const math12TimesTable = (input) => {
  for (let i = 0; i < arrayOfOneThroughTwelve.length; i++ ){
    let problem = input * arrayOfOneThroughTwelve[i];
    let visibleProblem = prompt("What is the answer?: " +  
    input + " X " + arrayOfOneThroughTwelve[i]);
    console.count(alert);
    if (problem == visibleProblem){
      alert("You got it!");
      counter++;
    } else if (problem !== visibleProblem && counter < 12){
      alert ("Try again");
    } else {
      break; 
    }

  }
  };

console.log(math12TimesTable(12));




