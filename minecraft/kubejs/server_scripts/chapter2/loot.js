LootJS.modifiers((event) => {
	event
		.addEntityLootModifier("minecraft:blaze")
		.randomChance(0.1)
		.addLoot("kubejs:blaze_core");
	event
		.addEntityLootModifier("minecraft:wither_skeleton")
		.randomChance(0.1)
		.addLoot("minecraft:wither_skeleton_skull");
	event
		.addEntityLootModifier("minecraft:piglin_brute")
		.addLoot("kubejs:mysterious_piglin_treasure");
});