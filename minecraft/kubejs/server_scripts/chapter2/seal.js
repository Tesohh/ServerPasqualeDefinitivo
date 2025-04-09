// priority: 0

let shards = ["nether_remastered:seal_piece_1", "nether_remastered:seal_piece_2", "nether_remastered:seal_piece_3", "nether_remastered:seal_piece_4"]

/** @param {Internal.RecipesEventJS} event */
function make_any_shard_to_any(event) {
	for (let new_shard of shards) {
		for (let old_shard of shards) {
			event.shapeless(new_shard, old_shard)
		}
	}
}

ServerEvents.recipes(event => {
	make_any_shard_to_any(event)

	let inter = "emerald"
	event.recipes.create.sequenced_assembly([Item.of("nether_remastered:seal_crystal")], "emerald",
		[
			event.recipes.create.deploying(inter, [inter, 'obsidian']),
			event.recipes.create.deploying(inter, [inter, 'obsidian']),
			event.recipes.create.deploying(inter, [inter, 'obsidian']),
			event.recipes.create.deploying(inter, [inter, Item.of('kubejs:engineers_hammer')]).keepHeldItem()
		],
	).transitionalItem(inter).loops(1)

	event.shaped("2x nether_remastered:seal_of_the_underworld_item", [
		"GGG",
		"GSG",
		"GGG"
	], {
		G: "gold_ingot",
		S: "nether_remastered:seal_of_the_underworld_item",
	})

	inter = "emerald"
	event.recipes.create.sequenced_assembly([Item.of("nether_remastered:seal_crystal")], "emerald",
		[
			event.recipes.create.deploying(inter, [inter, 'obsidian']),
			event.recipes.create.deploying(inter, [inter, 'obsidian']),
			event.recipes.create.deploying(inter, [inter, 'obsidian']),
			event.recipes.create.deploying(inter, [inter, Item.of('kubejs:engineers_hammer')]).keepHeldItem()
		],
	).transitionalItem(inter).loops(1)

	event.shaped("2x nether_remastered:seal_of_the_underworld_item", [
		"GGG",
		"GSG",
		"GGG"
	], {
		G: "gold_ingot",
		S: "nether_remastered:seal_of_the_underworld_item",
	})
})