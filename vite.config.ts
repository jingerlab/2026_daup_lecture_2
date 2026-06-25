import { defineConfig } from 'vite'

export default defineConfig({
	// Must have BOTH a leading and a trailing slash!
	base: '/2026_daup_lecture_2/',
	slidev: { routerMode: 'hash' },
	build: {
		assetsDir: 'assets'
	}
})
