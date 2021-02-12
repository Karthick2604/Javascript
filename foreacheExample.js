"use strict";
let text="";
let number =[10,25,65,89,36];
number.forEach(myfunction);
function myfunction(value)
{
    text = text + value + "\n";
    return text;
}
console.log(text);