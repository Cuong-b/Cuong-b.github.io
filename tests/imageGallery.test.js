import { test } from "node:test";
import assert from "node:assert/strict";
import { buildImageDescriptors, prevIndex, computeRowSpan, debounce } from "../js/lib/gallery.js";

test("buildImageDescriptors joins basePath and filename into src", () => {
  const result = buildImageDescriptors("/assets/dci/2019/images", ["IMG_3993.jpeg"]);
  assert.deepEqual(result, [{ src: "/assets/dci/2019/images/IMG_3993.jpeg", alt: "IMG 3993" }]);
});

test("buildImageDescriptors derives alt text from underscores and dashes", () => {
  const result = buildImageDescriptors("/base", ["my-cool_photo.png"]);
  assert.equal(result[0].alt, "my cool photo");
});

test("buildImageDescriptors returns an empty array for no filenames", () => {
  assert.deepEqual(buildImageDescriptors("/base", []), []);
});

test("prevIndex wraps around to the last index from 0", () => {
  assert.equal(prevIndex(0, 4), 3);
  assert.equal(prevIndex(3, 4), 2);
  assert.equal(prevIndex(1, 4), 0);
});

test("prevIndex returns 0 for an empty list", () => {
  assert.equal(prevIndex(0, 0), 0);
});

test("computeRowSpan rounds up to the nearest whole row", () => {
  assert.equal(computeRowSpan(100, 8, 8), 7);
  assert.equal(computeRowSpan(88, 8, 8), 6);
  assert.equal(computeRowSpan(0, 8, 8), 1);
});

test("computeRowSpan falls back to 1 when the row unit is non-positive", () => {
  assert.equal(computeRowSpan(100, 0, 0), 1);
});

test("debounce only calls the wrapped function once after the delay", (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });

  let calls = 0;
  const debounced = debounce(() => calls++, 150);

  debounced();
  debounced();
  debounced();
  assert.equal(calls, 0);

  t.mock.timers.tick(150);
  assert.equal(calls, 1);
});
