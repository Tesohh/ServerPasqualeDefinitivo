// priority: 0

ServerEvents.recipes(event => {
	let hull = "kubejs:train_machine_hull"
	hull_crafting(event, hull, "create:track_station", ["compass"], "create:crafting/kinetics/track_station")
	hull_crafting(event, hull, "2x create:track_observer", ["observer"], "create:crafting/kinetics/track_observer")
	hull_crafting(event, hull, "4x create:track_signal", ["create:electron_tube"], "create:crafting/kinetics/track_signal")
	hull_crafting(event, hull, "create:controls", ["lever", "lever"], "create:crafting/kinetics/controls")
})