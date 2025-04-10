// priority: 0

ServerEvents.recipes(event => {
	enchant_crafting(event, "create:capacity", 3, "sophisticatedbackpacks:stack_upgrade_starter_tier")
	enchant_crafting(event, "create:potato_recovery", 3, "quark:potato_crate")
	enchant_crafting(event, "create_sa:above_the_clouds", 1, "quark:bottled_cloud")
	enchant_crafting(event, "create_sa:impact", 3, "tnt")
	enchant_crafting(event, "create_sa:digging", 1, "createoreexcavation:netherite_drill")
	enchant_spouting(event, "create_sa:gravity_gun", 1, flowing_potion("slow_falling"))
	enchant_spouting(event, "create_sa:hellfire", 1, Fluid.lava(1000))
})