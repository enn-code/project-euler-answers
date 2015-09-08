/* 

Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var x5 = 5;

var x3 = 3;

var sumOfMultiples = 0;

for (i = 1; i < 1000; i++) {
  if (i % x5 == 0) {
    sumOfMultiples += i;
    console.log(i);
  }
  else if (i % x3 == 0) {
    sumOfMultiples += i;
    console.log(i);
  }

}

console.log(sumOfMultiples);