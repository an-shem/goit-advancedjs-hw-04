import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formRef = document.querySelector('.form');
const searchInput = formRef.elements['search-text'];

iziToast.settings({
  position: 'topRight',
});

formRef.addEventListener('submit', event => {
  event.preventDefault();

  const query = searchInput.value.trim();
  formRef.reset();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query.',
    });

    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(({ hits: images }) => {
      if (images.length === 0) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }

      createGallery(images);
    })
    .catch(error => {
      iziToast.warning({
        message: error.message,
      });
    })
    .finally(() => {
      hideLoader();
    });
});
