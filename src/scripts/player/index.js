class Player{
	constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }
	
	SPEED = 240;
	JUMP_FORCE = 800;

	attack(target) {
        console.log(`${this.name} attacks ${target} and deals ${this.damage} damage.`);
    }

    takeDamage(amount) {
        console.log(`${this.name} takes ${amount} damage.`);
    }

	spawnPlayer(){
		const player  = add([
			sprite("bean"),
			pos(80, 40),
			area(),
			body(),
		])
	
		player.onCollide("tree", () => {
			addKaboom(player.pos);
			shake();
			go("lose");
		});
		
		//left movement
		onKeyDown("a",() => {
			player.move(-this.SPEED, 0);
		});
		onKeyDown("left",() => {
			player.move(-this.SPEED, 0);
		});
		onGamepadButtonDown("dpad-left", () =>{
			player.move(-this.SPEED, 0);
		});
		//right movement
		onKeyDown("d",() => {
			player.move(this.SPEED, 0);
		});
		onKeyDown("right",() => {
			player.move(this.SPEED, 0);
		});
		onGamepadButtonDown("dpad-right", () =>{
			player.move(this.SPEED, 0);
		});
		
		//jump movement
		onKeyPress("space" , () => {
			if (player.isGrounded()) {
				player.jump(this.JUMP_FORCE);
			}
		});
		onKeyPress("w" , () => {
			if (player.isGrounded()) {
				player.jump(this.JUMP_FORCE);
			}
		});
		onKeyPress("up" , () => {
			if (player.isGrounded()) {
				player.jump(this.JUMP_FORCE);
			}
		});
		onGamepadButtonDown("dpad-up", () =>{
			if (player.isGrounded()) {
				player.jump(this.JUMP_FORCE);
			}
		});
		onGamepadButtonDown("south", () =>{
			if (player.isGrounded()) {
				player.jump(this.JUMP_FORCE);
			}
		});
	}
}





export default Player;