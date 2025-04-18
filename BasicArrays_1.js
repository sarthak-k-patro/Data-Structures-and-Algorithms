const arr = ["Sarthak", "Sarthak2", "Sarthak3", "Sarthak4", "Sarthak5"];

const findStudent = (arr, toFind) => {
  for (let i = 0; i < arr.length; i++) {
    // console.log("arr :", arr[i], "  toFind: ", toFind);
    if (arr[i] === toFind) {
      console.log(`${arr[i]} found at index ${i}`);
      return;
    }
  }
};

findStudent(arr, "Sarthak4");

// Basic array types
const strArr = ["a", "b", "c", "d"];
const numArr = [1, 2, 3, 4];
const mixArr = [
  1,
  2,
  "sarthak",
  3,
  4,
  true,
  undefined,
  null,
  { a: "value" },
  ["abc"],
];
console.log("mix arr : ", mixArr);
