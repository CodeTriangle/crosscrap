let sheet;
ig.ENTITY.NPC.inject({
	show(...args) {
		this.parent(...args);
		if (!sheet) {
			sheet  = new ig.EffectSheet("skin-aura.menacing");
		}
		sheet.spawnOnTarget("aura", this, { duration: -1 });
	}
});

ig.ENTITY.Enemy.inject({
	show(...args) {
		this.parent(...args);
		if (!sheet) {
			sheet  = new ig.EffectSheet("skin-aura.menacing");
		}
		sheet.spawnOnTarget("aura", this, { duration: -1 });
	}
});

ig.ENTITY.Prop.inject({
	show(...args) {
		this.parent(...args);
		if (!sheet) {
			sheet  = new ig.EffectSheet("skin-aura.menacing");
		}
		sheet.spawnOnTarget("aura", this, { duration: -1 });
	}
});
