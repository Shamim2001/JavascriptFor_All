var present = true

while(present) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('I am Winner ')
        present = false
    } else {
        console.log('Not winner')
    }
}

