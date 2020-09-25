input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        basic.showNumber(randint(1, 6))
        basic.pause(1000)
    }
})
basic.forever(function () {
	
})
