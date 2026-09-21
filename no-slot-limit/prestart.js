sc.SaveMenu.inject({
	onNewButtonPressed() {
		sc.Dialogs.showYesNoDialog(ig.lang.get('sc.gui.dialogs.newConfirm'), null, a => {
			a.data == 0 && sc.menu.newSlot()
		})
	},
});
