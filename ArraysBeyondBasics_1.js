// // //  1. string reversal using inbuilt methods
// // // const str = "Sarthak";
// // // console.log(str.split("").reverse().join(""));
// // // ---------------------------------------------------------------------------------------
// // //  2. string reversal using for loop
// // // const str = "Sarthak";
// // // strRev = [];
// // // for (let index = str.length - 1; index >= 0; index--) {
// // //   strRev.push(str[index]);
// // // }
// // // console.log(strRev.join(""));
// // // ---------------------------------------------------------------------------------------
// // 3. Palindrome
// const str = "Saaaa";
// const revStr = "";

// str.split("").reverse().join("") === str
//   ? console.log("its a palindrome : ", str)
//   : console.log("its not a palindrome : ", str);
// // ---------------------------------------------------------------------------------------
//  4. Palindrome number
const num = 12321;
let revNum = 0;
let rem;
let numCopy = num;
while (numCopy != 0) {
  rem = numCopy % 10;
  revNum = revNum * 10 + rem;
  numCopy = Math.floor(numCopy / 10);
}
num === revNum
  ? console.log("its a palindrome number : ", num)
  : console.log("its not a palindrome number : ", num);
// ---------------------------------------------------------------------------------------
