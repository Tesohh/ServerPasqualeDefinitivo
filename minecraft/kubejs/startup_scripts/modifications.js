ItemEvents.modification(event => {
	event.modify('minecraft:ender_pearl', item => {
		item.maxStackSize = 64
	})
	// event.modify("kubejs:basic_mechanism", item => {
	// 	item.ench
	// })
})