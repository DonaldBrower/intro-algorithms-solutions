// TASK: Implement linear search.

function linearSearch(list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) return i;
  }
}

console.log(linearSearch([2, 6, 7, 90, 103], 90));

/*
returns the first occurence of the item in the list, moving from left to right. could be implimented right to left.
*/
