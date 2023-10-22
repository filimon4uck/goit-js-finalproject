import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createMurkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image"src="${preview}"   alt="${description}" />
   </a>
</li>

`
    )
    .join("");
}
const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", createMurkup(galleryItems));

const gallery = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("simple-lightbox");
