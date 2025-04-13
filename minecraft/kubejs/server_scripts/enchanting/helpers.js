// priority: 1

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {string} enchant
 * @param {number} level
 * @param {InputItem_} ingredient
 */
function enchant_crafting(event, enchant, level, ingredient, keepHeldItem) {
	let recipe = event.recipes.create.deploying(
		[
			Item.of('minecraft:enchanted_book').withNBT({ StoredEnchantments: [{ id: enchant, lvl: level || 1 }] }),
			Item.of("endrem:cryptic_eye").withChance(0.01)
		],
		["kubejs:unenchanted_book", ingredient]
	)

	if (keepHeldItem) {
		recipe.keepHeldItem()
	}

	// let inter = "kubejs:unenchanted_book"
	// let steps = []

	// for (let ingredient of ingredients) {
	// 	let keep = ingredient.includes("KEEP")
	// 	ingredient = ingredient.replace("KEEP", "")
	// 	let deploy = event.recipes.create.deploying(inter, [inter, Item.of(ingredient)])
	// 	if (keep) deploy = deploy.keepHeldItem()
	// 	steps.push(deploy)
	// }
	// steps.push(event.recipes.create.deploying(inter, [inter, "kubejs:soul_inscriber"]).keepHeldItem())

	// event.recipes.create.sequenced_assembly(
	// 	Item.of('minecraft:enchanted_book').withNBT({ StoredEnchantments: [{ id: enchant, lvl: level || 1 }] }),
	// 	"kubejs:unenchanted_book",
	// 	steps,
	// ).transitionalItem(inter).loops(1)
}

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {string} enchant
 * @param {number} level
 * @param {Internal.InputFluid} ingredient
 */
function enchant_spouting(event, enchant, level, ingredient) {
	let recipe = event.recipes.create.filling(
		Item.of('minecraft:enchanted_book').withNBT({ StoredEnchantments: [{ id: enchant, lvl: level || 1 }] }),
		["kubejs:unenchanted_book", ingredient]
	)
}

function flowing_potion(effect, amount, level) {
	return Fluid.of("create:flowing_potion", amount || 250, { Potion: effect, Amplifier: (level || 1) })
}