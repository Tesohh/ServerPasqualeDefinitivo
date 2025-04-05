// priority: 0

ServerEvents.recipes(event => {
	let hull = "kubejs:logistics_machine_hull"
	hull_cutting(event, hull, "create:item_hatch", "create:crafting/logistics/item_hatch")

	hull_crafting(event, hull, "create:package_frogport", ["minecraft:string", "#forge:slimeballs"], "create:crafting/logistics/package_frogport")
	hull_crafting(event, hull, "create:package_frogport", ["minecraft:lead"], "create:crafting/logistics/package_frogport")

	hull_crafting(event, hull, "create:packager", ["create:cardboard_block"], "create:crafting/logistics/packager")
	hull_crafting(event, hull, "create:stock_link", ["create:transmitter"], "create:crafting/logistics/stock_link")
	hull_crafting(event, hull, "create:stock_ticker", ["create:transmitter", "comparator"], "create:crafting/logistics/stock_ticker")
	hull_crafting(event, hull, "4x create:factory_gauge", ["create:transmitter", "observer"], "create:crafting/logistics/factory_gauge")
	hull_crafting(event, hull, "create:redstone_requester", ["create:transmitter", "redstone"], "create:crafting/logistics/redstone_requester")
})