MoreJSEvents.registerPotionBrewing((event) => {
	event.addPotionBrewing("minecraft:glow_berries", "minecraft:awkward", "kubejs:haste");
	event.addPotionBrewing("minecraft:redstone", "kubejs:haste", "kubejs:long_haste");
	event.addPotionBrewing("minecraft:glowstone_dust", "kubejs:haste", "kubejs:strong_haste");
})