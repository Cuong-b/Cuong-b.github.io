import { galleries } from "../../data/galleries.js";
import { buildImageDescriptors, prevIndex, computeRowSpan, debounce } from "../lib/gallery.js";
import { nextIndex } from "../lib/focusCycle.js";

/**
 * Populates a `.image-gallery-container` with a masonry image grid and
 * wires up a click-to-enlarge lightbox with thumbnail tabs. The list of
 * filenames for the container comes from the `galleries` registry,
 * keyed by the container's `id`; the container's `data-image-path`
 * supplies the base URL the filenames are joined onto.
 */
export function initImageGallery(container) {
  const filenames = galleries[container.id];
  if (!filenames || !filenames.length) {
    console.warn(`No gallery data found for container id "${container.id}"`);
    return;
  }

  const basePath = container.dataset.imagePath;
  const images = buildImageDescriptors(basePath, filenames);

  const items = renderGrid(container, images);
  const lightbox = buildLightbox(container, images);
  wireGridClicks(items, lightbox);
}

function renderGrid(container, images) {
  container.replaceChildren();

  const items = images.map((image, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "gallery-item";
    item.dataset.index = String(index);

    const img = document.createElement("img");
    img.className = "gallery-image";
    img.src = image.src;
    img.alt = image.alt;
    img.loading = "lazy";
    img.addEventListener("load", () => layoutItem(container, item));

    item.appendChild(img);
    container.appendChild(item);
    return item;
  });

  const relayout = debounce(() => {
    items.forEach((item) => layoutItem(container, item));
  }, 150);
  window.addEventListener("resize", relayout);

  return items;
}

function layoutItem(container, item) {
  const styles = getComputedStyle(container);
  const rowHeight = parseFloat(styles.gridAutoRows) || 1;
  const rowGap = parseFloat(styles.rowGap) || 0;
  const span = computeRowSpan(item.getBoundingClientRect().height, rowHeight, rowGap);
  item.style.gridRowEnd = `span ${span}`;
  item.classList.add("is-ready");
}

function wireGridClicks(items, lightbox) {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      lightbox.open(Number(item.dataset.index));
    });
  });
}

function buildLightbox(container, images) {
  let currentIndex = 0;
  let triggerEl = null;

  const dialog = document.createElement("dialog");
  dialog.className = "gallery-lightbox";

  const controls = document.createElement("div");
  controls.className = "lightbox-controls";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "lightbox-close";
  closeButton.setAttribute("aria-label", "Close gallery");
  closeButton.textContent = "×";
  closeButton.addEventListener("click", () => dialog.close());

  controls.append(closeButton);

  const stage = document.createElement("div");
  stage.className = "lightbox-stage";

  const prevButton = document.createElement("button");
  prevButton.type = "button";
  prevButton.className = "lightbox-prev";
  prevButton.setAttribute("aria-label", "Previous image");
  prevButton.textContent = "‹";

  const mainImage = document.createElement("img");
  mainImage.className = "lightbox-image";

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "lightbox-next";
  nextButton.setAttribute("aria-label", "Next image");
  nextButton.textContent = "›";

  stage.append(prevButton, mainImage, nextButton);

  const tabs = document.createElement("div");
  tabs.className = "lightbox-tabs";

  const tabButtons = images.map((image, index) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "lightbox-tab";
    tab.dataset.index = String(index);

    const thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.loading = "lazy";

    tab.appendChild(thumb);
    tab.addEventListener("click", () => showImage(index));
    tabs.appendChild(tab);
    return tab;
  });

  dialog.append(controls, stage, tabs);
  container.appendChild(dialog);

  function showImage(index) {
    currentIndex = index;
    const image = images[currentIndex];
    mainImage.src = image.src;
    mainImage.alt = image.alt;

    tabButtons.forEach((tab, i) => {
      const isActive = i === currentIndex;
      tab.classList.toggle("is-active", isActive);
      if (isActive) {
        tab.setAttribute("aria-current", "true");
        tab.scrollIntoView({ inline: "center", block: "nearest" });
      } else {
        tab.removeAttribute("aria-current");
      }
    });
  }

  prevButton.addEventListener("click", () => {
    showImage(prevIndex(currentIndex, images.length));
  });

  nextButton.addEventListener("click", () => {
    showImage(nextIndex(currentIndex, images.length));
  });

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      showImage(prevIndex(currentIndex, images.length));
    } else if (event.key === "ArrowRight") {
      showImage(nextIndex(currentIndex, images.length));
    }
  });

  dialog.addEventListener("close", () => {
    triggerEl?.focus();
  });

  return {
    open(index) {
      triggerEl = document.activeElement;
      showImage(index);
      dialog.showModal();
    },
  };
}
