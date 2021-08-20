import siteMenuView from './view/site-menu.js';
import profileView from './view/profile.js';
import sortView from './view/sort.js';
import filmsView from './view/films.js';
import filmsListview from './view/films-list.js';
import filmCardView from './view/film-card.js';
import filmDetailsView from './view/film-details.js';
import showMoreButtonView from './view/show-more-button.js';
// import filmsListExtraView from './view/films-list--extra.js';
import footerStatisticsView from './view/footer-statistics.js';
import { getMovie } from './mock/data.js';
import { render,RenderPosition } from './utils.js';

const CARD_COUNT = 5;
// const EXTRA_BLOCK_COUNT = 2;
// const EXTRA_BLOCK_CARDS_COUNT = 2;
const MOCK_DATA_COUNT = 12;

const filmsData = new Array(MOCK_DATA_COUNT).fill(null).map(() => getMovie());

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

const renderFilm = (filmsListContainer,film) => {
  const card = new filmCardView(film);
  const openPopup = () => {
    const body = document.querySelector('.page-body');
    body.classList.add('hide-overflow');
    const popup = new filmDetailsView(film).getElement();
    render(body,popup,RenderPosition.BEFOREEND);
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        popup.remove();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };
    document.addEventListener('keydown', onEscKeyDown);

    popup.querySelector('.film-details__close-btn').addEventListener('click',() => {
      popup.remove();
      body.classList.remove('hide-overflow');
      document.removeEventListener('keydown', onEscKeyDown);
    });

  };

  render(filmsListContainer,card.getElement(),RenderPosition.BEFOREEND);

  card
    .getElement()
    .querySelector('.film-card__poster')
    .addEventListener('click',() => {
      openPopup(film);
    });
  card
    .getElement()
    .querySelector('.film-card__title')
    .addEventListener('click',() => {
      openPopup(film);
    });
  card
    .getElement()
    .querySelector('.film-card__comments')
    .addEventListener('click',() => {
      openPopup(film);
    });
};

render(siteHeaderElement,new profileView(filmsData).getElement(),RenderPosition.BEFOREEND);
render(siteMainElement,new siteMenuView(filmsData).getElement(),RenderPosition.BEFOREEND);
render(siteMainElement,new sortView().getElement(),RenderPosition.BEFOREEND);
render(siteMainElement,new filmsView().getElement(),RenderPosition.BEFOREEND);

const films = siteMainElement.querySelector('.films');

render(films,new filmsListview().getElement(),RenderPosition.BEFOREEND);

const filmListContainer = films.querySelector('.films-list__container');

for (let i = 0 ; i < CARD_COUNT ; i ++) {
  renderFilm(filmListContainer,filmsData[i]);
}

const filmsList = films.querySelector('.films-list');

render(filmsList,new showMoreButtonView().getElement(),RenderPosition.BEFOREEND);

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
    renderFilm(filmListContainer,element);
  });
});

// for (let i = 0 ; i < EXTRA_BLOCK_COUNT ; i ++) {
//   renderElement(films,new filmsListExtraView().getElement(),RenderPosition.BEFOREEND);
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
render(footerStatistics,new footerStatisticsView(filmsData).getElement(),RenderPosition.BEFOREEND);

