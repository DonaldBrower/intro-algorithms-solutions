// TASK: Implement binary search.
/*
binary search

1. take array index half way between 0 and array.length-1

2.   if the item at this index is a match, then return the array index and the element

3.   if the item at this index is less than the item, then recusivly run this function while taking the array halfway between the current half way index+1 and array.length-1

4. i  if the item at this index is greater than the item, then recurse with halfway between current halfway
*/

function binarySearch(list, item) {
  function search(min, max) {
    if (min > max) return -1;

    const halfway = Math.floor((min + max) / 2);
    if (list[halfway] === item) return halfway;

    if (list[halfway] > item) return search(min, halfway - 1);
    if (list[halfway] < item) return search(halfway + 1, max);
  }
  1;
  return search(0, list.length - 1);
}

function binarySearchIter(list, item) {
  let min = 0,
    max = list.length - 1;
  // result;

  while (min <= max) {
    let guess = Math.floor((min + max) / 2);
    if (list[guess] === item) {
      return guess;
    } else {
      if (list[guess] > item) max = guess - 1;
      if (list[guess] < item) min = guess + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, -1], 1));
console.log(binarySearchIter([2, 6, 7, 90, 103, 200, 5000, 1000000000], 5000));
