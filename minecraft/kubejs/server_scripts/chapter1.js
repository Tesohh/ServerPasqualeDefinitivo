// priority: 0

ServerEvents.recipes(event => {
	// #region Slurry Processing
	event.recipes.create.mixing(Fluid.of("kubejs:gravel_slurry", 1000), ["minecraft:gravel", Fluid.water(1000)])
	event.recipes.create.mixing([Fluid.of("kubejs:slurry_waste", 1000), Item.of("create:zinc_nugget").withChance(0.2)], Fluid.of("kubejs:gravel_slurry"))
	event.recipes.create.compacting([
		Item.of("minecraft:andesite").withChance(0.5),
		Item.of("minecraft:diorite").withChance(0.25),
		Item.of("minecraft:granite").withChance(0.25)
	], Fluid.of("kubejs:slurry_waste", 1000))
	// #endregion

	// #region Andesite alloy making
	event.remove({ id: "create:mixing/andesite_alloy" })
	event.remove({ id: "create:mixing/andesite_alloy_from_zinc" })
	event.remove({ id: "create:crafting/materials/andesite_alloy" })
	event.remove({ id: "create:crafting/materials/andesite_alloy_from_zinc" })
	event.recipes.minecraft.crafting_shapeless("create:andesite_alloy", [Item.of("minecraft:andesite"), Item.of("create:zinc_nugget").withCount(4)])
	event.recipes.create.mixing(Item.of("create:andesite_alloy").withCount(2), [Item.of("minecraft:andesite"), Item.of("create:zinc_nugget").withCount(4)])
	// #endregion

	// #region Frame and hulls
	// #endregion
})