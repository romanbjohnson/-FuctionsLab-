/*
Roman Johnson 
Javascript Functions Lab 




Requirements
Define and code 5 of the 9 functions below.
Be sure to number each function with a comment above it.
After each function, call it at least once and console.logthe results.
For example, here's the first function, our gift to you: */


// 1.
const maxOfTwoNumbers = (numOne, numTwo) => {
  if (numOne > numTwo) {
    console.log(numOne, "is larger term")
  } else {
    console.log(numTwo, "is larger term")
  }
}
// maxOfTwoNumbers(12, 22)
// -----> 22
// ----------------------------------------------------------------
 

/* //2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed. */



const maxOfThreeNumbers = (a, b, c) => {
  let firstMax = maxOfTwoNumbers(a, b)
  if (firstMax > c) {
    console.log(`${firstMax} is largest term`,)
  } else {
    // console.log(`${c} is largest term`,)
  }
}
// maxOfThreeNumbers(12, 44, 91)
// --->91
// ----------------------------------------------------------------











/* 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.*/


const isCharAVowel = (char) => {
  let vowels = ["a", "e", "i", "o", "u"]
  if (vowels.includes(char)) {
    console.log("Issa Vowel")
  } else if (char === "y") {
    console.log("Sometimes. ")
  } else {
    console.log("Not a Vowel")
  }
}

// isCharAVowel('o')
// isCharAVowel('x')
// ----------------------------------------------------------------


/* 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.*/



const sumArray = (arr) => {
  let totalNumber = 0
  arr.forEach((itemNArray) => {
    totalNumber += itemNArray
  })
}
// sumArray([2, 4, 6, 8, 9])
// ----------------------------------------------------------------


/* 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.*/



const multiplyArray = (arr) => {
  let totalNumber = 0
  arr.forEach((itemNArray) => {
    totalNumber *= itemNArray
  })
}
// multiplyArray([2, 4, 6, 8, 9])
// ----------------------------------------------------------------



/* 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.*/


const numsArgs = (...arguments) => {
  console.log(arguments.length)
}

// numsArgs(2,3,44,4,5,1,23,9)
// -----------------------------------------------------------------------------


/* 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".*/

seStr = (str) => {
  let choppedString = str.split('')
  let reversedWrd = choppedString.reverse().join('')
  console.log(reversedWrd)
}
// reverseStr("mesopotamia")
// -----------------------------------------------------------------------------


/* 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.*/


const longestNArray = (array) => {
  let currentLongestWord = "" 
  let biggestCharLength = 0
  
  array.forEach((wrd)=>{
    if(wrd.length > biggestCharLength){
      currentLongestWord = wrd
       biggestCharLength = wrd.length
    }
  })
      console.log(`Longest Word is ${biggestCharLength} characters long and the word is ${currentLongestWord}`)
}
let testArray = ["Jordan", "AdelHaliim", "Cassandra","Susie"]
// longestNArray(testArray)
// -----------------------------------------------------------------------------


/* 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].*/

const strLongerThan = (strArr,num) => {
  let passingStrings =[]
  
  strArr.forEach((we)=>{
    if(we.length > num){
      passingStrings.push(we)
    }
  })
    console.log(passingStrings,": are longer than",num)
}
let demoArr = ["Apple","Existence","Prestiduos","Corn","My"]
// strLongerThan(demoArr,4)