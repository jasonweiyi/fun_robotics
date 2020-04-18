input.onButtonPressed(Button.B, function () {
    current_magnet_state += 1
    if (current_magnet_state > 1) {
        current_magnet_state = 0
    }
    radio.sendString("" + magnet_states[current_magnet_state])
    basic.showString("" + magnet_states[current_magnet_state])
})
input.onButtonPressed(Button.A, function () {
    current_train_state += 1
    if (current_train_state > 3) {
        current_train_state = 0
    }
    radio.sendString("" + train_states[current_train_state])
    basic.showString("" + train_states[current_train_state])
})
let current_train_state = 0
let current_magnet_state = 0
let magnet_states: string[] = []
let train_states: string[] = []
radio.setGroup(1)
train_states = ["S", "F", "S", "B"]
magnet_states = ["N", "M"]
basic.forever(function () {
	
})
