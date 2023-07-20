export { renderGallery };

const gallery = document.querySelector('.gallery');
function renderGallery(movies) {
    const markup = movies.map(movie => {
        const { id, backdrop_path, poster_path, original_title, title, genres, release_date } = movie;
        return `
        <a class="gallery__link" href="${backdrop_path}">
          <div class="gallery-item" id="${id}">
            <img class="gallery-item__img" src="${poster_path}" alt="${title}" loading="lazy" />
            <div class="info">
              <p class="info-item">${original_title}</p>
              <p class="info-item">${genres}</p>
              <p class="info-item">${release_date}</p>
            </div>
          </div>
        </a>`;
    }).join(' ');
    gallery.insertAdjacentHTML('beforeend', markup);
 };