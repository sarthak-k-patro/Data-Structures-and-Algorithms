// Find maximum profit you could have made by selling the stock
// 1. Method using sorting (not optimised)
const arr = [7, 5, 6, 3, 4];
arr.sort();
console.log(arr);
const len = arr.length - 1;
const maxProfit = arr[len] - arr[0];
console.log("Max Profit Possible: ", maxProfit);

// -----------------------------------------------------------------------------------------------------------------------
// 2. Method using two pointers (optimised)
// const arr = [7, 5, 6, 3, 4];
// const len = arr.length - 1;
