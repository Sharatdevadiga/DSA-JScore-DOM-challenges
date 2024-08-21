// CLOCK
function getTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  console.log(`${hours} : ${minutes} : ${seconds}`);
}

function displayTime(interval = 2000, duration = 10000) {
  const interValId = setInterval(() => {
    getTime();
  }, interval);

  setTimeout(() => {
    clearInterval(interValId);
  }, duration);
}

displayTime();

// COUNTER
function getCounter(initialVal = 0, totalCounts = 5) {
  let count = initialVal;
  let increments = 0;

  return function () {
    const intervalId = setInterval(() => {
      console.log(count++);
      increments++;
      if (increments === totalCounts) clearInterval(intervalId);
    }, 1000);
  };
}

const counter = getCounter();
counter();
