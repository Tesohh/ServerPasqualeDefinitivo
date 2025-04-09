ItemEvents.modification(event => {
	event.modify('minecraft:ender_pearl', item => {
		item.maxStackSize = 64
	})

	event.modify('quark:soul_bead', item => {
		const ItemBuilder = Java.loadClass("dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder")
		const builder = new ItemBuilder("quark:soul_bead").glow(true)
		item.setItemBuilder(builder)
	})
})