
ServerEvents.recipes(event => {
	event.recipes.createoreexcavation.vein('{"text": "Oil well"}', 'ad_astra:oil_bucket')
		.placement(256, 64, 64825185)
		.alwaysInfinite()
		.id("kubejs:oil_well")
	event.recipes.createoreexcavation.extracting(Fluid.of('ad_astra:oil', 25), 'kubejs:oil_well', 20).id("kubejs:oil_extraction")
})