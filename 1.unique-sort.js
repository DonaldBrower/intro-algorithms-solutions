//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

function uniqSort(arr) {
  const breadcrumbs = {};

  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      breadcrumbs[arr[i]] = true;
    }
  }

  arr = Object.keys(breadcrumbs);

  return arr.sort((a, b) => a - b);
}

console.log(uniqSort([1, 5, 2, 1])); // => [2,3,4]
