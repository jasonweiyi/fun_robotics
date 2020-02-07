input.onGesture(Gesture.LogoDown, function () {
    state = 1
    radio.sendNumber(state)
    basic.showNumber(state)
})
input.onGesture(Gesture.LogoUp, function () {
    state = 2
    radio.sendNumber(state)
    basic.showNumber(state)
})
input.onGesture(Gesture.ScreenUp, function () {
    state = 0
    radio.sendNumber(state)
    basic.showNumber(state)
})
input.onGesture(Gesture.TiltLeft, function () {
    state = 3
    radio.sendNumber(state)
    basic.showNumber(state)
})
input.onGesture(Gesture.TiltRight, function () {
    state = 4
    radio.sendNumber(state)
    basic.showNumber(state)
})
let state = 0
state = 0
radio.setGroup(12)
basic.showNumber(state)
basic.forever(function () {
	
})
