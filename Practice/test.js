const fibonaci = (num, arr) => {
  if (arr.length < num) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return fibonaci(num, arr);
  }
  return arr;
};

// console.log(fibonaci(10, [0, 1]));

const bubbleSort = (arr) => {
  let swapped;
  do {
    swapped = false;
    for (j in arr) {
      j = parseInt(j);
      if (j < arr.length - 1 && arr[j] > arr[j + 1]) {
        swapped = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  } while (swapped);
  return arr;
};

// console.log(bubbleSort([8, 1, 7, 2, 6, 3, 5, 4]));

const linearSort = (arr) => {
  let lowest;
  for (let j = 0; j < arr.length; j++) {
    lowest = arr[j];
    for (let k = j; k < arr.length; k++) {
      if (lowest > arr[k]) {
        lowest = arr[k];
      }
    }
    let temp = arr[j];
    let index = arr.indexOf(lowest);
    arr[j] = lowest;
    arr[index] = temp;
  }
  // console.log("lowest=>", lowest);

  return arr;
};

// console.log(linearSort([8, 1, 7, 2, 6, 3, 5, 4, 100, 60]));

const diagonalPrint = (arr) => {
  for (j = 0; j < 3; j++) {
    for (let k = j; k < 3; k++) {
      if (j == k) {
        console.log(arr[j][k]);
      }
    }
  }
  return true;
};
const twodimArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(diagonalPrint(twodimArray));

// const loopType = (arr) => {
//   for (j in arr) {
//     if (j < arr.length - 1) {
//       j = parseInt(j);
//       console.log(arr[j + 1]);
//     }
//   }
//   return true;
// };
// console.log(loopType([8, 1, 7, 2, 6, 3, 5, 4]));

// const a = new Node("A");
// const b = new Node("B");
// const c = new Node("C");
// const d = new Node("D");

// a.next = b;
// b.next = c;
// c.next = d;

// const printLinkList = (head) => {
//   while (head !== null) {
//     console.log(head.value);
//     head = head.next;
//   }
// };

// const addLinkListEnd = (head, value) => {
//   while (head !== null) {
//     if (head.next == null) {
//       head.next = new Node(value);
//       return;
//     }
//     head = head.next;
//   }
// };

// const addLinkListStart = (head, value) => {
//   // head.next = new Node(value);
//   const newNode = new Node(value);
//   newNode.next = head;
//   console.log(newNode);

//   // while (head !== null) {
//   //   if (head.next == null) {
//   //     head.next = new Node(value);
//   //     return;
//   //   }
//   //   head = head.next;
//   // }
// };

// addLinkListEnd(a, "E");
// addLinkListStart(a, "M");
// printLinkList(a);
