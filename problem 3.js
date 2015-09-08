/*

Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

// Largest Prime Factor of 600851475143.

// Prime factor is a prime number that multiplies with another to form the total

// REMEMBER?
// How to find prime factors?
// Divide until you cannot divide cleanly
// Try every number up until the current

// for (all numbers up until current number) { 

//    if ( )



var prime = 600851475143;
var factors = [];

function findFactors(currNum) {

  // See if number < total divides into the total.
  for (var i = currNum - 1; i > 0; i -= 1) {


    // If number divides cleanly into the total, then add it to the list
    if (currNum % i == 0) {
      // Check if this is a prime first
      if (checkPrime(i) == true) {
        factors.push(i);
        console.log("answer + " + factors);
        break;
      }
    }
  }
  return factors;
}



function checkPrime(currNum) {

  for (var i = currNum-1; i > 1; i -= 1) {

    // If number divides cleanly into the total, then add it to the list
    // Because a prime will not divide cleanly
    if (currNum % i == 0) {
      console.log("false checkPrime " + " currNum: " + currNum + " i: " + i);
      return false;
    }
  }

    console.log(currNum);
    return true;
}

var factorsFound = findFactors(prime);
var primeFactors = [];


console.log(factorsFound);




// We want only the largest prime.
// Condition: We stop when we find the first prime number.
// 