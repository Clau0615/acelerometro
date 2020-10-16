basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -5 && input.acceleration(Dimension.X) <= 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        if (input.acceleration(Dimension.X) >= -100 && input.acceleration(Dimension.X) <= -5) {
            basic.showLeds(`
                . . # . .
                . . # # .
                . # # # #
                . . # # .
                . . # . .
                `)
        } else {
            if (input.acceleration(Dimension.X) >= -1023 && input.acceleration(Dimension.X) < -100) {
                basic.showLeds(`
                    . . # . .
                    . . # # .
                    # # # # #
                    . . # # .
                    . . # . .
                    `)
            } else {
                if (input.acceleration(Dimension.X) <= 100 && input.acceleration(Dimension.X) > 5) {
                    basic.showLeds(`
                        . . # . .
                        . # # . .
                        # # # # .
                        . # # . .
                        . . # . .
                        `)
                } else {
                    if (input.acceleration(Dimension.X) > 100 && input.acceleration(Dimension.X) <= 1023) {
                        basic.showLeds(`
                            . . # . .
                            . # # . .
                            # # # # #
                            . # # . .
                            . . # . .
                            `)
                    }
                }
            }
        }
    }
})
