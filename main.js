
/* =========================================
   ALBANIA EXPLORER
   MAPLIBRE INTERACTIVE MAP
========================================= */

const destinations = [
    {
        name: "Tirana",
        slug: "tirana",
        coordinates: [19.8187, 41.3275],
        region: "Central Albania"
    },
    {
        name: "Shkodër",
        slug: "shkoder",
        coordinates: [19.5033, 42.0683],
        region: "Northern Albania"
    },
    {
        name: "Durrës",
        slug: "durres",
        coordinates: [19.4547, 41.3246],
        region: "Western Albania"
    },
    {
        name: "Berat",
        slug: "berat",
        coordinates: [19.9522, 40.7058],
        region: "Southern Albania"
    },
    {
        name: "Gjirokastër",
        slug: "gjirokaster",
        coordinates: [20.1389, 40.0758],
        region: "Southern Albania"
    },
    {
        name: "Vlorë",
        slug: "vlore",
        coordinates: [19.4897, 40.4661],
        region: "Southern Albania"
    },
    {
        name: "Sarandë",
        slug: "sarande",
        coordinates: [20.0053, 39.8756],
        region: "Southern Albania"
    },
    {
        name: "Ksamil",
        slug: "ksamil",
        coordinates: [20.0053, 39.7681],
        region: "Southern Albania"
    },
    {
        name: "Krujë",
        slug: "kruje",
        coordinates: [19.7928, 41.5095],
        region: "Central Albania"
    },
    {
        name: "Theth",
        slug: "theth",
        coordinates: [19.7681, 42.3953],
        region: "Northern Albania"
    },
    {
        name: "Valbonë",
        slug: "valbone",
        coordinates: [19.8917, 42.4519],
        region: "Northern Albania"
    },
    {
        name: "Butrint",
        slug: "butrint",
        coordinates: [20.0261, 39.7453],
        region: "Southern Albania"
    }
];

/* =========================================
   CONFIGURATION
========================================= */

const albaniaCenter = [20.0, 41.15];

let albaniaMap = null;
let mapMarkers = [];
let selectedDestination = null;

let currentLanguage =
    localStorage.getItem("albaniaLanguage") || "en";

const translations = {
    en: {
        search: "Search a destination...",
        searchButton: "SEARCH",
        reset: "RESET VIEW",
        heading: "Explore Places",
        database: "DESTINATION DATABASE",
        legend: "Featured destinations",
        status: "MAP ONLINE",
        region: "REGION",
        explore: "DISCOVER DESTINATION",
        noResults: "No destinations found.",
        mapError: "MAP COULD NOT BE LOADED"
    },

    sq: {
        search: "Kërkoni një destinacion...",
        searchButton: "KËRKO",
        reset: "RIVENDOS PAMJEN",
        heading: "Eksploroni Vendet",
        database: "BAZA E DESTINACIONEVE",
        legend: "Destinacione kryesore",
        status: "HARTA AKTIVE",
        region: "RAJONI",
        explore: "ZBULONI DESTINACIONIN",
        noResults: "Nuk u gjet asnjë destinacion.",
        mapError: "HARTA NUK MUND TË NGARKOHET"
    }
};

/* =========================================
   MAP STATUS
========================================= */

function updateMapStatus(message) {
    const status = document.getElementById("mapStatus");

    if (status) {
        status.textContent = message;
    }
}

/* =========================================
   CUSTOM MARKER
========================================= */

function createDestinationMarker(destination) {
    const markerElement = document.createElement("button");

    markerElement.className = "custom-map-marker";
    markerElement.type = "button";
    markerElement.setAttribute(
        "aria-label",
        destination.name
    );

    markerElement.innerHTML = `
        <span class="marker-pulse"></span>
        <span class="marker-core"></span>
    `;

    const marker = new maplibregl.Marker({
        element: markerElement,
        anchor: "center"
    })
        .setLngLat(destination.coordinates)
        .addTo(albaniaMap);

    markerElement.addEventListener("click", () => {
        selectDestination(destination);
    });

    return marker;
}

/* =========================================
   DESTINATION POPUP
========================================= */

function showDestinationPopup(destination) {
    const content = document.createElement("div");
    content.className = "destination-popup-content";

    const title = document.createElement("h3");
    title.textContent = destination.name;

    const region = document.createElement("p");
    region.textContent =
        translations[currentLanguage].region +
        ": " + destination.region;

    const link = document.createElement("a");
    link.href = "destination.html?place=" + destination.slug;
    link.textContent =
        translations[currentLanguage].explore;

    content.appendChild(title);
    content.appendChild(region);
    content.appendChild(link);

    new maplibregl.Popup({
        closeButton: true,
        closeOnClick: false,
        offset: 22,
        className: "albania-map-popup"
    })
        .setLngLat(destination.coordinates)
        .setDOMContent(content)
        .addTo(albaniaMap);
}

/* =========================================
   SELECT DESTINATION
========================================= */

function selectDestination(destination) {
    selectedDestination = destination;

    albaniaMap.flyTo({
        center: destination.coordinates,
        zoom: 11,
        speed: 0.8,
        curve: 1.4,
        essential: true
    });

    document.querySelectorAll(".destination-item")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.slug === destination.slug
            );
        });

    showDestinationPopup(destination);
}

/* =========================================
   DESTINATION LIST
========================================= */

function createDestinationList(filter = "") {
    const container =
        document.getElementById("destinationList");

    if (!container) return;

    container.innerHTML = "";

    const searchTerm = filter.toLowerCase();

    const filteredDestinations = destinations.filter(
        destination =>
            destination.name.toLowerCase().includes(searchTerm) ||
            destination.region.toLowerCase().includes(searchTerm)
    );

    if (filteredDestinations.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.textContent =
            translations[currentLanguage].noResults;

        container.appendChild(emptyMessage);
        return;
    }

    filteredDestinations.forEach(destination => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "destination-item";
        button.textContent = destination.name;
        button.dataset.slug = destination.slug;

        if (
            selectedDestination &&
            selectedDestination.slug === destination.slug
        ) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            selectDestination(destination);
        });

        container.appendChild(button);
    });
}

/* =========================================
   SEARCH
========================================= */

function initializeSearch() {
    const input =
        document.getElementById("destinationSearch");

    const button =
        document.getElementById("searchButton");

    if (!input || !button) return;

    function searchDestination() {
        const query = input.value.trim().toLowerCase();

        createDestinationList(query);

        const match = destinations.find(destination =>
            destination.name.toLowerCase() === query ||
            destination.slug.toLowerCase() === query
        );

        if (match) {
            selectDestination(match);
        }
    }

    button.addEventListener("click", searchDestination);

    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            searchDestination();
        }
    });

    input.addEventListener("input", () => {
        createDestinationList(input.value.trim());
    });
}

/* =========================================
   RESET MAP
========================================= */

function initializeResetButton() {
    const button =
        document.getElementById("resetMapButton");

    if (!button) return;

    button.addEventListener("click", () => {
        selectedDestination = null;

        albaniaMap.flyTo({
            center: albaniaCenter,
            zoom: 7,
            speed: 0.8,
            essential: true
        });

        document.querySelectorAll(".destination-item")
            .forEach(item => item.classList.remove("active"));

        const input =
            document.getElementById("destinationSearch");

        if (input) input.value = "";

        createDestinationList();
    });
}

/* =========================================
   MAP COORDINATES
========================================= */

function initializeCoordinates() {
    const coordinateDisplay =
        document.getElementById("mapCoordinates");

    if (!coordinateDisplay) return;

    function updateCoordinates() {
        const center = albaniaMap.getCenter();

        coordinateDisplay.textContent =
            Math.abs(center.lat).toFixed(2) + "° N / " +
            Math.abs(center.lng).toFixed(2) + "° E";
    }

    albaniaMap.on("move", updateCoordinates);
    updateCoordinates();
}

/* =========================================
   LANGUAGE
========================================= */

function initializeMapLanguage() {
    const switcher =
        document.getElementById("languageSwitcher");

    if (!switcher) return;

    switcher.value = currentLanguage;

    switcher.addEventListener("change", function () {
        currentLanguage = this.value;

        localStorage.setItem(
            "albaniaLanguage",
            currentLanguage
        );

        const text = translations[currentLanguage];

        document.querySelector(".map-search input").placeholder =
            text.search;

        document.getElementById("searchButton").textContent =
            text.searchButton;

        document.getElementById("resetMapButton").textContent =
            text.reset;

        document.querySelector(".sidebar-heading h2").textContent =
            text.heading;

        document.querySelector(".sidebar-heading span").textContent =
            text.database;

        document.querySelector(".map-legend span:last-child").textContent =
            text.legend;

        createDestinationList(
            document.getElementById("destinationSearch").value
        );

        if (selectedDestination) {
            showDestinationPopup(selectedDestination);
        }

        updateMapStatus(text.status);
    });
}

/* =========================================
   INITIALIZE MAP
========================================= */

function initializeMap() {
    const mapElement =
        document.getElementById("albaniaMap");

    if (!mapElement || typeof maplibregl === "undefined") {
        updateMapStatus(
            translations[currentLanguage].mapError
        );

        console.error("MapLibre or map container not found.");
        return;
    }

    try {
        albaniaMap = new maplibregl.Map({
            container: "albaniaMap",

            style: {
                version: 8,

                sources: {
                    "carto-dark": {
                        type: "raster",
                        tiles: [
                            "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                            "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                            "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                            "https://d.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                        ],
                        tileSize: 256,
                        attribution:
                            '&copy; OpenStreetMap contributors &copy; CARTO'
                    }
                },

                layers: [
                    {
                        id: "carto-dark-layer",
                        type: "raster",
                        source: "carto-dark",
                        minzoom: 0,
                        maxzoom: 19
                    }
                ]
            },

            center: albaniaCenter,
            zoom: 7,
            minZoom: 5,
            maxZoom: 17,

            maxBounds: [
                [18.0, 39.0],
                [22.0, 43.0]
            ],

            attributionControl: true
        });

        albaniaMap.addControl(
            new maplibregl.NavigationControl({
                showCompass: true,
                showZoom: true
            }),
            "top-right"
        );

        albaniaMap.on("load", () => {
            destinations.forEach(destination => {
                mapMarkers.push(
                    createDestinationMarker(destination)
                );
            });

            createDestinationList();
            initializeSearch();
            initializeResetButton();
            initializeCoordinates();

            updateMapStatus(
                translations[currentLanguage].status
            );
        });

        albaniaMap.on("error", event => {
            console.error("MapLibre error:", event.error);
        });

    } catch (error) {
        console.error("Map initialization error:", error);

        updateMapStatus(
            translations[currentLanguage].mapError
        );
    }
}

/* =========================================
   START
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeMap();
    initializeMapLanguage();
});
