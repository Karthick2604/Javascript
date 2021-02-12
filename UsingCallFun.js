var person = {
    fullName: function()
    {
        return this.firstName + " " + this.lastName; 
    }
}
var person1 = {
    firstName:"Karthick",
    lastName :"S"
}
var person2 ={
    firstName:"Virat",
    lastName:"Kholi"
}
var x = person.fullName.call(person2);
console.log(x);
