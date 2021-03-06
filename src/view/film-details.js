import dayjs from 'dayjs';
import { getDuration } from '../utils/utils.js';
import AbstractView from './abstract';

export const createFilmDetails = (film) => {

  const title = film.filmInfo.title;
  const rating = film.filmInfo.totalRating;
  const director = film.filmInfo.director;
  const writers = film.filmInfo.writers.join(', ');
  const actors = film.filmInfo.actors.join(', ');
  const release = dayjs(film.filmInfo.release.date).format('DD MMMM YYYY').toString();
  const runTime = film.filmInfo.runTime;
  const country = film.filmInfo.release.releaseCountry;
  const ageRating = film.filmInfo.ageRating;
  const posterURL = film.filmInfo.poster;
  const filmDescription = film.filmInfo.description;
  const commentCount = film.comments.length;

  const getGenre = () => {
    if (film.filmInfo.genre.length === 1) {
      return 'Genre';
    } else {
      return 'Genres';
    }
  };

  const returnGenre = (element) => `<span class="film-details__genre">${element}</span>`;

  const getGenreList = () => {
    const genres = film.filmInfo.genre;
    const genresContainer = [];

    genres.forEach((element) => {
      genresContainer.push(returnGenre(element));
    });

    return genresContainer.join('');
  };

  const getButtonWatchList = () => {
    const isWathcList = film.userDetails.watchList;
    if (isWathcList) {
      return `<button
          type="button"
          class="film-details__control-button film-details__control-button--active film-details__control-button--watchlist"
          id="watchlist"
          name="watchlist">
          Added to watchlist
      </button>`;
    }
    return `<button
          type="button"
          class="film-details__control-button film-details__control-button--watchlist"
          id="watchlist"
          name="watchlist">
          Add to watchlist
      </button>`;
  };

  const getButtonWatched = ()=> {
    const isWathed = film.userDetails.alreadyWatched;
    if (isWathed) {
      return `<button
        type="button"
        class="film-details__control-button film-details__control-button--active film-details__control-button--watched"
        id="watched"
        name="watched">
        Already watched
      </button>`;
    }
    return `<button
        type="button"
        class="film-details__control-button film-details__control-button--watched"
        id="watched"
        name="watched">
        Already watched
      </button>`;
  };

  const getbuttonAddToFavorites = () => {
    const isFavorite = film.userDetails.favorite;
    if (isFavorite) {
      return `<button
        type="button"
        class="film-details__control-button film-details__control-button--active film-details__control-button--favorite"
        id="favorite"
        name="favorite">
        Added to favorites
      </button>`;
    }
    return `<button
        type="button"
        class="film-details__control-button film-details__control-button--favorite"
        id="favorite"
        name="favorite">
        Add to favorites
      </button>`;
  };

  const getComment = (comment) => {
    const emoji = comment.emotion;
    const commentText = comment.comment;
    const commentAuthor = comment.author;
    const commentDate = dayjs(comment.date).format('DD/MM/YYYY HH:MM').toString();
    return `<li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">${commentText}</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">${commentAuthor}</span>
                <span class="film-details__comment-day">${commentDate}</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>`;
  };

  const getComments = () => {
    const comments = film.comments;
    const commentsContainer = [];
    comments.forEach(((element) => {
      commentsContainer.push(getComment(element));
    }));
    return commentsContainer.join('');
  };

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${posterURL}" alt="">

          <p class="film-details__age">${ageRating}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${title}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${release}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${getDuration(runTime)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term genre">${getGenre()}</td>
              <td class="film-details__cell genre-list">
                ${getGenreList()}
              </td>
            </tr>
          </table>

          <p class="film-details__film-description">
            ${filmDescription}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        ${getButtonWatchList()}
        ${getButtonWatched()}
        ${getbuttonAddToFavorites()}
    </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentCount}</span></h3>

        <ul class="film-details__comments-list">
          ${getComments()}
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

export default class FilmDetails extends AbstractView {
  constructor (film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(evt) {
    this._callback.click(evt);
  }

  getTemplate () {
    return createFilmDetails(this._film);
  }

  setClickHandler (callback) {
    this._callback.click = callback;
    this.getElement().addEventListener('click', this._clickHandler);
  }

}
