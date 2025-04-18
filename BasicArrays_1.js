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
