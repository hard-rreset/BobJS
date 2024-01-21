class Player{
	constructor(name, maxhealth, damage, modifiers) 
	{
        this.name = name;
        this.maxhealth = maxhealth;
        this.damage = damage;
		this.modifiers = modifiers;
    }

	currentHealth = this.maxhealth * modifiers.getHealthMultiplier();
	SPEED = 240 * modifiers.getSpeedMultiplier();
	JUMP_FORCE = 800 * modifiers.getSpeedMultiplier(); //why does speed multiplier affect jump force?? Because it's fun

	getJumpForce()
	{
		return this.JUMP_FORCE;
	}
	getSpeed()
	{
		return this.SPEED;	
	}
	getModifiers()
	{
		return this.modifiers;
	}
	

	spawnPlayer()
	{

		const player  = add([
			sprite("bob"),
			pos(width()/2, 240),
			area(),
			body(),
			health(this.maxhealth * this.modifiers.getHealthMultiplier()),
			"player",
			"friendly"
		])
	
		//collision with an Enemy
		player.onCollide("enemy", () => {
			player.hurt(10);
		});
		
		//death behavior
		player.on("death", () => {
			if (this.modifiers.hasRevive()){
				this.modifiers.setRevive(false);
				player.heal(this.maxhealth/2);
			}
			go("lose");
		});

		//attack
		onKeyDown("f",()=>{
			console.log("attack");
		}) 

		//left movement
		onKeyDown("a",() => {
			player.move(-this.SPEED, 0);
			player.flipX = false;
		});
		onKeyDown("left",() => {
			player.move(-this.SPEED, 0);
			player.flipX = false;
		});
		onGamepadButtonDown("dpad-left", () =>{
			player.move(-this.SPEED, 0);
			player.flipX = false;
		});

		//right movement
		onKeyDown("d",() => {
			player.move(this.SPEED, 0);
			player.flipX = true;
		});
		onKeyDown("right",() => {
			player.move(this.SPEED, 0);
			player.flipX = true; 
		});
		onGamepadButtonDown("dpad-right", () =>{
			player.move(this.SPEED, 0);
			bob.flipX = true;
		});
		
		//jump movement
		onKeyPress("space" , () => {
			if (player.isGrounded()) 
			{
				player.hurt(10);
				player.jump(this.JUMP_FORCE);
			}	

			//This doesn't work yet need to restructure this
			if (!player.isGrounded() && this.modifiers.hasDoubleJump()) 
			{
				this.modifiers.setDoubleJump(false);
				player.jump(this.JUMP_FORCE);
			};
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