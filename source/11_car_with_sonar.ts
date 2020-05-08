OLED.init(128, 64)
let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    OLED.clear()
    OLED.writeNumNewLine(distance)
})
