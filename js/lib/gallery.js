/**
 * Pure helpers for the image gallery component, kept free of DOM
 * dependencies so they can be unit tested directly (see /tests).
 */

export function buildImageDescriptors(basePath, filenames) {
  return filenames.map((filename) => ({
    src: `${basePath}/${filename}`,
    alt: filename.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " "),
  }));
}

export function prevIndex(current, length) {
  if (length <= 0) return 0;
  return (current - 1 + length) % length;
}

export function computeRowSpan(itemHeightPx, rowHeightPx, rowGapPx) {
  const unit = rowHeightPx + rowGapPx;
  if (unit <= 0) return 1;
  return Math.max(1, Math.ceil((itemHeightPx + rowGapPx) / unit));
}

export function debounce(fn, delayMs) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delayMs);
  };
}
