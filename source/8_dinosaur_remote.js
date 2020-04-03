/**
 * Remote control
 */
input.onGesture(Gesture.LogoDown, function () {
    command = "F"
})
input.onGesture(Gesture.LogoUp, function () {
    command = "B"
})
input.onGesture(Gesture.ScreenUp, function () {
    command = "S"
})
input.onGesture(Gesture.TiltLeft, function () {
    command = "L"
})
input.onGesture(Gesture.TiltRight, function () {
    command = "R"
})
let command = ""
radio.setGroup(1)
command = "S"
let last_command = "S"
basic.showString("" + command)
basic.forever(function () {
    if (command != last_command) {
        last_command = command
        basic.showString("" + command)
        radio.sendString("" + command)
    }
})
