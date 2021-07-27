import {createSiteMenuTemplate} from './view/site-menu.js';
import {createProfileTemplate} from './view/profile.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place,template);
};

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

render(siteMainElement,createSiteMenuTemplate(),'beforeend');
render(siteHeaderElement,createProfileTemplate(),'beforeend');
