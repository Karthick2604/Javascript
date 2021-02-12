"use strict";
var person = {firstName :"Karthick",
               lastName :"S" ,
                age     : "",
                get age1(){
                    return this.age;
                },
                set age1(value){
                    this.age = value;
                }
            };
person.age1="23";
console.log(person.age);