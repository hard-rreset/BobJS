class Player{
	constructor(name, maxhealth = 100 , damage, modifiers) 
	{
        this.name = name;
        this.maxhealth = maxhealth;
        this.damage = damage;
		this.modifiers = modifiers;
		this.currentHealth = this.maxhealth * this.modifiers.getHealthMultiplier();
    }

	
	logEverything() //for testing purposes
	{ 
		console.log(this.name);
		console.log(this.currentHealth);
		console.log(this.maxhealth);
		console.log(this.damage);
		console.log(this.modifiers);
	}

	SPEED = 160 * modifiers.getSpeedMultiplier();
	JUMP_FORCE = 550 * modifiers.getSpeedMultiplier(); //why does speed multiplier affect jump force?? Because it's fun

	getCurrentHealth()
	{
		return this.currentHealth;
	}

	getJumpForce()
	{
		return this.JUMP_FORCE;
	};
	getSpeed()
	{
		return this.SPEED;	
	};
	getModifiers()
	{
		return this.modifiers;
	};
	spawnPlayer()
	{

		const playerChar  = add([
			sprite("bob"),
			pos(width()/2, 240),
			area(),
			body(),
			health(this.maxhealth * this.modifiers.getHealthMultiplier()),
			"player",
			"friendly"
		])

		//collision with an Enemy
		playerChar.onCollide("enemy", () => {
			playerChar.hurt(10);
			this.currentHealth = this.currentHealth - 10;
		});

		//collision with an Item
		playerChar.onCollide("item", (item) => {
			console.log("item collision");
			console.log(item);

			if (item.is("health")){
				playerChar.heal(10);
				this.currentHealth = this.currentHealth + 10;
			};

			if(item.is("speed")){
				this.modifiers.setSpeedMultiplier(this.modifiers.getSpeedMultiplier()/4 + this.modifiers.getSpeedMultiplier());
				console.log("speed multiplier: " + this.modifiers.getSpeedMultiplier());
				onUpdate(() =>{
					this.SPEED = 160 * modifiers.getSpeedMultiplier();
					this.JUMP_FORCE = 550 * modifiers.getSpeedMultiplier();
				});
			};

			if(item.is("revive")){
				if (this.modifiers.hasRevive()){
					this.modifiers.setReviveQuantity(this.modifiers.getReviveQuantity() + 1);
				}
				this.modifiers.setRevive(true);
			};

			item.destroy();
		});

		//death behavior
		playerChar.on("death", () => {
			let reviveQuantity = this.modifiers.getReviveQuantity();
			if (this.modifiers.hasRevive())
			{
				if (reviveQuantity > 1)
				{
					console.log("revive quantity: " + reviveQuantity)
					reviveQuantity--;
					this.modifiers.removeReviveQuantity();
				}
				else
				{
					this.modifiers.setRevive(false);
					this.modifiers.setReviveQuantity(0);
					reviveQuantity = 0;
				}
				playerChar.heal(this.maxhealth/2);
				this.currentHealth = this.maxhealth/2 + 10;
				console.log("revive")
				console.log(this.maxhealth/2);
			}
			else
			{
			go("lose");
			}
		});

		//attack
		onKeyDown("f",()=>{
			console.log("attack");
		}) 

		//left movement
		onKeyDown("a",() => {
			playerChar.move(-this.SPEED, 0);
			playerChar.flipX = false;
		});
		onKeyDown("left",() => {
			playerChar.move(-this.SPEED, 0);
			playerChar.flipX = false;
		});
		onGamepadButtonDown("dpad-left", () =>{
			playerChar.move(-this.SPEED, 0);
			playerChar.flipX = false;
		});

		//right movement
		onKeyDown("d",() => {
			playerChar.move(this.SPEED, 0);
			playerChar.flipX = true;
		});
		onKeyDown("right",() => {
			playerChar.move(this.SPEED, 0);
			playerChar.flipX = true; 
		});
		onGamepadButtonDown("dpad-right", () =>{
			playerChar.move(this.SPEED, 0);
			playerChar.flipX = true;
		});
		
		//jump movement
		onKeyPress("space" , () => {
			if (playerChar.isGrounded()) 
			{
				playerChar.hurt(10); // temporary for testing damage and death behaviors
				this.currentHealth -= 10;
				playerChar.jump(this.JUMP_FORCE);
			}	

			//This doesn't work yet need to restructure this
			if (!playerChar.isGrounded() && this.modifiers.hasDoubleJump()) 
			{
				this.modifiers.setDoubleJump(false);
				playerChar.jump(this.JUMP_FORCE);
			};
		});
		onKeyPress("w" , () => {
			if (playerChar.isGrounded()) {
				playerChar.jump(this.JUMP_FORCE);
			}
		});
		onKeyPress("up" , () => {
			if (playerChar.isGrounded()) {
				playerChar.jump(this.JUMP_FORCE);
			}
		});
		onGamepadButtonDown("dpad-up", () =>{
			if (playerChar.isGrounded()) {
				playerChar.jump(this.JUMP_FORCE);
			}
		});
		onGamepadButtonDown("south", () =>{
			if (playerChar.isGrounded()) {
				playerChar.jump(this.JUMP_FORCE);
			}
		});
	};
}
export default Player;