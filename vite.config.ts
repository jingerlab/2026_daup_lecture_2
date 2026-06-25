import { defineConfig } from 'vite'

export default defineConfig({
	// Tells Vite your exact repository subdirectory path
	base: '/2026_daup_lecture_2/',
	build: {
		assetsDir: 'assets',
		// Keeps chunk warning logs quiet for large extensions like Monaco/Shiki
		chunkSizeWarningLimit: 10000,
	}
})
