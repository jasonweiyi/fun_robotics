input.onButtonPressed(Button.A, function () {
    current_state = current_state + 1
    if (current_state > 3) {
        current_state = 0
    }
    if (states[current_state] == 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    } else if (states[current_state] == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.analogWritePin(AnalogPin.P1, 800)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.analogWritePin(AnalogPin.P1, 800)
    }
    basic.showNumber(current_state)
})
let current_state = 0
let states: number[] = []
states = [0, 1, 0, 2]
pins.digitalWritePin(DigitalPin.P8, 0)
pins.analogWritePin(AnalogPin.P1, 0)
basic.forever(function () {
	
})
