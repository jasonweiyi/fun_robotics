// Add https://github.com/waveshare/pxt-Motor to
// extensions.
input.onButtonPressed(Button.A, function () {
    speed += 4
    if (speed > 16) {
        speed = 16
    }
    basic.showNumber(speed)
    MotorDriver.MotorRun(Motor.A, Dir.forward, speed)
})
input.onButtonPressed(Button.B, function () {
    speed += -4
    if (speed < 0) {
        speed = 0
    }
    basic.showNumber(speed)
    MotorDriver.MotorRun(Motor.A, Dir.forward, speed)
})
let speed = 0
MotorDriver.MotorRun(Motor.A, Dir.forward, 0)
speed = 0
basic.forever(function () {
	
})
