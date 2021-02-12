var arr = [2,6,9,45,68,35];
var text = arr.map(myfunction);
function myfunction(value)
{
    return value*2;
}
console.log("The Array Values are:"+text);

// Example of forEach
var arr1 = [2,6,9,45,68,35];
arr1.forEach(myfunction1);
var txt=0;
function myfunction1(value,index)
{
    txt =txt+ value + "\n";
}
console.log("The Array Values are:"+txt);


