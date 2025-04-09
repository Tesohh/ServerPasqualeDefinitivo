StartupEvents.registry('item', event => {
	event.create("blaze_core").glow(true).displayName("Blaze Core")

	event.create("engineers_hammer").displayName("Engineer's Hammer")
	event.create("soul_inscriber").glow(true).displayName("Soul Inscriber")

	event.create("incomplete_basic_mechanism").texture("create_sa:item/heat_engine").displayName("Incomplete Basic Mechanism")
	event.create("basic_mechanism").texture("create_sa:item/heat_engine").glow(true).displayName("Basic Mechanism")

	event.create("dead_soul_bead").texture("quark:item/soul_bead").displayName("Dead Soul Bead")
	event.create("incomplete_soul_enclosure").texture("create_sa:item/small_filling_tank").displayName("Incomplete Soul Enclosure")
	event.create("soul_enclosure").texture("create_sa:item/small_filling_tank").glow(true).displayName("Soul Enclosure")

	event.create("incomplete_microcontroller").texture("jeg:item/circuit_board").displayName("Incomplete Microcontroller")
	event.create("microcontroller").texture("jeg:item/circuit_board").glow(true).displayName("Microcontroller")
})

