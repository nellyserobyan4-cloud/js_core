// arrays

// Task 1.
const getFirstAndLast = (arr) => [arr[0], arr[arr.length - 1]];

console.log(getFirstAndLast([10, 20, 30, 40]));

// task 2
const getLength = (arr) => {
  return arr.length;
};

console.log(getLength([3, 1, 2]));
console.log(getLength([]));

// task 3

const addToEnd = (arr, item) => {
  arr.push(item);
  return arr;
};

console.log(addToEnd(["apple", "banana"], "cherry"));
console.log(addToEnd([1, 2, 3], 4));

// task 4
const addToStart = (arr, item) => {
  arr.unshift(item);
  return arr;
};

console.log(addToStart(["b", "c"], "a"));
console.log(addToStart([1, 2, "4"], "6"));

// task 5
const removeLast = (arr) => {
  return arr.pop();
};

console.log(removeLast([1, 2, 3]));

// task 6
const hasItem = (arr, item) => {
  let x = arr.includes(item);
  return x;
};

console.log(hasItem(["red", "green"], "green"));
console.log(hasItem(["red", "green"], "blue"));

// task 7
const findPosition = (arr, item) => {
  return arr.indexOf(item);
};

console.log(findPosition(["cat", "dog", "fish"], "dog"));
console.log(findPosition(["cat", "dog"], "cow"));

// task 8
const joinWords = (words) => {
  return words.join(" ");
};

console.log(joinWords(["I", "love", "JS"]));
console.log(joinWords(["hi", "armenia"]));

// task 9
const firstThree = (arr) => {
  return arr.slice(0, 3);
};

console.log(firstThree([5, 10, 15, 20, 25]));
console.log(firstThree([5, 10]));

// task 10
const getMiddle = (arr) => {
  return arr[Math.floor(arr.length / 2)];
};

console.log(getMiddle([1, 2, 3, 4, 5]));
console.log(getMiddle(["x", "y", "z"]));

// task 11
const countWords = (sentence) => {
  return sentence.split(" ").length;
};

console.log(countWords("Today is a good day"));
console.log(countWords("hello world"));

// task 12
const replaceAt = (arr, index, value) => {
  //arr.join("").replace(arr[index], value).split("");
  arr[index] = value;
  return arr;
};
console.log(replaceAt(["a", "b", "c"], 1, "B"));
