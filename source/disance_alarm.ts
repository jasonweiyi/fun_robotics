let distance = 0
OLED.init(128, 64)
basic.forever(function () {
    distance = sonar.ping(
        DigitalPin.P4,
        DigitalPin.P9,
        PingUnit.Centimeters
    )
    OLED.clear()
    OLED.writeNumNewLine(distance)
    if (distance > 0) {
        music.ringTone(400 - distance * 5)
    }
})
