import AbstractView from './abstract.js';

const createFilms = () => (
  `<section class="films">
  </section>`
);

export default class Films extends AbstractView {

  getTemplate () {
    return createFilms();
  }

}
