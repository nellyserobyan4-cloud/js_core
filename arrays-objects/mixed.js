// Arrays inside objects, objects inside arrays

// task 24
function getSecondName(students) {
  return students[1].name;
}

console.log(
  getSecondName([{ name: "Aram" }, { name: "Lilit" }, { name: "Davit" }])
);

// task 25
function getLastPrice(products) {
  return products[products.length - 1].price;
}

console.log(
  getLastPrice([
    { title: "Pen", price: 200 },

    { title: "Notebook", price: 900 },
  ])
);

console.log(
  getLastPrice([
    { title: "Pen", price: 200 },

    { title: "Pencil", price: 100 },
  ])
);

// task 26
function addSkill(person, skill) {
  person.skills.push(skill);
  return person.skills;
}

console.log(addSkill({ name: "Ani", skills: ["HTML"] }, "CSS"));
console.log(
  addSkill({ name: "Narek", skills: ["Git", "Linux", "Cisco"] }, "Networking")
);

// task 27
function countSkills(person) {
  return person.skills.length;
}

console.log(countSkills({ name: "Ani", skills: ["HTML", "CSS", "JS"] }));
console.log(countSkills({ name: "Aram", skills: [] }));

//task 28
function createBook(title, author, year) {
  return {
    title: title,
    author: author,
    year: year,
  };
}

function bookInfo(book) {
  return `${book.title} by ${book.author} ${book.year}`;
}

const book = createBook("Samvel", "Raffi", 1886);

console.log(book);
console.log(bookInfo(book));
