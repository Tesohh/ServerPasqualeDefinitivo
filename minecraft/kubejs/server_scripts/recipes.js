ServerEvents.recipes(event => {
	event.remove({ id: "create:crafting/kinetics/brass_hand" })
	event.shaped("create:brass_hand", [
		" A ",
		"GGG",
		" G "
	], {
		A: "create:andesite_alloy",
		G: "create:golden_sheet",
	})

	event.remove({ id: "functionalstorage:ender_drawer" })

	event.shaped("create:transmitter", [" T ", "WWW"], { T: "redstone_torch", W: "createaddition:copper_wire" })
})