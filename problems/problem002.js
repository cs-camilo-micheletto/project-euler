// https://projecteuler.net/problem=2
/*  
    Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
        1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
const { fibonacci } = require('../helper/fibonacci.js');

const solution = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        let result = fibonacci(i);
        if(result > 4000000) 
            return sum;
        if (result % 2 == 0)
        sum += result;
    }
    return sum;
};


module.exports = {
    problem002(num) {
        return solution(num);
    }
}