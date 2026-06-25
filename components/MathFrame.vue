<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  // 🎨 Custom Global Theme Color (e.g., '#818cf8', 'white')
  color: { type: String, default: '#6366f1' },
  // ✨ Max count of stars per slide layer
  starCount: { type: Number, default: 180 },
  // ⏱️ Twinkle speed modifier (Lower = slower)
  twinkleSpeed: { type: Number, default: 0.004 },
  // 🌙 Hide-and-seek cycle speed
  moonCycleSpeed: { type: Number, default: 0.003 },
  // 🔴 3x Larger default size (up from 5)
  moonSize: { type: Number, default: 16 }
})

const canvasRef = ref(null)
const containerRef = ref(null)
let animationId = null
let isRunning = true
let stars = []

// Moon state positions
let moonX = 0
let moonY = 0
let moonAlpha = 0
let moonPhase = 0

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  const container = containerRef.value
  isRunning = true

  const resize = () => {
    if (!container || !canvas) return
    const w = container.clientWidth || 980
    const h = container.clientHeight || 552
    const dpr = window.devicePixelRatio || 1
    canvas.width = w * dpr
    canvas.height = h * dpr
    ctx.scale(dpr, dpr)
    
    // 🎲 Generates a brand-new, unique sky fingerprint every time the slide mounts/loads
    initProceduralStars(w, h)
    pickNewMoonPosition(w, h)
  }

  const pickNewMoonPosition = (w, h) => {
    const padding = 45
    const side = Math.floor(Math.random() * 4)
    
    if (side === 0) {
      moonX = padding + Math.random() * (w - padding * 2)
      moonY = padding
    } else if (side === 1) {
      moonX = w - padding
      moonY = padding + Math.random() * (h - padding * 2)
    } else if (side === 2) {
      moonX = padding + Math.random() * (w - padding * 2)
      moonY = h - padding
    } else {
      moonX = padding
      moonY = padding + Math.random() * (h - padding * 2)
    }
  }

  const initProceduralStars = (w, h) => {
    stars = []
    const centerX = w / 2
    const centerY = h / 2

    for (let i = 0; i < props.starCount; i++) {
      let x = Math.random() * w
      let y = Math.random() * h

      // Calculate distance from center to push stars heavily to the boundaries
      const distX = Math.abs(x - centerX)
      const distY = Math.abs(y - centerY)
      const horizontalFrameLimit = w * 0.38
      const verticalFrameLimit = h * 0.35

      // 🚀 BOUNDARY DENSITY BIAS 🚀
      // If a randomly rolled star falls into the center text area, 
      // we give it an 85% chance to be re-rolled directly onto the boundary edges instead.
      if (distX < horizontalFrameLimit && distY < verticalFrameLimit && Math.random() < 0.85) {
        const edge = Math.floor(Math.random() * 4)
        const offset = 35
        if (edge === 0) { x = Math.random() * w; y = Math.random() * offset } // Top thick band
        else if (edge === 1) { x = w - Math.random() * offset; y = Math.random() * h } // Right thick band
        else if (edge === 2) { x = Math.random() * w; y = h - Math.random() * offset } // Bottom thick band
        else { x = Math.random() * offset; y = Math.random() * h } // Left thick band
      }

      stars.push({
        x,
        y,
        size: 0.4 + Math.random() * 1.3,
        phase: Math.random() * Math.PI * 2,
        twinkleOffset: 0.005 + Math.random() * 0.02 // Unique individual speeds
      })
    }
  }

  resize()
  window.addEventListener('resize', resize)

  const draw = () => {
    if (!isRunning || !canvas || !ctx || !container) return

    const w = container.clientWidth
    const h = container.clientHeight

    ctx.clearRect(0, 0, w, h)

    const isDark = document.documentElement.classList.contains('dark')
    const activeColor = props.color || (isDark ? '#818cf8' : '#4f46e5')

    // Ambient space canvas background
    if (isDark) {
      const bgGradient = ctx.createRadialGradient(w/2, h/2, 50, w/2, h/2, w)
      bgGradient.addColorStop(0, '#030308')
      bgGradient.addColorStop(1, '#010103')
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, w, h)
    }

    // --- 1. RENDER TWINKLING BOUNDARY STARS ---
    const centerX = w / 2
    const centerY = h / 2

    stars.forEach(s => {
      s.phase += props.twinkleSpeed + s.twinkleOffset
      const baseAlpha = 0.15 + (Math.sin(s.phase) * 0.65)

      const distX = Math.abs(s.x - centerX)
      const distY = Math.abs(s.y - centerY)
      const horizontalFrameLimit = w * 0.38
      const verticalFrameLimit = h * 0.35

      let boundaryModifier = 1.0
      if (distX < horizontalFrameLimit && distY < verticalFrameLimit) {
        const fadeX = Math.max(0, distX / horizontalFrameLimit)
        const fadeY = Math.max(0, distY / verticalFrameLimit)
        boundaryModifier = Math.pow(Math.max(fadeX, fadeY), 4) * 0.08 // Extreme center suppression
      }

      ctx.save()
      ctx.globalAlpha = isDark ? baseAlpha * boundaryModifier : baseAlpha * 0.03
      ctx.fillStyle = isDark ? '#ffffff' : activeColor
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })

    // --- 2. RENDER THE BLURRY GLOWING MOON ---
    moonPhase += props.moonCycleSpeed
    moonAlpha = (Math.sin(moonPhase) + 1) / 2

    if (moonAlpha < 0.002 && Math.cos(moonPhase) < 0) {
      pickNewMoonPosition(w, h)
      moonPhase = -Math.PI / 2
    }

    ctx.save()
    ctx.globalAlpha = isDark ? moonAlpha * 0.90 : moonAlpha * 0.50

    // 🚀 SOFT RADIAL BLUR MASKING 🚀
    // Instead of drawing a solid circle, we build a multi-stop gradient inside the moon radius.
    // It starts fully solid at the center nucleus and drops smoothly to 0% opacity at the edge.
    const moonGlow = ctx.createRadialGradient(moonX, moonY, 1, moonX, moonY, props.moonSize)
    
    const baseMoonColor = isDark ? '255, 255, 255' : '79, 70, 229' // Crisp white vs theme indigo
    moonGlow.addColorStop(0, `rgba(${baseMoonColor}, 1.0)`)     // Sharp center core
    moonGlow.addColorStop(0.2, `rgba(${baseMoonColor}, 0.6)`)   // Smooth feathering start
    moonGlow.addColorStop(0.6, `rgba(${baseMoonColor}, 0.25)`)  // Secondary outer aura
    moonGlow.addColorStop(1, `rgba(${baseMoonColor}, 0.0)`)     // Completely vanishes (blurry edge)

    ctx.fillStyle = moonGlow
    ctx.beginPath()
    ctx.arc(moonX, moonY, props.moonSize, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    animationId = requestAnimationFrame(draw)
  }

  draw()

  onUnmounted(() => {
    isRunning = false
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
  })
})
</script>

<template>
  <div ref="containerRef" class="absolute inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
    <canvas ref="canvasRef" class="block w-full h-full select-none" />
  </div>
</template>
