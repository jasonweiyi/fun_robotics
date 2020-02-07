let distance = 0
OLED.init(128, 64)
pins.servoWritePin(AnalogPin.P7, 0)
control.waitMicros(2000000)
let degrees = [0, 45, 90, 135, 180, 135, 90, 45]
basic.forever(function () {
    for (let index = 0; index <= 7; index++) {
        pins.servoWritePin(AnalogPin.P7, degrees[index])
        control.waitMicros(300000)
        distance = sonar.ping(
        DigitalPin.P4,
        DigitalPin.P9,
        PingUnit.Centimeters
        )
        OLED.clear()
        OLED.writeNumNewLine(degrees[index])
        OLED.writeNumNewLine(distance)
        control.waitMicros(1000000)
    }
})
