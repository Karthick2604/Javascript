const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

var id = Symbol("id");
person.id = 140353;

console.log(person.id);