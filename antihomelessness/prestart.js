ig.Game.inject({
	loadLevel(map, ...args) {
		for (let i = map.entities.length - 1; i >= 0; i--) {
			if (map.entities[i].settings?.propType?.name?.includes("bank")) {
				map.entities.splice(i, 1);
			}
		}

		this.parent(map, ...args);
	}
});
