/*
from the coins, find the most optimal combination of change to give back for the amount given. optimal meaning least number of coins.
*/

makeChange(60, [10, 25, 5, 5, 10, 10]);

function makeChange(amount, coins) {
  let amountDeclining = amount,
    returnedCoins = [];

  coins = coins.sort((a, b) => b - a);

  let i = 0;
  while (amountDeclining > 0) {
    if (
      (amountDeclining - coins[i]) % 5 === 0 &&
      (amountDeclining - coins[i]) / 5 >= 0
    ) {
      returnedCoins.push(coins[i]);
      amountDeclining = amountDeclining - coins[i];
    }
    i++;
  }

  console.log(returnedCoins);
  return returnedCoins;
}
