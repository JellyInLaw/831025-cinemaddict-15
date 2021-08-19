import { createElement } from '../utils';

const createFooterStatistics = (films) => {
  const filmsCount = films.length;
  return   `<p>${filmsCount} movies inside</p>`;
};

export default class footerStatistics {
  constructor (filmsCount) {
    this._element = null;
    this._filmsCount = filmsCount;
  }

  getTemplate () {
    return createFooterStatistics(this._filmsCount);
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
