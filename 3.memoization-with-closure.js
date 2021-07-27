// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes = (m) => {
  let memo = {};

  return (n) => {
    if (!memo[n]) memo[n] = n * m;

    return memo[n];
  };
};

const memoClosureTimes10 = memoizedClosureTimes(10);

console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
try {
  console.log("Task 3 calculated value:", memoClosureTimes10(9)); // calculated
  console.log("Task 3 cached value:", memoClosureTimes10(9)); // cached
} catch (e) {
  console.error("Task 3:", e);
}
