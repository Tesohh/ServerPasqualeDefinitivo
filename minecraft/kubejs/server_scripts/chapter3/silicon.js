// priority: 0

ServerEvents.recipes(event => {
	event.recipes.create.mixing(Item.of("kubejs:raw_silicon_dust").withChance(0.02), "sand").heated()
	event.recipes.minecraft.smelting("kubejs:silicon_wafer", "kubejs:raw_silicon_dust").id("kubejs:silicon_dust_smelting_manual_only")

	event.recipes.create.deploying(Item.of("kubejs:engraved_ram_wafer"), ["kubejs:silicon_wafer", "kubejs:laser_ram_engraver"]).keepHeldItem()
	event.recipes.create.deploying(Item.of("kubejs:engraved_cpu_wafer"), ["kubejs:silicon_wafer", "kubejs:laser_cpu_engraver"]).keepHeldItem()

	event.recipes.create.cutting([
		Item.of("kubejs:ram_chip").withCount(8),
		Item.of("kubejs:ram_chip").withChance(0.2),
		Item.of("kubejs:ram_chip").withChance(0.2),
		Item.of("kubejs:ram_chip").withChance(0.2),
		Item.of("kubejs:ram_chip").withChance(0.2),
		Item.of("kubejs:ram_chip").withChance(0.2),
		Item.of("kubejs:ram_chip").withChance(0.2),
		Item.of("kubejs:ram_chip").withChance(0.2),
		Item.of("kubejs:ram_chip").withChance(0.2),
	], Item.of("kubejs:engraved_ram_wafer"))

	event.recipes.create.cutting([
		Item.of("kubejs:cpu_chip").withCount(8),
		Item.of("kubejs:cpu_chip").withChance(0.2),
		Item.of("kubejs:cpu_chip").withChance(0.2),
		Item.of("kubejs:cpu_chip").withChance(0.2),
		Item.of("kubejs:cpu_chip").withChance(0.2),
		Item.of("kubejs:cpu_chip").withChance(0.2),
		Item.of("kubejs:cpu_chip").withChance(0.2),
		Item.of("kubejs:cpu_chip").withChance(0.2),
		Item.of("kubejs:cpu_chip").withChance(0.2),
	], Item.of("kubejs:engraved_cpu_wafer"))

	event.shaped("kubejs:laser_ram_engraver", [" T ", "N  "], { T: "voidscape:titanite_shard", N: "netherite_ingot" })
	event.shaped("kubejs:laser_cpu_engraver", [" T ", "N  "], { T: "voidscape:titanite_shard", N: "netherite_ingot" })

	let inter = "kubejs:incomplete_microcontroller"
	event.recipes.create.sequenced_assembly("kubejs:microcontroller", "kubejs:plastic_bar",
		[
			event.recipes.create.deploying(inter, [inter, "createaddition:copper_wire"]),
			event.recipes.create.deploying(inter, [inter, "createaddition:copper_wire"]),
			event.recipes.create.deploying(inter, [inter, "kubejs:cpu_chip"]),
			event.recipes.create.deploying(inter, [inter, "kubejs:ram_chip"]),
		]
	).transitionalItem(inter).loops(1)
})