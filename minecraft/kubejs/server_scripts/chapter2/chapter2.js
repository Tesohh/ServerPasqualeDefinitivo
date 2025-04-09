// priority: 0

ServerEvents.recipes(event => {
	event.shaped("2x kubejs:soul_inscriber", ["NNN", "NSN", "GGN"], { G: "createaddition:gold_wire", S: "kubejs:soul_inscriber", N: "netherrack" })

	event.shaped("4x createdeco:gold_coin", ["T"], { T: "kubejs:mysterious_piglin_treasure" })
	event.shaped("8x blaze_rod", ["C"], { C: "kubejs:blaze_core" })

	event.remove({ id: "createaddition:mixing/netherrack" })
	event.recipes.create.mixing("minecraft:netherrack", ["create:cinder_flour", "minecraft:cobblestone", Fluid.lava(1000)])
	event.custom({
		type: "createaddition:charging",
		input: { item: "create:cinder_flour" },
		result: { item: "minecraft:redstone" },
		energy: 4000
	});
	event.recipes.create.mixing(Fluid.of("kubejs:liquid_redstone", 10), "minecraft:redstone").heated()
	event.recipes.create.filling("create:electron_tube", ["create:iron_sheet", Fluid.of("kubejs:liquid_redstone", 100)])
	event.recipes.create.filling("create:electron_tube", ["quartz", Fluid.of("kubejs:liquid_redstone", 100)])

	event.recipes.create.compacting("nether_brick", "create:cinder_flour").heated()
	charging_recipe(event, "quartz", "glass", 2000)

	event.recipes.create.haunting("chipped:scared_soul_sand", "soul_sand")
	charging_recipe(event, "kubejs:dead_soul_bead", "chipped:scared_soul_sand", 16000)
	event.recipes.create.deploying("quark:soul_bead", ["kubejs:dead_soul_bead", "kubejs:soul_inscriber"]).keepHeldItem()
	event.recipes.create.deploying("kubejs:soul_enclosure", ["nether_brick", "quark:soul_bead"])
})
