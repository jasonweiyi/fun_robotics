/**
 * Remote
 */
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("S")
    basic.showString("S")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("F")
    basic.showString("F")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
    basic.showString("B")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
    basic.showString("L")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
    basic.showString("R")
})
radio.setGroup(1)
basic.forever(function () {
	
})
