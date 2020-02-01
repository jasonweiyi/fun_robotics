// This program constrols the gate on a wooden train track.
// It requies the OLED and sonar extensions from the Makecode IDE.

// The distance variable stores the distance from the sonar.
let distance = 0

// Initialize LED screen.
OLED.init(128, 64)

// Move servo to 0 position.
pins.servoWritePin(AnalogPin.P7, 0)

basic.forever(function () {
    // Read a distance from sonar.
    distance = sonar.ping(
    DigitalPin.P4,
    DigitalPin.P9,
    PingUnit.Centimeters
    )
    
    // Displace the read distance.
    OLED.clear()
    OLED.writeNumNewLine(distance)
    
    // Open the gate if distance is small enough.
    if (distance < 3) {
        pins.servoWritePin(AnalogPin.P7, 90)
        control.waitMicros(8000000)
        pins.servoWritePin(AnalogPin.P7, 0)
        control.waitMicros(2000000)
    }
    control.waitMicros(100000)
})
