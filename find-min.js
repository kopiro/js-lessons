let x = [1, 2, 4, -4, 2];

let i = 0;
let min = +Infinity;
while (i < x.length) {
  if (x[i] < min) {
    min = x[i];
  }
  i++;
}

console.log(`Min is ${min}`);
