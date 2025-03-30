StartupEvents.registry('fluid', event => {
	// Basic "thick" (looks like lava) fluid with red tint
	event.create('liquid_redstone')
		.thickTexture(0xfc0000)
		.bucketColor(0xfc0000)
		.displayName('Liquid Redstone')
})