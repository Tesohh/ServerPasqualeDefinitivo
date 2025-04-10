// priority: 0

ServerEvents.recipes(event => {
	enchant_spouting(event, "sharpness", 3, flowing_potion("strength", 250))
	enchant_crafting(event, "smite", 5, "glistering_melon_slice")
	enchant_crafting(event, "bane_of_arthropods", 5, "redstone_block")

	enchant_crafting(event, "knockback", 2, "mowziesmobs:wrought_axe", true)
	enchant_crafting(event, "fire_aspect", 1, "kubejs:blaze_core")
	enchant_crafting(event, "looting", 3, "artifacts:superstitious_hat", true)
	enchant_crafting(event, "sweeping_edge", 3, "create:piston_extension_pole")
})