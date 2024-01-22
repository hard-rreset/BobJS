class Modifiers
{
    dodgeMultiplier = 0;
    
    speedMultiplier = 1;
    healthMultiplier = 1;
    
    reviveQuantity = 0;
    
    canRevive = false;
    canDoubleJump = false;
    canDash = false;

    constructor(canRevive, canDoubleJump, canDash,dodgeMultiplier, speedMultiplier, healthMultiplier, reviveQuantity)
    {
        this.canRevive = canRevive;
        this.canDoubleJump = canDoubleJump;
        this.canDash = canDash;
        this.dodgeMultiplier = dodgeMultiplier;
        this.speedMultiplier = speedMultiplier;
        this.healthMultiplier = healthMultiplier;
        this.reviveQuantity = reviveQuantity;
    };

    setRevive(canRevive)
    {
      this.canRevive = canRevive;
    };
    
    getReviveQuantity()
    {
        if (this.canRevive == true && this.reviveQuantity <= 0){this.reviveQuantity = 1;}
        return this.reviveQuantity;
    };
    addReviveQuantity()
    {
        return this.reviveQuantity++;
    };

    removeReviveQuantity()
    {
        return this.reviveQuantity--;
    };

    setReviveQuantity(reviveQuantity)
    {
        this.reviveQuantity = reviveQuantity;
    };
    
    hasRevive()
    {
        return this.canRevive;
    };
    
    setDoubleJump(canDoubleJump)
    {
        this.canDoubleJump = canDoubleJump;
    };

    hasDoubleJump()
    {
        return this.canDoubleJump;
    };

    setDash(canDash)
    {
        this.canDash = canDash;
    };

    hasDash()
    {
        return this.canDash;
    };

    getDodgeMultiplier() 
    {
        if(this.dodgeMultiplier  <= 0)
        {
            this.dodgeMultiplier = 0.1;
        };
        return this.dodgeMultiplier;
    };

    getSpeedMultiplier() 
    {
        if(this.speedMultiplier  <= 0)
        {
            this.speedMultiplier = 0.1;
        };
        return this.speedMultiplier;
    };
    setSpeedMultiplier(speedMultiplier)
    {
        this.speedMultiplier = speedMultiplier;
    }
    getHealthMultiplier() 
    {
        if(this.healthMultiplier <= 0)
        {
            this.healthMultiplier = 0.1;
        };
        return this.healthMultiplier;
        
    };

}
export default Modifiers;