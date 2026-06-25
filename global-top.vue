<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const fixDuplicatedPath = () => {
  const currentPath = window.location.pathname
  // Checks if the repository name is duplicated in the window address bar
  if (currentPath.includes('/2026_daup_lecture_2/2026_daup_lecture_2/')) {
    const cleanPath = currentPath.replace('/2026_daup_lecture_2/2026_daup_lecture_2/', '/2026_daup_lecture_2/')
    const targetUrl = cleanPath + window.location.search + window.location.hash
    window.history.replaceState(null, '', targetUrl)
  }
}

onMounted(() => {
  fixDuplicatedPath()
  // Run the path correction sanitization script every time a slide changes transitions
  watch(() => router.currentRoute.value.fullPath, () => {
    setTimeout(fixDuplicatedPath, 10)
  })
})
</script>

<template>
  <div class="hidden-router-patch" />
</template>
