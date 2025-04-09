// priority: 0

ServerEvents.recipes(event => {
	event.shaped("kubejs:brass_machine_hull", ["EBE", "BHB", "BBB"], { E: "create:electron_tube", B: "create:brass_ingot", H: "kubejs:andesite_machine_hull" })
	event.shaped("kubejs:brass_machine_hull", ["ESE", "BHB", "   "], { E: "create:electron_tube", S: "kubejs:soul_enclosure", B: "create:brass_ingot", H: "kubejs:andesite_machine_hull" })

	let hull = "kubejs:brass_machine_hull"
	hull_crafting(event, hull, "kubejs:train_machine_hull", ["obsidian", "gold_ingot"], null)
})