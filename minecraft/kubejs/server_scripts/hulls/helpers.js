// priority: 1

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {InputItem_} hull 
 * @param {InputItem_} output 
 * @param {(InputItem_)[]} additions
 * @param {Special.RecipeId | null} recipe_id 
 */
function hull_crafting(event, hull, output, additions, recipe_id) {
	if (recipe_id != null) {
		event.remove({ id: recipe_id })
	}
	let row = "ABC"
	let translation = { A: hull, B: additions[0] || "", C: additions[1] || "" }
	event.shaped(output, [row, "   ", "   "], translation)
}

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {InputItem_} hull 
 * @param {OutputItem_} output 
 * @param {Special.RecipeId | null} recipe_id 
 */
function hull_cutting(event, hull, output, recipe_id) {
	if (recipe_id != null) {
		event.remove({ id: recipe_id })
	}
	event.stonecutting(output, hull)
}