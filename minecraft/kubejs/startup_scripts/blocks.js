function hull(event, id, name, model) {
	event.create(id)
		.displayName(name)
		.model(model)
}

StartupEvents.registry('block', event => {
	event.create("mysterious_piglin_treasure").displayName("Mysterious Piglin Treasure").model("quark:block/golden_apple_crate")

	hull(event, "andesite_machine_hull", "Andesite Machine Hull", "createframed:block/andesite_alloy_window")
	hull(event, "logistics_machine_hull", "Logistics Machine Hull", "createframed:block/industrial_iron_window")
	hull(event, "copper_machine_hull", "Copper Machine Hull", "createframed:block/copper_window")
	hull(event, "brass_machine_hull", "Brass Machine Hull", "create_sa:block/brass_cube")
	hull(event, "train_machine_hull", "Train Machine Hull", "minecraft:block/reinforced_deepslate")
})