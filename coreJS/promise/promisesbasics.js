const promise = new Promise((resolve, reject) => {
  let randomVal = Math.random();

  if (randomVal >= 0.5) resolve(randomVal);
  else reject(randomVal);
});

promise
  .then((value) => console.log(value))
  .catch((err) => console.log(`Error !! ${err}`));

//   RACE , ALL
const promise1 = new Promise((resolve) =>
  resolve("promise 1 resloved immediately")
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("promise 2 resolved after 1 sec"), 1000)
);
const promise3 = new Promise((reject) =>
  reject("reomise 3 rejected immediately")
);

Promise.race([promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
Promise.all([promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.race([promise3, promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
Promise.all([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
