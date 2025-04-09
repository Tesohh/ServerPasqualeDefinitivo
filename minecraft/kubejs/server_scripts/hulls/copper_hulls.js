// priority: 0

ServerEvents.recipes(event => {
	let hull = "kubejs:copper_machine_hull"
	hull_cutting(event, hull, "create:smart_fluid_pipe", "create:crafting/kinetics/smart_fluid_pipe")
	hull_cutting(event, hull, "create:fluid_valve", "create:crafting/kinetics/fluid_valve")
	hull_cutting(event, hull, "create:hose_pulley", "create:crafting/kinetics/hose_pulley")
	hull_cutting(event, hull, "create:portable_fluid_interface", "create:crafting/kinetics/portable_fluid_interface")

	hull_crafting(event, hull, "create:item_drain", ["minecraft:iron_bars"], "create:crafting/kinetics/item_drain")
	hull_crafting(event, hull, "create:spout", ["minecraft:dried_kelp"], "create:crafting/kinetics/spout")
	hull_crafting(event, hull, "create_enchantment_industry:disenchanter", ["#create:sandpaper"], "create_enchantment_industry:crafting/disenchanter")
	hull_crafting(event, hull, "create_enchantment_industry:printer", ["minecraft:dried_kelp", "minecraft:paper"], "create_enchantment_industry:crafting/printer")
	hull_crafting(event, hull, "create:steam_engine", ["create:shaft", "create:golden_sheet"], "create:crafting/kinetics/steam_engine")
})