
// for (var i = 0; i < 1000; i++) {
//     console.log((i+1) + " Shamim Ahmed")
// }

// 1 to 10 plus(+) result

// var sum = 0

// for (var i = 1; i <= 10; i++) {
//     console.log(sum + ' + ' + i + ' = ' + (sum + i))
//     sum += i
// }
// console.log('result = ' + sum)



// var sum = 0



// for (var i = 1; i <= 10; i++) {

//     console.log(sum + ' + ' + i + ' = ' + (sum + i))
//     sum += i
// }
// console.log('result = ' + sum)


// Nested for loop 

const n = 20

for (i = 1; i <= n; i++) {
    result = ''
    for (j = 1; j <= i; j++) {
        result += j
    }
    console.log(result)
}