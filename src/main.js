import kaboom from "kaboom"
import Player from "./scripts/player/index.js"
import testgrounds from "./scenes/testgrounds/index.js"
import Modifiers from "./scripts/player/modifiers/index.js"
import Spawner from "./scripts/spawner/index.js"
const k = kaboom({
    scale:2.2,
})


k.loadSprite("bean", "./sprites/bean.png")
k.loadSprite("bob", "./sprites/characters/bob/bob.png")

spawner = new Spawner();

modifiers  = new Modifiers(false, false, false, 0, 1, 1);

const player = new Player("bob", 100, 10, modifiers);

scene("game", () => {
    testgrounds();
    player.spawnPlayer();
    spawner.spawnRandomItem();
    spawner.spawnRandomItem();
    spawner.spawnRandomItem();
    spawner.spawnRandomItem();
    spawner.spawnRandomItem();
    player.logEverything();
    let hp = player.getCurrentHealth();
    const hplabel = add([
        text("HP: " + hp),
        pos(10, 10)
    ]);
    onUpdate(() => {
        let hp = player.getCurrentHealth();
        hplabel.text = "HP: " + hp;
    })
});  


scene("lose", () => {
	add([
        text("Game Over"),
        pos(center()),
        anchor("center"),
    ])
})

go("game")