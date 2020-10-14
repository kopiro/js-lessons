let a = -14;
let b = 44;
let c = 567;

let delta = b * b - 4 * a * c;
if (delta > 0) {
  let x1 = -b + (Math.sqrt(delta) / 2) * a;
  let x2 = -b - (Math.sqrt(delta) / 2) * a;
  console.log(`Solutions are ${x1} and ${x2}`);
} else {
  if (delta < 0) {
    console.log("No solutions");
  } else {
    let x = (-b / 2) * a;
    console.log(`Solution is ${x}`);
  }
}
