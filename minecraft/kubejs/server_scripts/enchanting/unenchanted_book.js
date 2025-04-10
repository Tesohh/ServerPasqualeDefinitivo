// priority: 0

ServerEvents.recipes(event => {
	let inter = "book"
	let filling = event.recipes.create.filling(inter, ["book", Fluid.of("create_enchantment_industry:flowing_experience").withAmount(25)])
	let inscribing = event.recipes.create.deploying(inter, [inter, "kubejs:soul_inscriber"])

	event.recipes.create.sequenced_assembly(
		"kubejs:unenchanted_book",
		"book",
		[filling, inscribing]
	).transitionalItem(inter).loops(1)
})
