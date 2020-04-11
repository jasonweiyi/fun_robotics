input.onButtonPressed(Button.B, function () {
    angle += -10
    if (angle < 0) {
        angle = 0
    }
    pins.servoWritePin(AnalogPin.P0, angle)
    control.waitMicros(200000)
})
input.onButtonPressed(Button.A, function () {
    angle += 10
    if (angle > 180) {
        angle = 180
    }
    pins.servoWritePin(AnalogPin.P0, angle)
    control.waitMicros(200000)
})
let angle = 0
angle = 0
pins.servoWritePin(AnalogPin.P0, angle)
control.waitMicros(1000000)
basic.forever(function () {
	
})
