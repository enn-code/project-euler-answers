/*

Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

// Function to compareDigits (originalNum)
// Break digits into an array of chars
// Select in reverse order (for i = len(array); i > 0; i -= 1 ) { ... }
// Put sortedArray into string and compare

// Convert to string
var palindrome = '9009';

// Initialise comparison variable

// Function that converts the number to a string and compares the digits to its reverse
function compareDigits(originalNum) {
  
  stringNum1 = String(originalNum);
  var stringNum2 = '';

  for (i = stringNum1.length - 1; i >= 0; i -= 1)  {
    stringNum2 += (stringNum1[i]);
  }
  
//  console.log(stringNum1+"\n");
//  console.log(stringNum2+"\n");

  if (stringNum1 == stringNum2){
    return true;
  }
  else {
    return false;
  }
}



// FIND LARGEST PALINDROME

// Highest result of multiples for two 3-digit numbers
// Multiply the highest
// Stay in range (100-999) x (100-999)

// Try for 2 digits first


var num1 = 999;
var num2 = 999;

// HOW DO WE KNOW WHAT THE HIGHEST RESULT IS?
// - Could try all numbers and see the result
// The numbers can be:
//    doubles: 99, triples: 999, quadruple: 9999, pentuple: 99999
//    repeated patterns: 10101
//    others

// TRY the top 100 for fixed number
// Try the 2-digit number case

var isPalindromic = [];

function findPalindrome() {
  for (var i = num1; i >= 1; i -= 1) {

    product = i * num2;
    console.log(product);

    isPalindromic = compareDigits(product);

    if (isPalindromic == true){
      console.log(i +" is palindromic");
      break;
    }
    
    else {

      console.log(i +" is not palindromic");
    }

  }
}

var palindromes = [];

function findBigPalindrome() {
  for (var i = num1; i >= 1; i -= 1) {
    for (var j = num2; j >=1; j-= 1) {

      product = i * j;

      isPalindromic = compareDigits(product);

      if (isPalindromic == true){
//        console.log("num1 = " + i + " num2 = " + j +" is palindromic");
        palindromes.push(product);
      }
      
      else {

//        console.log("num1 = " + i + " num2 = " + j +" is not palindromic");
      }
    }
  }
}

findBigPalindrome();
console.log(Math.max.apply(Math, palindromes));