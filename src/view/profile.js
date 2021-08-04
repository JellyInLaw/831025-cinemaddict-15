export const createProfileTemplate = (films) => {
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
