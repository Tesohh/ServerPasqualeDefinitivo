StartupEvents.registry('item', event => {
	event.create("engineers_hammer").displayName("Engineer's Hammer")

	event.create("incomplete_basic_mechanism").texture("create_sa:item/heat_engine").displayName("Incomplete Basic Mechanism")
	event.create("basic_mechanism").texture("create_sa:item/heat_engine").displayName("Basic Mechanism")

	event.create("incomplete_soul_enclosure").texture("create_sa:item/small_filling_tank").displayName("Incomplete Soul Enclosure")
	event.create("soul_enclosure").texture("create_sa:item/small_filling_tank").displayName("Soul Enclosure")

	event.create("incomplete_microcontroller").texture("jeg:item/circuit_board").displayName("Incomplete Microcontroller")
	event.create("microcontroller").texture("jeg:item/circuit_board").displayName("Microcontroller")
})

