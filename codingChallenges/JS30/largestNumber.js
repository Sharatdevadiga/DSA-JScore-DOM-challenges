// FIND THE LARGEST USING RECURSION

let arr = [3, 78, 72, 8, 93];
// o/p 93

function largest(arr) {
  let largest = arr[0];

  // define the helper
  function helper(index) {
    // base case
    if (index >= arr.length) return;

    // logic
    if (arr[index] > largest) largest = arr[index];

    helper(index + 1);
  }

  helper(0);

  // return the result
  return largest;
}

console.log(largest(arr));
