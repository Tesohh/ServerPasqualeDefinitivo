// priority: 0

ServerEvents.recipes(event => {
	event.remove({ id: "createaddition:mixing/netherrack" })
	event.recipes.create.mixing("minecraft:netherrack", ["create:cinder_flour", "minecraft:cobblestone", Fluid.lava(1000)])
	event.custom({
		type: "createaddition:charging",
		input: {
			item: "create:cinder_flour",
		},
		result: {
			item: "minecraft:redstone"
		},
		energy: 4000
	});
	event.recipes.create.mixing(Fluid.of("kubejs:liquid_redstone", 10), "minecraft:redstone").heated()
	event.recipes.create.filling("create:electron_tube", ["create:iron_sheet", Fluid.of("kubejs:liquid_redstone", 100)])

	event.remove({ id: "create:crushing/netherrack" })
	event.recipes.create.milling([Item.of("create:cinder_flour").withCount(2)], "minecraft:netherrack")
	event.recipes.create.crushing([Item.of("create:cinder_flour").withCount(4)], "minecraft:netherrack")
})