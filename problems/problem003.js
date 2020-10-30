// https://projecteuler.net/problem=3
/*
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
*/

const { isPrime } = require('../helper/math.js')

const solution = (num) => {
  let highestFactor = 0
  const sqRoot = Math.floor(Math.sqrt(num))
  for (let i = 3; i < sqRoot; i = i + 2) {
    if (isPrime(i)) {
      if (num % i === 0) {
        highestFactor = i
      }
    }
  }
  return highestFactor
}

module.exports = {
  problem003 (num, memo) {
    return solution(num, memo)
  }
}
