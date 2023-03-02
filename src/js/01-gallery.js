import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery");
galleryLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
const createImage = (item, parent) => {
  const { preview, original, description } = item;
  const img = document.createElement("img");

  img.classList.add("gallery__image");
  img.dataset.source = original;
  img.src = preview;
  img.alt = description;

  parent.appendChild(img);
};

const createLink = (item, parent) => {
  const { original } = item;
  const a = document.createElement("a");

  a.classList.add("gallery__link");
  a.href = original;

  createImage(item, a);

  parent.appendChild(a);
};

const createItem = (item) => {
  const div = document.createElement("div");
  div.classList.add("gallery__item");

  createLink(item, div);

  return div;
};

const renderListItems = (arr) => {
  const items = arr.map((item) => createItem(item));

  gallery.append(...items);
};
renderListItems(images);
import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();
