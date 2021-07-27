// console.log(merge([1, 2, 3], [0.4, 0.5, 0.6]));
console.log(mergeSort([0.4, 11, 1, 44, 0.6, 0.9]));

function mergeSort(list) {
  if (list.length < 2) return list;

  const left = list.slice(0, list.length / 2);
  const right = list.slice(list.length / 2, list.length);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

function merge(l, r) {
  const res = [];
  while (l.length !== 0 || r.length !== 0) {
    if (l.length === 0 || r[0] < l[0]) {
      res.push(r.shift());
    } else if (r.length === 0 || l[0] < r[0]) {
      res.push(l.shift());
    }
  }
  return res;
}

// list.slice(list.length / 2, list.length);
