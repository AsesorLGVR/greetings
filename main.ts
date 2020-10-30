scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.setDialogFrame(sprites.builtin.computer0)
    game.showLongText("Buenos días means good morning and is used up to linchtime. After that , until around 9pm or nightfall, its buenas tardes", DialogLayout.Bottom)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 12))
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.setDialogFrame(sprites.builtin.computer0)
    game.showLongText("Hola means hello and its often used together with one of the phrases above, e.g. hola , buenos días, adios", DialogLayout.Bottom)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 12))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    if (true) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 15))
        tiles.setTilemap(tilemap`level`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    if (true) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 15))
        tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030304040404030303030303030303030303040404040303030303030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010601010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010505050505010101010101010101010105050205050101010101`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.buttonOrange,sprites.dungeon.hazardWater,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardLava0,sprites.builtin.coral0], TileScale.Sixteen))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    if (true) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 8))
        tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030304040404030303030303030303030303040404040303030303030101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010601010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010505050505010101010101010101010105050205050101010101`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.buttonOrange,sprites.dungeon.hazardWater,sprites.dungeon.buttonTealDepressed,sprites.dungeon.hazardLava0,sprites.builtin.coral0], TileScale.Sixteen))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral1, function (sprite, location) {
    if (true) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 15))
        tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201010101010101`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.dungeon.darkGroundCenter], TileScale.Sixteen))
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
