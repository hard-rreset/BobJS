class Modifiers
{
    dodgeMultiplier = 0;
    speedMultiplier = 1;
    healthMultiplier = 1;

    constructor(canRevive, canDoubleJump, canDash,dodgeMultiplier, speedMultiplier, healthMultiplier)
    {
        this.canRevive = canRevive;
        this.canDoubleJump = canDoubleJump;
        this.canDash = canDash;
        this.dodgeMultiplier = dodgeMultiplier;
        this.speedMultiplier = speedMultiplier;
        this.healthMultiplier = healthMultiplier;
    };

    setRevive(canRevive)
    {
      this.canRevive = canRevive;
    };

    hasRevive(){
        return this.canRevive;
    }
    
    setDoubleJump(canDoubleJump){
        this.canDoubleJump = canDoubleJump;
    }

    hasDoubleJump()
    {
        return this.canDoubleJump;
    }

    setDash(canDash)
    {
        this.canDash = canDash;
    }

    hasDash()
    {
        return this.canDash;
    }

    getDodgeMultiplier() 
    {
        if(this.dodgeMultiplier  <= 0)
        {
            this.dodgeMultiplier = 0.1;
        };
        return this.dodgeMultiplier;
    }

    getSpeedMultiplier() 
    {
        if(this.speedMultiplier  <= 0)
        {
            this.speedMultiplier = 0.1;
        };
        return this.speedMultiplier;
    }

    getHealthMultiplier() 
    {
        if(this.healthMultiplier <= 0)
        {
            this.healthMultiplier = 0.1;
        }
        return this.healthMultiplier;
        
    }

}
export default Modifiers;