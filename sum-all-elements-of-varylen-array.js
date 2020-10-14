const x = [1, 2, 4, 5, 3, 2, 2];
const y = [1, 2, 3];

let max = 0;
if (x.length < y.length) {
  max = y.length;
} else {
  max = x.length;
}

let sum = 0;
let i = 0;
while (i < max) {
  if (i < x.length) sum += x[i];
  if (i < y.length) sum += y[i];
  i++;
}

console.log(`Sum is ${sum}`);
