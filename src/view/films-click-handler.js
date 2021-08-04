import { createFilmDetails } from './film-details.js';
import { render } from '../main.js';

export const filmsClickHandler = (evt,film) => {

  const body = document.querySelector('.page-body');
  let clickTarget;

  if (evt.target.classList.contains('film-card__poster')
    || evt.target.classList.contains('film-card__title')
    || evt.target.classList.contains('film-card__comments')) {
    clickTarget = true;
  }

  if (clickTarget) {
    body.classList.add('hide-overflow');
    render(body,createFilmDetails(film),'beforeend');
    const filmDetails = document.querySelector('.film-details');
    const closeFilmDetails = document.querySelector('.film-details__close-btn');
    closeFilmDetails.addEventListener('click',() => {
      filmDetails.remove();
      body.classList.remove('hide-overflow');
    });
  }
};
