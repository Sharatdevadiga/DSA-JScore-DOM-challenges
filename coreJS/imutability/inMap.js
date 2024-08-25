const map = new Map([
  ["k1", "v1"],
  ["k2", "v2"],
  ["k3", "v3"],
]);

// map.set
const map2 = new Map([...map, ["k4", "v4"]]);

// map.delete()
const map3 = new Map([...map].filter((el) => el[1] !== "v1"));

// map.clear
const map4 = new Map();
