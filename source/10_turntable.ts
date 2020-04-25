input.onButtonPressed(Button.B, function () {
    angle += -10
    if (angle < 0) {
        angle = 0
    }
    pins.servoWritePin(AnalogPin.P13, angle)
})
input.onButtonPressed(Button.A, function () {
    angle += 10
    if (angle > 180) {
        angle = 180
    }
    pins.servoWritePin(AnalogPin.P13, angle)
})
let angle = 0
angle = 0
pins.servoWritePin(AnalogPin.P13, angle)
control.waitMicros(2000000)
basic.forever(function () {
	
})
