import { useTheme } from 'vuetify'

type ViewTransition = {
  finished: Promise<void>
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (updateCallback: () => void) => ViewTransition
}

/**
 * Smooth theme switching with View Transitions API when available,
 * plus a short CSS class fallback for browsers without support.
 */
export function useThemeTransition() {
  const theme = useTheme()
  const isAnimating = ref(false)

  const isDark = computed(() => theme.global.current.value.dark)

  const applyTheme = (next: string) => {
    theme.global.name.value = next
  }

  const toggleTheme = async () => {
    if (!import.meta.client || isAnimating.value) return

    const next = isDark.value ? 'myCustomTheme' : 'dark'
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      applyTheme(next)
      return
    }

    isAnimating.value = true
    const root = document.documentElement
    root.classList.add('theme-is-changing')

    const run = () => applyTheme(next)

    try {
      const doc = document as DocumentWithViewTransition

      if (typeof doc.startViewTransition === 'function') {
        const transition = doc.startViewTransition(run)
        await transition.finished
      }
      else {
        run()
        await new Promise(resolve => setTimeout(resolve, 520))
      }
    }
    finally {
      root.classList.remove('theme-is-changing')
      isAnimating.value = false
    }
  }

  return {
    isDark,
    isAnimating,
    toggleTheme,
  }
}
