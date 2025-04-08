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

	event.remove({ id: "create_ultimate_factory:mixing_redstone" })
	event.remove({ id: "create_ultimate_factory:compacting_tuff" })
	event.recipes.create.mixing("tuff", ["2x diorite", "2x andesite", Fluid.lava(100)]).heated()

	event.remove({ id: "create:crushing/tuff" })
	event.remove({ id: "create:crushing/tuff_recycling" })
	event.recipes.create.crushing([
		Item.of("flint").withChance(0.5),
		Item.of("gold_nugget").withChance(0.05),
		Item.of("iron_nugget").withChance(0.1),
		Item.of("create:copper_nugget").withChance(0.07),
		Item.of("create:zinc_nugget").withChance(0.07),
	],
		"tuff").processingTime("1s")


	event.remove({ id: /^createdeco:pressing\/coins/ })
})