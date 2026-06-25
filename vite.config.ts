import { defineConfig } from 'vite'

export default defineConfig({
	// Forces all asset assets paths to be built relative to index.html
	base: './',
	build: {
		assetsDir: 'assets',
	}
})
