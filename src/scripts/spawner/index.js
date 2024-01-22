class Spawner{
    
    items = [
        "attack_damage",    // attack damage increase in %
        "attack_speed",     // reduces cooldown between attacks
        "cheese",           // cheese hat and easter egg
        "cosmetic",         // comestic hat
        "dodge",            // dodge chance increase in %
        "health",           // heal 10 hp
        "revive",           // revive once can stack
        "speed",            // movement speed and jump force increase in %
        "scythe",           // different attack pattern
    ]
    enemies = [
        "small",
        "medium",
        "large"
    ]    
    spawnRandomEnemy()
    {
        rand = Math.floor(Math.random() * this.enemies.length);
        console.log(this.enemies[rand]);
        const enemy  = add([
			sprite("bean"),
			pos((rand%2 == 0)? 0: width() * 0.9 ,2),
			area(),
			body(),
			health(10),
			"enemy",
            this.enemies[rand],
            "hostile"
		])
    }
    spawnRandomItem(){
        rand = Math.floor(Math.random() * this.items.length);
        console.log(this.items[rand]);
        const item = add([
            sprite("bean"),
            pos((rand%2 == 0)? 0: width() * 0.9 ,2),
            area(),
            body(),
            "item",
            this.items[rand],
            "neutral"
        ])
    }
    spawnSpecificItem(item)
    {
        console.log(item);
        const item_spawned = add([
            sprite("bean"),
            pos(width()/2,2),
            area(),
            body(),
            "item",
            item,
            "neutral"
        ])
    }
    spawnSpecificEnemy(enemy)
    {
        const enemy_spawned  = add([
            sprite("bean"),
            pos(width()/2, 2),
            area(),
            body(),
            health(10),
            "enemy",
            enemy,
            "hostile"
        ]);
    }
    continuousRandomEnemySpawn()
    {
        loop(1, () => {
            this.spawnRandomEnemy();
        })
    }
    continuousRandomItemSpawn()
    {
        loop(1, () => {
            this.spawnRandomItem();
        })
    }
}

export default Spawner; 