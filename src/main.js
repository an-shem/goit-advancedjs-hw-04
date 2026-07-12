import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const formRef = document.querySelector('.form');
const searchInput = formRef.elements['search-text'];
const btnMoreRef = document.querySelector('.btn-more');

iziToast.settings({
  position: 'topRight',
});

let page;
let query;
let totalPages;
let imageCardHeight;

const addImageToGallery = async () => {
  try {
    page++;
    hideLoadMoreButton();
    showLoader();
    const { hits: images } = await getImagesByQuery(query, page);
    createGallery(images);

    window.scrollBy({
      top: imageCardHeight * 2,
      behavior: 'smooth',
    });

    if (page === totalPages) {
      btnMoreRef.removeEventListener('click', addImageToGallery);
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.warning({
      message: error.message,
    });
  } finally {
    hideLoader();
  }
};

formRef.addEventListener('submit', async event => {
  try {
    event.preventDefault();

    query = searchInput.value.trim();
    formRef.reset();

    if (!query) {
      iziToast.warning({
        message: 'Please enter a search query.',
      });

      return;
    }

    clearGallery();
    showLoader();
    page = 1;
    hideLoadMoreButton();
    btnMoreRef.removeEventListener('click', addImageToGallery);

    const { hits: images, totalHits: totalImages } = await getImagesByQuery(
      query,
      page
    );

    if (images.length === 0) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }

    totalPages = Math.ceil(totalImages / PER_PAGE);

    createGallery(images);

    if (totalPages > 1) {
      btnMoreRef.addEventListener('click', addImageToGallery);
      showLoadMoreButton();
      const imageCardRef = document.querySelector('.gallery-item');
      imageCardHeight = imageCardRef.getBoundingClientRect().height;
    }
  } catch (error) {
    iziToast.warning({
      message: error.message,
    });
  } finally {
    hideLoader();
  }
});
