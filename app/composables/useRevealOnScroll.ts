/**
 * Observes an element and toggles `is-visible` when it enters the viewport.
 * Used for subtle section reveal animations.
 */
export function useRevealOnScroll(options: IntersectionObserverInit = {}) {
  const el = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  onMounted(() => {
    if (!el.value || !import.meta.client) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options },
    )

    observer.observe(el.value)
    onBeforeUnmount(() => observer.disconnect())
  })

  return { el, isVisible }
}
