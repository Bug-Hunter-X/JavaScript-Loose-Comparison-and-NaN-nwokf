function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; // Handle NaN case
  } else {
    return a === b; // Use strict equality
  }
}
//or
function foo(a,b){return Object.is(a,b)}