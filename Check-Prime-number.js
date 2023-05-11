function isPrime(number) {
  // Handle special cases where the number is less than or equal to 1
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }

  // Iterate from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is evenly divisible, it's not prime
    if (number % i === 0) {
      return false; // Number has a factor other than 1 and itself
    }
  }

  // If the loop completes without finding divisors, the number is prime
  return true;
}

// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(16)); // Output: false

