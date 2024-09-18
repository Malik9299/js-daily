// let myPromise = new Promise((resolver, reject) => {
//   let y = 0;
//   if (y == 1) {
//     resolver("Working fine");
//   } else {
//     reject("Some Error");
//   }
// });

// myPromise.then(
//   (value) => console.log("value: ===> ", value),
//   (error) => console.log(`Error:  ===> ${error}`)
// );

const fetchProducts = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const jsonData = await result.json();
  console.log("Data ===> ", jsonData);
};

fetchProducts();

// With Promise

// const fetchProducts = async () => {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           reject("Error: No data");
//         }
//       })
//       .then((jsonData) => {
//         resolve(jsonData);
//       })
//       .then((error) => {
//         reject(error);
//       });
//   });
// };

// fetchProducts()
//   .then((data) => {
//     console.log("Data ===> ", data);
//   })
//   .then((error) => {
//     console.log("Error ===> ", error);
//   });

// // const fetchProducts = async () => {
// //   try {
// //     const response = await fetch(
// //       "https://jsonplaceholder.typicode.com/users/1"
// //     );

// //     if (!response.ok) {
// //       throw new Error("Error fetching the data");
// //     }

// //     const jsonData = await response.json();
// //     return jsonData;
// //   } catch (error) {
// //     // Properly handle and rethrow the error for the caller to handle
// //     throw new Error(`Fetch error: ${error.message}`);
// //   }
// // };

// // // Using the function and handling errors properly
// // fetchProducts()
// //   .then((data) => {
// //     console.log("Data ===> ", data);
// //   })
// //   .catch((error) => {
// //     console.log(`Error: ===> ${error.message}`);
// //   });
