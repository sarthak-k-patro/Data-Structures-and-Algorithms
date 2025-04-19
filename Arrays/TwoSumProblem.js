// 2 Sum problem
// Given an array of integers, find two numbers in the array that add up to a target sum
// The sum of the two numbers should be equal to the target sum
const arr = [2, 7, 11, 15];
const targetSum = 9;
const findTargetSum = (arr, targetSum) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = arr.length - 1; j >= 0; j--) {
      if (arr[i] + arr[j] === targetSum) {
        return `numbers are ${arr[i]} and ${arr[j]} at indexes ${i} and ${j}`;
      }
    }
  }
};
const res = findTargetSum(arr, targetSum);
console.log(res);
