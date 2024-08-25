const set = new Set(["a", "b", "c"]);

// set.add
const set2 = new Set([...set, "d"]);

// set.delete
const set3 = new Set([...set].filter((el) => el !== "d"));

// set.clear
const set4 = new Set();
