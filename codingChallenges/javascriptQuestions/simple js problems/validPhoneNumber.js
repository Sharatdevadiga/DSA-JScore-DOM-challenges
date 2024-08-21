function ValidPhoone(number) {
  let regex = /^[6-9]+[0-9]{9}$/;
  return regex.test(number);
}

console.log(ValidPhoone(8978778865));
console.log(ValidPhoone(678778865));
