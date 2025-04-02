StartupEvents.registry('fluid', event => {
	event.create('gravel_slurry')
		.thickTexture(0x676666)
		.bucketColor(0x676666)
		.displayName('Gravel Slurry')

	event.create('slurry_waste')
		.thickTexture(0x656E67)
		.bucketColor(0x656E67)
		.displayName('Slurry Waste')

	event.create('liquid_redstone')
		.thickTexture(0xfc0000)
		.bucketColor(0xfc0000)
		.displayName('Liquid Redstone')
})