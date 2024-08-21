function constFunc1() {
  var func = [];

  for (var i = 0; i < 10; i++) {
    func[i] = function () {
      return i;
    };
  }

  return func;
}

var funcs = constFunc1();
console.log(funcs[5]());

function constFunc2() {
  var funcs = [];

  for (var i = 0; i < 10; i++) {
    (function (i) {
      funcs[i] = function () {
        return i;
      };
    })(i);
  }
  return funcs;
}

var funcs2 = constFunc2();
console.log(funcs2[5]());
