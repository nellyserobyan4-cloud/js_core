// Objects

// task 13
function createStudent(name, age, city) {
  const student = {
    name: name,
    age: age,
    city: city,
  };

  return student;
}

console.log(createStudent("Ani", 20, "Yerevan"));
console.log(createStudent("hayk", 78, "Yerevan"));

// task 14
function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

console.log(getFullName({ firstName: "Aram", lastName: "Petrosyan" }));

// task 15
const isAdult = (person) => person.age >= 18;

console.log(isAdult({ name: "Lilit", age: 17 }));
console.log(isAdult({ name: "Davit", age: 25 }));

// task 16
const getProperty = (obj, key) => {
  return obj[key];
};

console.log(getProperty({ color: "red", size: "M" }, "size"));

// task 17
const updateAge = (person, newAge) => {
  person.age = newAge;
  return person;
};

console.log(updateAge({ name: "Ani", age: 20 }, 21));
console.log(updateAge({ name: "aram", age: 15 }, 19));

// task 18
const addEmail = (person, email) => {
  person.email = email;
  return person;
};

console.log(addEmail({ name: "Ani" }, "ani@mail.com"));
console.log(addEmail({ name: "Aram" }, "aram@mail.com"));

// task 19
const removeProperty = (obj, key) => {
  delete obj[key];
  return obj;
};

console.log(removeProperty({ name: "Ani", age: 20 }, "age"));
console.log(removeProperty({ name: "Aram", city: "Yerevan" }, "city"));

// task 20
const hasProperty = (obj, key) => {
  return key in obj;
};

console.log(hasProperty({ name: "Ani" }, "name"));
console.log(hasProperty({ name: "Ani" }, "age"));

// task 21
const countProperties = (obj) => {
  return Object.keys(obj).length;
};

console.log(countProperties({ a: 1, b: 2, c: 3 }));

// task 22
const describeCar = (car) => {
  return `${car.brand} ${car.model} ${car.year}`;
};

console.log(describeCar({ brand: "Toyota", model: "Camry", year: 2020 }));
console.log(describeCar({ brand: "BMW", model: "X5", year: 2025 }));

// task 23

const user = {
  name: "Aram",

  address: { city: "Gyumri", street: "Abovyan 5" },
};

const getCity = (user) => {
  return user.address.city;
};

console.log(getCity(user));
