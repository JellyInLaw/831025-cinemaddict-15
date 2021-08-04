

export const createSiteMenuTemplate = (films) => {

  let watchlistCount = 0;
  let watchedCount = 0;
  let favorite = 0;

  films.forEach((element) => {
    if (element.userDetails.watchList) {
      watchlistCount += 1;
    }
    if (element.userDetails.alreadyWatched) {
      watchedCount += 1;
    }
    if (element.userDetails.favorite) {
      favorite += 1;
    }
  });


  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlistCount}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${watchedCount}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorite}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

