
/* =========================================
   ALBANIA EXPLORER
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   1. LANGUAGE SYSTEM
========================================= */

const translations = {

    en: {

        "nav-home": "Home",
        "nav-discover": "Discover",
        "nav-experiences": "Experiences",
        "nav-about": "About Albania",

        "hero-label": "WELCOME TO ALBANIA",
        "hero-subtitle": "Discover the Land of Eagles",

        "hero-description":
            "A land of breathtaking landscapes, crystal-clear waters, ancient history and unforgettable experiences. Discover the beauty of Albania.",

        "explore-button": "EXPLORE",
        "scroll": "SCROLL TO DISCOVER",

        "intro-title":
            "A Small Country. An Extraordinary World.",

        "intro-description":
            "Located in southeastern Europe, Albania is a country of remarkable contrasts. From the turquoise waters of the Adriatic and Ionian seas to the majestic Albanian Alps, every corner tells a different story. Its rich history, welcoming traditions, historic cities and spectacular landscapes make Albania a destination waiting to be discovered.",

        "experiences-title":
            "Discover Every Side of Albania",

        "experiences-description":
            "From the coast to the mountains, from ancient cities to local traditions. There is always something new to discover.",

        "explore-title":
            "Ready to Explore Albania?",

        "explore-description":
            "Discover the cities, explore the map, find extraordinary destinations and plan your journey across Albania."

    },


    sq: {

        "nav-home": "Kryefaqja",
        "nav-discover": "Zbulo",
        "nav-experiences": "Përvoja",
        "nav-about": "Rreth Shqipërisë",

        "hero-label": "MIRË SE VINI NË SHQIPËRI",
        "hero-subtitle": "Zbulo Vendin e Shqiponjave",

        "hero-description":
            "Një vend me peizazhe mahnitëse, ujëra të kristalta, histori të lashtë dhe përvoja të paharrueshme. Zbulo bukurinë e Shqipërisë.",

        "explore-button": "EKSPLORO",
        "scroll": "ZBRIT PËR TË ZBULUAR",

        "intro-title":
            "Një vend i vogël. Një botë e jashtëzakonshme.",

        "intro-description":
            "E vendosur në Evropën Juglindore, Shqipëria është një vend me kontraste të jashtëzakonshme. Nga ujërat bruz të deteve Adriatik dhe Jon deri te Alpet madhështore Shqiptare, çdo cep tregon një histori të ndryshme. Historia e pasur, traditat mikpritëse, qytetet historike dhe peizazhet spektakolare e bëjnë Shqipërinë një destinacion që meriton të zbulohet.",

        "experiences-title":
            "Zbulo çdo anë të Shqipërisë",

        "experiences-description":
            "Nga bregdeti te malet, nga qytetet e lashta te traditat lokale. Gjithmonë ka diçka të re për të zbuluar.",

        "explore-title":
            "Gati për të eksploruar Shqipërinë?",

        "explore-description":
            "Zbulo qytetet, eksploro hartën, gjej destinacione të jashtëzakonshme dhe planifiko udhëtimin tënd nëpër Shqipëri."

    }

};


/* =========================================
   2. CHANGE WEBSITE LANGUAGE
========================================= */

function changeLanguage(language) {

    if (!translations[language]) {
        language = "en";
    }

    document.documentElement.lang = language;

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[language][key]) {

            element.textContent = translations[language][key];

        }

    });


    // Update page title

    if (language === "sq") {

        document.title =
            "Albania Explorer | Zbulo Vendin e Shqiponjave";

    } else {

        document.title =
            "Albania Explorer | Discover the Land of Eagles";

    }


    // Update meta description

    const description = document.querySelector(
        'meta[name="description"]'
    );

    if (description) {

        description.content = language === "sq"

            ? "Zbulo Shqipërinë. Eksploro qytetet, plazhet, malet, historinë dhe kulturën me Albania Explorer."

            : "Discover Albania. Explore its cities, beaches, mountains, history and culture with Albania Explorer.";

    }


    // Remember selected language

    try {

        localStorage.setItem("albania-language", language);

    } catch (error) {

        console.warn("Language preference could not be saved.");

    }


    // Update language selector

    const selector = document.getElementById("languageSwitcher");

    if (selector) {

        selector.value = language;

    }

}


/* =========================================
   3. INITIALIZE LANGUAGE
========================================= */

function initializeLanguage() {

    let savedLanguage = "en";

    try {

        savedLanguage =
            localStorage.getItem("albania-language") || "en";

    } catch (error) {

        console.warn("Language preference unavailable.");

    }

    changeLanguage(savedLanguage);


    const selector = document.getElementById("languageSwitcher");

    if (selector) {

        selector.addEventListener("change", event => {

            changeLanguage(event.target.value);

        });

    }

}


/* =========================================
   4. NAVIGATION
========================================= */

function initializeNavigation() {

    const navigationLinks = document.querySelectorAll(
        '.navigation a[href^="#"]'
    );

    navigationLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });

}


/* =========================================
   5. EXPLORE BUTTON
========================================= */

function initializeExploreButtons() {

    const buttons = document.querySelectorAll(
        '.explore-button[href^="#"]'
    );

    buttons.forEach(button => {

        button.addEventListener("click", event => {

            const targetId = button.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });

}


/* =========================================
   6. APPLICATION INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeLanguage();

    initializeNavigation();

    initializeExploreButtons();

    console.log(
        "ALBANIA EXPLORER successfully initialized."
    );

});
