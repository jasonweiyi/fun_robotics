/**
 * dinosaur
 */
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == "S") {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
    } else if (receivedString == "F") {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.analogWritePin(AnalogPin.P2, 500)
    } else if (receivedString == "B") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.analogWritePin(AnalogPin.P2, 500)
    } else if (receivedString == "L") {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P1, 250)
        pins.analogWritePin(AnalogPin.P2, 250)
    } else if (receivedString == "R") {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P1, 250)
        pins.analogWritePin(AnalogPin.P2, 250)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
