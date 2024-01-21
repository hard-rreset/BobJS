class Player{
	constructor(name, maxhealth, damage, modifiers) {
        this.name = name;
        this.maxhealth = maxhealth;
        this.damage = damage;
		this.modifiers = modifiers;
    }

	currentHealth = this.maxhealth;
	SPEED = 240;
	JUMP_FORCE = 800;

	spawnPlayer(){

		const player  = add([
			sprite("bob"),
			pos(width()/2, 240),
			area(),
			body(),
			health(this.maxhealth),
			"player",
			"friendly"
		])
	
		player.onCollide("enemy", () => {
			player.hurt(10);
		});
		
		//Death behavior
		player.on("death", () => {
			if (player.modifiers.hasImmortality){
				player.heal(this.maxhealth/2);
			}
			go("lose");
		});

		//Attack
		onKeyDown("f",()=>{
			console.log("attack");
		}) 

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
				player.hurt(10);
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