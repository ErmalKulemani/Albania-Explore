
/* =========================================
   ALBANIA EXPLORER
   WEBSITE LANGUAGE SYSTEM
========================================= */

const homeTranslations = {
    en: {
        "nav-home": "Home",
        "nav-discover": "Discover",
        "nav-experiences": "Experiences",
        "nav-about": "About Albania",

        "hero-label": "WELCOME TO ALBANIA",
        "hero-subtitle": "Discover the Land of Eagles",
        "hero-description": "A land of breathtaking landscapes, crystal-clear waters, ancient history and unforgettable experiences. Discover the beauty of Albania.",
        "explore-button": "EXPLORE",
        "scroll": "SCROLL TO DISCOVER",

        "intro-title": "A Small Country. An Extraordinary World.",
        "intro-description": "Located in southeastern Europe, Albania is a country of remarkable contrasts. From the turquoise waters of the Adriatic and Ionian seas to the majestic Albanian Alps, every corner tells a different story. Its rich history, welcoming traditions, historic cities and spectacular landscapes make Albania a destination waiting to be discovered.",

        "experiences-title": "Discover Every Side of Albania",
        "experiences-description": "From the coast to the mountains, from ancient cities to local traditions. There is always something new to discover.",

        "explore-title": "Ready to Explore Albania?",
        "explore-description": "Discover the cities, explore the map, find extraordinary destinations and plan your journey across Albania."
    },

    sq: {
        "nav-home": "Kryefaqja",
        "nav-discover": "Zbuloni",
        "nav-experiences": "Përvojat",
        "nav-about": "Rreth Shqipërisë",

        "hero-label": "MIRË SE VINI NË SHQIPËRI",
        "hero-subtitle": "Zbuloni Vendin e Shqiponjave",
        "hero-description": "Një vend me peizazhe mahnitëse, ujëra të kristalta, histori të lashtë dhe përvoja të paharrueshme. Zbuloni bukurinë e Shqipërisë.",
        "explore-button": "EKSPLORO",
        "scroll": "ZBRISNI PËR TË ZBULUAR",

        "intro-title": "Një Vend i Vogël. Një Botë e Jashtëzakonshme.",
        "intro-description": "E vendosur në Evropën Juglindore, Shqipëria është një vend me kontraste të jashtëzakonshme. Nga ujërat bruz të Adriatikut dhe Jonit deri te Alpet madhështore Shqiptare, çdo cep tregon një histori të veçantë. Historia e pasur, traditat mikpritëse, qytetet historike dhe peizazhet mahnitëse e bëjnë Shqipërinë një destinacion që pret të zbulohet.",

        "experiences-title": "Zbuloni Çdo Anë të Shqipërisë",
        "experiences-description": "Nga bregdeti në male, nga qytetet e lashta te traditat vendase. Gjithmonë ka diçka të re për të zbuluar.",

        "explore-title": "Gati për të Eksploruar Shqipërinë?",
        "explore-description": "Zbuloni qytetet, eksploroni hartën, gjeni destinacione të jashtëzakonshme dhe planifikoni udhëtimin tuaj në Shqipëri."
    }
};

const homeExtraTranslations = {
    en: {
        introductionLabel: "DISCOVER THE COUNTRY",
        coastalTitle: "Coastal Beauty",
        coastalDescription: "Discover spectacular beaches and crystal-clear Mediterranean waters.",
        natureTitle: "Wild Nature",
        natureDescription: "Explore impressive mountains, national parks and natural landscapes.",
        historyTitle: "Ancient History",
        historyDescription: "Discover historic towns, castles and centuries of cultural heritage.",
        experienceLabel: "THE ALBANIAN EXPERIENCE",
        beachesTitle: "BEACHES & SEA",
        beachesDescription: "Explore the Albanian Riviera, beautiful beaches and coastal towns.",
        mountainsTitle: "NATURE & MOUNTAINS",
        mountainsDescription: "Discover national parks, lakes, rivers and mountain landscapes.",
        cultureTitle: "HISTORY & CULTURE",
        cultureDescription: "Travel through ancient history, architecture and Albanian traditions.",
        foodTitle: "FOOD & TRADITIONS",
        foodDescription: "Discover traditional cuisine, local products and regional culture.",
        journeyLabel: "YOUR JOURNEY STARTS HERE",
        exploreAlbania: "EXPLORE ALBANIA →",
        footerDescription: "Discover the Land of Eagles.",
        footerCopyright: "© 2026 ALBANIA EXPLORER. ALL RIGHTS RESERVED."
    },

    sq: {
        introductionLabel: "ZBULONI VENDIN",
        coastalTitle: "Bukuria Bregdetare",
        coastalDescription: "Zbuloni plazhe mahnitëse dhe ujërat e kristalta të Mesdheut.",
        natureTitle: "Natyra e Egër",
        natureDescription: "Eksploroni male madhështore, parqe kombëtare dhe peizazhe natyrore.",
        historyTitle: "Historia e Lashtë",
        historyDescription: "Zbuloni qytete historike, kështjella dhe shekuj trashëgimie kulturore.",
        experienceLabel: "PËRVOJA SHQIPTARE",
        beachesTitle: "PLAZHET DHE DETI",
        beachesDescription: "Eksploroni Rivierën Shqiptare, plazhet e bukura dhe qytetet bregdetare.",
        mountainsTitle: "NATYRA DHE MALet",
        mountainsDescription: "Zbuloni parqe kombëtare, liqene, lumenj dhe peizazhe malore.",
        cultureTitle: "HISTORIA DHE KULTURA",
        cultureDescription: "Udhëtoni nëpër historinë e lashtë, arkitekturën dhe traditat shqiptare.",
        foodTitle: "USHQIMI DHE TRADITAT",
        foodDescription: "Zbuloni kuzhinën tradicionale, produktet vendase dhe kulturën rajonale.",
        journeyLabel: "UDHËTIMI JUAJ FILLON KËTU",
        exploreAlbania: "EKSPLORO SHQIPËRINË →",
        footerDescription: "Zbuloni Vendin e Shqiponjave.",
        footerCopyright: "© 2026 ALBANIA EXPLORER. TË GJITHA TË DREJTAT E REZERVUARA."
    }
};

function applyHomeLanguage(language) {
    const translations = homeTranslations[language];
    const extra = homeExtraTranslations[language];

    if (!translations || !extra) return;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    function setText(selector, value) {
        const element = document.querySelector(selector);

        if (element) {
            element.textContent = value;
        }
    }

    setText(".header-explore", language === "sq" ? "Eksploro →" : "Explore →");

    setText(".introduction > .section-label", extra.introductionLabel);

    setText(".highlight:nth-child(1) h3", extra.coastalTitle);
    setText(".highlight:nth-child(1) p", extra.coastalDescription);

    setText(".highlight:nth-child(2) h3", extra.natureTitle);
    setText(".highlight:nth-child(2) p", extra.natureDescription);

    setText(".highlight:nth-child(3) h3", extra.historyTitle);
    setText(".highlight:nth-child(3) p", extra.historyDescription);

    setText(".experiences > .section-label", extra.experienceLabel);

    setText(".experience-item:nth-child(1) h3", extra.beachesTitle);
    setText(".experience-item:nth-child(1) p", extra.beachesDescription);

    setText(".experience-item:nth-child(2) h3", extra.mountainsTitle);
    setText(".experience-item:nth-child(2) p", extra.mountainsDescription);

    setText(".experience-item:nth-child(3) h3", extra.cultureTitle);
    setText(".experience-item:nth-child(3) p", extra.cultureDescription);

    setText(".experience-item:nth-child(4) h3", extra.foodTitle);
    setText(".experience-item:nth-child(4) p", extra.foodDescription);

    setText(".explore-section > .section-label", extra.journeyLabel);
    setText(".explore-section .explore-button", extra.exploreAlbania);

    setText(".footer p", extra.footerDescription);
    setText(".footer > span", extra.footerCopyright);
}

document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.getElementById("languageSwitcher");

    if (!document.querySelector(".hero") || !switcher) return;

    let currentLanguage =
        localStorage.getItem("albaniaLanguage") || "en";

    if (!homeTranslations[currentLanguage]) {
        currentLanguage = "en";
    }

    switcher.value = currentLanguage;
    applyHomeLanguage(currentLanguage);

    switcher.addEventListener("change", () => {
        currentLanguage = switcher.value;

        if (!homeTranslations[currentLanguage]) {
            currentLanguage = "en";
        }

        localStorage.setItem("albaniaLanguage", currentLanguage);
        applyHomeLanguage(currentLanguage);
    });
});
