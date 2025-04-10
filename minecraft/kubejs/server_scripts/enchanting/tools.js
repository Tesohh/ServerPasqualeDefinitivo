// priority: 0

ServerEvents.recipes(event => {
	enchant_spouting(event, "efficiency", 5, "artifacts:onion_ring", true)
	enchant_crafting(event, "silk_touch", 1, "brush")
	enchant_crafting(event, "fortune", 3, "artifacts:lucky_scarf", true)
})