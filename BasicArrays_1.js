// const arr = ["Sarthak", "Sarthak2", "Sarthak3", "Sarthak4", "Sarthak5"];

// const findStudent = (arr, toFind) => {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log("arr :", arr[i], "  toFind: ", toFind);
//     if (arr[i] === toFind) {
//       console.log(`${arr[i]} found at index ${i}`);
//       return;
//     }
//   }
// };

// findStudent(arr, "Sarthak4");

// // Basic array types
// const strArr = ["a", "b", "c", "d"];
// const numArr = [1, 2, 3, 4];
// const mixArr = [
//   1,
//   2,
//   "sarthak",
//   3,
//   4,
//   true,
//   undefined,
//   null,
//   { a: "value" },
//   ["abc"],
// ];
// console.log("mix arr : ", mixArr);
// // -------------------------------------------------------------------------------------------------------------
// // Array methods
// 1. Arr.shift
const arr = [1, 2, 3, 4, 5];
arr.shift();
arr.shift();
// console.log(arr);
// -------------------------------------------------------------------------------------------------------------
// 2. Delete an element at a specific index: splice method
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(4, 1);
// console.log(arr2);

// ---------------------------------------------------------------------------------------------------------------
// 3. pop method
const arr3 = [1, 2, 3, 4, 5];
arr3.pop();
arr3.pop();
arr3.pop();
console.log(arr3);
