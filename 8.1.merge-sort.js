/**
 * merge sort:
 *
 * a function that takes a list
 *  divides that list in half
 *  divides each half in half and so on until:
 *    each half is of length 1
 *
 *  once the two halves are each length one:
 *    take the 0th index of each half
 *    push the lower of the two to a new output array
 *    remove the lower from the the array it belonged too.
 *    repeat 3.1 until each array is empty.
 *
 *  this merged array replaces the two halves in the function call that created it, which is indeed one half in a function call up the stack, and so on, until the last two halves, the biggest halves, are merges according to step 3.
 */

// function mergeSort(list) {
//   function getLeft(list) {
//     console.log(list);
//     // prettier-ignore
//     return getLeft(list.slice(0, (list.length / 2) + 1));
//   }

//   function getRight(list) {
//     console.log(list);

//     // prettier-ignore
//     return getRight(list.slice((list.length / 2) + 1, list.length));
//   }
//   console.log(getRight(list));
//   console.log(getLeft(list));
// }

// console.log(mergeSort([-5, -9, 55, 66, 30, 2, 1, 99, 5400000000]));

const mergeSorted = (r, l) => {
  const outputArray = [];

  // prettier-ignore
  while (r.length && l.length) {
    if (r.length === 0 && l.length !== 0) {
      console.log("in if 2")
      outputArray.push(l.shift())
      break;
    }
    if (l.length === 0 && r.length !== 0) {
      console.log("in if 3")
      outputArray.push(r.shift())
      break;
    }

    if (l[0] <= r[0]) {
      console.log("in f");
      outputArray.push(l.shift());
    } else {
      console.log("in f");
      outputArray.push(r.shift());
    }
  }

  return outputArray;
};

console.log(mergeSorted([1, 4, 5], [1, 2, 100, 111]));
