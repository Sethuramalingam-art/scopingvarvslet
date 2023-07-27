/// var only an function scope so inside function you defined a var that we can't access outside but inside block scope when we initialize
// a var we can't get var outside

var x = 100;

function d() {
  console.log(x); //100
}
d();
console.log(x); //100

// --------------------------------------------------------------------------------------------
var x = 100;
if (true) {
  var t = 100000000; // var is function scope so it is block scope so we can access outside scope
}
function d() {
  console.log(t); //100000000
  console.log(x); //100
}
d();
console.log(t); //100000000
console.log(x); //100

// // --------------------------------------------------------------------------------------------
var x = 100;
m = 190;
if (true) {
  var t = 100000000; // var is function scope so it is block scope so we can access outside scope
}
function d() {
  t = 20000000000000; // because t is global scope
  x = 1231212; // because var is only function scope so it defined in block so no issues
  console.log(t); //20000000000000
  console.log(x); //1231212
  var y = 100000000;
  j = 1902;
  let j; // reference error
}
d();
y = 120;
console.log(y); // 120
console.log(m); // 190
console.log(t); //20000000000000
console.log(x); //1231212


// // --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
var x = 100;
if (true) {
  var t = 100000000; // var is function scope so it is block scope so we can access outside scope
}
function d() {
  var funcscope = 23423423423;
  t = 20000000000000; // because t is global scope
  x = 1231212; // because var is only function scope so it defined in block so no issues
  console.log(t); //20000000000000
  console.log(x); //100
}
d();
console.log(funcscope); //it is not defined because var is function scope error
console.log(t); //20000000000000
console.log(x); //100

// --------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------
var x = 100;
if (true) {
  var t = 100000000; // var is function scope so it is block scope so we can access outside scope
}
function d() {
  //var funcscope = 23423423423;
  var t = 20000000000000; // because t is global scope
  x = 1231212; // because var is only function scope so it defined in block so no issues
  console.log(t); //20000000000000
  console.log(x); //100
}
d();
//console.log(funcscope); //it is not defined because var is function scope error
console.log(t); //20000000000000
console.log(x); //100

// --------------------------------------------------------------------------------------------

//let, const it is block scope

console.log(r); // undefined
var r = 12121;

// --------------------------------------------------------------------------------------------

let y = 100000;

if (true) {
  console.log(u);
  var u = 100045678;

  console.log(y); //100000
  function x() {
    console.log(y); //100000
  }
  x();
}

console.log(y); //100000
