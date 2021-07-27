/* 
const mergeSort = (list) => {
  console.log(list);

  const rightSide = [],
    leftSide = [];
  const whatShouldThisFunctionBe = (list, min, max) => {
    if (list.length === 1) {
      console.log("true");
    } else {

      console.log(min);
      console.log(max);

      let halfway = Math.floor((min + max) / 2);

      rightSide.push(list.slice(halfway, max));
      leftSide.push(list.slice(min, halfway));

      whatShouldThisFunctionBe(list.slice(halfway, list.length));
      whatShouldThisFunctionBe(list.slice(min, halfway));

    }
  };

  whatShouldThisFunctionBe(list, 0, list.length - 1);
};

console.log(mergeSort([1, 2, 3, 6, 9, 1000, 20000]));
*/

const mergeSort = (list) => {
  if (list.length === 1) {
    return list;
  }

  // prettier-ignore
  const left = list.slice(0, (list.length / 2) + 1);
  // prettier-ignore
  const right = list.slice((list.length / 2) + 1, list.length);

  // console.log(left);
  console.log(right);

  return mergeSort(right);

  // return mergeSort(list.slice(0, list.length / 2 + 1));
  // divide the list into two arrays

  // divide each of the two arrays into two more arrays.

  // keep dividing each array into two arrays until the array is of length 1. we call this the sorted list.

  // we compare the two arrays of length one against each other. the winner is pushed to  the main sorted array

  // this new sorted array is compared to the next array.
};

let list = [5, 6, 2, 0, 9, 100, -11, 4000, 2];
//  list = [5, 6, 2, 0, 9],  [100, -11, 4000, 2];
//  list = [5, 6, 2], [0, 9],  [100, -11], [4000, 2];
//  list = [5, 6], [2], [0],  [9],  [100], [-11], [4000], [2];
//  list = [5], [6], [2], [0], [9], [100], [-11], [4000], [2];
//  list = [5], [6], [0], [2], [9], [100], [-11], [4000], [2];
console.log(mergeSort(list));
