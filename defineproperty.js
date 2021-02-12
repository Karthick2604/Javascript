var person = {
    firstName: "John",
    lastName : "Doe",
    language : "NO", 
  };
  
  // Change a Property:
  Object.defineProperty(person, "firstName", {
    value: "EN",
    writable : true,
    enumerable : true,
    configurable : true
  });
  
  // Enumerate Properties
  var txt = "";
  for (var x in person) {
    txt += person[x] + "\n";
  }
  console.log(txt);

  

  