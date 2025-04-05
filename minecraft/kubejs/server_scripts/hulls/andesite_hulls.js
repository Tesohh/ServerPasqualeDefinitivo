// priority: 0

ServerEvents.recipes(event => {
	let hull = "kubejs:andesite_machine_hull"
	hull_cutting(event, hull, "4x create:andesite_funnel", "create:crafting/logistics/andesite_funnel")
	hull_cutting(event, hull, "2x create:andesite_tunnel", "create:crafting/logistics/andesite_tunnel")
	hull_cutting(event, hull, "4x create:display_board", "create:crafting/kinetics/display_board")
	hull_cutting(event, hull, "2x create:portable_storage_interface", "create:crafting/kinetics/portable_storage_interface")
	hull_cutting(event, hull, "2x create:mechanical_harvester", "create:crafting/kinetics/mechanical_harvester")
	hull_cutting(event, hull, "2x create:mechanical_plough", "create:crafting/kinetics/mechanical_plough")
	hull_cutting(event, hull, "2x create:mechanical_roller", "create:crafting/kinetics/mechanical_roller")
	hull_cutting(event, hull, "2x create:contraption_controls", "create:crafting/kinetics/contraption_controls")

	hull_crafting(event, hull, "kubejs:copper_machine_hull", ["copper_ingot"], null)
	hull_crafting(event, hull, "kubejs:logistics_machine_hull", ["iron_ingot"], null)

	hull_crafting(event, hull, "createaddition:rolling_mill", ["create:shaft", "create:shaft"], "createaddition:crafting/rolling_mill")
	hull_crafting(event, hull, "create_mechanical_extruder:mechanical_extruder", ["piston"], "create_mechanical_extruder:crafting/mechanical_extruder")
	hull_crafting(event, hull, "create:mechanical_mixer", ["create:whisk"], "create:crafting/kinetics/mechanical_mixer")
	hull_crafting(event, hull, "create:mechanical_press", ["minecraft:iron_block"], "create:crafting/kinetics/mechanical_press")
	hull_crafting(event, hull, "create:mechanical_drill", ["minecraft:iron_pickaxe"], "create:crafting/kinetics/mechanical_drill")
	hull_crafting(event, hull, "create:mechanical_saw", ["minecraft:iron_axe"], "create:crafting/kinetics/mechanical_saw")
	hull_crafting(event, hull, "create:encased_fan", ["create:propeller"], "create:crafting/kinetics/encased_fan")
	hull_crafting(event, hull, "create:deployer", ["create:brass_hand"], "create:crafting/kinetics/deployer")

	hull_crafting(event, hull, "create:schematicannon", ["dispenser"], "create:crafting/schematics/schematicannon")
	hull_crafting(event, hull, "create_power_loader:empty_andesite_chunk_loader", ["respawn_anchor"], "create_power_loader:crafting/empty_andesite_chunk_loader")
	hull_crafting(event, hull, "create:empty_blaze_burner", ["netherrack"], "create:crafting/kinetics/empty_blaze_burner")

	hull_crafting(event, hull, "create:rope_pulley", ["#minecraft:wool", "create:iron_sheet"], "create:crafting/kinetics/rope_pulley")
	hull_crafting(event, hull, "create:cart_assembler", ["minecart", "redstone"], "create:crafting/kinetics/cart_assembler")
	hull_crafting(event, hull, "create:windmill_bearing", ["create:shaft", "#minecraft:slabs"], "create:crafting/kinetics/windmill_bearing")
	hull_crafting(event, hull, "create:mechanical_bearing", ["create:shaft", "create:andesite_casing"], "create:crafting/kinetics/mechanical_bearing")
	hull_crafting(event, hull, "create:mechanical_piston", ["create:piston_extension_pole", "#minecraft:slabs"], "create:crafting/kinetics/mechanical_piston")
	hull_crafting(event, hull, "create:redstone_link", ["create:transmitter"], "create:crafting/logistics/redstone_link")

	hull_crafting(event, hull, "waterframes:projector", ["glowstone", "amethyst_shard"], "waterframes:projector")
	hull_crafting(event, hull, "waterframes:tv", ["glowstone", "tinted_glass"], "waterframes:tv")
	hull_crafting(event, hull, "waterframes:big_tv", ["waterframes:tv", "waterframes:tv"], "waterframes:big_tv")
	hull_crafting(event, hull, "waterframes:frame", ["tinted_glass"], "waterframes:frame")

	hull_crafting(event, hull, "functionalstorage:storage_controller", ["diamond_block"], "functionalstorage:storage_controller")
	hull_crafting(event, hull, "functionalstorage:framed_storage_controller", ["diamond_block", "iron_nugget"], "functionalstorage:framed_storage_controller")
	hull_crafting(event, hull, "functionalstorage:controller_extension", ["diamond"], "functionalstorage:controller_extension")
	hull_crafting(event, hull, "functionalstorage:framed_controller_extension", ["diamond", "iron_nugget"], "functionalstorage:framed_controller_extension")
})