import { galleryItems } from "./gallery-items.js";

function createMurkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");
}
const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", createMurkup(galleryItems));

galleryEl.addEventListener("click", galleryHandler);
function galleryHandler(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  evt.preventDefault();
  const url = evt.target.dataset.source;
  createModal(url);
}

function createModal(url) {
  const instance = basicLightbox.create(`<div ><img src = "${url}"/> </div>`, {
    event: {},
    onShow: (instance) => {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          instance.event = e;
          instance.close();
        }
      });
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", instance.event);
    },
  });
  instance.show();
}
