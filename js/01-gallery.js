import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line
const galleryList = document.querySelector("div.gallery");
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

  galleryList.append(...items);
};

renderListItems(galleryItems);

const onGalleryClick = (event) => {
  event.preventDefault();
  if (event.targen.nodeName !== "IMG") {
    return;
  }
  const closeModal = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();
};
