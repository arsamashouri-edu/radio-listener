radio_group = 0

def on_received_number(receivedNumber):
    music.ring_tone(radio_group)
    for index in range(4):
        basic.show_leds("""
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
radio.on_received_number(on_received_number)

def on_forever():
    global radio_group
    if radio_group > 988:
        radio_group = 0
    radio.set_group(radio_group)
    radio_group += 1