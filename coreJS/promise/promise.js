// CREATING A PROMISE
function promisify(data) {
  return new Promise((resolve, reject) => {
    if (data.length >= 10) resolve(data);
    else reject(`length of the dats is less than 10 ${data}`);
  });
}

let data1 = [1, 2, 3, 4, 5];
let data2 = [2, 3, 55, 3, 3, 2, 4, , 54, , 2, 2, 4, 5, 3, , 2, 2, 2];

// CONSUMING THE PROMISE USING THEN AND CATCH
promisify(data1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//   CONSUMING PROMISE USING ASYNC AWAIT
async function getData() {
  try {
    const res2 = await promisify(data2);
    console.log(res2);
  } catch (err) {
    console.log(err);
  }
}

getData();
