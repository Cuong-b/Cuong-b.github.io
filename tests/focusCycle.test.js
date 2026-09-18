import { test } from 'node:test';
import assert from 'node:assert/strict';
import { nextIndex, createFocusCycler } from '../js/lib/focusCycle.js';

test('nextIndex wraps around to 0 after the last index', () => {
    assert.equal(nextIndex(0, 4), 1);
    assert.equal(nextIndex(1, 4), 2);
    assert.equal(nextIndex(2, 4), 3);
    assert.equal(nextIndex(3, 4), 0);
});

test('nextIndex returns 0 for an empty list', () => {
    assert.equal(nextIndex(0, 0), 0);
});

test('createFocusCycler calls onChange immediately with the starting index', () => {
    const seen = [];
    const cycler = createFocusCycler({ length: 3, intervalMs: 2000, onChange: (i) => seen.push(i) });

    cycler.start();
    assert.deepEqual(seen, [0]);

    cycler.stop();
});

test('createFocusCycler advances one item every intervalMs and wraps around', (t) => {
    t.mock.timers.enable({ apis: ['setInterval'] });

    const seen = [];
    const cycler = createFocusCycler({ length: 3, intervalMs: 2000, onChange: (i) => seen.push(i) });

    cycler.start();
    t.mock.timers.tick(2000);
    t.mock.timers.tick(2000);
    t.mock.timers.tick(2000);
    t.mock.timers.tick(2000);

    assert.deepEqual(seen, [0, 1, 2, 0, 1]);

    cycler.stop();
});

test('createFocusCycler stop() halts further ticks', (t) => {
    t.mock.timers.enable({ apis: ['setInterval'] });

    const seen = [];
    const cycler = createFocusCycler({ length: 3, intervalMs: 2000, onChange: (i) => seen.push(i) });

    cycler.start();
    t.mock.timers.tick(2000);
    cycler.stop();
    t.mock.timers.tick(2000);
    t.mock.timers.tick(2000);

    assert.deepEqual(seen, [0, 1]);
    assert.equal(cycler.isRunning(), false);
});

test('createFocusCycler does not start when there are fewer than 2 items', () => {
    const seen = [];
    const cycler = createFocusCycler({ length: 1, intervalMs: 2000, onChange: (i) => seen.push(i) });

    cycler.start();

    assert.deepEqual(seen, []);
    assert.equal(cycler.isRunning(), false);
});

test('createFocusCycler with 0 items does not start or throw', () => {
    const seen = [];
    const cycler = createFocusCycler({ length: 0, intervalMs: 2000, onChange: (i) => seen.push(i) });

    assert.doesNotThrow(() => cycler.start());
    assert.deepEqual(seen, []);
    assert.equal(cycler.isRunning(), false);
});
