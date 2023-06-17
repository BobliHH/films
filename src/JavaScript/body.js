import simpleLightbox from 'simplelightbox';
// import './sass/body.scss';
import ""

import { fetchMovies } from './fetchAxios';
import { renderGallery } from './createCard';

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const body = document.querySelector('body');
// body.style.background =
//     'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,22,121,1) 11%, rgba(0,212,255,1) 100%)'; 
  let page = 1;
  let simpleLightBox;
  const perPage = 4;
//   loadMoreBtn.classList.add('is-hidden');



  fetchImages(page, perPage)
    .then(({ data }) => {
      if (data.totalHits === 0) {
        alert('No movies found');
      } else {
        renderGallery(data.hits);
        simpleLightBox = new simpleLightbox('.gallery a').refresh();
        alert(data);

        if (data.totalHits > perPage) {
          loadMoreBtn.classList.remove('is-hidden');
        }
      }
    })
    .catch(error => console.log(error))
;

