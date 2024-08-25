const a = [1, 2, 3, 4];

// push
const b = a.concat(75, 6, 7);

// pop
const c = a.slice(0, -1);

// unshift
const d = [5, 6].concat(a);

// shift
const e = a.slice(1);

// sort
const f = a.slice().sort((a, b) => a - b);

// reverse
const g = a.slice().reverse();
