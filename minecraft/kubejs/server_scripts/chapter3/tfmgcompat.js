// priority: 0

ServerEvents.tags('item', event => {
	event.add("kubejs:copper_spools", "tfmg:copper_cable")
	event.add("kubejs:copper_spools", "createaddition:copper_spool")
	event.add("kubejs:capacitors", "tfmg:capacitor_")
	event.add("kubejs:capacitors", "createaddition:capacitor")
})

ServerEvents.recipes(event => {
	event.replaceInput("*", "tfmg:copper_cable", "#kubejs:copper_spools")
	event.replaceInput("*", "createaddition:copper_spool", "#kubejs:copper_spools")
	event.replaceInput("*", "createaddition:capacitor", "#kubejs:capacitors")
	event.replaceInput("*", "tfmg:capacitor_", "#kubejs:capacitors")
})