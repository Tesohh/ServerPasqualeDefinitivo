// priority: 0

ServerEvents.recipes(event => {
	event.recipes.create.compacting("minecraft:netherrack", Fluid.lava(1000))
	event.recipes.create.milling("create:cinder_flour", "minecraft:netherrack")
	event.custom({
		type: "createaddition:charging",
		input: {
			item: "create:cinder_flour"
		},
		result: {
			item: "minecraft:redstone"
		},
		energy: 4000
	});
	event.recipes.create.mixing(Fluid.of("kubejs:liquid_redstone", 10), "minecraft:redstone").heated()
	event.recipes.create.filling("create:electron_tube", ["create:iron_sheet", Fluid.of("kubejs:liquid_redstone", 100)])
})