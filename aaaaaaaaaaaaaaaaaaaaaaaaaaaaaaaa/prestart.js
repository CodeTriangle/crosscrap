sc.BaseMenu.inject({
	update(...args) {
		this.parent(...args);
		this.hook.pos.x = Math.round((Math.random() - 0.5) * 10);
		this.hook.pos.y = Math.round((Math.random() - 0.5) * 10);
	}
});
