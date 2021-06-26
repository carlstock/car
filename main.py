def on_button_pressed_a():
    global car
    car = 1
    maqueen.motor_stop(maqueen.Motors.ALL)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 120)
    basic.pause(1000)
    maqueen.motor_stop(maqueen.Motors.M1)
    car = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global car
    car = 1
    maqueen.motor_stop(maqueen.Motors.ALL)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 120)
    basic.pause(1000)
    maqueen.motor_stop(maqueen.Motors.M2)
    car = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

car = 0
car = 0

def on_forever():
    if car == 0:
        if maqueen.ultrasonic(PingUnit.CENTIMETERS) < 10:
            if 1 == randint(1, 2):
                maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 120)
                basic.pause(1000)
                maqueen.motor_stop(maqueen.Motors.M1)
            else:
                maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 120)
                basic.pause(1000)
                maqueen.motor_stop(maqueen.Motors.M2)
        else:
            maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 150)
            basic.pause(100)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 1500)
        basic.pause(5000)
basic.forever(on_forever)
