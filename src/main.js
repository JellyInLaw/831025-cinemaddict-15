import { createSiteMenuTemplate } from './view/site-menu.js';
import { createProfileTemplate } from './view/profile.js';
import { createSortTemplate } from './view/sort.js';
import { createFilms } from './view/films.js';
import { createFilmsList } from './view/films-list.js';
import { createFilmCardTemplate } from './view/film-card.js';
import { createShowMoreButton } from './view/show-more-button.js';
// import { createFilmsListExtra } from './view/films-list--extra.js';
import { createFooterStatistics } from './view/footer-statistics.js';
import { getMovie } from './mock/data.js';
import { filmsClickHandler } from './view/films-click-handler.js';
import { renderTemplate } from './utils.js';

const CARD_COUNT = 5;
// const EXTRA_BLOCK_COUNT = 2;
// const EXTRA_BLOCK_CARDS_COUNT = 2;
const MOCK_DATA_COUNT = 12;

const filmsData = new Array(MOCK_DATA_COUNT).fill(null).map(() => getMovie());

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

renderTemplate(siteHeaderElement,createProfileTemplate(filmsData),'beforeend');
renderTemplate(siteMainElement,createSiteMenuTemplate(filmsData),'beforeend');
renderTemplate(siteMainElement,createSortTemplate(),'beforeend');
renderTemplate(siteMainElement,createFilms(),'beforeend');

const films = siteMainElement.querySelector('.films');

films.addEventListener('click',(evt) => {
  filmsClickHandler(evt,filmsData[0]);
});

renderTemplate(films,createFilmsList(),'beforeend');

const filmListContainer = films.querySelector('.films-list__container');

for (let i = 0 ; i < CARD_COUNT ; i ++) {
  renderTemplate(filmListContainer,createFilmCardTemplate(filmsData[i]),'beforeend');
}

const filmsList = films.querySelector('.films-list');

renderTemplate(filmsList,createShowMoreButton(),'beforeend');

const showMoreButton = document.querySelector('.films-list__show-more');
showMoreButton.addEventListener('click',() => {
  const filmsOnPage = filmListContainer.querySelectorAll('.film-card').length;
  if (filmsOnPage === filmsData.length) {
    showMoreButton.classList.add('visually-hidden');
  }
  const filmsToView = filmsData.slice(filmsOnPage,filmsOnPage + 5);
  if ((filmsOnPage + 5) >= filmsData.length) {
    showMoreButton.classList.add('visually-hidden');
  }
  filmsToView.forEach((element) => {
    renderTemplate(filmListContainer,createFilmCardTemplate(element),'beforeend');
  });
});

// for (let i = 0 ; i < EXTRA_BLOCK_COUNT ; i ++) {
//   renderTemplate(films,createFilmsListExtra(),'beforeend');
// }

// let filmsListsExtraContainer;

// const filmsListsExtra = document.querySelectorAll('.films-list--extra');
// filmsListsExtraContainer = filmsListsExtra[0].querySelector('.films-list__container');

// for (let i = 0 ; i < EXTRA_BLOCK_CARDS_COUNT ; i ++) {
//   renderTemplate(filmsListsExtraContainer,createFilmCardTemplate(filmsData[i]),'beforeend');
// }

// filmsListsExtra[1].querySelector('.films-list__title').textContent = 'Most commented';

// filmsListsExtraContainer = filmsListsExtra[1].querySelector('.films-list__container');

// for (let i = 0 ; i < EXTRA_BLOCK_CARDS_COUNT ; i ++) {
//   renderTemplate(filmsListsExtraContainer,createFilmCardTemplate(filmsData[i]),'beforeend');
// }

const footerStatistics = document.querySelector('.footer__statistics');
renderTemplate(footerStatistics,createFooterStatistics(filmsData),'beforeend');

