let radio_group = 0
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    music.ringTone(radio_group)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
function on_forever() {
    
    if (radio_group > 988) {
        radio_group = 0
    }
    
    radio.setGroup(radio_group)
    radio_group += 1
}

