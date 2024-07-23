// function quicksort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivot = arr[Math.floor(arr.length / 2)];
//   let left = [];
//   let right = [];
//   let equal = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else if (arr[i] > pivot) {
//       right.push(arr[i]);
//     } else {
//       equal.push(arr[i]);
//     }
//   }

//   return [...quicksort(left), ...equal, ...quicksort(right)];
// }

// // Example usage
// // let arr = [3, 6, 8, 10, 1, 2, 1];
// let arr = [35, 50, 15, 25, 80, 20, 90, 45];
// console.log("Original array:", arr);
// let sortedArr = quicksort(arr);
// console.log("Sorted array:", sortedArr);
const quickSorter = (arr) => {
  const n = arr.length;
  let piv = arr[0];
  let p = arr[1];
  let q = arr[n - 1];
  indexPiv = arr.indexOf(piv);

  checkPositionPiv = (side, indexofPiv) => {
    let isRightPosition;
    if (side == "l") {
      for (let j = 0; j < indexPiv; j++) {
        if (arr[j] > arr[indexPiv]) {
          isRightPosition = true;
        } else {
          isRightPosition = false;
        }
      }
    } else if (side == "r") {
      for (let j = 0; j < indexPiv; j++) {
        if (arr[j] < arr[indexPiv]) {
          isRightPosition = true;
        } else {
          isRightPosition = false;
        }
      }
    }
  };

  const positionOfP = (p) => {
    for (let j = 0; j < p.length - 1; j++) {
      if (p > pi) {
        return p;
      } else {
        p = arr[j];
      }
    }
  };
  const positionOfQ = (q) => {
    for (let j = p.length - 1; j > 1; j--) {
      if (q < pi) {
        return q;
      } else {
        q = arr[j];
      }
    }
  };

  console.log("indexPiv:==>", indexPiv);
  if (indexPiv == 0) {
    // all right side elements should be less than indexPiv
    if (checkPositionPiv("l", indexofPiv)) {
      // stop swap
    } else {
      // Swap
    }
  } else if (indexPiv == n - 1) {
    // all right side elements should be greater than indexPiv
    if (checkPositionPiv("r", indexofPiv)) {
      // stop swap
    } else {
      //   swap
    }
  } else {
    // all left side elements should be less than indexPiv &&
    // all right side elements should be greater than indexPiv
    if (
      checkPositionPiv("l", indexofPiv) &&
      checkPositionPiv("r", indexofPiv)
    ) {
      // stop swap
    } else {
      let newPositionOfP = positionOfP(p);
      let newPositionOfQ = positionOfQ(q);
      if (newPositionOfP >= newPositionOfQ) {
        // swap newPositionOfQ with piv
      } else {
        // swap newPositionOfP with newPositionOfQ
      }
    }
  }
};

// quickSorter(arr);

function quicksortInPlace(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quicksortInPlace(arr, low, pi - 1);
    quicksortInPlace(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Example usage
const arr = [35, 50, 25, 80, 20, 90, 45];
console.log("Original array:", arr);
quicksortInPlace(arr);
console.log("Sorted array:", arr);
