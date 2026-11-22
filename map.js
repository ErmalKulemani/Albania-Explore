
/* ==========================================
   ALBANIA EXPLORER
   Interactive Map System
========================================== */

const destinations = [
    {
        id: "tirana",
        name: "Tirana",
        category: "city",
        icon: "🏙️",
        coordinates: [41.3275, 19.8187],
        description: {
            en: "The capital of Albania, known for its colourful architecture, museums and vibrant atmosphere.",
            sq: "Kryeqyteti i Shqipërisë, i njohur për arkitekturën shumëngjyrëshe, muzetë dhe atmosferën e gjallë."
        }
    },
    {
        id: "shkoder",
        name: "Shkodër",
        category: "city",
        icon: "🏙️",
        coordinates: [42.0683, 19.5126],
        description: {
            en: "A historic city in northern Albania, close to Lake Shkodra and Rozafa Castle.",
            sq: "Një qytet historik në veri të Shqipërisë, pranë Liqenit të Shkodrës dhe Kalasë së Rozafës."
        }
    },
    {
        id: "durres",
        name: "Durrës",
        category: "city",
        icon: "🏙️",
        coordinates: [41.3231, 19.4414],
        description: {
            en: "A coastal city famous for its Roman amphitheatre, harbour and beaches.",
            sq: "Një qytet bregdetar i njohur për amfiteatrin romak, portin dhe plazhet."
        }
    },
    {
        id: "berat",
        name: "Berat",
        category: "history",
        icon: "🏛️",
        coordinates: [40.7058, 19.9522],
        description: {
            en: "A UNESCO World Heritage city famous for its traditional Ottoman architecture.",
            sq: "Një qytet i Trashëgimisë Botërore të UNESCO-s, i njohur për arkitekturën tradicionale osmane."
        }
    },
    {
        id: "gjirokaster",
        name: "Gjirokastër",
        category: "history",
        icon: "🏛️",
        coordinates: [40.0758, 20.1389],
        description: {
            en: "A UNESCO World Heritage city with stone houses and an impressive castle.",
            sq: "Një qytet i Trashëgimisë Botërore të UNESCO-s me shtëpi guri dhe një kala mbresëlënëse."
        }
    },
    {
        id: "vlore",
        name: "Vlorë",
        category: "beach",
        icon: "🏖️",
        coordinates: [40.4661, 19.4914],
        description: {
            en: "A coastal city where the Adriatic and Ionian seas meet.",
            sq: "Një qytet bregdetar ku takohen deti Adriatik dhe deti Jon."
        }
    },
    {
        id: "sarande",
        name: "Sarandë",
        category: "beach",
        icon: "🏖️",
        coordinates: [39.8756, 20.0053],
        description: {
            en: "A popular seaside destination on the Ionian coast, with beautiful beaches.",
            sq: "Një destinacion i njohur bregdetar në bregdetin Jon, me plazhe të bukura."
        }
    },
    {
        id: "ksamil",
        name: "Ksamil",
        category: "beach",
        icon: "🏝️",
        coordinates: [39.7680, 19.9995],
        description: {
            en: "A seaside village famous for its turquoise waters and small islands.",
            sq: "Një fshat bregdetar i njohur për ujërat bruz dhe ishujt e vegjël."
        }
    },
    {
        id: "kruje",
        name: "Krujë",
        category: "history",
        icon: "🏰",
        coordinates: [41.5095, 19.7928],
        description: {
            en: "A historic town famous for its castle and traditional bazaar.",
            sq: "Një qytet historik i njohur për kalanë dhe pazarin tradicional."
        }
    },
    {
        id: "theth",
        name: "Theth",
        category: "nature",
        icon: "⛰️",
        coordinates: [42.3956, 19.7747],
        description: {
            en: "A mountain village in the Albanian Alps, surrounded by spectacular landscapes.",
            sq: "Një fshat malor në Alpet Shqiptare, i rrethuar nga peizazhe mahnitëse."
        }
    },
    {
        id: "valbone",
        name: "Valbonë",
        category: "nature",
        icon: "⛰️",
        coordinates: [42.4500, 19.9000],
        description: {
            en: "A spectacular valley in the Albanian Alps, known for its mountain scenery.",
            sq: "Një luginë mahnitëse në Alpet Shqiptare, e njohur për peizazhet malore."
        }
    },
    {
        id: "butrint",
        name: "Butrint",
        category: "history",
        icon: "🏛️",
        coordinates: [39.7456, 20.0203],
        description: {
            en: "An important archaeological site and UNESCO World Heritage location.",
            sq: "Një sit i rëndësishëm arkeologjik dhe pjesë e Trashëgimisë Botërore të UNESCO-s."
        }
    }
];


/* ==========================================
   TRANSLATIONS
========================================== */

const mapTranslations = {
    en: {
        searchPlaceholder: "Search a city or destination...",
        searchButton: "SEARCH",
        showAll: "SHOW ALL ALBANIA",
        destinations: "DESTINATIONS",
        discover: "Discover Albania",
        legend: "MAP LEGEND",
        cities: "Cities",
        beaches: "Beaches",
        nature: "Nature",
        history: "Historical sites",
        loading: "Loading map...",
        ready: "Map ready",
        notFound: "Destination not found",
        searchEmpty: "Enter a destination to search",
        explore: "Explore",
        intro: "START YOUR JOURNEY",
        mapDescription: "Discover every corner of Albania",
        mapSubtitle: "From the Adriatic and Ionian coast to the Albanian Alps, explore the destinations that make this country unique."
    },
    sq: {
        searchPlaceholder: "Kërko një qytet ose destinacion...",
        searchButton: "KËRKO",
        showAll: "SHFAQ TË GJITHË SHQIPËRINË",
        destinations: "DESTINACIONET",
        discover: "Zbulo Shqipërinë",
        legend: "LEGJENDA E HARTËS",
        cities: "Qytetet",
        beaches: "Plazhet",
        nature: "Natyra",
        history: "Vendet historike",
        loading: "Duke ngarkuar hartën...",
        ready: "Harta është gati",
        notFound: "Destinacioni nuk u gjet",
        searchEmpty: "Shkruaj një destinacion për të kërkuar",
        explore: "Eksploro",
        intro: "FILLONI UDHËTIMIN TUAJ",
        mapDescription: "Zbuloni çdo cep të Shqipërisë",
        mapSubtitle: "Nga brigjet e Adriatikut dhe Jonit deri te Alpet Shqiptare, zbuloni destinacionet që e bëjnë këtë vend unik."
    }
};


/* ==========================================
   MAP CONFIGURATION
========================================== */

let currentLanguage = "en";
let albaniaMap = null;
let mapMarkers = {};
let activeDestination = null;

const albaniaCenter = [41.1533, 20.1683];

const categoryColors = {
    city: "#e6a23c",
    beach: "#38bdf8",
    nature: "#4ade80",
    history: "#c084fc"
};


/* ==========================================
   INITIALIZE MAP
========================================== */

function initializeMap() {

    const mapElement = document.getElementById("albaniaMap");

    if (!mapElement || typeof L === "undefined") {
        console.error("Leaflet or map container not found.");
        return;
    }

    albaniaMap = L.map("albaniaMap", {
        center: albaniaCenter,
        zoom: 7,
        minZoom: 6,
        maxZoom: 17,
        zoomControl: true,
        scrollWheelZoom: true
    });

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }
    ).addTo(albaniaMap);

    addDestinationMarkers();
    createDestinationList();
    initializeSearch();
    initializeResetButton();

    setTimeout(() => {
        albaniaMap.invalidateSize();
        updateMapStatus("ready");
    }, 300);

}


/* ==========================================
   CREATE MAP MARKERS
========================================== */

function createCustomIcon(destination) {

    const color = categoryColors[destination.category];

    return L.divIcon({
        className: "custom-map-marker",
        html: `
            <div style="
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #101a2a;
                border: 2px solid ${color};
                border-radius: 50%;
                box-shadow: 0 0 16px ${color}88;
                font-size: 17px;
            ">
                ${destination.icon}
            </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
        popupAnchor: [0, -18]
    });

}


function addDestinationMarkers() {

    destinations.forEach(destination => {

        const marker = L.marker(
            destination.coordinates,
            {
                icon: createCustomIcon(destination),
                title: destination.name
            }
        ).addTo(albaniaMap);

        marker.bindPopup(
            createPopupContent(destination)
        );

        marker.on("click", () => {
            selectDestination(destination.id, false);
        });

        mapMarkers[destination.id] = marker;

    });

}


/* ==========================================
   POPUP CONTENT
========================================== */

function createPopupContent(destination) {

    const description =
        destination.description[currentLanguage];

    const exploreText =
        mapTranslations[currentLanguage].explore;

    return `
        <div class="destination-popup">

            <strong>${destination.icon} ${destination.name}</strong>

            <p>${description}</p>

            <small>
                ${exploreText} ${destination.name}
            </small>

        </div>
    `;

}


/* ==========================================
   DESTINATION SIDEBAR
========================================== */

function createDestinationList() {

    const list = document.getElementById("destinationList");

    if (!list) return;

    list.innerHTML = "";

    destinations.forEach(destination => {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "destination-item";
        button.dataset.destination = destination.id;

        const categoryName =
            mapTranslations[currentLanguage][
                destination.category === "city"
                    ? "cities"
                    : destination.category === "beach"
                        ? "beaches"
                        : destination.category === "nature"
                            ? "nature"
                            : "history"
            ];

        button.innerHTML = `
            <span class="destination-icon">
                ${destination.icon}
            </span>

            <span class="destination-name">
                <strong>${destination.name}</strong>
                <small>${categoryName}</small>
            </span>
        `;

        button.addEventListener("click", () => {
            selectDestination(destination.id, true);
        });

        list.appendChild(button);

    });

}


/* ==========================================
   SELECT DESTINATION
========================================== */

function selectDestination(id, openPopup = true) {

    const destination = destinations.find(
        item => item.id === id
    );

    if (!destination || !albaniaMap) return;

    activeDestination = id;

    albaniaMap.flyTo(
        destination.coordinates,
        12,
        {
            animate: true,
            duration: 1.5
        }
    );

    if (openPopup) {
        mapMarkers[id].openPopup();
    }

    document.querySelectorAll(".destination-item").forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.destination === id
        );

    });

    const input = document.getElementById("destinationSearch");

    if (input) {
        input.value = destination.name;
    }

    updateMapStatus("ready");

}


/* ==========================================
   SEARCH
========================================== */

function initializeSearch() {

    const input = document.getElementById("destinationSearch");
    const button = document.getElementById("searchButton");

    if (!input || !button) return;

    function searchDestination() {

        const query = input.value.trim().toLowerCase();

        if (!query) {
            updateMapStatus("searchEmpty");
            return;
        }

        const result = destinations.find(destination => {

            const name = destination.name.toLowerCase();

            const translatedDescription =
                destination.description[currentLanguage].toLowerCase();

            return (
                name.includes(query) ||
                translatedDescription.includes(query)
            );

        });

        if (result) {

            selectDestination(result.id, true);

        } else {

            updateMapStatus("notFound");

        }

    }

    button.addEventListener("click", searchDestination);

    input.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            searchDestination();
        }

    });

}


/* ==========================================
   RESET MAP
========================================== */

function initializeResetButton() {

    const button = document.getElementById("resetMapButton");

    if (!button) return;

    button.addEventListener("click", resetMap);

}


function resetMap() {

    if (!albaniaMap) return;

    activeDestination = null;

    albaniaMap.flyTo(
        albaniaCenter,
        7,
        {
            animate: true,
            duration: 1.5
        }
    );

    document.querySelectorAll(".destination-item").forEach(item => {
        item.classList.remove("active");
    });

    const input = document.getElementById("destinationSearch");

    if (input) {
        input.value = "";
    }

    Object.values(mapMarkers).forEach(marker => {
        marker.closePopup();
    });

    updateMapStatus("ready");

}


/* ==========================================
   LANGUAGE SYSTEM
========================================== */

function updateMapLanguage(language) {

    currentLanguage = language === "sq" ? "sq" : "en";

    const t = mapTranslations[currentLanguage];

    const searchInput = document.getElementById("destinationSearch");
    const searchButton = document.getElementById("searchButton");
    const resetButton = document.getElementById("resetMapButton");

    if (searchInput) {
        searchInput.placeholder = t.searchPlaceholder;
    }

    if (searchButton) {
        searchButton.textContent = t.searchButton;
    }

    if (resetButton) {
        resetButton.textContent = t.showAll;
    }

    const sectionLabels = document.querySelectorAll(
        ".map-sidebar .section-label"
    );

    if (sectionLabels[0]) {
        sectionLabels[0].textContent = t.destinations;
    }

    const sidebarTitle = document.querySelector(
        ".sidebar-heading h2"
    );

    if (sidebarTitle) {
        sidebarTitle.textContent = t.discover;
    }

    const legendTitle = document.querySelector(
        ".map-legend h3"
    );

    if (legendTitle) {
        legendTitle.textContent = t.legend;
    }

    const legendItems = document.querySelectorAll(
        ".map-legend .legend-item span:last-child"
    );

    const legendLabels = [
        t.cities,
        t.beaches,
        t.nature,
        t.history
    ];

    legendItems.forEach((item, index) => {
        if (legendLabels[index]) {
            item.textContent = legendLabels[index];
        }
    });

    const introLabel = document.querySelector(
        ".map-destinations .section-label"
    );

    const introTitle = document.querySelector(
        ".map-destinations h2"
    );

    const introText = document.querySelector(
        ".map-destinations p"
    );

    if (introLabel) introLabel.textContent = t.intro;
    if (introTitle) introTitle.textContent = t.mapDescription;
    if (introText) introText.textContent = t.mapSubtitle;

    createDestinationList();

    destinations.forEach(destination => {

        if (mapMarkers[destination.id]) {
            mapMarkers[destination.id].setPopupContent(
                createPopupContent(destination)
            );
        }

    });

    const status = document.getElementById("mapStatus");

    if (status) {
        status.textContent = t.ready;
    }

}


/* ==========================================
   MAP STATUS
========================================== */

function updateMapStatus(key) {

    const status = document.getElementById("mapStatus");

    if (!status) return;

    status.textContent =
        mapTranslations[currentLanguage][key] ||
        mapTranslations[currentLanguage].ready;

}


/* ==========================================
   LANGUAGE SELECTOR
========================================== */

function initializeMapLanguage() {

    const selector = document.getElementById("languageSwitcher");

    let savedLanguage = "en";

    try {
        savedLanguage =
            localStorage.getItem("albania-language") || "en";
    } catch (error) {
        savedLanguage = "en";
    }

    updateMapLanguage(savedLanguage);

    if (selector) {

        selector.value = currentLanguage;

        selector.addEventListener("change", event => {

            updateMapLanguage(event.target.value);

        });

    }

}


/* ==========================================
   START APPLICATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeMap();
    initializeMapLanguage();

    console.log("Albania Explorer map initialized.");

});
