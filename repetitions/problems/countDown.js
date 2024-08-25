function countDown(start = 10) {
  let count = start;

  function recursiveCount(i) {
    if (i < 0) return;

    console.log(i);
    recursiveCount(--i);
  }

  recursiveCount(count);
}

countDown();
