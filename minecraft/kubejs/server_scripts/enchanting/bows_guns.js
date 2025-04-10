// priority: 0

ServerEvents.recipes(event => {
	enchant_crafting(event, "power", 5, "createoreexcavation:iron_drill")
	enchant_crafting(event, "punch", 2, "slime_block")
	enchant_crafting(event, "flame", 1, "blaze_rod")
	enchant_crafting(event, "infinity", 1, "nether_star")

	enchant_crafting(event, "piercing", 4, "spectral_arrow")
	enchant_spouting(event, "quick_charge", 4, flowing_potion("swiftness", 250))

	enchant_crafting(event, "jeg:collateral", 1, "jeg:rifle_ammo")
	enchant_spouting(event, "jeg:lightweight", 1, flowing_potion("leaping"))
	enchant_crafting(event, "jeg:collateral", 1, "createoreexcavation:diamond_drill")
	enchant_crafting(event, "jeg:overcapacity", 2, "jeg:drum_mag")
	enchant_crafting(event, "jeg:reclaimed", 2, "nether_remastered:bottled_nether_essence")
	enchant_crafting(event, "jeg:accelerator", 2, "artifacts:feral_claws", true)
	enchant_crafting(event, "jeg:quick_hands", 2, "jeg:boo_spawn_honeycomb")
	enchant_crafting(event, "jeg:puncturing", 4, "mowziesmobs:naga_fang_dagger")
	enchant_crafting(event, "jeg:trigger_finger", 2, "create:honeyed_apple")

	enchant_crafting(event, "multishot", 1, "relics:quiver", true)
	enchant_crafting(event, "jeg:infinity", 1, "sculk_catalyst")
	enchant_crafting(event, "jeg:withered", 7, "wither_skeleton_skull")
	enchant_crafting(event, "jeg:atlantic_shooter", 1, "trident")
	enchant_crafting(event, "jeg:fire_starter", 1, "jeg:blaze_round")
})