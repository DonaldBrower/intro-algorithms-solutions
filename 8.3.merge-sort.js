console.log(mergeSort([1, 0, -9, 100000]));

function mergeSort(list) {
  if (list.length < 2) return list;

  const left = list.slice(0, list.length / 2);
  const right = list.slice(list.length / 2, list.length);

  const leftMerged = mergeSort(left);
  const rightMerged = mergeSort(right);

  return merge(leftMerged, rightMerged);
}

function merge(left, right) {
  const mergedArr = [];

  while (left.length !== 0 || right.length !== 0) {
    if (right.length === 0 || left[0] < right[0]) {
      mergedArr.push(left.shift());
    } else if (left.length === 0 || right[0] < left[0]) {
      mergedArr.push(right.shift());
    }
  }

  return mergedArr;
}
