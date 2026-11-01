// String

// task 1

function capitalize(str) {
  let s = str.slice(1).toLowerCase();
  let s1 = str.charAt(0).toUpperCase();

  return s1 + s;
}

console.log(capitalize("HELLO"));
console.log(capitalize("jAVASCRIPT"));
console.log(capitalize("ArmEnIa"));

// task 2
function getInitials(fullName) {
  return (
    fullName.charAt(0).toUpperCase() +
    "." +
    fullName.charAt(fullName.indexOf(" ") + 1).toUpperCase() +
    "."
  );
}

console.log(getInitials("ARAM sahakyan"));
console.log(getInitials("anna petrosyan"));
console.log(getInitials("mane Grigoryan"));

// task 3
function getLastChar(str) {
  let first = str.at(-1);
  let second = str[str.length - 1];

  return [first, second];
}

console.log(getLastChar("Node"));
console.log(getLastChar("js"));
console.log(getLastChar("java"));

// task 4
function makeSlug(title) {
  let s = title.trim().toLowerCase().replaceAll(" ", "-");

  return s;
}

console.log(makeSlug("  Learn JavaScript Fast  "));
console.log(makeSlug("  Hello World  "));
console.log(makeSlug("  My First Project"));

// task 5
function getUsername(email) {
  let x = email.indexOf("@");
  return '"' + email.slice(0, x) + '"';
}

function getDomain(email) {
  let x = email.indexOf("@");
  return '"' + email.slice(x + 1) + '"';
}

console.log(getUsername("aram@gmail.com"));
console.log(getDomain("aram@gmail.com"));

// task 6
function getExtension(fileName) {
  let x = fileName.lastIndexOf(".");
  return '"' + fileName.slice(x + 1) + '"';
}

console.log(getExtension("photo.final.png"));
console.log(getExtension("document.pdf"));
console.log(getExtension("my.project.js"));

// task 7
function isImage(fileName) {
  let x = fileName.toLowerCase();
  return x.endsWith(".png") || x.endsWith(".jpg");
}

console.log(isImage("photo.png"));
console.log(isImage("PICTURE.hhh"));
console.log(isImage("document.JPG"));

// task 8
function maskCard(cardNumber) {
  let x = cardNumber.slice(-4);
  return x.padStart(cardNumber.length, "*");
}

console.log(maskCard("1234567812345678"));
console.log(maskCard("123456789012345"));
console.log(maskCard("12345678"));

// task 9

function truncate(text, maxLength) {
  let x = text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  return x;
}

console.log(truncate("Hello JavaScript", 5));
console.log(truncate("Hi", 5));

// task 10
function countChar(text, char) {
  let x = text.split(char);
  return x.length - 1;
}

console.log(countChar("banana", "a"));
console.log(countChar("hello", "l"));
console.log(countChar("JavaScript", "z"));

// task 11
function censor(text, word) {
  return text.replaceAll(word, "*".repeat(word.length));
}

console.log(censor("bad day, bad mood", "bad"));
console.log(censor("hello world", "world"));
console.log(censor("JavaScript is fun", "fun"));

// task 12
function formatTime(hours, minutes) {
  let x = String(hours);
  let y = String(minutes);

  return x.padStart(2, "0") + ":" + y.padStart(2, "0");
}

console.log(formatTime(9, 5));
console.log(formatTime(14, 30));
console.log(formatTime(0, 7));

// task 13
function sameText(a, b) {
  let x = a.trim().toLowerCase() === b.trim().toLowerCase();
  return x;
}

console.log(sameText("  Yerevan", "YEREVAN "));
console.log(sameText("JavaScript", "javascript"));
console.log(sameText("Hello", "World"));

// task 14
function charCodeInfo(char) {
  let x = char.charCodeAt();
  let x1 = String.fromCharCode(x + 1);

  return `the code of ${char} is ${x}, the next is ${x1}`;
}

console.log(charCodeInfo("A"));
console.log(charCodeInfo("b"));
console.log(charCodeInfo("C"));
