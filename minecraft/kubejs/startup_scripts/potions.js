/**
 * 
 * @param {Registry.Potion} event 
 * @param {string} name 
 * @param {string} effect 
 * @param {number} duration 
 * @param {number} long_duration 
 * @param {number} strong_duration 
 */
function create_custom_potion(event, name, displayName, effect, duration, long_duration, strong_duration) {
	event.create(name).effect(
		effect,
		20 * duration,
		0
	).displayName(displayName)

	event.create("long_" + name).effect(
		effect,
		20 * long_duration,
		0
	).displayName(displayName)

	if (strong_duration != undefined)
		event.create("strong_" + name).effect(
			effect,
			20 * strong_duration,
			1
		).displayName(displayName)
}

StartupEvents.registry("potion", (event) => {
	create_custom_potion(event, "haste", "Potion of Haste", "minecraft:haste", 180, 480, 90)
})