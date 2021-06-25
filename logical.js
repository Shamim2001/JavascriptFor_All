var a = 20
var b = 30

var c = 30
var d = 20

if (a > b && c > d) {
    console.log('A is greater than b and C is greater than D')
} else {
    console.log("condition is not valid")
}

// or operator 

if (a > b || c > d) {
    console.log('A is greater than b and C is greater than D')
} else {
    console.log("condition is not valid")
}

// not operator

var check = !(a > b)

console.log(check)