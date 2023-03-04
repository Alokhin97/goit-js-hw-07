import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line
const refs = {
  galleryList: document.querySelector("div.gallery"),
  lightbox: document.querySelector(".lightbox"),
  btn: document.querySelector('[data-action="close-lightbox"]'),
};
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

  refs.galleryList.append(...items);
};

renderListItems(galleryItems);
