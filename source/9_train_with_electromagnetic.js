/**
 * Wiki of Motor expansion board: https://www.waveshare.com/wiki/Motor_Driver_for_micro:bit Microbit driver URL:  https://github.com/waveshare/pxt-Motor
 */
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        MotorDriver.MotorRun(Motor.A, Dir.forward, 4)
    } else if (receivedString == "B") {
        MotorDriver.MotorRun(Motor.A, Dir.backward, 4)
    } else if (receivedString == "S") {
        MotorDriver.MotorStop(Motor.A)
    } else if (receivedString == "M") {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (receivedString == "N") {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.showString(receivedString)
})
radio.setGroup(1)
MotorDriver.MotorRun(Motor.A, Dir.forward, 0)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
	
})
