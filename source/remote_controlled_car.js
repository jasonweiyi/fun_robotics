radio.onReceivedNumber(function (receivedNumber) {
    state = receivedNumber
})
let state = 0
radio.setGroup(12)
state = 0
pins.analogWritePin(AnalogPin.P1, 0)
pins.analogWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    if (state == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P2, 500)
    } else if (state == 2) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, 500)
    } else if (state == 3) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P2, 500)
    } else if (state == 4) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.analogWritePin(AnalogPin.P1, 500)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, 500)
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
    }
})
