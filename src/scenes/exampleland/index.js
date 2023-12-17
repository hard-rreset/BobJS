function exampleland(){
    setGravity(1600);
    add([
		rect(width(), 48),
		pos(0, height() - 48),
		outline(4),
		area(),
		body({ isStatic: true }),
		color(127, 200, 255),
	])
	
	function spawnTree(){
		add([
			rect(48, rand(24, 64)),
			area(),
			outline(4),
			pos(width(), height() - 48),
			anchor("botleft"),
			color(255, 180, 255),
			move(LEFT, 240),
			"tree", // add a tag here
		]);
		wait(rand(0.5, 1.5), () => {
			spawnTree();
		});
	}
	spawnTree()
	
	
	let score = 0;
	const scoreLabel = add([
    text(score),
    pos(24, 24)
    ])
    onUpdate(() => {
        score++;
        scoreLabel.text = score;
    });

}
export default exampleland;