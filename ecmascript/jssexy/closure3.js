/*
 * This is bugged since the closure won't execute until after i === 103
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    
    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0},
                    {name:"Cruise", id:0},
                    {name:"Willis", id:0},
                    ];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id()); // 103
*/


// To fix this side effect (bug) in closures, you can use an Immediately
// Invoked Function Expression (IIFE), such as the following:
//
function celebrityIDCreator (theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
    // the j parametric variable is the i passed in on invocation of this IIFE
    theCelebrities[i]["id"] = function (j)  { 
      return function () {
        // each iteration of the for loop passes the current value of i
        // into this IIFE and it saves the correct value to the array
        return uniqueID + j;
        // BY adding () at the end of this function, we are executing it
        // immediately and returning just the value of uniqueID + j,
        // instead of returning a function.
      } ()
    // immediately invoke the function passing the i variable as a parameter
    } (i)
  }

  return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id); // 100

var cruiseID = createIdForActionCelebs [1]; console.log(cruiseID.id); // 101
