function memoize(cb) {
  const memo = {};
  function memoizedCb(n) {
    if (!(n in memo)) {
      memo[n] = cb(n);
    }

    return memo[n];
  }
  return memoizedCb;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(7));
