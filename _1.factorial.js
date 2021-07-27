function factorial(n) {
  let res = 1;

  for (let i = 1; i <= n; i++) {
    res *= i;
  }

  return res;
}

console.log(factorial(5));

////

function recFactorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * recFactorial(n - 1);
  }
}

console.log(recFactorial(5));

////

function logNumbersRecursivly(start, end) {
  const log = (n) => {
    if (n <= end) {
      console.log(n);
      log(++n);
    }
  };
  log(start);
}

logNumbersRecursivly(1, 5);

///

function joinElements2(array, joinString) {
  const join = (i, result) => {
    result += joinString + array[i];

    if (i >= array.length - 1) {
      return result;
    } else {
      return join(i + 1, result);
    }
  };
  return join(0, "");
}

console.log(joinElements2(["beez", "buxx"], ".."));

// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) {
  let result = "";
  array.forEach((el, i) => {
    result += i === array.length - 1 ? el : `${el}${joinString}`;
  });
  return result;
}

console.log(joinElements(["s", "cr", "t cod", " :) :)"], "e"));

////////////////////

function recFactorial2(n) {
  if (n === 0) return 1;
  return n * recFactorial2(n - 1);
}

function memoize(cb) {
  memo = {};

  return (n) => {
    if (!memo[n]) memo[n] = cb(n);
    return memo[n];
  };
}

const memoRecFactorial = memoize(recFactorial2);

console.log(memoRecFactorial(5));
console.log(memoRecFactorial(6));
