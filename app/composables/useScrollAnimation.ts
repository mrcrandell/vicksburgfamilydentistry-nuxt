import { nextTick, onMounted, onUnmounted, readonly, type Ref, ref } from "vue";

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  animationClass?: string;
  once?: boolean;
}

const defaultOptions: ScrollAnimationOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -10px 0px",
  delay: 0,
  animationClass: "animate-zoom-in",
  once: true,
};

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const finalOptions = { ...defaultOptions, ...options };
  const isVisible = ref(false);
  const target: Ref<HTMLElement | null> = ref(null);
  let observer: IntersectionObserver | null = null;
  let timeoutId: number | null = null;

  // Check if user prefers reduced motion
  const prefersReducedMotion = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  };

  const applyAnimation = (element: HTMLElement) => {
    if (prefersReducedMotion()) {
      // If user prefers reduced motion, just apply the final state without animation
      element.classList.add("animate-complete");
      return;
    }

    if (finalOptions.delay && finalOptions.delay > 0) {
      timeoutId = window.setTimeout(() => {
        element.classList.add(finalOptions.animationClass!);
      }, finalOptions.delay);
    } else {
      element.classList.add(finalOptions.animationClass!);
    }
  };

  const observeElement = () => {
    if (
      !target.value || typeof window === "undefined" ||
      !(target.value instanceof Element)
    ) return;

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          isVisible.value = true;
          applyAnimation(entry.target as HTMLElement);

          if (finalOptions.once) {
            observer?.unobserve(entry.target);
          }
        } else if (!finalOptions.once) {
          isVisible.value = false;
          entry.target.classList.remove(finalOptions.animationClass!);
          if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }
        }
      },
      {
        threshold: finalOptions.threshold,
        rootMargin: finalOptions.rootMargin,
      },
    );

    observer.observe(target.value);
  };

  onMounted(() => {
    nextTick(() => {
      if (target.value) {
        observeElement();
      }
    });
  });

  onUnmounted(() => {
    if (observer && target.value) {
      observer.unobserve(target.value);
      observer.disconnect();
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });

  return {
    target,
    isVisible: readonly(isVisible),
  };
};

// Utility function for multiple elements with staggered animations
export const useStaggeredScrollAnimation = (
  count: number,
  baseOptions: ScrollAnimationOptions = {},
  staggerDelay: number = 100,
) => {
  const animations: {
    target: Ref<HTMLElement | null>;
    isVisible: Readonly<Ref<boolean>>;
  }[] = [];

  for (let i = 0; i < count; i++) {
    const options = {
      ...baseOptions,
      delay: (baseOptions.delay || 0) + (i * staggerDelay),
    };
    animations.push(useScrollAnimation(options));
  }

  return animations;
};
