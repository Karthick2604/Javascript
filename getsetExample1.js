var person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO"
};
// Change a Property:
Object.defineProperty(person, "language", {
  get : function() { return language },
  set : function(value) { language = value.toUpperCase()}
});
// Change language
person.language = "en";
// Display language
console.log(person.language);