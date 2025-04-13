// priority: 0

ServerEvents.recipes(event => {
	let hull = "kubejs:space_machine_hull"
	hull_crafting(event, hull, "ad_astra:radio", ["#ad_astra:steel_rods"], "ad_astra:radio")
	hull_crafting(event, hull, "ad_astra:coal_generator", ["furnace"], "ad_astra:coal_generator")
	hull_crafting(event, hull, "ad_astra:compressor", ["piston"], "ad_astra:compressor")
	hull_crafting(event, hull, "ad_astra:etrionic_blast_furnace", ["blast_furnace"], "ad_astra:etrionic_blast_furnace")
	hull_crafting(event, hull, "ad_astra:nasa_workbench", ["crafting_table", "ad_astra:steel_block"], "ad_astra:nasa_workbench")
	hull_crafting(event, hull, "ad_astra:fuel_refinery", ["furnace", "bucket"], "ad_astra:fuel_refinery")
	hull_crafting(event, hull, "ad_astra:oxygen_loader", ["ad_astra:gas_tank", "lightning_rod"], "ad_astra:oxygen_loader")
	hull_crafting(event, hull, "ad_astra:solar_panel", ["ad_astra:photovoltaic_etrium_cell", "ad_astra:photovoltaic_etrium_cell"], "ad_astra:solar_panel")
	hull_crafting(event, hull, "ad_astra:water_pump", ["ad_astra:desh_plate", "create:mechanical_pump"], "ad_astra:water_pump")
	hull_crafting(event, hull, "ad_astra:oxygen_distributor", ["ad_astra:desh_plate", "ad_astra:oxygen_loader"], "ad_astra:oxygen_distributor")
	hull_crafting(event, hull, "ad_astra:gravity_normalizer", ["ad_astra:desh_plate", "diamond_block"], "ad_astra:gravity_normalizer")
	hull_crafting(event, hull, "ad_astra:energizer", ["ad_astra:ostrum_block", "ad_astra:etrionic_capacitor"], "ad_astra:energizer")
	hull_crafting(event, hull, "ad_astra:cryo_freezer", ["ad_astra:ostrum_plate", "blue_ice"], "ad_astra:cryo_freezer")
	hull_crafting(event, hull, "ad_astra:oxygen_sensor", ["ad_astra:ostrum_plate", "observer"], "ad_astra:oxygen_sensor")
})