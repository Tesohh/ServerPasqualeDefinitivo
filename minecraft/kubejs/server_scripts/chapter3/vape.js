// priority: 0

ServerEvents.recipes(event => {
	console.log('adding vape recipe')
	event.recipes.create.mechanical_crafting("potionvapes:creative_vape", [
		"     sO",
		"     PO",
		"TTccccc",
		"MMNDNBB",
		"MMDVDBB",
		"MMNDNBB",
		"MMKKKRR",
		"MMKKKRR",
		"CCCCSSS",
	], {
		V: "potionvapes:reinforced_vape",
		D: "ad_astra:desh_block",
		N: "minecraft:netherite_block",
		C: "createaddition:copper_wire",
		M: "kubejs:microcontroller",
		S: "kubejs:soul_enclosure",
		B: "kubejs:basic_mechanism",
		R: "minecraft:redstone_block",
		T: "create:transmitter",
		c: "#kubejs:capacitors",
		s: "createaddition:straw",
		P: "create:mechanical_pump",
		O: "ad_astra:oxygen_distributor",
		K: "create_sa:large_fueling_tank"
	})
})