export const add = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
};

export const subTract = (a, b) => a - b;
