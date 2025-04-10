// priority: 0

ServerEvents.recipes(event => {
	enchant_crafting(event, "protection", 4, "netherite_ingot")
	enchant_crafting(event, "fire_protection", 4, "magma_cream")
	enchant_crafting(event, "blast_protection", 4, "obsidian")
	enchant_crafting(event, "projectile_protection", 4, "shield")

	enchant_crafting(event, "feather_falling", 4, "artifacts:cloud_in_a_bottle", true)
	enchant_crafting(event, "respiration", 3, "create:copper_backtank")
	enchant_crafting(event, "thorns", 3, "artifacts:thorn_pendant", true)
	enchant_crafting(event, "depth_strider", 3, "create:copper_diving_boots")
	enchant_crafting(event, "aqua_affinity", 1, "create:copper_diving_helmet")
})