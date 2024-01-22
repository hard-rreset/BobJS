class Spawner{
    
    spawnRandomEnemy()
    {
        const enemy_type_small  = add([
			sprite("bean"),
			pos(10, 2),
			area(),
			body(),
			health(10),
			"enemy",
            "hostile"
		])
    }

    spawnRandomItem(){
        const item = add([
            sprite("bean"),
            pos(40,2),
            area(),
            body(),
            "item",
            "speed",
            "neutral"
        ])
    }
}

export default Spawner; 