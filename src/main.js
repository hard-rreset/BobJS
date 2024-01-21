import kaboom from "kaboom"
import Player from "./scripts/player/index.js"
import testgrounds from "./scenes/testgrounds/index.js"
import Modifiers from "./scripts/player/modifiers/index.js"
const k = kaboom({
    scale:2.2,
})


k.loadSprite("bean", "./sprites/bean.png")
k.loadSprite("bob", "./sprites/characters/bob/bob.png")

modifiers  = new Modifiers(true, false, false, 0, 1, 1);

const player = new Player("bob", 100, 10, modifiers);

scene("game", () => {
    testgrounds();
    player.spawnPlayer();
});  


scene("lose", () => {
	add([
        text("Game Over"),
        pos(center()),
        anchor("center"),
    ])
})

go("game")