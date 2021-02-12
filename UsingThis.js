let myArray = {
    firstName:"Karthick",
    lastName: "S",
    fullName: function() {
      return this.firstName+" "+this.lastName;
    }
  }
  console.log(myArray.fullName());

  