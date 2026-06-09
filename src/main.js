import { getImagesByQuery } from "./js/pixabay-api";
import { clearGallery, createGallery, hideLoader, hideLoadMoreButton, imagesTemplate, lightbox, showLoader, showLoadMoreButton } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const formEl = document.querySelector('.form');
const btnEl = document.querySelector('.js-btn-load');
const ulElem = document.querySelector('.gallery');

const PER_PAGE = 15;
let inputValue;
let page;
let totalPages;

formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideLoadMoreButton();
    page = 1;
    const formData = new FormData(e.target);
    inputValue = formData.get('search-text').trim();
    if (inputValue === '') {
        return iziToast.error({
            title: 'Search field cannot be empty!',
            position: 'topRight'
        });
    };

    clearGallery();

    showLoader();

    try {
        const data = await getImagesByQuery(inputValue, page);
        console.log(data);

        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
            hideLoader();
            return;
        }
        totalPages = Math.ceil(data.totalHits / PER_PAGE);
        console.log(totalPages)
        createGallery(data.hits, page);

        if (page >= totalPages) {
            iziToast.info({
                title: `We're sorry, but you've reached the end of search results.`,
                position: 'topRight'
            });
        } else {
            showLoadMoreButton();
        }
    } catch {
        iziToast.error({
            title: 'Sorry, something went wrong',
            position: 'topRight'
        });
    }

    hideLoader();
    e.target.reset();
});


btnEl.addEventListener('click', async () => {
    page += 1;
    showLoader();

    try {
        const data = await getImagesByQuery(inputValue, page);
        console.log(data);
        createGallery(data.hits, page);
        checkTotalPages();
    } catch {
        iziToast.error({
            title: 'Sorry, something went wrong',
            position: 'topRight'
        });
    }

    hideLoader();
    
    const liEl = document.querySelector('.gallery-item')
    const rect = liEl.getBoundingClientRect();
    console.log(rect)
    window.scrollBy({
        top: rect.height * 2,
        behavior: "smooth",
    });
});


function checkTotalPages() {
    if (page < totalPages) {
        showLoadMoreButton();
    } else {
        hideLoadMoreButton();
        iziToast.info({
            title: `We're sorry, but you've reached the end of search results.`,
            position: 'topRight'
        });
    }
};




