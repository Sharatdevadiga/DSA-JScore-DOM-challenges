const URL = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData(url) {
  let data = null;
  let error = null;

  async function fetcher(url) {
    try {
      const res = await fetch(url);
      data = await res.json();
    } catch (err) {
      error = err.message;
    }
  }
  await fetcher(url);
  return [data, error];
}

fetchData(URL)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
