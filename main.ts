scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    if (true) {
        info.setScore(3)
        game.setDialogFrame(sprites.builtin.computer0)
        game.showLongText("Tiene todos sus documentos en regla. Puede pasar", DialogLayout.Bottom)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 12))
    } else {
        game.setDialogFrame(sprites.builtin.computer0)
        game.showLongText("Lo siento. Necesita tener todos sus documentos en regla. Necesita pasaporte, visa y billete de vuelo. ", DialogLayout.Bottom)
        tiles.setWallAt(location, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    game.showLongText("Ya tienes tu pasaporte. Ahora puedes ir a la aduana", DialogLayout.Bottom)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    if (true) {
        tiles.setTileAt(location, sprites.dungeon.greenSwitchDown)
        music.baDing.play()
        game.splash("LA curiosidad mató al gato y ahora te va a matar a ti. Has liberado un luince ibérico que te está buscando")
        tiles.setWallAt(tiles.getTileLocation(3, 19), false)
        tiles.setTileAt(tiles.getTileLocation(3, 19), sprites.dungeon.doorOpenWest)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile15, function (sprite, location) {
    game.setDialogFrame(sprites.builtin.computer0)
    game.showLongText("Detengase! Usted no puede estar aquí. Solo personal autorizado. Salga de aquí inmediatamente o le pondré una multa.", DialogLayout.Bottom)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 12))
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    if (true) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 15))
        tiles.setTilemap(tilemap`level`)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, sprites.dungeon.floorDark2)
    game.showLongText("Ya tienes tu pasaporte. Ahora puedes ir a la aduana", DialogLayout.Bottom)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile12, function (sprite, location) {
    if (game.askForString("Buenas tardes! ¿qué necesita visa o pasaporte?", 9) == "visa") {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 15))
        tiles.setWallAt(tiles.getTileLocation(12, 16), false)
    } else {
        game.setDialogFrame(sprites.builtin.computer0)
        game.showLongText("Aquí es la oficina de Visas tiene que ir a la de pasaportes. Adiós! SIGUIENTE!", DialogLayout.Bottom)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 15))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    if (true) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 15))
        tiles.setTilemap(tilemap`level_1`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    if (true) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
        tiles.setTilemap(tilemap`level_2`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    if (true) {
        mySprite.destroy(effects.clouds, 500)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 15))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral1, function (sprite, location) {
    if (true) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 15))
        tiles.setTilemap(tilemap`level_3`)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (game.askForString("Buenos días", 11) == "buenos dias") {
        if (game.askForString("¿qué tal?", 9) == "bien y tu") {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 6))
            if (game.askForString("muy bien, venga, hasta luego", 5) == "adios") {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 6))
            } else {
                game.splash("La respuesta es <<adios>>")
                tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 6))
            }
        } else {
            game.splash("La respuesta es <<bien y tu>>")
            tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 6))
        }
    } else {
        game.splash("La respuesta es Buenos dias")
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 6))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy(effects.disintegrate, 500)
    music.wawawawaa.play()
    game.over(false)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
mySprite2.follow(mySprite, 200)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 19))
