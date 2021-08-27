import AbstractView from './abstract.js';

const createShowMoreButton = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export default class FilmsList extends AbstractView {

  getTemplate () {
    return createShowMoreButton();
  }

}
