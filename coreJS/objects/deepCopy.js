//SHALLOW COPY
const user1 = {
  name: "jhon",
  size: {
    height: "160 cm",
    weight: "65kg",
  },
};

const user2 = {};
Object.assign(user2, user1);

console.log(user2);
console.log(user2 === user1);
console.log(user2.size === user1.size);

// DEEP COPY
function deepCopy(obj) {
  // base Case
  if (obj !== null && typeof obj !== "object") {
    return obj;
  }

  // if the current obj is array
  if (Array.isArray(obj)) {
    let arrayCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrayCopy[i] = obj[i];
    }
    return arrayCopy;
  }

  // if the current obj is an obj
  let objCopy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepCopy(obj[key]);
    }
  }

  return objCopy;
}
const user3 = deepCopy(user1);
console.log(user3);
console.log(user3 === user1);
console.log(user3.size === user1.size);

const user4 = structuredClone(user1);
console.log(user4);
console.log(user4.size === user1.size);
