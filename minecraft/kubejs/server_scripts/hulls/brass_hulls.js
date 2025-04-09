// priority: 0

ServerEvents.recipes(event => {
	let hull = "kubejs:brass_machine_hull"
	event.replaceInput("*", "create:precision_mechanism", "kubejs:soul_enclosure")
	event.remove({ id: "createaddition:crafting/modular_accumulator_electrum" })

	hull_cutting(event, hull, "4x create:brass_funnel", "create:crafting/logistics/brass_funnel")
	hull_cutting(event, hull, "2x create:brass_tunnel", "create:crafting/logistics/brass_tunnel")
	hull_cutting(event, hull, "create:mechanical_arm", "create:crafting/kinetics/mechanical_arm")
	hull_cutting(event, hull, "create:rotation_speed_controller", "create:crafting/kinetics/rotation_speed_controller")

	hull_crafting(event, hull, "create:elevator_pulley", ["#minecraft:wool", "create:iron_sheet"], "create:crafting/kinetics/elevator_pulley")
	hull_crafting(event, hull, "create:display_link", ["create:transmitter"], "create:crafting/logistics/display_link")
	hull_crafting(event, hull, "create:smart_chute", ["create:chute"], "create:crafting/kinetics/smart_chute")
	hull_crafting(event, hull, "3x create:mechanical_crafter", ["crafting_table"], "create:crafting/kinetics/mechanical_crafter")

	hull_crafting(event, hull, "create:sequenced_gearshift", ["create:cogwheel"], "create:crafting/kinetics/sequenced_gearshift")
	hull_crafting(event, hull, "create:stockpile_switch", ["comparator"], "create:crafting/logistics/stockpile_switch")
	hull_crafting(event, hull, "create:content_observer", ["observer"], "create:crafting/logistics/content_observer")
	hull_crafting(event, hull, "create:clockwork_bearing", ["create:shaft", "#minecraft:slabs"], "create:crafting/kinetics/clockwork_bearing")

	hull_crafting(event, hull, "create_power_loader:empty_brass_chunk_loader", ["respawn_anchor"], "create_power_loader:crafting/empty_brass_chunk_loader")
	hull_crafting(event, hull, "createaddition:portable_energy_interface", ["create:chute", "createaddition:copper_spool"], "createaddition:crafting/portable_energy_interface")
	hull_crafting(event, hull, "createaddition:modular_accumulator", ["createaddition:capacitor", "createaddition:gold_wire"], "createaddition:crafting/modular_accumulator_gold")
	hull_crafting(event, hull, "createaddition:tesla_coil", ["createaddition:modular_accumulator", "createaddition:copper_spool"], "createaddition:mechanical_crafting/tesla_coil")
})