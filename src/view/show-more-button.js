import AbstractView from './abstract.js';

const createShowMoreButton = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export default class FilmsList extends AbstractView {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate () {
    return createShowMoreButton();
  }

  _clickHandler () {
    this._callback.click();
  }

  setClickHandler (callback) {
    this._callback.click = callback;
    this.getElement().addEventListener('click', this._clickHandler);
  }

}
