import SiteMenuView from './view/site-menu.js';
import ProfileView from './view/profile.js';
import SortView from './view/sort.js';
import FilmsView from './view/films.js';
import FilmsListview from './view/films-list.js';
import FilmCardView from './view/film-card.js';
import FilmDetailsView from './view/film-details.js';
import ShowMoreButtonView from './view/show-more-button.js';
import FilmsListExtraView from './view/films-list--extra.js';
import FooterStatisticsView from './view/footer-statistics.js';
import { getMovie } from './mock/data.js';
import { render,RenderPosition } from './utils.js';

const CARD_COUNT = 5;
const MOCK_DATA_COUNT = 12;

const filmsData = new Array(MOCK_DATA_COUNT).fill(null).map(() => getMovie());

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

const renderFilm = (filmsListContainer,film) => {
  const card = new FilmCardView(film);
  const body = document.querySelector('.page-body');
  const openPopup = () => {
    body.classList.add('hide-overflow');
    const popup = new FilmDetailsView(film);
    render(body,popup.getElement(),RenderPosition.BEFOREEND);
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        popup.getElement().remove();
        document.removeEventListener('keydown', onEscKeyDown);
        body.classList.remove('hide-overflow');
      }
    };

    document.addEventListener('keydown', onEscKeyDown);

    popup.setClickHandler((evt) => {
      if (evt.target.classList.contains('film-details__close-btn')) {
        popup.getElement().remove();
        body.classList.remove('hide-overflow');
        document.removeEventListener('keydown', onEscKeyDown);
      }
    });
  };

  render(filmsListContainer,card.getElement(),RenderPosition.BEFOREEND);

  card
    .setClickHandler((evt) => {
      if (body.lastElementChild.classList.contains('film-details')) {
        body.lastElementChild.remove();
      }
      if (evt.target.classList.contains('film-card__poster')) {
        openPopup();
      }
      if (evt.target.classList.contains('film-card__comments')) {
        openPopup();
      }
      if (evt.target.classList.contains('film-card__title')) {
        openPopup();
      }
    });
};

render(siteHeaderElement,new ProfileView(filmsData).getElement(),RenderPosition.BEFOREEND);
render(siteMainElement,new SiteMenuView(filmsData).getElement(),RenderPosition.BEFOREEND);
render(siteMainElement,new SortView().getElement(),RenderPosition.BEFOREEND);
render(siteMainElement,new FilmsView().getElement(),RenderPosition.BEFOREEND);

const films = siteMainElement.querySelector('.films');

render(films,new FilmsListview().getElement(),RenderPosition.BEFOREEND);

const filmListContainer = films.querySelector('.films-list__container');

for (let i = 0 ; i < CARD_COUNT ; i ++) {
  renderFilm(filmListContainer,filmsData[i]);
}

const filmsList = films.querySelector('.films-list');

const showMoreButton = new ShowMoreButtonView();

render(filmsList,showMoreButton.getElement(),RenderPosition.BEFOREEND);

showMoreButton.setClickHandler(() => {
  const filmsOnPage = filmListContainer.querySelectorAll('.film-card').length;
  if (filmsOnPage === filmsData.length) {
    showMoreButton.getElement().classList.add('visually-hidden');
  }
  const filmsToView = filmsData.slice(filmsOnPage,filmsOnPage + 5);
  if ((filmsOnPage + 5) >= filmsData.length) {
    showMoreButton.getElement().classList.add('visually-hidden');
  }
  filmsToView.forEach((element) => {
    renderFilm(filmListContainer,element);
  });
});

const getMostRatedFilms = () => {
  const sortedFilms = filmsData.slice();
  sortedFilms
    .sort((a,b) => a.filmInfo.totalRating < b.filmInfo.totalRating ? 1 : -1 );
  return sortedFilms.slice(0,2);
};

const getMostCommentedFilms = () => {
  const sortedFilms = filmsData.slice();
  sortedFilms
    .sort((a,b) => a.comments.length < b.comments.length ? 1 : -1 );
  return sortedFilms.slice(0,2);
};

const filmsListExtraTopRated = new FilmsListExtraView('Top rated').getElement();
render(films,filmsListExtraTopRated,RenderPosition.BEFOREEND);
renderFilm(filmsListExtraTopRated.querySelector('.films-list__container'),getMostRatedFilms()[0]);
renderFilm(filmsListExtraTopRated.querySelector('.films-list__container'),getMostRatedFilms()[1]);

const filmsListExtraMostCommented = new FilmsListExtraView('Most commented').getElement();
render(films,filmsListExtraMostCommented,RenderPosition.BEFOREEND);
renderFilm(filmsListExtraMostCommented.querySelector('.films-list__container'),getMostCommentedFilms()[0]);
renderFilm(filmsListExtraMostCommented.querySelector('.films-list__container'),getMostCommentedFilms()[1]);

const footerStatistics = document.querySelector('.footer__statistics');
render(footerStatistics,new FooterStatisticsView(filmsData).getElement(),RenderPosition.BEFOREEND);
