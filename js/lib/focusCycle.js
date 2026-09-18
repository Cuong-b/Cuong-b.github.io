/**
 * Pure cycling logic for the Current Focus animation, kept free of DOM
 * dependencies so it can be unit tested directly (see /tests).
 */

export function nextIndex(current, length) {
    if (length <= 0) return 0;
    return (current + 1) % length;
}

export function createFocusCycler({ length, intervalMs = 2000, onChange }) {
    let index = 0;
    let timer = null;

    function tick() {
        index = nextIndex(index, length);
        onChange(index);
    }

    function start() {
        if (timer !== null || length <= 1) return;
        onChange(index);
        timer = setInterval(tick, intervalMs);
    }

    function stop() {
        if (timer !== null) {
            clearInterval(timer);
            timer = null;
        }
    }

    return {
        start,
        stop,
        getIndex: () => index,
        isRunning: () => timer !== null,
    };
}
