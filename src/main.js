import kaboom from "kaboom"
import Player from "./scripts/player/index.js"
import testgrounds from "./scenes/testgrounds/index.js"
const k = kaboom()


k.loadSprite("bean", "./sprites/bean.png")
k.loadSound("spooky","/sounds/music/spooky.mp3")

const player = new Player("bean", 100, 10);

const music = play("spooky", {
	loop: true,
	paused: false,
})

k.volume(0.5);

scene("game", () => {
    k.onKeyPress("space", () => {
        music.paused = !music.paused;
    })
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