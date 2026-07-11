import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const loaderRef = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
          </a>

          <div class="image-info">
            <div class="image-info-item">
              <p class="image-info-label">Likes</p>
              <p class="image-info-value">${likes}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Views</p>
              <p class="image-info-value">${views}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Comments</p>
              <p class="image-info-value">${comments}</p>
            </div>

            <div class="image-info-item">
              <p class="image-info-label">Downloads</p>
              <p class="image-info-value">${downloads}</p>
            </div>
          </div>
        </li>
      `
    )
    .join('');
}

export function createGallery(images) {
  const galleryCardTemplate = createGalleryMarkup(images);

  galleryRef.innerHTML = galleryCardTemplate;
  lightbox.refresh();
}

export function clearGallery() {
  galleryRef.innerHTML = '';
}

export function showLoader() {
  loaderRef.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderRef.classList.add('is-hidden');
}
