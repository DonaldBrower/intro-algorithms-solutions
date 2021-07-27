/*
- Take an unsorted array
- Take the first element of the array, and compare it to the next one.
- If the first element is greater than the next element, than the two are swapped
- Take the second element in the array, and compare it against the next
- If the second element is greater than the next, than the two are swapped
- So on and so forth until the final two elements in the array are compared and potentially swapped
- If during the pass from first element to last element any swaps were made than the list was not sorted
- If list was not sorted, than start again at the first element array.
- When a pass is made without making any swaps, the array is sorted
*/

console.log(bubbleSort([9, 6, 5, 4, 3, 2, 666, 3, 3, 4, 5, 5]));

function bubbleSort(list) {
  let i = 0,
    swapped,
    done = false;

  while (!done) {
    if (!list[i + 1]) {
      console.log(
        `We are at the last element of the array, and are free to do our check now`
      );
      if (!swapped) {
        done = true;
      } else {
        i = 0;
        swapped = false;
      }
    } else {
      if (list[i] > list[i + 1]) {
        let firstItemStore = list[i],
          secondItemStore = list[i + 1];
        list[i] = secondItemStore;
        list[i + 1] = firstItemStore;
        swapped = true;
      }
      i++;
    }
  }
  return list;
}
