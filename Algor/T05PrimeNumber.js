// Prime numbers are natural numbers greater than 1 that have no positive divisors other than 1 and themselves. In other words, a prime number is a number that cannot be formed by multiplying two smaller natural numbers.
// Properties of Prime Numbers:

// 1- Divisibility: A prime number has exactly two distinct positive divisors: 1 and itself.
// 2- Uniqueness: Every natural number greater than 1 is either a prime or can be factored into primes (this is the Fundamental Theorem of Arithmetic).

// Examples of Prime Numbers:
// The first few prime numbers are:

// 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,…

// Interesting Facts:

// 2 is the only even prime number. All other even numbers can be divided by 2, so they are not prime.
// Prime numbers become less frequent as numbers get larger, but there are infinitely many prime numbers. This was proven by Euclid around 300 BC.

// Applications of Prime Numbers:

// 1. Cryptography: Prime numbers are fundamental in various encryption algorithms, including RSA encryption, which is widely used for secure data transmission.
// 2. Computer Algorithms: Many algorithms in computer science use prime numbers for hashing, random number generation, and other purposes.
// 3. Number Theory: Prime numbers are central to many problems and theorems in number theory, a branch of pure mathematics.

function generatePrimeNumberInNum(n) {
  console.log(`All primeNumbers In ${n}`);
  const primes = [];
  for (let j = 2; j <= n; j++) {
    // for (let k = 2; k < j; k++) {
    //   if (j % k == 0) {
    //     prime = false;
    //     break;
    //   }
    // }
    // if (prime) {
    //   primes.push(j);
    // }
    if (isPrimNumber(j)) {
      primes.push(j);
    }
  }
  return primes;
}
console.log(generatePrimeNumberInNum(100));

function isPrimNumber(n) {
  for (let k = 2; k < n; k++) {
    if (n % k == 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrimNumber(7));

// Check the number is prime nuymber or not

function firstNprimeNumbers(n) {
  console.log(`First ${n} primeNumbers`);

  let count = 0;
  let num = 2;
  const primes = [];
  while (count < n) {
    if (isPrimNumber(num)) {
      primes.push(num);
      count++;
    }
    num++;
  }
  return primes;
}

console.log(firstNprimeNumbers(10));
