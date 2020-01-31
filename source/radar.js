let distance = 0
OLED.init(128, 64)
pins.servoWritePin(AnalogPin.P7, 0)
control.waitMicros(2000000)
let degrees = [0, 30, 60, 90, 120, 150, 180, 150, 120, 90, 60, 30]
basic.forever(function () {
    for (let degree of degrees) {
        pins.servoWritePin(AnalogPin.P7, degree)
        control.waitMicros(300000)
        distance = sonar.ping(
        DigitalPin.P4,
        DigitalPin.P9,
        PingUnit.Centimeters
        )
        OLED.writeStringNewLine("" + convertToText(degree) + ": " + convertToText(distance) + "cm    ")
    }
})
