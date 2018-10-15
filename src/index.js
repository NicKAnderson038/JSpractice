document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// let promiseToCleanTheRoom = new Promise((resolve, reject) => {
//   console.log('cleaning the room')
//   let isClean = false
//   if(isClean){
//     resolve('clean :)')
//   }else{
//     reject('not clean :(')
//   }
// })

let promiseToCleanTheRoom = VAL => {
  return new Promise((resolve, reject) => {
    console.log("cleaning the room");
    let isClean = VAL;
    if (isClean) {
      resolve("clean :)");
    } else {
      reject("not clean :(");
    }
  });
};
console.log(
  promiseToCleanTheRoom()
    .then(res => console.log(`room is ${res}`))
    .catch(err => console.log(err)),
  "MY TEST"
);

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

(async () => {
  console.log("start sleep");
  await sleep(1000);
  console.log("end sleep");
})();

//////////////////////////////////////////////////////////

let firstString = "Lets Flip This!";
let anotherString = "Test Why We do what we do!";
const flipString = str => {
  return str
    .split("")
    .reverse()
    .join("");
};
console.log(flipString(firstString));

function reverseString(str) {
  if (str === "")
    // This is the terminal case that will end the recursion
    return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString(anotherString));

///////////////////////////////////////////////

const obj1 = {
  a: 1,
  b: 2
};
const res1 = Object.values(obj1);
console.log(res1);

const obj2 = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
    console.log(this.b);
  }
};
console.log(obj2.getA().getB());

// [1,2].print()
// Array.prototype.print = funciton(){
//   let result = ''
//   for(let [i, elem] of this){
//     if(i === this.length){
//       result += elem
//     }else {
//       result += `${elem},`
//     }
//   }

//   console.log('TEST ', result)
// }

//////////////////////////////////////////
const abc = function(x) {
  this.x = x;
};
abc.prototype = {
  getX() {
    return this.x;
  }
};
const xyz = function(x, y) {
  this.y = y;
  abc.call(this, x);
  this.getX = () => {
    return this.x;
  };
  this.getY = () => {
    return this.y;
  };
};

const newXYZ = new xyz("x", "y");
console.log("First ", newXYZ.getX());
console.log("Second", newXYZ.getY());

//////////////////////////////////////////////
const objClone = {
  a: {
    b: {
      c: 1
    }
  }
};
const factory1 = obj => {
  return {
    ...obj
  };
};
console.log(factory1(objClone));

//////////////////////////////////////////////
const arrayABC = [1, 2, 5, 7, 9];
const arrayDEF = [2, 5, 7, 12, 100];
const c = [...new Set([...arrayABC, ...arrayDEF])];
console.log(c);

////////////////////////////////////////////////

const myScores = [
  { id: 1, score: 76 },
  { id: 1, score: 81 },
  { id: 1, score: 89 },
  { id: 2, score: 54 },
  { id: 1, score: 99 },
  { id: 2, score: 98 },
  { id: 1, score: 76 },
  { id: 2, score: 85 },
  { id: 2, score: 84 },
  { id: 1, score: 66 },
  { id: 2, score: 77 },
  { id: 2, score: 90 }
];

const averageScoreCalc = scores => {
  const averageScore = scores.reduce((acc, val, ind) => {
    if (val.id in acc) {
      acc[val.id].push(val.score);
    } else {
      acc[val.id] = [val.score];
    }
    return acc;
  }, {});

  for (let param in averageScore) {
    console.log(averageScore[param]);
    averageScore[param].sort((a, b) => b - a);
    averageScore[param] = averageScore[param].reduce((acc, val, index) => {
      if (index === averageScore[param].length - 1) {
        return acc / (averageScore[param].length - 1);
      } else {
        return acc + val;
      }
    });
  }
  return averageScore;
};
const myRes = averageScoreCalc(myScores);
console.log("AVERAGE SCORE: ", myRes);

//////////////////////////////////////////////////////////
const args = (...n) => {
  return n;
};
console.log(args({ name: "hello", face: "smile" }));
const returns = x => {
  const _name = x;
  return {
    name: _name.name
  };
};
const samply = { name: "Billy" };
const examp = returns(samply);
console.log(examp);
Object.freeze(); // No adding new properties & no changes to values
Object.seal(); // No adding new properties
Object.defineProperty(samply, "age", {
  value: 30,
  writable: false
}); // Creating a new property on 'samply' where the value is 30 and its not writable.
/**
 * Object.defineProperty only applies attributes to 1 property. The remaining parameters are uneffected.
 */

Math.max(); // minus (-) infinity is the starting location.
let bunchOfNums = [2, 4, 6, "2", 8, 10, "20", "100", 99, 6];
console.log(Math.max(...bunchOfNums));

////////////////////////////////////////////////////////

// const getFruit = async param => {
//   const fruits = {
//     pineapple: '🍍',
//     peach: '🍑',
//     strawberry: '🍓'
//   };

//   return await Promise.resolve(fruits[param]);
// };

// getFruit('peach').then(console.log);

// const whily = () => {
//   return Promise.resolve().then(res => {
//     let i = 0
//     while (i < 1000000000) {
//       i++
//     }
//     console.log('while loop')
//     return i
//   })
// }

// const whily2 = () => {
//   return Promise.resolve().then(res => {
//     let i = 0
//     while (i < 10000) {
//       i++
//     }
//     console.log('while2 loop')
//     return i
//   })
// }

// const func4 = async () => {
//   const w = whily()
//   const w2 = whily2()
//   const result = await Promise.all([w, w2])
//   console.log(result)
//   return result
// }
// console.log('START')
// func4()
// console.log('END')

console.log("Start Cycle");

setTimeout(x => console.log("Set Timeout End: Macro Task"), 100);

const getFruit = param => {
  const fruits = {
    pineapple: "🍍",
    peach: "🍑",
    strawberry: "🍓"
  };

  return fruits[param];
};

const fetchApi = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    // console.log(err)
    return err;
  }
};

const makeSmoothie = async () => {
  const fetchApis = new fetchApi(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return await Promise.all([
    fetchApis,
    getFruit("pineapple"),
    getFruit("strawberry")
  ]);
};
makeSmoothie()
  .then(res => console.log("Resolved Array - Micro Task: ", res))
  .catch(err => console.error(err));

console.log("End Cycle");
