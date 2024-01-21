function testgrounds(){
    setGravity(1600);
    add([
		rect(width(), 48),
		pos(0, height() - 48),
		outline(4),
		area(),
		body({ isStatic: true }),
		color(127, 200, 255),
	]);
}
export default testgrounds;