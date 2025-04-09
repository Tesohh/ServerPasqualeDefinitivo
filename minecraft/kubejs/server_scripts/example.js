// priority: 0

ServerEvents.recipes(event => {


	event.remove({ id: "create:crushing/gravel" })
	event.recipes.create.crushing([Item.of("sand")], "minecraft:gravel")

	event.remove({ id: "create:crushing/netherrack" })
	event.recipes.create.milling([Item.of("create:cinder_flour").withCount(2)], "minecraft:netherrack")
	event.recipes.create.crushing([Item.of("create:cinder_flour").withCount(4)], "minecraft:netherrack")
})