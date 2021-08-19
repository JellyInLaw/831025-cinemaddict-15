import { createElement } from '../utils';

const createProfileTemplate = (films) => {
  let watchedCount = 0;
  let rang = '';

  films.forEach((element) => {
    if (element.userDetails.alreadyWatched) {
      watchedCount += 1;
    }
  });

  if (watchedCount <= 10) {
    rang = 'novice';
  }

  if (10 > watchedCount <= 20) {
    rang = 'fan';
  }

  if (watchedCount > 21) {
    rang = 'movie buff';
  }

  return `<section class="header__profile profile">
    <p class="profile__rating">${rang}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;

};

export default class profile {
  constructor (filmsData) {
    this._element = null;
    this._films = filmsData;
  }

  getTemplate () {
    return createProfileTemplate(this._films);
  }

  getElement () {
    if (!this._element) {
      this._element = createElement(this.getTemplate(this.films));
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}
