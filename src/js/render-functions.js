import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const ulElem = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader')
const btnEl = document.querySelector('.js-btn-load');

export function imageTemplate({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
    return `
    <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class="info-wrapper">
    <div class="info-item">
      <h3>Likes</h3>
      <p>${likes}</p>
    </div>
    <div class="info-item">
      <h3>Views</h3>
      <p>${views}</p>
    </div>
    <div class="info-item">
      <h3>Comments</h3>
      <p>${comments}</p>
    </div>
    <div class="info-item">
      <h3>Downloads</h3>
      <p>${downloads}</p>
    </div>
  </div>
</li>`
};

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
};


export function createGallery(images, currentPage) {
  const markup = imagesTemplate(images);
  if (currentPage === 1) {
    ulElem.innerHTML = markup;
  } else {
    ulElem.insertAdjacentHTML('beforeend', markup);
  }
  lightbox.refresh();
};

export function clearGallery() {
  ulElem.innerHTML = '';
};

export const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250
});

export function showLoader() {
  loaderEl.classList.remove('is-hidden')
};

export function hideLoader() {
  loaderEl.classList.add('is-hidden')
};


export function showLoadMoreButton() {
  btnEl.classList.remove('is-hidden')
};

export function hideLoadMoreButton() {
  btnEl.classList.add('is-hidden')
};
