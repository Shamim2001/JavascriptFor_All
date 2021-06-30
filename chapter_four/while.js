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


var presents = false

while(presents) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('I am Winner ')
        continue
    } else {
        console.log('Not winner')
    }
}

