import { createSiteMenuTemplate } from './view/site-menu.js';
import { createProfileTemplate } from './view/profile.js';
import { createSortTemplate } from './view/sort.js';
import { createFilms } from './view/films.js';
import { createFilmsList } from './view/films-list.js';
import { createFilmCardTemplate } from './view/film-card.js';
import { createShowMoreButton } from './view/show-more-button.js';
import { createFilmsListExtra } from './view/films-list--extra.js';
import { createFooterStatistics } from './view/footer-statistics.js';
import { getMovie } from './mock/data.js';
import { createFilmDetails } from './view/film-details.js';

const CARD_COUNT = 5;
const EXTRA_BLOCK_COUNT = 2;
const EXTRA_BLOCK_CARDS_COUNT = 2;
const MOCK_DATA_COUNT = 30;

const body = document.querySelector('.page-body');

const filmsData = new Array(MOCK_DATA_COUNT).fill(null).map(() => getMovie());

const render = (container, template, place) => {
  container.insertAdjacentHTML(place,template);
};

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

render(siteHeaderElement,createProfileTemplate(),'beforeend');
render(siteMainElement,createSiteMenuTemplate(),'beforeend');
render(siteMainElement,createSortTemplate(),'beforeend');
render(siteMainElement,createFilms(),'beforeend');

const films = siteMainElement.querySelector('.films');

films.addEventListener('click',(evt) => {

  let clickTarget;

  if (evt.target.classList.contains('film-card__poster')
    || evt.target.classList.contains('film-card__title')
    || evt.target.classList.contains('film-card__comments')) {
    clickTarget = true;
  }

  if (clickTarget) {
    body.classList.add('hide-overflow');
    render(body,createFilmDetails(filmsData[0]),'beforeend');
    const filmDetails = document.querySelector('.film-details');
    const closeFilmDetails = document.querySelector('.film-details__close-btn');
    closeFilmDetails.addEventListener('click',() => {
      filmDetails.remove();
      body.classList.remove('hide-overflow');
    });
  }


});

render(films,createFilmsList(),'beforeend');

const filmListContainer = films.querySelector('.films-list__container');

for (let i = 0 ; i < CARD_COUNT ; i ++) {
  render(filmListContainer,createFilmCardTemplate(filmsData[i]),'beforeend');
}

const filmsList = films.querySelector('.films-list');

render(filmsList,createShowMoreButton(),'beforeend');

for (let i = 0 ; i < EXTRA_BLOCK_COUNT ; i ++) {
  render(films,createFilmsListExtra(),'beforeend');
}

let filmsListsExtraContainer;

const filmsListsExtra = document.querySelectorAll('.films-list--extra');
filmsListsExtraContainer = filmsListsExtra[0].querySelector('.films-list__container');

for (let i = 0 ; i < EXTRA_BLOCK_CARDS_COUNT ; i ++) {
  render(filmsListsExtraContainer,createFilmCardTemplate(filmsData[i]),'beforeend');
}

filmsListsExtra[1].querySelector('.films-list__title').textContent = 'Most commented';

filmsListsExtraContainer = filmsListsExtra[1].querySelector('.films-list__container');

for (let i = 0 ; i < EXTRA_BLOCK_CARDS_COUNT ; i ++) {
  render(filmsListsExtraContainer,createFilmCardTemplate(filmsData[i]),'beforeend');
}

const footerStatistics = document.querySelector('.footer__statistics');
render(footerStatistics,createFooterStatistics(),'beforeend');
