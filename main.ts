statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    statusbar.value += 10
    if (pacman.overlapsWith(comida1)) {
        sprites.destroy(comida1, effects.fire, 500)
        info.changeScoreBy(10)
    }
    if (pacman.overlapsWith(comida2)) {
        sprites.destroy(comida2, effects.smiles, 500)
        info.changeScoreBy(50)
    }
    if (pacman.overlapsWith(Comida3)) {
        sprites.destroy(Comida3, effects.hearts, 500)
        info.changeScoreBy(100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
})
let statusbar: StatusBarSprite = null
let Comida3: Sprite = null
let comida2: Sprite = null
let comida1: Sprite = null
let pacman: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
pacman = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 . . . . 
    . . 5 5 5 f 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 2 2 5 . . . 
    . . . 5 5 5 2 5 5 5 . . . 
    . . . . 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let fantasma1 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . 3 3 3 3 . . . . . 
    . . . 3 3 3 3 3 3 . . . . 
    . . 3 3 1 3 3 1 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 1 3 3 1 3 3 . . . 
    . . 3 3 3 1 1 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 . . . 
    . . 3 . . 3 . 3 . 3 . . . 
    . 3 . . 3 . 3 . 3 . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let fantasma2 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 . 
    . . . 2 2 1 2 2 2 1 2 2 . 
    . . . 2 2 2 2 2 2 2 2 2 . 
    . . . 2 2 1 2 2 1 2 2 2 . 
    . . . 2 2 2 1 1 2 2 2 2 . 
    . . . 2 2 2 2 2 2 2 2 2 . 
    . . . 2 2 2 2 2 2 2 2 2 . 
    . . . 2 2 2 2 2 2 2 2 2 . 
    . . . 2 . 2 . 2 . 2 . 2 . 
    . . 2 . 2 . 2 . 2 . 2 . . 
    `, SpriteKind.Enemy)
let fanrasma3 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 1 8 8 8 1 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 1 8 8 1 8 8 . . 
    . . 8 8 8 8 1 1 8 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 . . 
    . . 8 . . 8 . . 8 . 8 . . 
    . 8 . . 8 . . 8 . 8 . . . 
    `, SpriteKind.Enemy)
let fantasma4 = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 . . . 
    . . . 1 f f 1 f f 1 . . . 
    . . . 1 f 2 1 f 2 1 . . . 
    . . . 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 . . . 
    . . f . 1 . f . 1 . . . . 
    . f . 1 . f . 1 . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
animation.runImageAnimation(
pacman,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 . . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . 5 5 5 f 5 5 5 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . 5 5 5 5 5 5 . . . . . . . . 
    . . 5 5 5 5 5 2 2 5 . . . . . . 
    . . . 5 5 5 2 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 . . . . . . . . 
    . . . 5 5 5 5 5 5 . . . . . . . 
    . . 5 5 5 f 5 5 5 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
pacman.setPosition(55, 70)
pacman.setVelocity(30, 30)
info.setScore(0)
scene.cameraFollowSprite(pacman)
controller.moveSprite(pacman, 100, 100)
fantasma1.setPosition(randint(80, 200), randint(80, 200))
fantasma1.setBounceOnWall(true)
fantasma1.setVelocity(30, 30)
fantasma2.setPosition(randint(80, 200), randint(80, 200))
fantasma2.setBounceOnWall(true)
fantasma2.setVelocity(30, 30)
fanrasma3.setPosition(randint(80, 200), randint(80, 200))
fanrasma3.setBounceOnWall(true)
fanrasma3.setVelocity(30, 30)
fantasma4.setPosition(randint(80, 200), randint(80, 200))
fantasma4.setBounceOnWall(true)
fantasma4.setVelocity(30, 30)
comida1 = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Food)
comida2 = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
Comida3 = sprites.create(img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `, SpriteKind.Food)
comida1.setPosition(55, 70)
comida1.setBounceOnWall(true)
comida2.setPosition(160, 100)
comida2.setBounceOnWall(true)
Comida3.setPosition(64, 110)
Comida3.setBounceOnWall(true)
statusbar = statusbars.create(13, 4, StatusBarKind.Health)
statusbar.value = 100
statusbar.positionDirection(CollisionDirection.Top)
statusbar.setBarBorder(1, 15)
statusbar.attachToSprite(pacman, 3, 1)
forever(function () {
    if (info.score() == 160) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    }
})
