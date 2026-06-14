ig.ENTITY.Enemy.inject({
	init(a, b, d, g) {
		this.parent(a, b, d, g);
		this.setLevelOverride(Math.floor(Math.random() * 72) + 4);
	}
});
