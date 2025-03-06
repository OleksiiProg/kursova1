const countryData = {
  Ukraine: {
    name: "Україна",
    continent: "Європа",
    description:
      "Україна – одна з найбільших країн в Європі. Вона приваблює туристів своїми історичними та природними пам'ятками. Киплячі життям міста, стародавні замки, приємна сільська місцевість, різноманітність ландшафтів і привітне ставлення людей роблять Україну особливим місцем, незалежно від економічних і політичних проблем.",
    places: [
      {
        name: "Київ",
        description: "Столиця України",
        image: "images/kyiv.jpg",
      },
      {
        name: "Львів",
        description: "Культурний центр Західної України",
        image: "images/lviv.jpg",
      },
      {
        name: "Одеса",
        description: "Портове місто на Чорному морі",
        image: "images/odesa.jpg",
      },
      {
        name: "Харків",
        description: "Велике місто на сході України",
        image: "images/kharkiv.jpg",
      },
      {
        name: "Чернігів",
        description: "Стародавнє місто з багатою історією",
        image: "images/chernihiv.jpg",
      },
    ],
  },
  France: {
    name: "Франція",
    continent: "Європа",
    description:
      "Франція — дивовижний калейдоскоп з історичних і культурних пам'яток, неймовірних пейзажів, місцевого колориту, всесвітньо відомої кухні, романтичних міських видів, затишних пейзажів провінції та чудових пляжів. Знайти та підібрати тур онлайн до Франції варто вже заради однієї можливості заблукати в Парижі. Але ж, крім столиці, в країні ще дуже багато захопливих місць.",
    places: [
      {
        name: "Париж",
        description: "Столиця Франції",
        image: "images/paris.jpg",
      },
      {
        name: "Ліон",
        description: "Відомий своїми історичними та архітектурними пам'ятками",
        image: "images/leon.jpg",
      },
      {
        name: "Марсель",
        description: "Велике портове місто",
        image: "images/marcel.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або у туристичних агентствах.",
  },
  Italy: {
    name: "Італія",
    continent: "Європа",
    description:
      "Італія - країна пасти, вина і веселощів, а також законодавець моди і стилю. Це країна, де є неймовірно красиві острови, лазурне море, засніжені гори, архітектура, від якої не можеш відірвати очей, термальні джерела, нереально смачна кухня, атмосфера романтики і свята. Це країна, де відчуваєш аромат кави і смак чудового сиру. Безліч дивних місць чекають, щоб їх побачили...",
    places: [
      {
        name: "Рим",
        description: "Столиця Італії, відома своїми древніми пам'ятками",
        image: "images/rome.jpg",
      },
      {
        name: "Мілан",
        description: "Модна столиця Італії",
        image: "images/milan.jpg",
      },
      {
        name: "Венеція",
        description: "Місто каналів",
        image: "images/venice.jpg",
      },
      {
        name: "Флоренція",
        description: "Місто мистецтва та архітектури",
        image: "images/florence.jpg",
      },
    ],
  },
  China: {
    name: "Китай",
    continent: "Азія",
    description:
      "Китай - це велика країна з багатющим історичним минулим і найбільшою чисельністю населення у світі. Це третя за величиною країна на всій планеті, вона простяглася на багато тисяч кілометрів і знаходиться у Східній Азії. Сьогодні ця країна об'єднує в собі тисячолітню культуру і сучасні технології.",
    places: [
      {
        name: "Пекін",
        description: "Столиця Китаю",
        image: "images/beijing.jpg",
      },
      {
        name: "Шанхай",
        description: "Велике фінансове та торговельне місто",
        image: "images/shanghai.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або в туристичних агенціях.",
  },
  Japan: {
    name: "Японія",
    continent: "Азія",
    description:
      "Японія, «Батьківщина сонця» - одна з найдивовижніших і загадкових країн світу. Подорож сюди ніяк не назвеш бюджетною. Але, без сумніву, вона того варта. Офіційна назва держави - Ніхон коку, або Ніппон коку. Жителі Японії називають її Ніппон (Ніхон), а себе - Ніхондзін.",
    places: [
      {
        name: "Токіо",
        description: "Столиця Японії",
        image: "images/tokyo.jpg",
      },
      {
        name: "Кіото",
        description: "Стародавнє місто з численними храмами",
        image: "images/kyoto.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або в туристичних агенціях.",
  },
  Korea: {
    name: "Корея",
    continent: "Азія",
    description:
      "Південну Корею на перший погляд можна назвати «Землею ранкового спокою», але занурившись у її столицю Сеул, спокій – це останнє, що ви відчуєте. Але це навпаки приємне відчуття, бо у вирі цього життя ти починаєш захоплюватись усім та усіма.",
    places: [
      {
        name: "Сеул",
        description: "Столиця Південної Кореї",
        image: "images/seoul.jpg",
      },
      {
        name: "Пусан",
        description: "Велике портове місто",
        image: "images/busan.jpg",
      },
      {
        name: "Інчхон",
        description: "Відоме своїм міжнародним аеропортом",
        image: "images/incheon.jpg",
      },
      {
        name: "Тегу",
        description: "Велике місто на південному сході Кореї",
        image: "images/daegu.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або в туристичних агенціях.",
  },
  Morocco: {
    name: "Марокко",
    continent: "Африка",
    description:
      "Марокко поки все ще не настільки популярна країна серед українських туристів, як, скажімо, Єгипет. Але той колорит, що ви побачите у Королівстві, мало-де можна знайти. У Марокко чудове розташування – на березі Атлантичного океану, поряд з Європою – летіти не далеко, відносно низькі ціни на послуги, смачна їжа і дуже багато місць, які варто відвідати.",
    places: [
      {
        name: "Рабат",
        description: "Столиця Марокко",
        image: "images/rabat.jpg",
      },
      {
        name: "Касабланка",
        description: "Велике місто на узбережжі Атлантичного океану",
        image: "images/casablanca.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або в туристичних агенціях.",
  },
  Tunisia: {
    name: "Туніс",
    continent: "Африка",
    description:
      "Туніс відомий своїми середземноморськими пляжами та археологічними пам'ятками.",
    places: [
      {
        name: "Туніс",
        description: "Столиця Тунісу",
        image: "images/tunis.jpg",
      },
      {
        name: "Сус",
        description: "Популярний курорт на узбережжі",
        image: "images/sousse.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або в туристичних агенціях.",
  },

  Brazil: {
    name: "Бразилія",
    continent: "Південна Америка",
    description:
      "Бразилія – південноамериканська країна, найбільша за площею території та за кількістю населення на континенті. За однією з версій, назва країни походить від найменування острова O'Breasil із ірландських середньовічних міфів.",
    places: [
      {
        name: "Ріо-де-Жанейро",
        description: "Відомий своїм карнавалом та пляжами",
        image: "images/rio.jpg",
      },

      {
        name: "Бразиліа",
        description: "Столиця Бразилії",
        image: "images/brasilia.jpg",
      },
      {
        name: "Сальвадор",
        description: "Відомий своєю колоніальною архітектурою",
        image: "images/salvador.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або в туристичних агенціях.",
  },
  Peru: {
    name: "Перу",
    continent: "Південна Америка",
    description:
      "Перу відома своєю древньою культурою та археологічними пам'ятками.",
    places: [
      { name: "Ліма", description: "Столиця Перу", image: "images/lima.jpg" },
      {
        name: "Куско",
        description: "Колишня столиця Інків",
        image: "images/cusco.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або в туристичних агенціях.",
  },
  USA: {
    name: "США",
    continent: "Північна Америка",
    description:
      "Якщо ви шукаєте місце для подорожі, яке вам запам’ятається на все життя, то для цього обов’язково відвідати США, адже в Америці величезна кількість неймовірно красивих місць, в яких ви зможете насолодитися природою і заощадити гроші.",
    places: [
      {
        name: "Нью-Йорк",
        description: "Відомий своїми хмарочосами та Центральним парком",
        image: "images/nyc.jpg",
      },
      {
        name: "Лос-Анджелес",
        description: "Центр кіноіндустрії",
        image: "images/la.jpg",
      },
      {
        name: "Чикаго",
        description: "Відомий своєю архітектурою та музеями",
        image: "images/chicago.jpg",
      },
      {
        name: "Вашингтон",
        description: "Столиця США",
        image: "images/washington.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або в туристичних агенціях.",
  },
  Australia: {
    name: "Австралія",
    continent: "Австралія",
    description:
      "Австралія — мрія кожного мандрівника. Адже справді, багато хто хоче побачити найбільший острів у світі, який водночас є материком і єдиною та неповторною країною. Національні парки Австралії, її унікальна фауна, заповідні зони привертають увагу поціновувачів дикої природи.",
    places: [
      {
        name: "Сідней",
        description: "Відомий своїм Оперним театром",
        image: "images/sydney.jpg",
      },
      {
        name: "Мельбурн",
        description: "Відомий своїм культурним життям",
        image: "images/melbourne.jpg",
      },
      {
        name: "Брісбен",
        description: "Місто з теплим кліматом та пляжами",
        image: "images/brisbane.jpg",
      },
    ],
    buyTicketInfo: "Квитки можна придбати онлайн або в туристичних агенціях.",
  },
};

const continents = [
  ...new Set(Object.values(countryData).map((country) => country.continent)),
];

// Функція для отримання параметра з URL
function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Завантаження даних про країну
function loadCountryData(countryName) {
  const country = countryData[countryName];

  if (country) {
    document.getElementById("countryName").textContent = country.name;
    document.getElementById("countryMainland").textContent = country.continent;
    document.getElementById("countryDescription").textContent =
      country.description;

    const placesList = document.getElementById("countryPopularPlaces");
    placesList.innerHTML = ""; // Очищення списку
    country.places.forEach((place) => {
      const listItem = document.createElement("li");
      listItem.classList.add("country-popular__flex-li");

      const placeImage = document.createElement("img");
      placeImage.src = place.image; // Встановлюємо унікальний шлях до зображення
      placeImage.alt = place.name;

      const placeName = document.createElement("h3");
      placeName.textContent = place.name;

      const placeDescription = document.createElement("p");
      placeDescription.textContent = place.description;

      listItem.appendChild(placeImage);
      listItem.appendChild(placeName);
      listItem.appendChild(placeDescription);

      placesList.appendChild(listItem);
    });

    document.getElementById("buyTicketInfo").textContent =
      country.buyTicketInfo;
  } else {
    document.getElementById("countryName").textContent = "Країна не знайдена";
    document.getElementById("countryDescription").textContent = "";
    document.getElementById("countryPopularPlaces").innerHTML = "";
    document.getElementById("buyTicketInfo").textContent = "";
  }
}

// Отримання назви країни з URL та завантаження відповідних даних
const countryName = getQueryParameter("name");
loadCountryData(countryName);

/** BOOKING **/
