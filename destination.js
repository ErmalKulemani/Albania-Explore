
/* =========================================
   ALBANIA EXPLORER
   DESTINATION SYSTEM
========================================= */

const bilingual = (en, sq) => ({ en, sq });

const destinationData = {

    /* =====================================
       TIRANA
    ===================================== */

    tirana: {
        image: "assets/images/destinations/Tirana Panorama.jpg",
        name: bilingual("Tirana", "Tirana"),
        subtitle: bilingual(
            "Discover the vibrant capital of Albania.",
            "Zbuloni kryeqytetin plot gjallëri të Shqipërisë."
        ),
        region: bilingual("Central Albania", "Shqipëria e Mesme"),
        type: bilingual("Capital City", "Kryeqytet"),
        season: bilingual("Spring – Autumn", "Pranverë – Vjeshtë"),
        description: bilingual(
            "Tirana is the capital and largest city of Albania. Its history combines Ottoman foundations, Italian architecture and the legacy of the communist period. Today, it is a lively centre of culture, education, cafés and modern urban life. Visitors can explore museums, colourful streets, traditional markets and the surrounding mountains. Local cuisine includes byrek, tavë kosi and traditional Albanian dishes.",
            "Tirana është kryeqyteti dhe qyteti më i madh i Shqipërisë. Historia e saj ndërthur themelet osmane, arkitekturën italiane dhe trashëgiminë e periudhës komuniste. Sot është një qendër e gjallë e kulturës, arsimit, kafeneve dhe jetës moderne urbane. Vizitorët mund të eksplorojnë muzetë, rrugët shumëngjyrëshe, tregjet tradicionale dhe malet përreth. Kuzhina vendase përfshin byrekun, tavën e kosit dhe gatime tradicionale shqiptare."
        ),
        attractions: [
            {
                name: bilingual("Skanderbeg Square", "Sheshi Skënderbej"),
                description: bilingual(
                    "The main square of Tirana is surrounded by important landmarks, including the National History Museum, the Opera House and the Et'hem Bey Mosque. It is the heart of the capital and a popular meeting place.",
                    "Sheshi kryesor i Tiranës rrethohet nga monumente të rëndësishme, përfshirë Muzeun Historik Kombëtar, Teatrin e Operës dhe Xhaminë e Et'hem Beut. Është zemra e kryeqytetit dhe një vend i njohur takimi."
                )
            },
            {
                name: bilingual("Bunk'Art", "Bunk'Art"),
                description: bilingual(
                    "A museum inside a former underground bunker. Its exhibitions explore Albania's communist period, political history and everyday life during the twentieth century.",
                    "Një muze brenda një ish-bunkeri nëntokësor. Ekspozitat e tij tregojnë periudhën komuniste, historinë politike dhe jetën e përditshme në Shqipëri gjatë shekullit të njëzetë."
                )
            },
            {
                name: bilingual("Mount Dajti", "Mali i Dajtit"),
                description: bilingual(
                    "A mountain overlooking Tirana, offering panoramic views, walking routes and opportunities to enjoy nature. The Dajti Express cable car connects the city with the mountain area.",
                    "Një mal me pamje mbi Tiranën, që ofron panorama, shtigje ecjeje dhe mundësi për të shijuar natyrën. Teleferiku Dajti Express lidh qytetin me zonën malore."
                )
            },
            {
                name: bilingual("Pazari i Ri", "Pazari i Ri"),
                description: bilingual(
                    "A renovated traditional market where visitors can discover fresh produce, local ingredients, small shops and restaurants. It is a good place to experience everyday life in Tirana.",
                    "Një treg tradicional i rinovuar ku vizitorët mund të zbulojnë produkte të freskëta, përbërës vendas, dyqane të vogla dhe restorante. Është një vend i mirë për të njohur jetën e përditshme të Tiranës."
                )
            },
            {
                name: bilingual("Et'hem Bey Mosque", "Xhamia e Et'hem Beut"),
                description: bilingual(
                    "One of the most important historic religious buildings in the city. Its interior decorations and traditional architecture make it an important part of Tirana's cultural heritage.",
                    "Një nga ndërtesat fetare historike më të rëndësishme të qytetit. Dekorimet e brendshme dhe arkitektura tradicionale e bëjnë pjesë të rëndësishme të trashëgimisë kulturore të Tiranës."
                )
            },
            {
                name: bilingual("Grand Park of Tirana", "Parku i Madh i Tiranës"),
                description: bilingual(
                    "A large green area surrounding the Artificial Lake. It is popular for walking, cycling, relaxing and enjoying outdoor activities away from the busy city centre.",
                    "Një hapësirë e madhe e gjelbër rreth Liqenit Artificial. Është e njohur për shëtitje, çiklizëm, pushim dhe aktivitete në natyrë larg qendrës së zhurmshme."
                )
            }
        ]
    },

    /* =====================================
       SHKODËR
    ===================================== */

    shkoder: {
        image: "assets/images/destinations/Shkoder Panorama.jpg",
        name: bilingual("Shkodër", "Shkodër"),
        subtitle: bilingual(
            "Explore one of Albania's oldest historic cities.",
            "Zbuloni një nga qytetet historike më të vjetra të Shqipërisë."
        ),
        region: bilingual("Northern Albania", "Shqipëria e Veriut"),
        type: bilingual("Historic City", "Qytet Historik"),
        season: bilingual("Spring – Autumn", "Pranverë – Vjeshtë"),
        description: bilingual(
            "Shkodër is one of the oldest and most culturally important cities in Albania. Located near Lake Shkodër and the meeting point of several rivers, it has a long history shaped by different civilizations. The city is famous for its artistic traditions, historic architecture, cycling culture and beautiful natural surroundings. Visitors can discover traditional food, museums and the landscapes of northern Albania.",
            "Shkodra është një nga qytetet më të vjetra dhe më të rëndësishme kulturore të Shqipërisë. E vendosur pranë Liqenit të Shkodrës dhe bashkimit të disa lumenjve, ajo ka një histori të gjatë të formuar nga qytetërime të ndryshme. Qyteti është i famshëm për traditat artistike, arkitekturën historike, kulturën e çiklizmit dhe natyrën e bukur përreth. Vizitorët mund të zbulojnë ushqimin tradicional, muzetë dhe peizazhet e Shqipërisë së Veriut."
        ),
        attractions: [
            {
                name: bilingual("Rozafa Castle", "Kalaja e Rozafës"),
                description: bilingual(
                    "An impressive fortress standing on a hill above Shkodër. It offers views over the city, Lake Shkodër and the surrounding rivers. Its history is connected to ancient Illyrian settlements and later civilizations.",
                    "Një kala mbresëlënëse mbi një kodër pranë Shkodrës. Ajo ofron pamje mbi qytetin, Liqenin e Shkodrës dhe lumenjtë përreth. Historia e saj lidhet me vendbanimet e lashta ilire dhe qytetërimet e mëvonshme."
                )
            },
            {
                name: bilingual("Lake Shkodër", "Liqeni i Shkodrës"),
                description: bilingual(
                    "The largest lake in the Balkans, shared by Albania and Montenegro. It is known for its rich birdlife, fishing traditions, wetlands and peaceful landscapes.",
                    "Liqeni më i madh në Ballkan, i ndarë mes Shqipërisë dhe Malit të Zi. Ai njihet për shumëllojshmërinë e shpendëve, traditat e peshkimit, ligatinat dhe peizazhet e qeta."
                )
            },
            {
                name: bilingual("Marubi National Museum of Photography", "Muzeu Kombëtar i Fotografisë Marubi"),
                description: bilingual(
                    "A museum preserving a remarkable photographic archive documenting Albanian society, important personalities, landscapes and everyday life across different generations.",
                    "Një muze që ruan një arkiv të jashtëzakonshëm fotografik që dokumenton shoqërinë shqiptare, personalitete të rëndësishme, peizazhe dhe jetën e përditshme ndër breza."
                )
            },
            {
                name: bilingual("Pedonalja", "Pedonalja"),
                description: bilingual(
                    "A lively pedestrian street in the historic centre, surrounded by cafés, restaurants and traditional buildings. It is one of the best places to experience the atmosphere of Shkodër.",
                    "Një rrugë këmbësorësh plot gjallëri në qendrën historike, e rrethuar nga kafene, restorante dhe ndërtesa tradicionale. Është një nga vendet më të mira për të përjetuar atmosferën e Shkodrës."
                )
            },
            {
                name: bilingual("Mesi Bridge", "Ura e Mesit"),
                description: bilingual(
                    "A historic stone bridge located outside the city. Its elegant arches cross the Kir River and make it an interesting example of traditional Ottoman-era engineering.",
                    "Një urë historike prej guri jashtë qytetit. Harqet e saj elegante kalojnë mbi lumin Kir dhe përbëjnë një shembull interesant të inxhinierisë tradicionale të periudhës osmane."
                )
            },
            {
                name: bilingual("Traditional Shkodër Cuisine", "Kuzhina Tradicionale Shkodrane"),
                description: bilingual(
                    "The local cuisine includes dishes prepared with fish from the lake, local vegetables and traditional recipes. Visitors can also discover regional specialities in family restaurants.",
                    "Kuzhina vendase përfshin gatime me peshk nga liqeni, perime vendase dhe receta tradicionale. Vizitorët mund të zbulojnë gjithashtu specialitete rajonale në restorantet familjare."
                )
            }
        ]
    },

    /* =====================================
       DURRËS
    ===================================== */

    durres: {
        image: "assets/images/destinations/Durres Panorama.jpg",
        name: bilingual("Durrës", "Durrës"),
        subtitle: bilingual(
            "Discover the history and beaches of the Adriatic coast.",
            "Zbuloni historinë dhe plazhet e bregdetit Adriatik."
        ),
        region: bilingual("Western Albania", "Shqipëria Perëndimore"),
        type: bilingual("Coastal City", "Qytet Bregdetar"),
        season: bilingual("Summer", "Verë"),
        description: bilingual(
            "Durrës is one of Albania's most important coastal cities and one of its oldest urban centres. Founded in antiquity as Epidamnos and later known as Dyrrachium, it became an important port on the Adriatic Sea. Today, the city combines archaeological heritage, seaside tourism, restaurants and a lively waterfront. Its identity is closely connected to maritime history and Mediterranean culture.",
            "Durrësi është një nga qytetet bregdetare më të rëndësishme të Shqipërisë dhe një nga qendrat e saj më të vjetra urbane. I themeluar në lashtësi si Epidamnos dhe më vonë i njohur si Dyrrachium, ai u bë një port i rëndësishëm në Detin Adriatik. Sot qyteti ndërthur trashëgiminë arkeologjike, turizmin bregdetar, restorantet dhe shëtitoren plot gjallëri. Identiteti i tij lidhet ngushtë me historinë detare dhe kulturën mesdhetare."
        ),
        attractions: [
            {
                name: bilingual("Roman Amphitheatre", "Amfiteatri Romak"),
                description: bilingual(
                    "One of the largest Roman amphitheatres in the Balkans. Built during the Roman period, it is an important archaeological monument in the centre of modern Durrës.",
                    "Një nga amfiteatrot romake më të mëdha në Ballkan. I ndërtuar gjatë periudhës romake, ai është një monument i rëndësishëm arkeologjik në qendrën e Durrësit modern."
                )
            },
            {
                name: bilingual("Durrës Beach", "Plazhi i Durrësit"),
                description: bilingual(
                    "A long sandy coastline along the Adriatic Sea. The beach area is popular during summer and offers seaside accommodation, restaurants and recreational activities.",
                    "Një vijë e gjatë bregdetare me rërë përgjatë Detit Adriatik. Zona e plazhit është e njohur gjatë verës dhe ofron akomodim, restorante dhe aktivitete çlodhëse."
                )
            },
            {
                name: bilingual("Venetian Tower", "Kulla Veneciane"),
                description: bilingual(
                    "A historic defensive tower forming part of the old fortifications of Durrës. It reflects the city's strategic importance throughout different historical periods.",
                    "Një kullë historike mbrojtëse që është pjesë e fortifikimeve të vjetra të Durrësit. Ajo pasqyron rëndësinë strategjike të qytetit gjatë periudhave të ndryshme historike."
                )
            },
            {
                name: bilingual("Archaeological Museum", "Muzeu Arkeologjik"),
                description: bilingual(
                    "A museum displaying objects discovered in and around Durrës. Its collections help visitors understand the ancient history of the city and its connections with the Mediterranean world.",
                    "Një muze që ekspozon objekte të zbuluara në Durrës dhe rrethinat e tij. Koleksionet ndihmojnë vizitorët të kuptojnë historinë e lashtë të qytetit dhe lidhjet e tij me botën mesdhetare."
                )
            },
            {
                name: bilingual("Durrës Promenade", "Shëtitorja e Durrësit"),
                description: bilingual(
                    "The waterfront promenade is a pleasant place for walking and enjoying views of the Adriatic. Cafés and restaurants make it a popular meeting point for residents and visitors.",
                    "Shëtitorja buzë detit është një vend i këndshëm për shëtitje dhe për të shijuar pamjet e Adriatikut. Kafenetë dhe restorantet e bëjnë një pikë takimi të njohur për banorët dhe vizitorët."
                )
            },
            {
                name: bilingual("Byzantine Forum", "Forumi Bizantin"),
                description: bilingual(
                    "The remains of an ancient public square from the Byzantine period. Its archaeological remains reveal another important chapter in the long history of Durrës.",
                    "Mbetjet e një sheshi publik antik nga periudha bizantine. Gjetjet arkeologjike zbulojnë një tjetër kapitull të rëndësishëm në historinë e gjatë të Durrësit."
                )
            }
        ]
    },

    /* =====================================
       BERAT
    ===================================== */

    berat: {
        image: "assets/images/destinations/Berat Panorama.jpg",
        name: bilingual("Berat", "Berat"),
        subtitle: bilingual(
            "Discover the city of a thousand windows.",
            "Zbuloni qytetin e një mijë dritareve."
        ),
        region: bilingual("Southern Albania", "Shqipëria e Jugut"),
        type: bilingual("UNESCO Heritage City", "Qytet i Trashëgimisë UNESCO"),
        season: bilingual("Spring – Autumn", "Pranverë – Vjeshtë"),
        description: bilingual(
            "Berat is one of Albania's most beautiful historic cities, famous for its traditional Ottoman architecture and characteristic white houses built along the hillsides. Known as the City of a Thousand Windows, its historic centre is part of the UNESCO World Heritage List. The Osum River separates the traditional neighbourhoods of Mangalem and Gorica. Visitors can explore the castle, museums, churches and local food traditions.",
            "Berati është një nga qytetet historike më të bukura të Shqipërisë, i famshëm për arkitekturën tradicionale osmane dhe shtëpitë karakteristike të bardha të ndërtuara në shpatet e kodrave. I njohur si Qyteti i Një Mijë Dritareve, qendra e tij historike është pjesë e Listës së Trashëgimisë Botërore të UNESCO-s. Lumi Osum ndan lagjet tradicionale Mangalem dhe Goricë. Vizitorët mund të eksplorojnë kalanë, muzetë, kishat dhe traditat ushqimore vendase."
        ),
        attractions: [
            {
                name: bilingual("Berat Castle", "Kalaja e Beratit"),
                description: bilingual(
                    "A historic fortress overlooking the city and the Osum Valley. Inside its walls there are inhabited houses, churches, historic buildings and narrow streets that preserve the atmosphere of an old town.",
                    "Një kala historike me pamje mbi qytetin dhe luginën e Osumit. Brenda mureve të saj gjenden shtëpi të banuara, kisha, ndërtesa historike dhe rrugica që ruajnë atmosferën e një qyteti të vjetër."
                )
            },
            {
                name: bilingual("Mangalem Quarter", "Lagjja Mangalem"),
                description: bilingual(
                    "One of Berat's most recognisable historic neighbourhoods. Its traditional houses rise along the hillside, creating the famous view of rows of windows overlooking the river.",
                    "Një nga lagjet historike më të njohura të Beratit. Shtëpitë tradicionale ngrihen përgjatë kodrës dhe krijojnë pamjen e famshme të rreshtave të dritareve mbi lumë."
                )
            },
            {
                name: bilingual("Gorica Bridge", "Ura e Goricës"),
                description: bilingual(
                    "A historic bridge connecting the Gorica and Mangalem neighbourhoods across the Osum River. It is one of the city's most recognisable landmarks.",
                    "Një urë historike që lidh lagjet Gorica dhe Mangalem përmes lumit Osum. Është një nga monumentet më të njohura të qytetit."
                )
            },
            {
                name: bilingual("Onufri National Museum", "Muzeu Kombëtar Onufri"),
                description: bilingual(
                    "Located inside the castle, this museum is dedicated to religious art and the famous Albanian icon painter Onufri. Its collection includes icons and religious objects of great cultural value.",
                    "I vendosur brenda kalasë, ky muze i kushtohet artit fetar dhe piktorit të famshëm shqiptar të ikonave, Onufrit. Koleksioni përfshin ikona dhe objekte fetare me vlerë të madhe kulturore."
                )
            },
            {
                name: bilingual("Gorica Quarter", "Lagjja Goricë"),
                description: bilingual(
                    "A traditional neighbourhood on the opposite side of the river. Its quiet streets and historic houses offer a different perspective of Berat's architecture and everyday life.",
                    "Një lagje tradicionale në anën tjetër të lumit. Rrugët e qeta dhe shtëpitë historike ofrojnë një këndvështrim tjetër të arkitekturës dhe jetës së përditshme të Beratit."
                )
            },
            {
                name: bilingual("Traditional Berat Cuisine", "Kuzhina Tradicionale e Beratit"),
                description: bilingual(
                    "Berat is known for regional dishes, local olive oil, traditional sweets and recipes based on seasonal ingredients. Local restaurants offer visitors an opportunity to discover the area's food culture.",
                    "Berati njihet për gatimet rajonale, vajin vendas të ullirit, ëmbëlsirat tradicionale dhe recetat me përbërës sezonalë. Restorantet lokale u japin vizitorëve mundësinë të zbulojnë kulturën ushqimore të zonës."
                )
            }
        ]
    },

    /* =====================================
       GJIROKASTËR
    ===================================== */

    gjirokaster: {
        image: "assets/images/destinations/Gjirokaster Panorama.jpg",
        name: bilingual("Gjirokastër", "Gjirokastër"),
        subtitle: bilingual(
            "Explore the stone city of southern Albania.",
            "Eksploroni qytetin e gurtë të Shqipërisë së Jugut."
        ),
        region: bilingual("Southern Albania", "Shqipëria e Jugut"),
        type: bilingual("UNESCO Heritage City", "Qytet i Trashëgimisë UNESCO"),
        season: bilingual("Spring – Autumn", "Pranverë – Vjeshtë"),
        description: bilingual(
            "Gjirokastër is a historic mountain city famous for its stone houses, slate roofs, cobbled streets and imposing castle. Its historic centre is a UNESCO World Heritage Site and preserves a distinctive architectural style from the Ottoman period. The city is also associated with Albanian literature, music and traditional crafts. Visitors can explore its old bazaar, museums and local cuisine.",
            "Gjirokastra është një qytet historik malor i famshëm për shtëpitë prej guri, çatitë prej rrase, rrugët me kalldrëm dhe kalanë madhështore. Qendra e saj historike është pjesë e Trashëgimisë Botërore të UNESCO-s dhe ruan një stil të veçantë arkitekturor të periudhës osmane. Qyteti lidhet gjithashtu me letërsinë, muzikën dhe zejtarinë tradicionale shqiptare. Vizitorët mund të eksplorojnë pazarin e vjetër, muzetë dhe kuzhinën vendase."
        ),
        attractions: [
            {
                name: bilingual("Gjirokastër Castle", "Kalaja e Gjirokastrës"),
                description: bilingual(
                    "A large fortress dominating the historic centre. It contains museums, historic spaces and viewpoints overlooking the Drino Valley and surrounding mountains.",
                    "Një kala e madhe që dominon qendrën historike. Ajo përmban muze, hapësira historike dhe pika panoramike me pamje mbi luginën e Drinos dhe malet përreth."
                )
            },
            {
                name: bilingual("Old Bazaar", "Pazari i Vjetër"),
                description: bilingual(
                    "The traditional heart of the old town, with stone streets, craft shops, small cafés and historic buildings. It is an ideal place to discover local products and traditional souvenirs.",
                    "Zemra tradicionale e qytetit të vjetër, me rrugë guri, dyqane artizanale, kafene të vogla dhe ndërtesa historike. Është një vend ideal për të zbuluar produkte vendase dhe suvenire tradicionale."
                )
            },
            {
                name: bilingual("Skenduli House", "Shtëpia e Skëndulit"),
                description: bilingual(
                    "A traditional Ottoman-era house that illustrates the architecture and domestic life of wealthy families in historic Gjirokastër. Its rooms and wooden details preserve the character of the period.",
                    "Një shtëpi tradicionale e periudhës osmane që tregon arkitekturën dhe jetën familjare të familjeve të pasura në Gjirokastrën historike. Dhomat dhe detajet prej druri ruajnë karakterin e asaj periudhe."
                )
            },
            {
                name: bilingual("Ethnographic Museum", "Muzeu Etnografik"),
                description: bilingual(
                    "A museum presenting traditional clothing, household objects and elements of local culture. It helps visitors understand how people lived in the region in earlier times.",
                    "Një muze që paraqet veshje tradicionale, objekte shtëpiake dhe elemente të kulturës vendase. Ai i ndihmon vizitorët të kuptojnë mënyrën se si jetonin njerëzit në këtë rajon në të kaluarën."
                )
            },
            {
                name: bilingual("Zekate House", "Shtëpia e Zekatëve"),
                description: bilingual(
                    "One of the best-known historic houses in Gjirokastër. Its distinctive architecture and elevated position make it an important example of traditional urban life.",
                    "Një nga shtëpitë historike më të njohura të Gjirokastrës. Arkitektura karakteristike dhe pozicioni i saj i ngritur e bëjnë një shembull të rëndësishëm të jetës tradicionale urbane."
                )
            },
            {
                name: bilingual("Traditional Gjirokastër Food", "Ushqimi Tradicional i Gjirokastrës"),
                description: bilingual(
                    "The region is known for dishes such as qifqi, a traditional rice-based speciality, as well as local pies, dairy products and regional recipes.",
                    "Rajoni njihet për gatime si qifqi, një specialitet tradicional me bazë orizin, si dhe për byrekët vendas, produktet e bulmetit dhe recetat rajonale."
                )
            }
        ]
    },

    /* =====================================
       VLORË
    ===================================== */

    vlore: {
        image: "assets/images/destinations/Vlore Panorama.jpg",
        name: bilingual("Vlorë", "Vlorë"),
        subtitle: bilingual(
            "Discover the meeting point of the Adriatic and Ionian seas.",
            "Zbuloni pikëtakimin e deteve Adriatik dhe Jon."
        ),
        region: bilingual("Southern Albania", "Shqipëria e Jugut"),
        type: bilingual("Coastal City", "Qytet Bregdetar"),
        season: bilingual("Summer", "Verë"),
        description: bilingual(
            "Vlorë is an important coastal city in southwestern Albania, located near the meeting point of the Adriatic and Ionian seas. It has a central place in Albanian history because the country's independence was declared here in 1912. The city offers beaches, a lively promenade, historic monuments and access to the Karaburun Peninsula and Sazan Island. Its coastal identity is reflected in its seafood and Mediterranean lifestyle.",
            "Vlora është një qytet i rëndësishëm bregdetar në jugperëndim të Shqipërisë, pranë pikës ku takohen detet Adriatik dhe Jon. Ajo ka një vend të rëndësishëm në historinë shqiptare, sepse këtu u shpall pavarësia e vendit në vitin 1912. Qyteti ofron plazhe, një shëtitore plot gjallëri, monumente historike dhe hyrje drejt Gadishullit të Karaburunit dhe Ishullit të Sazanit. Identiteti i tij bregdetar pasqyrohet në gatimet e detit dhe stilin mesdhetar të jetesës."
        ),
        attractions: [
            {
                name: bilingual("Independence Monument", "Monumenti i Pavarësisë"),
                description: bilingual(
                    "A monument in the centre of Vlorë commemorating the declaration of Albanian independence on 28 November 1912. It is one of the most important symbols of the city's national history.",
                    "Një monument në qendër të Vlorës që përkujton shpalljen e pavarësisë së Shqipërisë më 28 nëntor 1912. Është një nga simbolet më të rëndësishme të historisë kombëtare të qytetit."
                )
            },
            {
                name: bilingual("Kuzum Baba", "Kuzum Baba"),
                description: bilingual(
                    "A hill overlooking Vlorë and its coastline. It offers panoramic views of the city and the sea and is a well-known place for visitors interested in the landscape.",
                    "Një kodër me pamje mbi Vlorën dhe bregdetin e saj. Ajo ofron pamje panoramike të qytetit dhe detit dhe është një vend i njohur për vizitorët që pëlqejnë peizazhet."
                )
            },
            {
                name: bilingual("Zvernec Monastery", "Manastiri i Zvërnecit"),
                description: bilingual(
                    "A historic monastery located on a small island in the Narta Lagoon. A wooden footbridge crosses the lagoon and connects visitors with this peaceful historic site.",
                    "Një manastir historik i vendosur në një ishull të vogël në Lagunën e Nartës. Një urë këmbësorësh prej druri kalon lagunën dhe lidh vizitorët me këtë vend historik të qetë."
                )
            },
            {
                name: bilingual("Narta Lagoon", "Laguna e Nartës"),
                description: bilingual(
                    "A coastal wetland known for its natural landscapes and birdlife. It is an interesting destination for nature lovers and visitors who enjoy peaceful outdoor environments.",
                    "Një ligatinë bregdetare e njohur për peizazhet natyrore dhe shpendët. Është një destinacion interesant për adhuruesit e natyrës dhe vizitorët që pëlqejnë ambientet e qeta në natyrë."
                )
            },
            {
                name: bilingual("Lungomare", "Lungomare"),
                description: bilingual(
                    "The modern seafront promenade of Vlorë, with places to walk, relax and enjoy views of the Ionian coast. It is especially lively during the summer season.",
                    "Shëtitorja moderne buzë detit në Vlorë, me vende për shëtitje, pushim dhe për të shijuar pamjet e bregdetit Jon. Ajo është veçanërisht e gjallë gjatë sezonit veror."
                )
            },
            {
                name: bilingual("Karaburun Peninsula", "Gadishulli i Karaburunit"),
                description: bilingual(
                    "A remarkable coastal area with rugged landscapes, clear waters and natural scenery. It is a destination for boat excursions and exploring the Albanian coastline.",
                    "Një zonë bregdetare e veçantë me peizazhe shkëmbore, ujëra të kthjellëta dhe natyrë të bukur. Është një destinacion për ekskursione me varkë dhe eksplorimin e bregdetit shqiptar."
                )
            }
        ]
    },

    /* =====================================
       SARANDË
    ===================================== */

    sarande: {
        image: "assets/images/destinations/Sarande Panorama.jpg",
        name: bilingual("Sarandë", "Sarandë"),
        subtitle: bilingual(
            "Discover the beauty of the Albanian Riviera.",
            "Zbuloni bukurinë e Rivierës Shqiptare."
        ),
        region: bilingual("Southern Albania", "Shqipëria e Jugut"),
        type: bilingual("Coastal Destination", "Destinacion Bregdetar"),
        season: bilingual("Summer", "Verë"),
        description: bilingual(
            "Sarandë is a popular seaside destination on the Ionian coast, known for its waterfront promenade, Mediterranean atmosphere and beautiful coastal views. The city has ancient roots and is located close to important archaeological and natural sites, including Butrint and the Blue Eye near Muzinë. Its restaurants, beaches and boat excursions make it an important destination for exploring the southern Albanian Riviera.",
            "Saranda është një destinacion i njohur bregdetar në bregdetin Jon, e njohur për shëtitoren buzë detit, atmosferën mesdhetare dhe pamjet e bukura bregdetare. Qyteti ka rrënjë të lashta dhe ndodhet pranë vendeve të rëndësishme arkeologjike dhe natyrore, përfshirë Butrintin dhe Syrin e Kaltër pranë Muzinës. Restorantet, plazhet dhe ekskursionet me varkë e bëjnë një destinacion të rëndësishëm për të eksploruar Rivierën Jugore Shqiptare."
        ),
        attractions: [
            {
                name: bilingual("Lëkurësi Castle", "Kalaja e Lëkurësit"),
                description: bilingual(
                    "A historic castle on a hill overlooking Sarandë. It offers wide views over the city, the Ionian Sea and, on clear days, the nearby island of Corfu.",
                    "Një kala historike mbi një kodër me pamje nga Saranda. Ajo ofron pamje të gjera mbi qytetin, Detin Jon dhe, në ditë të kthjellëta, ishullin e afërt të Korfuzit."
                )
            },
            {
                name: bilingual("Sarandë Promenade", "Shëtitorja e Sarandës"),
                description: bilingual(
                    "A lively waterfront area lined with cafés, restaurants and places to enjoy the sea view. It is one of the main meeting places in the city.",
                    "Një zonë e gjallë buzë detit, e mbushur me kafene, restorante dhe vende për të shijuar pamjen e detit. Është një nga vendet kryesore të takimit në qytet."
                )
            },
            {
                name: bilingual("Synagogue Complex", "Kompleksi i Sinagogës"),
                description: bilingual(
                    "An archaeological site containing remains associated with an ancient Jewish community. Its mosaics and structures provide evidence of Sarandë's diverse past.",
                    "Një vend arkeologjik që përmban mbetje të lidhura me një komunitet të lashtë hebre. Mozaikët dhe strukturat e tij dëshmojnë të kaluarën e larmishme të Sarandës."
                )
            },
            {
                name: bilingual("Mango Beach", "Plazhi Mango"),
                description: bilingual(
                    "A coastal area south of the city with access to the Ionian Sea. It is known for its seaside atmosphere and summer activities.",
                    "Një zonë bregdetare në jug të qytetit me dalje në Detin Jon. Njihet për atmosferën buzë detit dhe aktivitetet verore."
                )
            },
            {
                name: bilingual("Monastery of the Forty Saints", "Manastiri i Dyzet Shenjtorëve"),
                description: bilingual(
                    "The remains of an important historic religious complex located on a hill above Sarandë. The site is connected to the historical name of the city.",
                    "Mbetjet e një kompleksi të rëndësishëm fetar historik të vendosur në një kodër mbi Sarandë. Vendi lidhet me emrin historik të qytetit."
                )
            },
            {
                name: bilingual("Boat Trips and Coastal Exploration", "Ekskursione me Varkë dhe Eksplorimi i Bregdetit"),
                description: bilingual(
                    "The coastline around Sarandë offers opportunities for boat excursions, discovering small bays and enjoying views of the Ionian Sea.",
                    "Bregdeti përreth Sarandës ofron mundësi për ekskursione me varkë, zbulimin e gjireve të vegjël dhe shijimin e pamjeve të Detit Jon."
                )
            }
        ]
    },

    /* =====================================
       KSAMIL
    ===================================== */

    ksamil: {
        image: "assets/images/destinations/Ksamil Panorama.jpg",
        name: bilingual("Ksamil", "Ksamil"),
        subtitle: bilingual(
            "Explore the turquoise waters of the Albanian Riviera.",
            "Eksploroni ujërat bruz të Rivierës Shqiptare."
        ),
        region: bilingual("Southern Albania", "Shqipëria e Jugut"),
        type: bilingual("Beach Destination", "Destinacion Plazhi"),
        season: bilingual("Summer", "Verë"),
        description: bilingual(
            "Ksamil is a seaside village in southern Albania, famous for its turquoise waters, sandy beaches and small islands just offshore. Located near Sarandë and the ancient city of Butrint, it is one of the best-known summer destinations on the Albanian Riviera. Visitors can enjoy swimming, boat excursions, local seafood and the natural beauty of the Ionian coastline.",
            "Ksamili është një fshat bregdetar në jug të Shqipërisë, i famshëm për ujërat bruz, plazhet me rërë dhe ishujt e vegjël pranë bregut. I vendosur pranë Sarandës dhe qytetit antik të Butrintit, ai është një nga destinacionet verore më të njohura të Rivierës Shqiptare. Vizitorët mund të shijojnë notin, ekskursionet me varkë, ushqimet e detit dhe bukurinë natyrore të bregdetit Jon."
        ),
        attractions: [
            {
                name: bilingual("Ksamil Islands", "Ishujt e Ksamilit"),
                description: bilingual(
                    "Small islands located just off the coast, surrounded by clear turquoise water. They are among the most recognisable natural features of Ksamil.",
                    "Ishuj të vegjël pranë bregut, të rrethuar nga ujëra të kthjellëta bruz. Ata janë ndër veçoritë natyrore më të njohura të Ksamilit."
                )
            },
            {
                name: bilingual("Ksamil Beaches", "Plazhet e Ksamilit"),
                description: bilingual(
                    "The beaches are known for their clear sea, coastal scenery and summer atmosphere. Different sections of the coastline offer places to relax and enjoy the Ionian Sea.",
                    "Plazhet njihen për detin e kthjellët, peizazhet bregdetare dhe atmosferën verore. Pjesë të ndryshme të bregdetit ofrojnë vende për pushim dhe për të shijuar Detin Jon."
                )
            },
            {
                name: bilingual("Butrint National Park", "Parku Kombëtar i Butrintit"),
                description: bilingual(
                    "A nearby UNESCO World Heritage Site combining ancient archaeological remains with a protected natural landscape. It is one of the most important cultural destinations in Albania.",
                    "Një vend pranë Ksamilit, pjesë e Trashëgimisë Botërore të UNESCO-s, që ndërthur mbetjet arkeologjike antike me një peizazh natyror të mbrojtur. Është një nga destinacionet kulturore më të rëndësishme të Shqipërisë."
                )
            },
            {
                name: bilingual("Boat Excursions", "Ekskursione me Varkë"),
                description: bilingual(
                    "Boat trips offer a different perspective of the coastline and nearby islands. They are a popular way to explore the bays and waters around Ksamil.",
                    "Udhëtimet me varkë ofrojnë një këndvështrim tjetër të bregdetit dhe ishujve pranë tij. Ato janë një mënyrë e njohur për të eksploruar gjiret dhe ujërat përreth Ksamilit."
                )
            },
            {
                name: bilingual("Ionian Seafood", "Ushqimet e Detit Jon"),
                description: bilingual(
                    "Local restaurants serve seafood and Mediterranean dishes inspired by the coastal traditions of southern Albania.",
                    "Restorantet vendase shërbejnë ushqime deti dhe gatime mesdhetare të frymëzuara nga traditat bregdetare të Shqipërisë së Jugut."
                )
            },
            {
                name: bilingual("Butrint Lagoon", "Laguna e Butrintit"),
                description: bilingual(
                    "A natural lagoon near the archaeological park, surrounded by wetlands and diverse ecosystems. It contributes to the area's distinctive natural landscape.",
                    "Një lagunë natyrore pranë parkut arkeologjik, e rrethuar nga ligatina dhe ekosisteme të larmishme. Ajo kontribuon në peizazhin natyror të veçantë të zonës."
                )
            }
        ]
    },

    /* =====================================
       KRUJË
    ===================================== */

    kruje: {
        image: "assets/images/destinations/Kruje Panorama.jpg",
        name: bilingual("Krujë", "Krujë"),
        subtitle: bilingual(
            "Discover the historic home of Albania's national hero.",
            "Zbuloni qytetin historik të heroit kombëtar të Shqipërisë."
        ),
        region: bilingual("Central Albania", "Shqipëria e Mesme"),
        type: bilingual("Historic Town", "Qytet Historik"),
        season: bilingual("Spring – Autumn", "Pranverë – Vjeshtë"),
        description: bilingual(
            "Krujë is a historic town strongly connected to Skanderbeg and Albania's resistance against the Ottoman Empire during the fifteenth century. Its castle, museums and traditional bazaar preserve an important part of the country's national heritage. Located on a mountainside, Krujë also offers beautiful views over the surrounding landscape. Visitors can discover traditional crafts, local products and Albanian history.",
            "Kruja është një qytet historik i lidhur ngushtë me Skënderbeun dhe qëndresën shqiptare kundër Perandorisë Osmane gjatë shekullit të pesëmbëdhjetë. Kalaja, muzetë dhe pazari tradicional ruajnë një pjesë të rëndësishme të trashëgimisë kombëtare të vendit. E vendosur në shpatin e një mali, Kruja ofron gjithashtu pamje të bukura mbi peizazhin përreth. Vizitorët mund të zbulojnë zejet tradicionale, produktet vendase dhe historinë shqiptare."
        ),
        attractions: [
            {
                name: bilingual("Krujë Castle", "Kalaja e Krujës"),
                description: bilingual(
                    "A historic fortress closely associated with Skanderbeg and the resistance against Ottoman expansion. Its walls preserve important elements of the town's medieval history.",
                    "Një kala historike e lidhur ngushtë me Skënderbeun dhe qëndresën kundër zgjerimit osman. Muret e saj ruajnë elemente të rëndësishme të historisë mesjetare të qytetit."
                )
            },
            {
                name: bilingual("Old Bazaar", "Pazari i Vjetër"),
                description: bilingual(
                    "A traditional market street with wooden shops, handmade objects, carpets and souvenirs. It preserves the atmosphere of an old Ottoman-era bazaar.",
                    "Një rrugë tregtare tradicionale me dyqane prej druri, objekte të punuara me dorë, qilima dhe suvenire. Ajo ruan atmosferën e një pazari të vjetër të periudhës osmane."
                )
            },
            {
                name: bilingual("Skanderbeg Museum", "Muzeu i Skënderbeut"),
                description: bilingual(
                    "A museum dedicated to the life, achievements and historical importance of Albania's national hero. Its exhibitions present the struggle of Skanderbeg and the history of the fifteenth century.",
                    "Një muze kushtuar jetës, arritjeve dhe rëndësisë historike të heroit kombëtar të Shqipërisë. Ekspozitat paraqesin qëndresën e Skënderbeut dhe historinë e shekullit të pesëmbëdhjetë."
                )
            },
            {
                name: bilingual("Ethnographic Museum", "Muzeu Etnografik"),
                description: bilingual(
                    "Located inside a traditional historic house, this museum displays objects and tools that illustrate the domestic life, crafts and traditions of the region.",
                    "I vendosur brenda një shtëpie tradicionale historike, ky muze ekspozon objekte dhe vegla që tregojnë jetën familjare, zejet dhe traditat e rajonit."
                )
            },
            {
                name: bilingual("National Hero Memorials", "Monumentet e Heroit Kombëtar"),
                description: bilingual(
                    "The town contains monuments and historical references connected to Skanderbeg. They help visitors understand the importance of Krujë in Albanian national identity.",
                    "Qyteti përmban monumente dhe kujtime historike të lidhura me Skënderbeun. Ato i ndihmojnë vizitorët të kuptojnë rëndësinë e Krujës në identitetin kombëtar shqiptar."
                )
            },
            {
                name: bilingual("Traditional Crafts", "Zejtaritë Tradicionale"),
                description: bilingual(
                    "The bazaar is a good place to discover traditional Albanian crafts, including textiles, decorative objects and handmade souvenirs.",
                    "Pazari është një vend i mirë për të zbuluar zejet tradicionale shqiptare, përfshirë tekstilet, objektet dekorative dhe suveniret e punuara me dorë."
                )
            }
        ]
    },

    /* =====================================
       THETH
    ===================================== */

    theth: {
        image: "assets/images/destinations/Theth Panorama.jpg",
        name: bilingual("Theth", "Theth"),
        subtitle: bilingual(
            "Experience the wild beauty of the Albanian Alps.",
            "Përjetoni bukurinë e egër të Alpeve Shqiptare."
        ),
        region: bilingual("Northern Albania", "Shqipëria e Veriut"),
        type: bilingual("Mountain Destination", "Destinacion Malor"),
        season: bilingual("Late Spring – Early Autumn", "Fundi i Pranverës – Fillimi i Vjeshtës"),
        description: bilingual(
            "Theth is a mountain village in the Albanian Alps, surrounded by dramatic peaks, forests, rivers and traditional stone houses. It is one of the most recognisable destinations for nature tourism in northern Albania. The area is part of a protected national park and offers hiking routes, waterfalls and spectacular mountain scenery. Visitors can discover traditional architecture and the culture of the northern Albanian highlands.",
            "Thethi është një fshat malor në Alpet Shqiptare, i rrethuar nga maja madhështore, pyje, lumenj dhe shtëpi tradicionale prej guri. Është një nga destinacionet më të njohura për turizmin natyror në Shqipërinë e Veriut. Zona është pjesë e një parku kombëtar të mbrojtur dhe ofron shtigje ecjeje, ujëvara dhe peizazhe spektakolare malore. Vizitorët mund të zbulojnë arkitekturën tradicionale dhe kulturën e malësive shqiptare."
        ),
        attractions: [
            {
                name: bilingual("Grunas Waterfall", "Ujëvara e Grunasit"),
                description: bilingual(
                    "A beautiful waterfall surrounded by rocky mountain scenery. It is one of the best-known natural attractions in Theth and can be reached by a walking route.",
                    "Një ujëvarë e bukur e rrethuar nga peizazhe malore shkëmbore. Është një nga atraksionet natyrore më të njohura të Thethit dhe mund të arrihet përmes një shtegu ecjeje."
                )
            },
            {
                name: bilingual("Theth Church", "Kisha e Thethit"),
                description: bilingual(
                    "A small historic church standing in the middle of the mountain village. Surrounded by the Alps, it has become one of the most recognisable images of Theth.",
                    "Një kishë e vogël historike në mes të fshatit malor. E rrethuar nga Alpet, ajo është bërë një nga pamjet më të njohura të Thethit."
                )
            },
            {
                name: bilingual("Blue Eye of Theth", "Syri i Kaltër i Thethit"),
                description: bilingual(
                    "A natural pool with striking blue water formed by mountain springs. It is a well-known destination reached through a mountain trail and surrounded by forests and rocky landscapes.",
                    "Një pellg natyror me ujë blu mbresëlënës, i formuar nga burimet malore. Është një destinacion i njohur ku arrihet përmes një shtegu malor dhe rrethohet nga pyje e peizazhe shkëmbore."
                )
            },
            {
                name: bilingual("Lock-in Tower", "Kulla e Ngujimit"),
                description: bilingual(
                    "A historic stone building connected to the traditional Kanun and the social customs of the northern Albanian highlands. It is an important part of the area's cultural heritage.",
                    "Një ndërtesë historike prej guri e lidhur me Kanunin tradicional dhe zakonet shoqërore të malësive shqiptare. Është një pjesë e rëndësishme e trashëgimisë kulturore të zonës."
                )
            },
            {
                name: bilingual("Theth National Park", "Parku Kombëtar i Thethit"),
                description: bilingual(
                    "A protected mountain environment with forests, rivers, wildlife and high peaks. It offers opportunities for nature observation and outdoor exploration.",
                    "Një mjedis malor i mbrojtur me pyje, lumenj, kafshë të egra dhe maja të larta. Ai ofron mundësi për vëzhgimin e natyrës dhe eksplorimin në natyrë."
                )
            },
            {
                name: bilingual("Traditional Mountain Houses", "Shtëpitë Tradicionale Malore"),
                description: bilingual(
                    "The village preserves traditional stone houses and buildings that reflect the architecture and lifestyle of the Albanian Alps.",
                    "Fshati ruan shtëpi dhe ndërtesa tradicionale prej guri që pasqyrojnë arkitekturën dhe mënyrën e jetesës së Alpeve Shqiptare."
                )
            }
        ]
    },

    /* =====================================
       VALBONË
    ===================================== */

    valbone: {
        image: "assets/images/destinations/Valbone Panorama.jpg",
        name: bilingual("Valbonë", "Valbonë"),
        subtitle: bilingual(
            "Discover the spectacular Valbona Valley.",
            "Zbuloni Luginën madhështore të Valbonës."
        ),
        region: bilingual("Northern Albania", "Shqipëria e Veriut"),
        type: bilingual("Mountain Destination", "Destinacion Malor"),
        season: bilingual("Late Spring – Early Autumn", "Fundi i Pranverës – Fillimi i Vjeshtës"),
        description: bilingual(
            "Valbonë is a mountain destination in northern Albania, located in the heart of the Albanian Alps. The area is famous for its dramatic peaks, clear river, forests and traditional villages. Valbona Valley National Park protects an exceptional natural landscape and offers opportunities for hiking, photography and outdoor exploration. The region is also known for its hospitality and traditional mountain food.",
            "Valbona është një destinacion malor në veri të Shqipërisë, i vendosur në zemër të Alpeve Shqiptare. Zona është e famshme për majat madhështore, lumin e kthjellët, pyjet dhe fshatrat tradicionale. Parku Kombëtar i Luginës së Valbonës mbron një peizazh natyror të jashtëzakonshëm dhe ofron mundësi për ecje malore, fotografi dhe eksplorim në natyrë. Rajoni njihet gjithashtu për mikpritjen dhe ushqimin tradicional malor."
        ),
        attractions: [
            {
                name: bilingual("Valbona Valley", "Lugina e Valbonës"),
                description: bilingual(
                    "A spectacular valley surrounded by the high peaks of the Albanian Alps. Its open landscapes, forests and mountain scenery make it one of northern Albania's most impressive natural areas.",
                    "Një luginë madhështore e rrethuar nga majat e larta të Alpeve Shqiptare. Peizazhet e hapura, pyjet dhe malet e bëjnë një nga zonat natyrore më mbresëlënëse të Shqipërisë së Veriut."
                )
            },
            {
                name: bilingual("Valbona River", "Lumi i Valbonës"),
                description: bilingual(
                    "A mountain river flowing through the valley, known for its clear water and beautiful natural surroundings. It is one of the defining features of the landscape.",
                    "Një lumë malor që rrjedh nëpër luginë, i njohur për ujin e kthjellët dhe natyrën e bukur përreth. Është një nga elementet më karakteristike të peizazhit."
                )
            },
            {
                name: bilingual("Valbona National Park", "Parku Kombëtar i Valbonës"),
                description: bilingual(
                    "A protected mountain landscape with forests, wildlife, rivers and hiking routes. The park is an important destination for nature tourism and biodiversity.",
                    "Një peizazh malor i mbrojtur me pyje, kafshë të egra, lumenj dhe shtigje ecjeje. Parku është një destinacion i rëndësishëm për turizmin natyror dhe biodiversitetin."
                )
            },
            {
                name: bilingual("Mountain Hiking Routes", "Shtigjet e Ecjes Malore"),
                description: bilingual(
                    "The area offers walking routes through valleys and mountain landscapes. Some routes connect Valbonë with other destinations in the Albanian Alps.",
                    "Zona ofron shtigje ecjeje përmes luginave dhe peizazheve malore. Disa rrugë lidhin Valbonën me destinacione të tjera në Alpet Shqiptare."
                )
            },
            {
                name: bilingual("Traditional Guesthouses", "Bujtinat Tradicionale"),
                description: bilingual(
                    "Family-run guesthouses offer visitors an opportunity to experience local hospitality, traditional architecture and regional food.",
                    "Bujtinat familjare u ofrojnë vizitorëve mundësinë të përjetojnë mikpritjen vendase, arkitekturën tradicionale dhe ushqimin rajonal."
                )
            },
            {
                name: bilingual("Albanian Alpine Cuisine", "Kuzhina e Alpeve Shqiptare"),
                description: bilingual(
                    "The region is known for homemade dishes, dairy products, corn-based recipes and traditional mountain hospitality.",
                    "Rajoni njihet për gatimet shtëpiake, produktet e bulmetit, recetat me bazë misrin dhe mikpritjen tradicionale malore."
                )
            }
        ]
    },

    /* =====================================
       BUTRINT
    ===================================== */

    butrint: {
        image: "assets/images/destinations/Butrint Panorama.jpg",
        name: bilingual("Butrint", "Butrint"),
        subtitle: bilingual(
            "Travel through thousands of years of history.",
            "Udhëtoni nëpër mijëra vite histori."
        ),
        region: bilingual("Southern Albania", "Shqipëria e Jugut"),
        type: bilingual("Archaeological Site", "Vend Arkeologjik"),
        season: bilingual("Spring – Autumn", "Pranverë – Vjeshtë"),
        description: bilingual(
            "Butrint is one of Albania's most important archaeological sites and a UNESCO World Heritage Site. Located near the Ionian coast, it contains remains from Greek, Roman, Byzantine and Venetian periods. Its monuments reveal the history of a city shaped by different Mediterranean civilizations. The archaeological park is surrounded by wetlands, forests and a lagoon, creating a unique combination of cultural and natural heritage.",
            "Butrinti është një nga vendet arkeologjike më të rëndësishme të Shqipërisë dhe pjesë e Trashëgimisë Botërore të UNESCO-s. I vendosur pranë bregdetit Jon, ai përmban mbetje nga periudhat greke, romake, bizantine dhe veneciane. Monumentet e tij tregojnë historinë e një qyteti të formuar nga qytetërime të ndryshme mesdhetare. Parku arkeologjik rrethohet nga ligatina, pyje dhe një lagunë, duke krijuar një ndërthurje unike të trashëgimisë kulturore dhe natyrore."
        ),
        attractions: [
            {
                name: bilingual("Ancient Theatre", "Teatri Antik"),
                description: bilingual(
                    "An ancient theatre that formed part of the historic city. It is one of the best-preserved monuments in the archaeological park and reflects the importance of public performances in ancient life.",
                    "Një teatër antik që ishte pjesë e qytetit historik. Është një nga monumentet më të ruajtura në parkun arkeologjik dhe pasqyron rëndësinë e shfaqjeve publike në jetën e lashtë."
                )
            },
            {
                name: bilingual("Baptistery", "Pagëzimorja"),
                description: bilingual(
                    "An important early Christian monument known for its circular layout and mosaic floor. It provides evidence of the development of Christianity in the region.",
                    "Një monument i rëndësishëm i krishterë i hershëm, i njohur për planimetrinë rrethore dhe dyshemenë me mozaik. Ai dëshmon zhvillimin e krishterimit në rajon."
                )
            },
            {
                name: bilingual("Lion Gate", "Porta e Luanit"),
                description: bilingual(
                    "A historic entrance to the ancient city, named after the lion relief carved into a stone block. It is one of the most recognisable parts of the ancient fortifications.",
                    "Një hyrje historike e qytetit antik, e emërtuar sipas relievit të luanit të gdhendur në një bllok guri. Është një nga pjesët më të njohura të fortifikimeve antike."
                )
            },
            {
                name: bilingual("Roman Forum", "Forumi Romak"),
                description: bilingual(
                    "The remains of a public area from the Roman period. It illustrates how the ancient city developed as an important urban centre.",
                    "Mbetjet e një hapësire publike nga periudha romake. Ato tregojnë se si qyteti antik u zhvillua si një qendër e rëndësishme urbane."
                )
            },
            {
                name: bilingual("Venetian Castle", "Kalaja Veneciane"),
                description: bilingual(
                    "A historic fortress overlooking the archaeological site and the surrounding landscape. It is associated with the Venetian period of Butrint's history.",
                    "Një kala historike me pamje mbi parkun arkeologjik dhe peizazhin përreth. Ajo lidhet me periudhën veneciane të historisë së Butrintit."
                )
            },
            {
                name: bilingual("Butrint Lagoon", "Laguna e Butrintit"),
                description: bilingual(
                    "A natural lagoon surrounding part of the archaeological area. Its wetlands and diverse wildlife make it an important part of the site's protected natural environment.",
                    "Një lagunë natyrore që rrethon një pjesë të zonës arkeologjike. Ligatinat dhe fauna e larmishme e bëjnë pjesë të rëndësishme të mjedisit natyror të mbrojtur."
                )
            }
        ]
    }
};


/* =========================================
   LANGUAGE
========================================= */

let destinationLanguage =
    localStorage.getItem("albaniaLanguage") || "en";

if (!["en", "sq"].includes(destinationLanguage)) {
    destinationLanguage = "en";
}

const destinationInterface = {
    en: {
        discover: "EXPLORE ALBANIA",
        overview: "DISCOVER THE DESTINATION",
        overviewTitle: "Overview",
        attractions: "PLACES TO EXPLORE",
        attractionsTitle: "Main Attractions",
        gallery: "VISUAL EXPERIENCE",
        galleryTitle: "Photo Gallery",
        continue: "Continue Exploring Albania",
        continueText: "Discover more places and create your own journey.",
        back: "← Back to the map",
        map: "Explore the Map →",
        region: "REGION",
        type: "TYPE",
        season: "BEST TIME TO VISIT",
        noDestination: "Destination not found.",
        noGallery: "Photos coming soon."
    },

    sq: {
        discover: "ZBULONI SHQIPËRINË",
        overview: "ZBULONI DESTINACIONIN",
        overviewTitle: "Përmbledhje",
        attractions: "VENDE PËR T'U EKSPLORUAR",
        attractionsTitle: "Atraksionet Kryesore",
        gallery: "PËRVOJË VIZUALE",
        galleryTitle: "Galeria e Fotove",
        continue: "Vazhdoni të Eksploroni Shqipërinë",
        continueText: "Zbuloni vende të tjera dhe krijoni udhëtimin tuaj.",
        back: "← Kthehu te harta",
        map: "Eksploroni Hartën →",
        region: "RAJONI",
        type: "LLOJI",
        season: "KOHA MË E MIRË PËR VIZITË",
        noDestination: "Destinacioni nuk u gjet.",
        noGallery: "Fotot do të shtohen së shpejti."
    }
};


/* =========================================
   GET DESTINATION FROM URL
========================================= */

function getDestinationKey() {
    const params = new URLSearchParams(window.location.search);

    const place = (params.get("place") || "tirana")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

    return place;
}


/* =========================================
   DISPLAY DESTINATION
========================================= */

function renderDestination() {
    const key = getDestinationKey();
    const destination = destinationData[key];

    if (!destination) {
        const nameElement = document.getElementById("destinationName");

        if (nameElement) {
            nameElement.textContent =
                destinationInterface[destinationLanguage].noDestination;
        }

        document.title = "Destination not found | Albania Explorer";
        return;
    }

    const lang = destinationLanguage;
    const ui = destinationInterface[lang];

    /* HERO IMAGE */

    const hero = document.querySelector(".destination-hero");

    if (hero && destination.image) {
        hero.style.backgroundImage = `
            linear-gradient(90deg, rgba(4, 8, 16, 0.95), rgba(4, 8, 16, 0.35)),
            linear-gradient(0deg, #070b13 0%, transparent 45%),
            url("${destination.image}")
        `;
    }

    document.documentElement.lang = lang;

    /* MAIN INFORMATION */

    document.getElementById("destinationName").textContent =
        destination.name[lang];

    document.getElementById("destinationSubtitle").textContent =
        destination.subtitle[lang];

    document.getElementById("destinationDescription").textContent =
        destination.description[lang];

    document.getElementById("destinationRegion").textContent =
        destination.region[lang];

    document.getElementById("destinationType").textContent =
        destination.type[lang];

    document.getElementById("destinationSeason").textContent =
        destination.season[lang];

    /* SECTION TITLES */

    document.querySelector(".destination-label").textContent =
        ui.discover;

    document.querySelector(
        ".destination-overview .destination-section-heading span"
    ).textContent = ui.overview;

    document.querySelector(
        ".destination-overview h2"
    ).textContent = ui.overviewTitle;

    document.querySelector(
        ".destination-attractions .destination-section-heading span"
    ).textContent = ui.attractions;

    document.querySelector(
        ".destination-attractions h2"
    ).textContent = ui.attractionsTitle;

    document.querySelector(
        ".destination-gallery .destination-section-heading span"
    ).textContent = ui.gallery;

    document.querySelector(
        ".destination-gallery h2"
    ).textContent = ui.galleryTitle;

    /* EXPLORE MORE */

    document.querySelector(
        ".destination-explore-more h2"
    ).textContent = ui.continue;

    document.querySelector(
        ".destination-explore-more p"
    ).textContent = ui.continueText;

    /* BUTTONS */

    const backButtons = document.querySelectorAll(
        ".destination-back-button"
    );

    if (backButtons[0]) {
        backButtons[0].textContent = ui.back;
    }

    if (backButtons[1]) {
        backButtons[1].textContent = ui.map;
    }

    /* FACTS */

    const factLabels = document.querySelectorAll(
        ".destination-fact span"
    );

    if (factLabels[0]) factLabels[0].textContent = ui.region;
    if (factLabels[1]) factLabels[1].textContent = ui.type;
    if (factLabels[2]) factLabels[2].textContent = ui.season;

    /* ATTRACTIONS */

    const attractionsContainer = document.getElementById(
        "attractionsContainer"
    );

    attractionsContainer.innerHTML = "";

    destination.attractions.forEach(attraction => {
        const card = document.createElement("article");
        card.className = "attraction-card";

        const content = document.createElement("div");
        content.className = "attraction-card-content";

        const heading = document.createElement("h3");
        heading.textContent = attraction.name[lang];

        const paragraph = document.createElement("p");
        paragraph.textContent = attraction.description[lang];

        content.appendChild(heading);
        content.appendChild(paragraph);

        card.appendChild(content);

        attractionsContainer.appendChild(card);
    });

    /* GALLERY */

    document.getElementById("destinationGallery").textContent =
        ui.noGallery;

    /* PAGE TITLE */

    document.title =
        destination.name[lang] + " | Albania Explorer";
}


/* =========================================
   LANGUAGE SWITCHER
========================================= */

function initializeDestinationLanguage() {
    const switcher = document.getElementById("languageSwitcher");

    if (!switcher) return;

    switcher.value = destinationLanguage;

    switcher.addEventListener("change", function () {
        destinationLanguage = this.value;

        localStorage.setItem(
            "albaniaLanguage",
            destinationLanguage
        );

        renderDestination();
    });
}


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    initializeDestinationLanguage();
    renderDestination();
});
