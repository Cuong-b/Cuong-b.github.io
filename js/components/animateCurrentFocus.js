import { createFocusCycler } from '../lib/focusCycle.js';

/**
 * Enhances a Current Focus <ul> so its items cycle one at a time.
 * No-ops (leaving the static list visible) when there's nothing to
 * cycle through or the visitor has requested reduced motion.
 */
export function animateCurrentFocus(list, { intervalMs = 2000 } = {}) {
    if (!list) return null;

    const items = Array.from(list.children);
    if (items.length < 2) return null;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return null;

    list.classList.add('is-cycling');

    function setActive(index) {
        items.forEach((item, i) => item.classList.toggle('is-active', i === index));
    }

    const cycler = createFocusCycler({
        length: items.length,
        intervalMs,
        onChange: setActive,
    });

    cycler.start();
    return cycler;
}
