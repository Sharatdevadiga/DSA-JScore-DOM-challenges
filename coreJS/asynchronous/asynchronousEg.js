function fetchSimulation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomVal = Math.random();
      const data = ["hello", "world"];
      if (randomVal > 0.3) resolve(data);
      else reject("400");
    }, 1000);
  });
}

async function fetchData() {
  try {
    const data = await fetchSimulation();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData()
  .then(console.log("Resolved and logged data"))
  .catch("error fetching data");
