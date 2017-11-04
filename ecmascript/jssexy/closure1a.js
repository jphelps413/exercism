function celebrityName (firstName) {
  var nameIntro = "This celebrity is ";
  // this inner function has access to the outer function's variables,
  // including the parameter
  return lastName = (theLastName) => {
    return nameIntro + firstName + " " + theLastName;
  }
}

// At this juncture, the celebrityName outer function has returned a
// function pointer to the lastName inner function.
let mjName = celebrityName ("Michael");

// The closure (lastName) is called here after the outer function has
// returned above. Yet, the closure still has access to the outer
// function's variables and parameter.
console.log(mjName ("Jackson")); // This celebrity is Michael Jackson 
