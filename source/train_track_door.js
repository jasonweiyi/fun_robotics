let distance = 0
OLED.init(128, 64)
pins.servoWritePin(AnalogPin.P7, 0)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P4,
    DigitalPin.P9,
    PingUnit.Centimeters
    )
    OLED.clear()
    OLED.writeNumNewLine(distance)
    if (distance < 3) {
        pins.servoWritePin(AnalogPin.P7, 90)
        control.waitMicros(8000000)
        pins.servoWritePin(AnalogPin.P7, 0)
        control.waitMicros(2000000)
    }
    control.waitMicros(100000)
})
