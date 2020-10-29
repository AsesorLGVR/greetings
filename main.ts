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
tiles.setTilemap(tilemap`level`)
