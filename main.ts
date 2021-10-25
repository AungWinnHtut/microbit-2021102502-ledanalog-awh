let led2 = 0
basic.forever(function () {
    led2 = 0
    while (led2 < 1024) {
        led2 = led2 + 1
        led.plotBarGraph(
        led2,
        1024
        )
        pins.analogWritePin(AnalogPin.P0, led2)
        basic.pause(100)
    }
    while (led2 > 0) {
        led2 = led2 - 1
        led.plotBarGraph(
        led2,
        1024
        )
        pins.analogWritePin(AnalogPin.P0, led2)
        basic.pause(100)
    }
})
