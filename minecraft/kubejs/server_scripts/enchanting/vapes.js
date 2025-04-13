// priority: 0

ServerEvents.recipes(event => {
	enchant_crafting(event, "potionvapes:inhaling", 4, "create_sa:steam_engine")
	enchant_crafting(event, "potionvapes:economical", 3, "create:pulp")
	enchant_crafting(event, "potionvapes:smoking", 5, "dragon_breath")
	enchant_crafting(event, "potionvapes:healthy", 4, "artifacts:crystal_heart", true)
})