input.onButtonPressed(Button.A, function () {
    hunger = -3
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
let lifespan = 0
let hunger = 0
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    basic.pause(1000)
    lifespan += 1
})
basic.forever(function () {
    basic.pause(1000)
    hunger += 1
    if (hunger == 7) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                # # # # #
                `)
        }
    }
    if (hunger == 12) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                . # # # .
                # . # . #
                # # # # #
                . # # # .
                . # # # .
                `)
        }
    }
})
