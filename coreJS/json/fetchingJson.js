let data = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data.slice(0, 3)))
  .catch((err) => console.log(err));
