function containsDuplicate(arr) {
  let arrMap = {};

  for (let num of arr) {
    if (arrMap[num]) return true;
    arrMap[num] = true;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 3]));
