// // // Find maximum profit you could have made by selling the stock
// // // 1. Method using sorting (not optimised)
// // // const arr = [7, 5, 6, 3, 4];
// // // arr.sort();
// // // const len = arr.length - 1;
// // // const maxProfit = arr[len] - arr[0];
// // // console.log("Max Profit Possible: ", maxProfit);

// // // -----------------------------------------------------------------------------------------------------------------------
// // // 2. Max And Min calculate
// // const arr = [7, 5, -6, 300, 40];
// // const len = arr.length - 1;
// // let min = 99999999;
// // let max = -99999999;
// // for (let index = 0; index < arr.length - 1; index++) {
// //   if (arr[index] > max) {
// //     max = arr[index];
// //   } else if (arr[index] < min) {
// //     min = arr[index];
// //   }
// // }

// // const maxProfit = max - min;

// // console.log(maxProfit);
// // -----------------------------------------------------------------------------------------------------------------------
// // ------------------------------------------------==================================-------------------------------------
// // Correct Approach for finding max profit for buy and sell of stock
// // -----------------------------------------------------------------------------------------------------------------------
// // Unoptimised solution
// //  const arr = [7, 5, -6, 300, 40];
// const arr = [3, 2, 6, 1, 4];
// let solArr = [];
// let profits = 0;
// for (let index = 0; index < arr.length; index++) {
//   for (let jIndex = index + 1; jIndex < arr.length; jIndex++) {
//     if (arr[index] < arr[jIndex]) {
//       profits = arr[jIndex] - arr[index];
//       solArr.push(profits);
//     }
//   }
// }
// solArr.sort((a, b) => a - b);
// const len = solArr.length;
// console.log(solArr);
// console.log(solArr[len - 1]);
// // -----------------------------------------------------------------------------------------------------------------------
// => Array chunk problem, didvide the array in given chunk
const arrOriginal = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const chunkArr = (arr, chunkSize) => {
  const result = [];
  if (chunkSize === 0) return "0 not allowed";
  for (let i = 0; i < arr.length; i = i + chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};
const chunkedArr = chunkArr(arrOriginal, 3);
console.log(chunkedArr);
