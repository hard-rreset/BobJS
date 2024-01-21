import kaboom from "kaboom"
import Player from "./scripts/player/index.js"
import testgrounds from "./scenes/testgrounds/index.js"
const k = kaboom()


k.loadSprite("bean", "./sprites/bean.png")
k.loadSprite("bob", "./sprites/characters/bob/bob.png")

const player = new Player("bob", 100, 10);

scene("game", () => {
    testgrounds();
    player.spawnPlayer();
})  


scene("lose", () => {
	add([
        text("Game Over"),
        pos(center()),
        anchor("center"),
    ])
})

go("game")