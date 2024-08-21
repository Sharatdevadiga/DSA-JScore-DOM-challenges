// MERGE TWO SORTED ARRAYS AND ONLY INCLUDE THE COMMON ELEMENTS
function mergeSorted(arr1, arr2) {
  let intersection = new Set();
  let arr1Set = new Set(arr1);

  for (let num of arr2) {
    if (arr1Set.has(num)) {
      intersection.add(num);
    }
  }

  return Array.from(intersection);
}

console.log(mergeSorted([7, 3, 5, 4, 5, 6, 7], [4, 5, 6, 7, 4, 5, 6, 7]));
