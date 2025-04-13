// priority: 0

ServerEvents.recipes(event => {
	event.remove({ id: "adastra:fuel_refinery" })

	event.remove({ type: "ad_astra:refining" })


	event.recipes.create.mixing([
		Fluid.of("kubejs:heavy_oil", 20),
		Fluid.of("kubejs:light_oil", 30),
	], Fluid.of("ad_astra:oil", 100)).heated()

	event.recipes.create.mixing([Fluid.of("kubejs:light_oil", 30)], [Fluid.of("kubejs:heavy_oil", 40), Fluid.water(30)]).heated()
	event.recipes.create.compacting("kubejs:solid_fuel", Fluid.of("kubejs:heavy_oil", 100))

	event.recipes.create.compacting("kubejs:plastic_bar", Fluid.of("kubejs:light_oil", 100)).heated()
	event.custom({
		type: "ad_astra:refining",
		cookingtime: 1,
		energy: 30,
		input: {
			ingredient: { fluid: "kubejs:light_oil" },
			millibuckets: 10
		},
		result: {
			fluid: "ad_astra:fuel",
			millibuckets: 5
		}
	});


	// event.recipes.create.compacting("")
})