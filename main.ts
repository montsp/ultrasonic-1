radio.onReceivedNumber(function (receivedNumber) {
    lightning = receivedNumber
})
let urutorasonic = 0
let lightning = 0
radio.setGroup(169)
basic.forever(function () {
    basic.clearScreen()
    urutorasonic = mbit_Sensor.Ultrasonic(DigitalPin.P0, DigitalPin.P1)
    if (urutorasonic < 30 && lightning > 0) {
        music.setVolume(88)
        music.setBuiltInSpeakerEnabled(true)
        soundExpression.sad.playUntilDone()
    } else {
        music.setBuiltInSpeakerEnabled(false)
        basic.clearScreen()
    }
})
