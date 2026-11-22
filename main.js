
/* =========================================
   ALBANIA EXPLORER
   DESTINATION CARDS SYSTEM
========================================= */

const destinations = [
    {
        name: "Tirana",
        slug: "tirana",
        region: { en: "Central Albania", sq: "Shqipëria e Mesme" },
        subtitle: {
            en: "Discover the vibrant capital of Albania.",
            sq: "Zbuloni kryeqytetin plot gjallëri të Shqipërisë."
        },
        category: { en: "CAPITAL CITY", sq: "KRYEQYTET" },
        image: "assets/images/Tirana Albania.jpg"
    },
    {
        name: "Shkodër",
        slug: "shkoder",
        region: { en: "Northern Albania", sq: "Shqipëria e Veriut" },
        subtitle: {
            en: "Explore one of Albania's oldest historic cities.",
            sq: "Zbuloni një nga qytetet historike më të vjetra të Shqipërisë."
        },
        category: { en: "HISTORY & CULTURE", sq: "HISTORI DHE KULTURË" },
        image: "assets/images/Shkoder Albania.jpg"
    },
    {
        name: "Durrës",
        slug: "durres",
        region: { en: "Western Albania", sq: "Shqipëria Perëndimore" },
        subtitle: {
            en: "Discover ancient history and Adriatic beaches.",
            sq: "Zbuloni historinë antike dhe plazhet e Adriatikut."
        },
        category: { en: "COASTAL CITY", sq: "QYTET BREGDETAR" },
        image: "assets/images/Durres Albania.jpg"
    },
    {
        name: "Berat",
        slug: "berat",
        region: { en: "Southern Albania", sq: "Shqipëria e Jugut" },
        subtitle: {
            en: "Discover the city of a thousand windows.",
            sq: "Zbuloni qytetin e një mijë dritareve."
        },
        category: { en: "UNESCO HERITAGE", sq: "TRASHËGIMI UNESCO" },
        image: "assets/images/Berat Albania.jpg"
    },
    {
        name: "Gjirokastër",
        slug: "gjirokaster",
        region: { en: "Southern Albania", sq: "Shqipëria e Jugut" },
        subtitle: {
            en: "Explore the famous stone city.",
            sq: "Eksploroni qytetin e famshëm të gurtë."
        },
        category: { en: "HISTORIC CITY", sq: "QYTET HISTORIK" },
        image: "assets/images/Gjirokaster Albania.jpg"
    },
    {
        name: "Vlorë",
        slug: "vlore",
        region: { en: "Southern Albania", sq: "Shqipëria e Jugut" },
        subtitle: {
            en: "Where the Adriatic meets the Ionian Sea.",
            sq: "Ku Adriatiku takohet me detin Jon."
        },
        category: { en: "COASTAL CITY", sq: "QYTET BREGDETAR" },
        image: "assets/images/Vlore Albania.jpg"
    },
    {
        name: "Sarandë",
        slug: "sarande",
        region: { en: "Southern Albania", sq: "Shqipëria e Jugut" },
        subtitle: {
            en: "Enjoy the beauty of the Ionian coastline.",
            sq: "Shijoni bukurinë e bregdetit Jon."
        },
        category: { en: "IONIAN COAST", sq: "BREGDETI JON" },
        image: "assets/images/Sarande Albania.jpg"
    },
    {
        name: "Ksamil",
        slug: "ksamil",
        region: { en: "Southern Albania", sq: "Shqipëria e Jugut" },
        subtitle: {
            en: "Discover turquoise waters and beautiful beaches.",
            sq: "Zbuloni ujërat bruz dhe plazhet e bukura."
        },
        category: { en: "BEACH DESTINATION", sq: "DESTINACION PLAZHI" },
        image: "assets/images/Ksamil Albania.jpg"
    },
    {
        name: "Krujë",
        slug: "kruje",
        region: { en: "Central Albania", sq: "Shqipëria e Mesme" },
        subtitle: {
            en: "Discover the home of Albanian history and heritage.",
            sq: "Zbuloni vendin e historisë dhe trashëgimisë shqiptare."
        },
        category: { en: "HISTORY & HERITAGE", sq: "HISTORI DHE TRASHËGIMI" },
        image: "assets/images/Kruje Albania.jpg"
    },
    {
        name: "Theth",
        slug: "theth",
        region: { en: "Northern Albania", sq: "Shqipëria e Veriut" },
        subtitle: {
            en: "Experience the beauty of the Albanian Alps.",
            sq: "Përjetoni bukurinë e Alpeve Shqiptare."
        },
        category: { en: "MOUNTAIN ESCAPE", sq: "ARRATISJE NË MALE" },
        image: "assets/images/Theth Albania.jpg"
    },
    {
        name: "Valbonë",
        slug: "valbone",
        region: { en: "Northern Albania", sq: "Shqipëria e Veriut" },
        subtitle: {
            en: "Explore spectacular mountain landscapes.",
            sq: "Eksploroni peizazhe malore mahnitëse."
        },
        category: { en: "NATURAL LANDSCAPE", sq: "PEIZAZH NATYROR" },
        image: "assets/images/Valbone Albania.jpg"
    },
    {
        name: "Butrint",
        slug: "butrint",
        region: { en: "Southern Albania", sq: "Shqipëria e Jugut" },
        subtitle: {
            en: "Travel through centuries of ancient history.",
            sq: "Udhëtoni nëpër shekuj të historisë antike."
        },
        category: { en: "ARCHAEOLOGICAL SITE", sq: "SIT ARKEOLOGJIK" },
        image: "assets/images/Butrint Albania.jpg"
    }
];


/* =========================================
   TRANSLATIONS
========================================= */

const pageTranslations = {
    en: {
        home: "HOME",
        explore: "EXPLORE",
        eyebrow: "DISCOVER ALBANIA",
        title: "EXPLORE",
        titleAccent: "ALBANIA",
        description: "Discover extraordinary cities, breathtaking coastlines and unforgettable places across the Land of Eagles.",
        sectionNumber: "01 / DESTINATIONS",
        featuredTitle: "Discover the cities",
        count: "DESTINATIONS",
        carouselHint: "SCROLL TO DISCOVER MORE",
        discoverNumber: "02 / YOUR JOURNEY",
        discoverTitle: "Every destination has a story.",
        discoverDescription: "From historic towns to beautiful coastal escapes, find the places that make Albania unforgettable.",
        backHome: "BACK TO HOME",
        footerTagline: "DISCOVER THE LAND OF EAGLES",
        openDestination: "DISCOVER"
    },

    sq: {
        home: "KRYEFAQJA",
        explore: "EKSPLORO",
        eyebrow: "ZBULONI SHQIPËRINË",
        title: "EKSPLORONI",
        titleAccent: "SHQIPËRINË",
        description: "Zbuloni qytete të jashtëzakonshme, brigje mahnitëse dhe vende të paharrueshme në Vendin e Shqiponjave.",
        sectionNumber: "01 / DESTINACIONET",
        featuredTitle: "Zbuloni qytetet",
        count: "DESTINACIONE",
        carouselHint: "LËVIZNI PËR TË ZBULUAR MË SHUMË",
        discoverNumber: "02 / UDHËTIMI JUAJ",
        discoverTitle: "Çdo destinacion ka një histori.",
        discoverDescription: "Nga qytetet historike te brigjet e bukura, zbuloni vendet që e bëjnë Shqipërinë të paharrueshme.",
        backHome: "KTHEHU NË KRYEFAQE",
        footerTagline: "ZBULONI VENDIN E SHQIPONJAVE",
        openDestination: "ZBULONI"
    }
};


/* =========================================
   LANGUAGE
========================================= */

let currentLanguage =
    localStorage.getItem("albaniaLanguage") || "en";

if (!pageTranslations[currentLanguage]) {
    currentLanguage = "en";
}


/* =========================================
   CREATE DESTINATION CARDS
========================================= */

function createDestinationCards() {
    const container = document.getElementById("destinationList");

    if (!container) return;

    container.innerHTML = "";

    destinations.forEach((destination, index) => {
        const card = document.createElement("a");

        card.className = "destination-card";
        card.href = `destination.html?place=${destination.slug}`;

        const image = document.createElement("img");
        image.className = "destination-image";
        image.src = destination.image;
        image.alt = `${destination.name}, Albania`;
        image.loading = index < 4 ? "eager" : "lazy";

        image.addEventListener("error", () => {
            image.style.display = "none";
        });

        const overlay = document.createElement("div");
        overlay.className = "destination-overlay";

        const label = document.createElement("span");
        label.className = "destination-date";
        label.textContent = destination.category[currentLanguage];

        const arrow = document.createElement("span");
        arrow.className = "destination-arrow";
        arrow.textContent = "↗";

        const content = document.createElement("div");
        content.className = "destination-content";

        const category = document.createElement("span");
        category.className = "destination-category";
        category.textContent = destination.region[currentLanguage];

        const name = document.createElement("h3");
        name.className = "destination-name";
        name.textContent = destination.name;

        const subtitle = document.createElement("p");
        subtitle.className = "destination-subtitle";
        subtitle.textContent = destination.subtitle[currentLanguage];

        const region = document.createElement("span");
        region.className = "destination-region";
        region.textContent = pageTranslations[currentLanguage].openDestination + " →";

        content.appendChild(category);
        content.appendChild(name);
        content.appendChild(subtitle);
        content.appendChild(region);

        card.appendChild(image);
        card.appendChild(overlay);
        card.appendChild(label);
        card.appendChild(arrow);
        card.appendChild(content);

        container.appendChild(card);
    });

    updateDestinationCount();
}


/* =========================================
   DESTINATION COUNT
========================================= */

function updateDestinationCount() {
    const count = document.getElementById("destinationCount");

    if (!count) return;

    count.textContent =
        `${String(destinations.length).padStart(2, "0")} ${pageTranslations[currentLanguage].count}`;
}


/* =========================================
   TRANSLATE PAGE
========================================= */

function translateDestinationsPage() {
    const text = pageTranslations[currentLanguage];

    document.documentElement.lang = currentLanguage;

    const translations = {
        ".destinations-nav a:first-child": text.home,
        ".destinations-nav a:last-child": text.explore,
        ".destinations-eyebrow": text.eyebrow,
        ".destinations-intro p": text.description,
        ".section-number": text.sectionNumber,
        ".destination-section-heading h2": text.featuredTitle,
        ".carousel-footer > span": text.carouselHint,
        ".destination-discover .section-number": text.discoverNumber,
        ".destination-discover h2": text.discoverTitle,
        ".destination-discover p": text.discoverDescription,
        ".back-home-link span:first-child": text.backHome,
        ".destinations-footer > span:last-child": text.footerTagline
    };

    Object.entries(translations).forEach(([selector, value]) => {
        const element = document.querySelector(selector);

        if (element) {
            element.textContent = value;
        }
    });

    const title = document.querySelector(".destinations-intro h1");

    if (title) {
        title.innerHTML = `${text.title} <span>${text.titleAccent}</span>`;
    }

    const sectionLabel = document.querySelector(".destination-section-heading .section-number");

    if (sectionLabel) {
        sectionLabel.textContent = text.sectionNumber;
    }

    const discoverLabel = document.querySelector(".destination-discover .section-number");

    if (discoverLabel) {
        discoverLabel.textContent = text.discoverNumber;
    }

    createDestinationCards();
}


/* =========================================
   LANGUAGE SWITCHER
========================================= */

function initializeLanguageSwitcher() {
    const switcher = document.getElementById("languageSwitcher");

    if (!switcher) return;

    switcher.value = currentLanguage;

    switcher.addEventListener("change", () => {
        currentLanguage = switcher.value;

        localStorage.setItem("albaniaLanguage", currentLanguage);

        translateDestinationsPage();
    });
}


/* =========================================
   CAROUSEL CONTROLS
========================================= */

function initializeCarousel() {
    const track = document.getElementById("destinationList");

    const previousButton = document.getElementById("previousDestinations");
    const nextButton = document.getElementById("nextDestinations");

    if (!track || !previousButton || !nextButton) return;

    previousButton.addEventListener("click", () => {
        track.parentElement.scrollBy({
            left: -550,
            behavior: "smooth"
        });
    });

    nextButton.addEventListener("click", () => {
        track.parentElement.scrollBy({
            left: 550,
            behavior: "smooth"
        });
    });
}


/* =========================================
   INITIALIZE PAGE
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeLanguageSwitcher();
    translateDestinationsPage();
    initializeCarousel();
});
