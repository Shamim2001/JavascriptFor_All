var present = true

while(present) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('I am Winner ')
        break
    } else {
        console.log('Not winner')
    }
}


// continue statement check

var n = 10

for (i = 1; i<= n; i++) {
    if (i === 3 || i === 7) {
        continue
    } else {
        console.log(i)
    }
}

