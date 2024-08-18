// CALLBACKS IN FETCHING DATA
const URL = `https://jsonplaceholder.typicode.com/todos/1`;

async function example(callback) {
  try {
    let res = await fetch(URL);
    let data = await res.json();
    callback(data);
  } catch (err) {
    console.log(err);
  }
}

function logdata(data) {
  console.log(data);
}

example(logdata);

// CALLBACKS IN TIMEOUTS
function delay(callback, data, time) {
  setTimeout(() => {
    callback(data);
  }, time);
}

let data = [1, 2, 3, 4, 5];
let callbackForDelay = function (data) {
  console.log(data);
};

delay(callbackForDelay, data, 3000);
