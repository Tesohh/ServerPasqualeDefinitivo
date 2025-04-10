// priority: 0

ServerEvents.recipes(event => {
	enchant_spouting(event, "efficiency", 4, "artifacts:onion_ring")
	enchant_spouting(event, "efficiency", 5, "artifacts:digging_claws", true)
	enchant_crafting(event, "silk_touch", 1, "brush")
	enchant_crafting(event, "fortune", 3, "artifacts:lucky_scarf", true)
})