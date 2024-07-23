// What will be the output of following program
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(j);
  }, 100);
}
// will print
// 0
// 1
// 2
// each 100  miliseconds
