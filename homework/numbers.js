//Number

// task 1
function compareFinite(value) {
  let x = isFinite(value);
  let y = Number.isFinite(value);

  return `isFinite: ${x} | Number.isFinite: ${y}`;
}

console.log(compareFinite(15));
console.log(compareFinite("15"));
console.log(compareFinite(null));
console.log(compareFinite(""));
console.log(compareFinite(true));
console.log(compareFinite("abc"));
console.log(compareFinite(Infinity));
console.log(compareFinite(NaN));
console.log(compareFinite(undefined));

// isFinite()-ը արժեքը փոխակերպում է Number տիպի, հետո ստուգում է
// այն վերջավո՞ր է։
// Number.isFinite()-ը Number-ի static մեթոդ է, տիպի փոխակերպում չի կատարում։
// Այն վերադարձնում է true եթե արժեքն արդեն Number տիպի վերջավոր թիվ է։

//task 2
function compareNaN(value) {
  let x = isNaN(value);
  let y = Number.isNaN(value);

  return `isNaN: ${x} | Number.isNaN: ${y}`;
}

console.log(compareNaN("hello"));
console.log(compareNaN(NaN));
console.log(compareNaN(null));

// isNaN()-ը արժեքը փոխակերպում է Number տիպի,
// հետո ստուգում է ստացված արժեքը NaN է՞։

// Number.isNaN()-ը Number-ի static մեթոդ է։
// Այն տիպի փոխակերպում չի կատարում և վերադարձնում է true
// միայն այն դեպքում, երբ փոխանցված արժեքը հենց NaN-ն է։

// task 3
function isValidAge(value) {
  let x = Number.isInteger(value) && value >= 0 && value <= 150;

  return x;
}

console.log(isValidAge(25));
console.log(isValidAge(25.5));
console.log(isValidAge("25"));
console.log(isValidAge(-3));

// task 4
function roundTo(num, digits) {
  return Number(num.toFixed(digits));
}

console.log(roundTo(3.14159, 2));
console.log(roundTo(-3.456, 2));
console.log(roundTo(0.12345, 3));

// task 5
function areEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(areEqual(0.1 + 0.2, 0.3));
console.log(areEqual(1000.1 + 1000.2, 2000.3));

// Առաջին դեպքում areEqual(0.1 + 0.2, 0.3) վերադարձնում է true,
// որովհետև JS-ում տասնորդական թվերի ոչ ճշգրիտ
// ներկայացման պատճառով 0.1 + 0.2-ի արդյունքը ստացվում է 0.30000000000000004։
// բայց դրա և 0.3-ի տարբերությունը փոքր է Number.EPSILON-ից,
// դրա համար թվերը համարվում են մոտավորապես հավասար։

// Երկրորդ դեպքում areEqual(1000.1 + 1000.2, 2000.3) վերադարձնում է false,
// որովհետև մեծ թվերի դեպքում հաշվարկի արդյունքում առաջացած
// տարբերությունը մեծ է Number.EPSILON-ից։

// task 6
function toBinary(n) {
  return n.toString(2);
}

function fromBinary(str) {
  return Number.parseInt(str, 2);
}
console.log(toBinary(10));
console.log(toBinary(5));
console.log(fromBinary("1010"));
console.log(fromBinary("101"));

//task 7
function hexToDecimal(hex) {
  return Number.parseInt(hex);
}

console.log(hexToDecimal("1500 AMD"));
console.log(hexToDecimal("19.99$"));

// Number(hex) - ը չի աշխատում, որովհետև այն
// փորձում է ստացածը վերածի թվի, բայց քանի որ
// մեջը կան նաև այլ սիմվոլներ, չի կարողանում դարձնել թիվ,
// և վերադարձնում է NaN

// task 9
function percent(part, total) {
  let x = (part / total) * 100;
  return x.toFixed(1) + "%";
}

console.log(percent(1, 3));
console.log(percent(1, 4));
console.log(percent(5, 5));

// task 10

function celsiusToFahrenheit(c) {
  let f = (c * 9) / 5 + 32;
  return f.toFixed(1);
}

console.log(celsiusToFahrenheit(36.6));
console.log(celsiusToFahrenheit(56.6));
console.log(celsiusToFahrenheit(6.6));

// task 11

function formatMoney(amount) {
  return amount.toLocaleString("en-US");
}

console.log(formatMoney(2500000));
console.log(formatMoney(25078.678));
console.log(formatMoney(0.896578));

// task 12

function safeDivide(a, b) {
  let x = Number.isFinite(a / b) ? a / b : "is impossible";
  return x;
}

console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));

// task 13
function countDigits(n) {
  return Math.abs(n).toString().length;
}

console.log(countDigits(12345));
console.log(countDigits(-907));

// task 14
function isSafe(n) {
  return Number.isSafeInteger(n);
}

console.log(isSafe(9007199254740991));
console.log(isSafe(9007199254740992 + 1));
console.log(isSafe(9007199254740992));

// tack 15
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 6));
console.log(randomInt(5, 10));
console.log(randomInt(20, 30));

// task 16
function isCorrectChange(paid, price, change) {
  let x = Math.abs(paid - price - change) < Number.EPSILON;
  return x;
}

console.log(isCorrectChange(1, 0.9, 0.1));
console.log(isCorrectChange(0.3, 0.1, 0.2));
console.log(isCorrectChange(5, 2.5, 2));

// բոնուս առաջադրանքներ
function isPalindrome(word) {
  let x = word.split("").reverse().join("");
  return x == word;
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("hello"));

//1
function countWords(text) {
  let x = text.trim().split(" ");
  return x.filter(Boolean).length;
}

console.log(countWords("  I love   JS "));

//2
function formatPhone(digits) {
  return (
    "+" +
    digits.slice(0, 3) +
    " " +
    digits.slice(3, 5) +
    " " +
    digits.slice(5, 8) +
    " " +
    digits.slice(8)
  );
}

console.log(formatPhone("37491123456"));

// 3
function printTable() {
  let names = ["Anna", "David", "Bob"];
  let grades = [95, 88, 100];

  console.log(names[0].padEnd(14) + grades[0]);
  console.log(names[1].padEnd(14) + grades[1]);
  console.log(names[2].padEnd(14) + grades[2]);
}

printTable();

// 4
console.log((1.005).toFixed(2));
console.log(parseInt(0.0000005));
console.log(parseInt("08"));
console.log("5" * "2");
console.log("5" + 2);
console.log(Number(" 12"));
console.log(Number(""));
