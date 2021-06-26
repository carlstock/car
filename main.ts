input.onButtonPressed(Button.A, function () {
    car = 1
    maqueen.motorStop(maqueen.Motors.All)
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.M1)
    car = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    car = 1
    maqueen.motorStop(maqueen.Motors.All)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.M2)
    car = 0
    basic.clearScreen()
})
let car = 0
car = 0
basic.forever(function () {
    if (car == 0) {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
            if (1 == randint(1, 2)) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
                basic.pause(1000)
                maqueen.motorStop(maqueen.Motors.M1)
            } else {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
                basic.pause(1000)
                maqueen.motorStop(maqueen.Motors.M2)
            }
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
            basic.pause(1000)
        }
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        basic.pause(5000)
    }
})
