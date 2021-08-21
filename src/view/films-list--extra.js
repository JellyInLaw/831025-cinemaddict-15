import { createElement } from '../utils';

const createFilmsListExtra = (type) => (
  `<section class="films-list films-list--extra">
      <h2 class="films-list__title">${type}</h2>
      <div class="films-list__container">
      </div>
    </section>`
);

export default class FilmsListExtra {
  constructor (type) {
    this._element = null;
    this._type = type;
  }

  getTemplate () {
    return createFilmsListExtra(this._type);
  }

  getElement () {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement () {
    this._element = null;
  }
}
