
function spawnPlayer(){

    const bean  = add([
		sprite("bean"),
		pos(80, 40),
		area(),
		body(),
	])

    bean.onCollide("tree", () => {
		addKaboom(bean.pos);
		shake();
		go("lose");
	});

	onKeyPress("space", () => {
		if (bean.isGrounded()) {
			bean.jump();
		}
	});

}

export default spawnPlayer;