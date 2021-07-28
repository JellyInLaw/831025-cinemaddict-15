import { createSiteMenuTemplate } from './view/site-menu.js';
import { createProfileTemplate } from './view/profile.js';
import { createSortTemplate } from './view/sort.js';
import { createFilms } from './view/films.js';
import { createFilmsList } from './view/films-list.js';
import { createFilmCardTemplate } from './view/film-card.js';
import { createShowMoreButton } from './view/show-more-button.js';

const CARD_COUNT = 5;

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

render(films,createFilmsList(),'beforeend');

const filmListContainer = films.querySelector('.films-list__container');

for (let i = 0 ; i < CARD_COUNT ; i ++) {
  render(filmListContainer,createFilmCardTemplate(),'beforeend');
}

const filmsList = films.querySelector('.films-list');

render(filmsList,createShowMoreButton(),'beforeend');
