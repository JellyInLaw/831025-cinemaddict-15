import dayjs from 'dayjs';

export const createFilmCardTemplate = (film) => {

  const title = film.filmInfo.title;
  const rating = film.filmInfo.totalRating;
  const year = dayjs(film.filmInfo.release.date).format('YYYY').toString();
  const runTime = film.filmInfo.runTime;
  const getDuration = () => {
    if (runTime / 60 > 1) {
      const hours = Math.floor(runTime / 60);
      const minutes = runTime % 60;
      const duration = `${hours  }h ${  minutes  }m`;
      return duration;
    } else {
      const duration = `${runTime  }m `;
      return duration;
    }
  };
  const genre = film.filmInfo.genre.join(', ');
  const posterSRC = film.filmInfo.poster;
  const description = film.filmInfo.description;
  const commentsLength = film.comments.length;

  const watchList = film.userDetails.watchList
    ? 'film-card__controls-item--active'
    : '';

  const watched = film.userDetails.alreadyWatched
    ? 'film-card__controls-item--active'
    : '';

  const favorite = film.userDetails.favorite
    ? 'film-card__controls-item--active'
    : '';

  return `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${year}</span>
            <span class="film-card__duration">${getDuration()}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="${posterSRC}" alt="Poster film - ${title}" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <a class="film-card__comments">${commentsLength} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchList}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${watched}" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite ${favorite}" type="button">Mark as favorite</button>
          </div>
        </article>`;
};
