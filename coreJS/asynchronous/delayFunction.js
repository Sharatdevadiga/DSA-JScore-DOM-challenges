function delay(delayTime = 2000) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delayTime)
  );
}

async function testDelay() {
  console.log(`before delay : ${new Date().getTime()}`);
  await delay();
  console.log(`after delay : ${new Date().getTime()}`);
}

testDelay();
