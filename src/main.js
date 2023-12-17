import kaboom from "kaboom"
import spawnPlayer from "./scripts/player/index.js"
import exampleland from "./scenes/exampleland/index.js"
const k = kaboom()


k.loadSprite("bean", "./sprites/bean.png")

scene("game", () => {
	exampleland();
	spawnPlayer();	
})

scene("lose", () => {
	add([
        text("Game Over"),
        pos(center()),
        anchor("center"),
    ])
})

go("game")