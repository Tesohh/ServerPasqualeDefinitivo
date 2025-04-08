// priority: 0

ServerEvents.recipes(event => {
	let inter = "emerald"
	event.recipes.create.sequenced_assembly([Item.of("nether_remastered:seal_crystal")], "emerald",
		[
			event.recipes.create.deploying(inter, [inter, 'obsidian']),
			event.recipes.create.deploying(inter, [inter, 'obsidian']),
			event.recipes.create.deploying(inter, [inter, 'obsidian']),
			event.recipes.create.deploying(inter, [inter, Item.of('kubejs:engineers_hammer')]).keepHeldItem()
		],
	).transitionalItem(inter).loops(1)

	event.shaped("2x nether_remastered:seal_of_the_underworld_item", [
		"GGG",
		"GSG",
		"GGG"
	], {
		G: "gold_ingot",
		S: "nether_remastered:seal_of_the_underworld_item",
	})

	event.shaped("2x kubejs:soul_inscriber", [
		"NNN",
		"NSN",
		"GGN"
	], {
		G: "createaddition:gold_wire",
		S: "kubejs:soul_inscriber",
		N: "netherrack"
	})

	event.shaped("4x createdeco:gold_coin", ["T"], { T: "kubejs:mysterious_piglin_treasure" })
	event.shaped("8x blaze_rod", ["C"], { C: "kubejs:blaze_core" })
})
