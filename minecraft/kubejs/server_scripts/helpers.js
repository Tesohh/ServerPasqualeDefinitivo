// priority: 1

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {OutputItem_} output 
 * @param {InputItem_} input 
 * @param {number} energy
 */
function charging_recipe(event, output, input, energy) {
	event.custom({
		type: "createaddition:charging",
		input: { item: input },
		result: { item: output },
		energy: energy
	});
}