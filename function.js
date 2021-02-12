function myDisplayer(some) {
  console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 1;

// some code (try to change x to 5)

  if (x == 0) {
    myResolve("ok");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function() {myDisplayer(value);},
  function() {return myPromise;}
);
console.log(myPromise);