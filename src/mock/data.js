import dayjs from 'dayjs';
import { getRandomInteger } from '../utils/utils.js';
import { getRandomFractional } from '../utils/utils.js';
import { makeUniqueRandomInteger } from '../utils/utils.js';

const getUniqueNumber = makeUniqueRandomInteger(1,9999);

const getCommentText = () => {
  const COMMENTS_TEXT = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Cras aliquet varius magna, non porta ligula feugiat eget',
    'Fusce tristique felis at fermentum pharetra',
    'Aliquam id orci ut lectus varius viverra',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui',
    'Sed sed nisi sed augue convallis suscipit in sed felis',
    'Aliquam erat volutpat',
    'Nunc fermentum tortor ac porta dapibus',
    'In rutrum ac purus sit amet tempus',
  ];
  const comment = new Array(getRandomInteger(1,5))
    .fill(null)
    .map(() => COMMENTS_TEXT[getRandomInteger(1,COMMENTS_TEXT.length - 1)])
    .join();

  if (comment === '') {
    return null;
  }

  return comment;
};

const generateDate = (DAYS) => {
  const MAX_DAYS_AGO = DAYS;
  const daysAgo = getRandomInteger(0,MAX_DAYS_AGO);
  return dayjs().add(daysAgo,'day').hour(getRandomInteger(0,24)).minute(getRandomInteger(0,60)).toDate();
};

const getEmotion = () => {
  const EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];
  return EMOTIONS[getRandomInteger(0,3)];
};

const getComment = () => {
  const COMMENT_AUTHORS = [
    'Benedikt','Bozhena','Boleslav','Boris','Borislav','Bronislav','Bronislava','Bulat','Vadim',
    'Valentin','Valentin','Valentin','Valery','Valeriya','Wanda','Varvara','Vasily',
    'Vasilisa','Venus','Veniamin','Vera','Veronica','Vikenty','Viktor','Victoria',
    'Vilen','Violetta','Vissarion','Vita','Vitaly','Vlad','Vladimir','Vladislav','Vladislav','Vladlen',
    'Woldemarie','Vlavevolod','Gavira','Gairah','Gaira','Daniil','Darina','Daria','Demyan','Denis',
    'Diana','Dina','Dinara','Dmitry','Dobrynya','Dora','Eva','Evgeny','Evgeniya',
    'Evdokim','Evdokia','Egor','Yekaterina','Helen','Elizabeth','Elisey',
    'Yesenia','Efim','Efrem','Efrosinya','Zhanna','Zhdan',
    'Zakhar','Zinaida','Zinoviy','Zlata','Zoriy','Zoryana',
    'Zoya','Ivan','Iveta','Ivethol','Kaleria','Kapitolina','Karina',
    'Karolina','Kasyan','Kir','Kira',
    'Kirill','Claudia','Clara','Klim','Klim','Kondrat',
  ];
  const comment = {
    id:getUniqueNumber(),
    author: COMMENT_AUTHORS[getRandomInteger(0,COMMENT_AUTHORS.length - 1)],
    comment: getCommentText(),
    date: generateDate(-365),
    emotion: getEmotion(),
  };
  return comment;
};

const getComments = () => {
  const comments = new Array(getRandomInteger(1,20))
    .fill(null)
    .map(() => getComment());

  return comments;
};

const getAgeRateng = () => {
  const AGE_RATINGS = [
    '0+','3+','6+','12+','16+','18+',
  ];
  return AGE_RATINGS[getRandomInteger(0,AGE_RATINGS.length - 1)];
};

const getDirector = () => {
  const DIRECTORS =[
    'Amy Seimetz',
    'David Judah Simon',
    'S. Sylvan Simon',
    'Sam Simon',
    'William A. Seiter',
    'Ira Sachs',
    'Michael Sucsy',
    'Alec Matthew Sulkin',
    'Peter Sullivan',
    'Andrew Sullivan',
    'Richard Allan Salomon',
  ];

  return DIRECTORS[getRandomInteger(0,DIRECTORS.length - 1)];
};

const getWriters = () => {

  const WRITERS = [
    'Francis Scott Fitzgerald',
    'Erich Maria Remarque',
    'Arthur Clarke',
    'Ray Bradbury',
    'Veena Sud',
    'Matt Sazama',
    'David Seidler',
    'Peter Sullivan',
  ];

  return WRITERS.slice(0,getRandomInteger(1,WRITERS.length - 1));
};

const getActors = () => {
  const ACTORS = [
    'Lee William Aaker',
    'Frank J. Aard',
    'Aash Aaron',
    'Quinton Aaron',
    'William Abadie',
    'Kareem Abdul-Jabbar',
    'Joe Abdullah',
    'Yahya Abdul-Mateen II',
    'Tim Abell',
    'Ian Abercrombie',
    'Farīd Murād Ibrāhīm Al Ahmad',
  ];

  return ACTORS.slice(0,getRandomInteger(1,ACTORS.length - 1));
};

const getCountry = () => {
  const COUNTRIES = [
    'Abkhazia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Albania',
    'Algeria',
    'Angola',
    'Andorra',
    'Antigua',
    'Barbuda',
    'Argentina',
    'Armenia',
    'Afghanistan',
    'Bahamian',
    'Islands',
    'Bangladesh',
    'Barbados',
    'Bahrain',
    'Belize',
    'Belarus',
    'Belgium',
    'Benin',
    'Bulgaria',
    'Bolivia',
    'Bosnia',
    'Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Burkina Faso',
    'Burundi',
    'Butane',
    'Vanuatu',
    'Vatican',
    'Great Britain',
    'Hungary',
    'Venezuela',
    'Oriental',
    'Timor',
    'Vietnam',
    'Gabon',
    'Haiti',
    'Guyana',
    'Gambia',
    'Ghana',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Germany',
    'Honduras',
    'State',
    'Palestine',
    'Grenada',
    'Greece',
    'Georgia',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican',
    'Republic',
    'Congo',
    'Egypt',
    'Zambia',
    'Zimbabwe',
    'Israel',
    'India',
    'Indonesia',
    'Jordan',
    'Iraq',
    'Iran',
    'Ireland',
    'Iceland',
    'Spain',
    'Italy',
    'Yemen',
    'Cape Verde',
    'Kazakhstan',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Qatar',
    'Kenya',
    'Cyprus',
    'Kyrgyzstan',
    'Kiribati',
    'China',
    'DPRK',
    'Colombia',
    'Comoros',
    'Islands',
    'Costa Rica',
    'Cuba',
    'Kuwait',
    'Laos',
    'Latvia',
    'Lesotho',
    'Liberia',
    'Lebanon',
    'Libya',
    'Lithuania',
    'Liechtenstein',
    'Luxembourg',
    'Mauritius',
    'Mauritania',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Mali',
    'Maldivian',
    'Islands',
    'Malta',
    'Morocco',
    'Marshalls',
    'Islands',
    'Mexico',
    'Mozambique',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Niger',
    'Nigeria',
    'Netherlands',
    'Nicaragua',
    'New',
    'Zealand',
    'Norway',
    'UAE',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua',
    'New',
    'Guinea',
    'Paraguay',
    'Peru',
    'Poland',
    'Portugal',
    'Republic',
    'Congo',
    'Republic',
    'Korea',
    'Russia',
    'Rwanda',
    'Romania',
    'Salvador',
    'Samoa',
    'San Marino',
    'Sao Tome',
    'Principe',
    'Saudi',
    'Arabia',
    'North',
    'Macedonia',
    'Seychelles',
    'Islands',
    'Senegal',
    'Saint Vincent',
    'The Grenadines',
    'Saint Kitts',
    'Nevis',
    'Saint Lucia',
    'Serbia',
    'Singapore',
    'Syria',
    'Slovakia',
    'Slovenia',
    'Islands',
    'Somalia',
    'Sudan',
    'Suriname',
    'USA',
    'Sierra Leone',
    'Tajikistan',
    'Thailand',
    'Tanzania',
    'Togo',
    'Tonga',
    'Trinidad',
    'Tobago',
    'Tuvalu',
    'Tunisia',
    'Turkmenistan',
    'Turkey',
    'Uganda',
    'Uzbekistan',
    'Ukraine',
    'Uruguay',
    'Federated',
    'States',
    'Micronesia',
    'Fiji',
    'Philippines',
    'Finland',
    'France',
    'Croatia',
    'CAR',
    'Chad',
    'Montenegro',
    'Czech Republic',
    'Chile',
    'Switzerland',
    'Sweden',
    'Sri Lanka',
    'Ecuador',
    'Equatorial',
    'Guinea',
    'Eritrea',
    'Eswatini',
    'Estonia',
    'Ethiopia',
    'SOUTH AFRICA',
    'South',
    'Ossetia',
    'Southern',
    'Sudan',
    'Jamaica',
    'Japan',
  ];

  return COUNTRIES[getRandomInteger(0,COUNTRIES.length - 1)];
};

const getRunTime = () => getRandomInteger(22,150);

const getGenre = () => {
  const GENRES = [
    'anime',
    'biographical',
    'action movie',
    'Western film',
    'military',
    'detective',
    'childish',
    'documentary',
    'drama',
    'historical',
    'kinokomiks',
    'comedy',
    'concert',
    'short',
    'crime',
    'melodrama',
    'Mystic',
    'music',
    'cartoon',
    'musical',
    'scientific',
    'noir',
    'Adventures',
    'reality show',
    'family',
    'sport',
    'talk show',
    'thriller',
    'horror',
    'fantastic',
    'fantasy',
    'erotica',
  ];

  const firstIndex = getRandomInteger(0,GENRES.length - 1);
  const secondIndex = firstIndex + getRandomInteger(1,3);

  return GENRES.slice(firstIndex,secondIndex);
};

const getDescription = () => {
  const DESCRIPTIONS = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eligendi vel, doloribus deleniti corrupti modi, nulla incidunt quaerat dignissimos repellendus quo facilis labore omnis consequatur fuga ipsum magni excepturi doloremque.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex iste autem maiores odio reprehenderit. Sapiente obcaecati laboriosam nostrum incidunt et eaque dolore ipsam fugiat aliquam, repellendus odio ullam molestias.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi vero inventore laboriosam id autem facilis impedit. Recusandae, nisi rem laudantium ipsum temporibus quaerat cumque assumenda totam, dignissimos sequi facilis?',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur blanditiis est error! Voluptates ipsum, consectetur impedit saepe dicta velit laudantium eius voluptas ab, aperiam nihil pariatur consequuntur delectus obcaecati numquam.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus eveniet at reiciendis, quos sed cupiditate accusamus fugiat architecto eius earum in. Sequi maiores veniam, eveniet nesciunt laudantium ipsam. Fugiat?',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nemo, ea quo, dolores cumque architecto reiciendis tenetur expedita a doloremque fuga sapiente maiores dolor quibusdam illum doloribus repellendus. Esse, eius.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore, quasi nisi fuga quod repellendus? Expedita impedit ea accusantium veritatis dolorum nobis aspernatur natus, laborum, consectetur asperiores vel molestias? Nesciunt!',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, odio amet necessitatibus, aliquid magnam dolore numquam esse voluptates officia quibusdam saepe ex veniam dolorem architecto quaerat iste, tempora officiis in.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nisi omnis qui laudantium. Necessitatibus unde, corrupti sed cumque, illo nobis vero, error ut nostrum nulla tempore quo vel numquam eos!',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis consectetur inventore voluptate. Explicabo rerum asperiores dicta veniam nesciunt error libero voluptatibus. Inventore magnam incidunt nemo doloremque debitis adipisci, facilis fuga.',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla animi eaque illo corporis, blanditiis autem a modi aliquid ratione, amet distinctio exercitationem itaque dolor qui quasi, ducimus non repellendus possimus!',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nostrum quae eaque. Accusantium magni sint veniam id, repudiandae pariatur tempora necessitatibus, culpa explicabo quas architecto, voluptatem doloremque est eveniet eum.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus vero exercitationem impedit obcaecati, praesentium nostrum totam corporis beatae nemo quam tempore est quae ipsum maxime iusto nam quasi deserunt?',
  ];

  const firstIndex = getRandomInteger(0,DESCRIPTIONS.length - 1);
  const secondIndex = firstIndex + getRandomInteger(1,3);

  return DESCRIPTIONS.slice(firstIndex,secondIndex).join();
};

const getMovieTitles = () => {
  const MOVIE_TITLES = [
    'Made for each other',
    'Popeye meets Sinbad',
    'Sagebrush trail',
    'Santa claus conquers the martians',
    'The dance of life',
    'The great flamarion',
    'The man with the golden arm',
  ];

  return MOVIE_TITLES[getRandomInteger(0,MOVIE_TITLES.length - 1)];
};

const getPoster = () => {
  const POSTERS = [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg',
    './images/posters/the-great-flamarion.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
  ];

  return POSTERS[getRandomInteger(0,POSTERS.length - 1)];
};

const getFilmInfo = () => ({
  title: getMovieTitles(),
  alternativeTitle: 'none',
  totalRating: parseFloat(getRandomFractional(0,10),10) ,
  poster: getPoster(),
  ageRating: getAgeRateng(),
  director:getDirector(),
  writers: getWriters(),
  actors: getActors(),
  release: {
    date: generateDate(-25500),
    releaseCountry: getCountry(),
  },
  runTime: getRunTime(),
  genre: getGenre(),
  description: getDescription(),
});

const getUserDetails = () => {

  const alreadyWatched = Boolean(getRandomInteger(0,1));

  const getDate = () => generateDate(-720);

  return {
    alreadyWatched: alreadyWatched,
    watchList: alreadyWatched ? false : (Boolean(getRandomInteger(0,1))),
    watchingDate: alreadyWatched ? getDate() : null,
    favorite: Boolean(getRandomInteger(0,1)),
  };
};

const getMovie = () => {
  const movie = {
    id:getUniqueNumber(),
    comments:getComments(),
    filmInfo:getFilmInfo(),
    userDetails: getUserDetails(),
  };

  return movie;
};

export {getMovie};


