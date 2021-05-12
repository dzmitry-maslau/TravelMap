const db = require("./server/db");
const { green, red } = require("chalk");
const { User, Park, VisitedParks } = require("./server/db/models");

const seed = async () => {
  await db.sync({ force: true });

  const VisitedParksList = [
    {
      park: "Acadia",
      userId: 1,
    },
    {
      park: "Bryce Canyon",
      userId: 1,
    },
    {
      park: "Death Valley",
      userId: 1,
    },
    {
      park: "Everglades",
      userId: 1,
    },
    {
      park: "Grand Canyon",
      userId: 1,
    },
    {
      park: "Great Smoky Mountains",
      userId: 1,
    },
    {
      park: "Sequoia",
      userId: 1,
    },
    {
      park: "Yellowstone",
      userId: 1,
    },
    {
      park: "Zion",
      userId: 1,
    },
  ];

  const userList = [
    {
      email: "dima7maslovv@gmail.com",
      password: "123",
      firstName: "Dzmitry",
      isAdmin: false,
    },
  ];

  const nationalParks = [
    {
      park: "Acadia",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bass_Harbor_Head_Light_Station_2016.jpg/400px-Bass_Harbor_Head_Light_Station_2016.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bass_Harbor_Head_Light_Station_2016.jpg/1280px-Bass_Harbor_Head_Light_Station_2016.jpg",
      location: "Maine",
      latitude: "44.35°N",
      longitude: "68.21°W",
      dateEstablished: "February 26, 1919",
      areaAcres: "49,076.63",
      areakm2: "198.6",
      recreationVisitors2019: "3,437,286",
      description:
        "Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats.",
    },
    {
      park: "American Samoa",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ofu_Beach_NPS.jpg/400px-Ofu_Beach_NPS.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ofu_Beach_NPS.jpg/1280px-Ofu_Beach_NPS.jpg",
      location: "American Samoa",
      latitude: "14.25°S",
      longitude: "170.68°W",
      dateEstablished: "October 31, 1988",
      areaAcres: "8,256.67",
      areakm2: "33.4",
      recreationVisitors2019: "60,006",
      description:
        "The southernmost national park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish.",
    },
    {
      park: "Arches",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Delicatearch1.jpg/400px-Delicatearch1.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Delicatearch1.jpg/1280px-Delicatearch1.jpg",
      location: "Utah",
      latitude: "38.68°N",
      longitude: "109.57°W",
      dateEstablished: "November 12, 1971",
      areaAcres: "76,678.98",
      areakm2: "310.3",
      recreationVisitors2019: "1,659,702",
      description:
        "This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch. Millions of years of erosion have created these structures located in a desert climate where the arid ground has life-sustaining biological soil crusts and potholes that serve as natural water-collecting basins. Other geologic formations include stone pinnacles, fins, and balancing rocks.",
    },
    {
      park: "Badlands",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/BadlandsView3.jpg/400px-BadlandsView3.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/BadlandsView3.jpg/1280px-BadlandsView3.jpg",
      location: "South Dakota",
      latitude: "43.75°N",
      longitude: "102.50°W",
      dateEstablished: "November 10, 1978",
      areaAcres: "242,755.94",
      areakm2: "982.4",
      recreationVisitors2019: "970,998",
      description:
        "The Badlands are a collection of buttes, pinnacles, spires, and mixed-grass prairies. The White River Badlands contain the largest assemblage of known late Eocene and Oligocene mammal fossils. The wildlife includes bison, bighorn sheep, black-footed ferrets, and prairie dogs.",
    },
    {
      park: "Big Bend",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Big_Bend_National_Park_PB112573.jpg/400px-Big_Bend_National_Park_PB112573.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Big_Bend_National_Park_PB112573.jpg/1280px-Big_Bend_National_Park_PB112573.jpg",
      location: "Texas",
      latitude: "29.25°N",
      longitude: "103.25°W",
      dateEstablished: "June 12, 1944",
      areaAcres: "801,163.21",
      areakm2: "3,242.2",
      recreationVisitors2019: "463,832",
      description:
        "Named for the prominent bend in the Rio Grande along the U.S.–Mexico border, this park encompasses a large and remote part of the Chihuahuan Desert. Its main attraction is backcountry recreation in the arid Chisos Mountains and in canyons along the river. A wide variety of Cretaceous and Tertiary fossils as well as cultural artifacts of Native Americans also exist within its borders.",
    },
    {
      park: "Biscayne",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Biscayne_NP_snorkeling.jpg/400px-Biscayne_NP_snorkeling.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Biscayne_NP_snorkeling.jpg/1280px-Biscayne_NP_snorkeling.jpg",
      location: "Florida",
      latitude: "25.65°N",
      longitude: "80.08°W",
      dateEstablished: "June 28, 1980",
      areaAcres: "172,971.11",
      areakm2: "700.0",
      recreationVisitors2019: "708,522",
      description:
        "Located in Biscayne Bay, this park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian manatee, American crocodile, various sea turtles, and peregrine falcon.",
    },
    {
      park: "Black Canyon of the Gunnison",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Black_canyon_gunnison_Colorado.jpg/400px-Black_canyon_gunnison_Colorado.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Black_canyon_gunnison_Colorado.jpg/1280px-Black_canyon_gunnison_Colorado.jpg",
      location: "Colorado",
      latitude: "38.57°N",
      longitude: "107.72°W",
      dateEstablished: "October 21, 1999",
      areaAcres: "30,779.83",
      areakm2: "124.6",
      recreationVisitors2019: "432,818",
      description:
        "The park protects a quarter of the Gunnison River, which slices sheer canyon walls from dark Precambrian-era rock. The canyon features some of the steepest cliffs and oldest rock in North America, and is a popular site for river rafting and rock climbing. The deep, narrow canyon is composed of gneiss and schist which appears black when in shadow.",
    },
    {
      park: "Bryce Canyon",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bryce_Canyon_Hoodoos_Amphitheater.jpg/400px-Bryce_Canyon_Hoodoos_Amphitheater.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bryce_Canyon_Hoodoos_Amphitheater.jpg/1280px-Bryce_Canyon_Hoodoos_Amphitheater.jpg",
      location: "Utah",
      latitude: "37.57°N",
      longitude: "112.18°W",
      dateEstablished: "February 25, 1928",
      areaAcres: "35,835.08",
      areakm2: "145.0",
      recreationVisitors2019: "2,594,904",
      description:
        "Bryce Canyon is a geological amphitheater on the Paunsaugunt Plateau with hundreds of tall, multicolored sandstone hoodoos formed by erosion. The region was originally settled by Native Americans and later by Mormon pioneers.",
    },
    {
      park: "Canyonlands",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg/400px-Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg/1280px-Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg",
      location: "Utah",
      latitude: "38.20°N",
      longitude: "109.93°W",
      dateEstablished: "September 12, 1964",
      areaAcres: "337,597.83",
      areakm2: "1,366.2",
      recreationVisitors2019: "733,996",
      description:
        "This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. The park also contains rock pinnacles and arches, as well as artifacts from Ancient Pueblo peoples.",
    },
    {
      park: "Capitol Reef",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG/400px-Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG/1280px-Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG",
      location: "Utah",
      latitude: "38.20°N",
      longitude: "111.17°W",
      dateEstablished: "December 18, 1971",
      areaAcres: "241,904.50",
      areakm2: "979.0",
      recreationVisitors2019: "1,226,519",
      description:
        "The park's Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earth's diverse geologic layers. Other natural features include monoliths, cliffs, and sandstone domes shaped like the United States Capitol.",
    },
    {
      park: "Carlsbad Caverns",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Carlsbad_Interior_Formations.jpg/400px-Carlsbad_Interior_Formations.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/dd/Carlsbad_Interior_Formations.jpg",
      location: "New Mexico",
      latitude: "32.17°N",
      longitude: "104.44°W",
      dateEstablished: "May 14, 1930",
      areaAcres: "46,766.45",
      areakm2: "189.3",
      recreationVisitors2019: "440,691",
      description:
        "Carlsbad Caverns has 117 caves, the longest of which is over 120 miles (190 km) long. The Big Room is almost 4,000 feet (1,200 m) long, and the caves are home to over 400,000 Mexican free-tailed bats and sixteen other species. Above ground are the Chihuahuan Desert and Rattlesnake Springs.",
    },
    {
      park: "Channel Islands",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Santa_Cruz_Island_CA_DSC_4323_ad.JPG/400px-Santa_Cruz_Island_CA_DSC_4323_ad.JPG",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Santa_Cruz_Island_CA_DSC_4323_ad.JPG/1280px-Santa_Cruz_Island_CA_DSC_4323_ad.JPG",
      location: "California",
      latitude: "34.01°N",
      longitude: "119.42°W",
      dateEstablished: "March 5, 1980",
      areaAcres: "249,561.00",
      areakm2: "1,009.9",
      recreationVisitors2019: "409,630",
      description:
        "Five of the eight Channel Islands are protected, with half of the park's area underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to over 2,000 species of land plants and animals, 145 endemic to them, including the island fox. Ferry services offer transportation to the islands from the mainland.",
    },
    {
      park: "Congaree",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bald_cypress_and_creek_%287166139814%29.jpg/400px-Bald_cypress_and_creek_%287166139814%29.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bald_cypress_and_creek_%287166139814%29.jpg/1280px-Bald_cypress_and_creek_%287166139814%29.jpg",
      location: "South Carolina",
      latitude: "33.78°N",
      longitude: "80.78°W",
      dateEstablished: "November 10, 2003",
      areaAcres: "26,476.47",
      areakm2: "107.1",
      recreationVisitors2019: "159,445",
      description:
        "On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the eastern United States. An elevated walkway called the Boardwalk Loop guides visitors through the swamp.",
    },
    {
      park: "Crater Lake",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Crater_lake_oregon.jpg/400px-Crater_lake_oregon.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Crater_lake_oregon.jpg",
      location: "Oregon",
      latitude: "42.94°N",
      longitude: "122.10°W",
      dateEstablished: "May 22, 1902",
      areaAcres: "183,224.05",
      areakm2: "741.5",
      recreationVisitors2019: "704,512",
      description:
        "Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. The lake is the deepest in the United States and is noted for its vivid blue color and water clarity. Wizard Island and the Phantom Ship are more recent volcanic formations within the caldera. As the lake has no inlets or outlets, the lake is replenished only by precipitation.",
    },
    {
      park: "Cuyahoga Valley",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cuyahoga_Valley_National_Park_03.jpg/400px-Cuyahoga_Valley_National_Park_03.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cuyahoga_Valley_National_Park_03.jpg/1280px-Cuyahoga_Valley_National_Park_03.jpg",
      location: "Ohio",
      latitude: "41.24°N",
      longitude: "81.55°W",
      dateEstablished: "October 11, 2000",
      areaAcres: "32,571.88",
      areakm2: "131.8",
      recreationVisitors2019: "2,237,997",
      description:
        "This park along the Cuyahoga River has waterfalls, hills, trails, and exhibits on early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boats. The park has numerous historic homes, bridges, and structures, and also offers a scenic train ride.",
    },
    {
      park: "Death Valley",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mesquite_Sand_Dunes_in_Death_Valley.jpg/400px-Mesquite_Sand_Dunes_in_Death_Valley.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mesquite_Sand_Dunes_in_Death_Valley.jpg/1280px-Mesquite_Sand_Dunes_in_Death_Valley.jpg",
      location: "California, Nevada",
      latitude: "36.24°N",
      longitude: "116.82°W",
      dateEstablished: "October 31, 1994",
      areaAcres: "3,408,406.73",
      areakm2: "13,793.3",
      recreationVisitors2019: "1,740,945",
      description:
        "Death Valley is the hottest, lowest, and driest place in the United States, with daytime temperatures that have exceeded 130 °F (54 °C). The park protects Badwater Basin and its vast salt flats located at the lowest elevation in North America, −282 ft (−86 m). The park also protects canyons, badlands, sand dunes, mountain ranges, historic mines, springs, and more than 1000 species of plants which grow in this geologic graben.",
    },
    {
      park: "Denali",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg/400px-Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg/1280px-Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg",
      location: "Alaska",
      latitude: "63.33°N",
      longitude: "150.50°W",
      dateEstablished: "February 26, 1917",
      areaAcres: "4,740,911.16",
      areakm2: "19,185.8",
      recreationVisitors2019: "601,152",
      description:
        "Centered on Denali, the tallest and highest prominence mountain in North America, Denali is serviced by a single road leading to Wonder Lake. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, Porcupine caribou, and wolves.",
    },
    {
      park: "Dry Tortugas",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Fort-Jefferson_Dry-Tortugas.jpg/400px-Fort-Jefferson_Dry-Tortugas.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Fort-Jefferson_Dry-Tortugas.jpg",
      location: "Florida",
      latitude: "24.63°N",
      longitude: "82.87°W",
      dateEstablished: "October 26, 1992",
      areaAcres: "64,701.22",
      areakm2: "261.8",
      recreationVisitors2019: "79,200",
      description:
        "The islands of the Dry Tortugas, at the westernmost end of the Florida Keys, are the site of Fort Jefferson, a Civil War-era fort that is the largest masonry structure in the Western Hemisphere. The park is home to undisturbed coral reefs and shipwrecks, and is only accessible by plane or boat.",
    },
    {
      park: "Everglades",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Everglades_National_Park_cypress.jpg/400px-Everglades_National_Park_cypress.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Everglades_National_Park_cypress.jpg",
      location: "Florida",
      latitude: "25.32°N",
      longitude: "80.93°W",
      dateEstablished: "May 30, 1934",
      areaAcres: "1,508,938.57",
      areakm2: "6,106.5",
      recreationVisitors2019: "1,118,300",
      description:
        "The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology.",
    },
    {
      park: "Gates of the Arctic",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Remote_river_in_Gates_of_the_Arctic_%2816524035298%29.jpg/400px-Remote_river_in_Gates_of_the_Arctic_%2816524035298%29.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Remote_river_in_Gates_of_the_Arctic_%2816524035298%29.jpg/1024px-Remote_river_in_Gates_of_the_Arctic_%2816524035298%29.jpg",
      location: "Alaska",
      latitude: "67.78°N",
      longitude: "153.30°W",
      dateEstablished: "December 2, 1980",
      areaAcres: "7,523,897.45",
      areakm2: "30,448.1",
      recreationVisitors2019: "10,518",
      description:
        "The country's northernmost park protects an expanse of pure wilderness in Alaska's Brooks Range and has no park facilities. The land is home to Alaska Natives who have relied on the land and caribou for 11,000 years.",
    },
    {
      park: "Gateway Arch",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/St_Louis_night_expblend.jpg/400px-St_Louis_night_expblend.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/St_Louis_night_expblend.jpg/1920px-St_Louis_night_expblend.jpg",
      location: "Missouri",
      latitude: "38.63°N",
      longitude: "90.19°W",
      dateEstablished: "February 22, 2018",
      areaAcres: "192.83",
      areakm2: "0.8",
      recreationVisitors2019: "2,055,309",
      description:
        "The Gateway Arch is a 630-foot (192 m) (both high and wide) catenary arch built to commemorate the Lewis and Clark Expedition, initiated by Thomas Jefferson, and the subsequent westward expansion of the country. The nearby Old Courthouse, across a greenway to the west of the arch, was the first site of the Dred Scott case about slavery. A museum, located in the underground visitor center below the arch, describes the arch's construction and the country's westward expansion.",
    },
    {
      park: "Glacier Bay",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/GlacierBay3.jpg/400px-GlacierBay3.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/GlacierBay3.jpg",
      location: "Alaska",
      latitude: "58.50°N",
      longitude: "137.00°W",
      dateEstablished: "December 2, 1980",
      areaAcres: "3,223,383.43",
      areakm2: "13,044.6",
      recreationVisitors2019: "672,087",
      description:
        "Glacier Bay contains tidewater glaciers, mountains, fjords, and a temperate rainforest, and is home to large populations of grizzly bears, mountain goats, whales, seals, and eagles. When discovered in 1794 by George Vancouver, the entire bay was covered by ice, but the glaciers have since receded more than 65 miles (105 km).",
    },
    {
      park: "Glacier",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/St_Mary_Lake_-_Wild_goose_Island.jpg/400px-St_Mary_Lake_-_Wild_goose_Island.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/St_Mary_Lake_-_Wild_goose_Island.jpg/800px-St_Mary_Lake_-_Wild_goose_Island.jpg",
      location: "Montana",
      latitude: "48.80°N",
      longitude: "114.00°W",
      dateEstablished: "May 11, 1910",
      areaAcres: "1,013,125.99",
      areakm2: "4,100.0",
      recreationVisitors2019: "3,049,839",
      description:
        "The U.S. half of Waterton-Glacier International Peace Park, this park includes 26 glaciers and 130 named lakes surrounded by Rocky Mountain peaks. There are historic hotels and a landmark road called the Going-to-the-Sun Road in this region of rapidly receding glaciers. The local mountains, formed by an overthrust, expose Paleozoic fossils including trilobites, mollusks, giant ferns and dinosaurs. The park is also home to Triple Divide Peak, which forms the boundary between the watersheds of the Atlantic, Pacific, and Arctic Oceans.",
    },
    {
      park: "Grand Canyon",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg/400px-USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg/800px-USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg",
      location: "Arizona",
      latitude: "36.06°N",
      longitude: "112.14°W",
      dateEstablished: "February 26, 1919",
      areaAcres: "1,201,647.03",
      areakm2: "4,862.9",
      recreationVisitors2019: "5,974,411",
      description:
        "The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have exposed the multicolored layers of the Colorado Plateau in mesas and canyon walls, visible from both the north and south rims, or from a number of trails that descend into the canyon itself.",
    },
    {
      park: "Grand Teton",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Teton_Range_from_Glacier_View_Turnout-closeup.JPG/400px-Teton_Range_from_Glacier_View_Turnout-closeup.JPG",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Teton_Range_from_Glacier_View_Turnout-closeup.JPG/800px-Teton_Range_from_Glacier_View_Turnout-closeup.JPG",
      location: "Wyoming",
      latitude: "43.73°N",
      longitude: "110.80°W",
      dateEstablished: "February 26, 1929",
      areaAcres: "310,044.36",
      areakm2: "1,254.7",
      recreationVisitors2019: "3,405,614",
      description:
        "Grand Teton is the tallest mountain in the Teton Range. The park's historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise abruptly from the sage-covered valley.",
    },
    {
      park: "Great Basin",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Prometheus_Wheeler.jpg/400px-Prometheus_Wheeler.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Prometheus_Wheeler.jpg",
      location: "Nevada",
      latitude: "38.98°N",
      longitude: "114.30°W",
      dateEstablished: "October 27, 1986",
      areaAcres: "77,180.00",
      areakm2: "312.3",
      recreationVisitors2019: "131,802",
      description:
        "Based around Nevada's second tallest mountain, Wheeler Peak, Great Basin National Park contains 5,000-year-old bristlecone pines, a rock glacier, and the limestone Lehman Caves. Due to its remote location, the park has some of the country's darkest night skies. Wildlife includes the Townsend's big-eared bat, pronghorn, and Bonneville cutthroat trout.",
    },
    {
      park: "Great Sand Dunes",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Coloradodunes.jpg/400px-Coloradodunes.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Coloradodunes.jpg",
      location: "Colorado",
      latitude: "37.73°N",
      longitude: "105.51°W",
      dateEstablished: "September 13, 2004",
      areaAcres: "107,341.87",
      areakm2: "434.4",
      recreationVisitors2019: "527,546",
      description:
        "The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also has alpine lakes, six 13,000-foot mountains, and old-growth forests.",
    },
    {
      park: "Great Smoky Mountains",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fall_at_Oconaluftee_Overlook.JPG/400px-Fall_at_Oconaluftee_Overlook.JPG",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fall_at_Oconaluftee_Overlook.JPG/800px-Fall_at_Oconaluftee_Overlook.JPG",
      location: "North Carolina, Tennessee",
      latitude: "35.68°N",
      longitude: "83.53°W",
      dateEstablished: "June 15, 1934",
      areaAcres: "522,426.88",
      areakm2: "2,114.2",
      recreationVisitors2019: "12,547,743",
      description:
        "The Great Smoky Mountains, part of the Appalachian Mountains, span a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5000 plant species. Hiking is the park's main attraction, with over 800 miles (1,300 km) of trails, including 70 miles (110 km) of the Appalachian Trail. Other activities include fishing, horseback riding, and touring nearly 80 historic structures.",
    },
    {
      park: "Guadalupe Mountains",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/West_face_of_Guadalupe_Mountains_at_sunset_2006.jpg/400px-West_face_of_Guadalupe_Mountains_at_sunset_2006.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/West_face_of_Guadalupe_Mountains_at_sunset_2006.jpg/800px-West_face_of_Guadalupe_Mountains_at_sunset_2006.jpg",
      location: "Texas",
      latitude: "31.92°N",
      longitude: "104.87°W",
      dateEstablished: "October 15, 1966",
      areaAcres: "86,367.10",
      areakm2: "349.5",
      recreationVisitors2019: "188,833",
      description:
        "This park contains Guadalupe Peak, the highest point in Texas, as well as the scenic McKittrick Canyon filled with bigtooth maples, a corner of the arid Chihuahuan Desert, and a fossilized coral reef from the Permian era.",
    },
    {
      park: "Haleakalā",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Haleakala_Crater.jpg/400px-Haleakala_Crater.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Haleakala_Crater.jpg/800px-Haleakala_Crater.jpg",
      location: "Hawaii",
      latitude: "20.72°N",
      longitude: "156.17°W",
      dateEstablished: "July 1, 1961",
      areaAcres: "33,264.62",
      areakm2: "134.6",
      recreationVisitors2019: "994,394",
      description:
        "The Haleakalā volcano on Maui features a very large crater with numerous cinder cones, Hosmer's Grove of alien trees, the Kipahulu section's scenic pools of freshwater fish, and the native Hawaiian goose. The park protects the greatest number of endangered species within a U.S. National Park.",
    },
    {
      park: "Hawaiʻi Volcanoes",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Puu_Oo_cropped.jpg/400px-Puu_Oo_cropped.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Puu_Oo_cropped.jpg/800px-Puu_Oo_cropped.jpg",
      location: "Hawaii",
      latitude: "19.38°N",
      longitude: "155.20°W",
      dateEstablished: "August 1, 1916",
      areaAcres: "325,605.28",
      areakm2: "1,317.7",
      recreationVisitors2019: "1,368,376",
      description:
        "This park on the Big Island protects the Kīlauea and Mauna Loa volcanoes, two of the world's most active geological features. Diverse ecosystems range from tropical forests at sea level to barren lava beds at more than 13,000 feet (4,000 m).",
    },
    {
      park: "Hot Springs",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hots_Springs_National_Park_aerial.jpg/400px-Hots_Springs_National_Park_aerial.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Hots_Springs_National_Park_aerial.jpg",
      location: "Arkansas",
      latitude: "34.51°N",
      longitude: "93.05°W",
      dateEstablished: "March 4, 1921",
      areaAcres: "5,554.15",
      areakm2: "22.5",
      recreationVisitors2019: "1,467,153",
      description:
        "Hot Springs was established as a federal reserve by Congress on April 20, 1832—the oldest area managed by the National Park Service. Congress redesignated Hot Springs as a national park on March 4, 1921. Natural hot springs flow out of the Ouachita Mountains, providing opportunities for relaxation in a historic setting. Bathhouse Row preserves numerous examples of 19th-century architecture. Hot Springs is the first national park in a city and was the smallest national park until February 22, 2018 when the Jefferson National Expansion Memorial was redesignated Gateway Arch National Park.",
    },
    {
      park: "Indiana Dunes",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2010-11-26_3060x2040_portage_indiana_dunes.jpg/400px-2010-11-26_3060x2040_portage_indiana_dunes.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2010-11-26_3060x2040_portage_indiana_dunes.jpg/800px-2010-11-26_3060x2040_portage_indiana_dunes.jpg",
      location: "Indiana",
      latitude: "41.65°N",
      longitude: "87.05°W",
      dateEstablished: "February 15, 2019",
      areaAcres: "15,349.08",
      areakm2: "62.1",
      recreationVisitors2019: "2,134,285",
      description:
        "Previously designated a national lakeshore, the dunes run for nearly 25 miles (40 km) along the southern shore of Lake Michigan. The sandy beach adjoins a grassy prairie, bog, and wetlands home to over 2,000 species.",
    },
    {
      park: "Isle Royale",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/IsleRoyalePlane.jpg/400px-IsleRoyalePlane.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/IsleRoyalePlane.jpg/800px-IsleRoyalePlane.jpg",
      location: "Michigan",
      latitude: "48.10°N",
      longitude: "88.55°W",
      dateEstablished: "April 3, 1940",
      areaAcres: "571,790.30",
      areakm2: "2,314.0",
      recreationVisitors2019: "26,410",
      description:
        "The largest island in Lake Superior is a place of isolation and wilderness. Along with its many shipwrecks, waterways, and hiking trails, the park also includes over 400 smaller islands within 4.5 miles (7.2 km) of its shores. There are only 20 mammal species on the entire island, though the relationship between its wolf and moose populations is especially unique.",
    },
    {
      park: "Joshua Tree",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg/400px-Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg/800px-Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg",
      location: "California",
      latitude: "33.79°N",
      longitude: "115.90°W",
      dateEstablished: "October 31, 1994",
      areaAcres: "795,155.85",
      areakm2: "3,217.9",
      recreationVisitors2019: "2,988,547",
      description:
        "Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal various contrasting environments including bleached sand dunes, dry lakes, rugged mountains, and maze-like clusters of monzogranite monoliths.",
    },
    {
      park: "Katmai",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Brown_bears_brooks_falls.jpg/400px-Brown_bears_brooks_falls.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Brown_bears_brooks_falls.jpg/800px-Brown_bears_brooks_falls.jpg",
      location: "Alaska",
      latitude: "58.50°N",
      longitude: "155.00°W",
      dateEstablished: "December 2, 1980",
      areaAcres: "3,674,529.33",
      areakm2: "14,870.3",
      recreationVisitors2019: "84,167",
      description:
        "This park on the Alaska Peninsula protects the Valley of Ten Thousand Smokes, an ash flow formed by the 1912 eruption of Novarupta, as well as Mount Katmai. Over 2,000 grizzly bears come here each year to catch spawning salmon. Other wildlife includes caribou, wolves, moose, and wolverines.",
    },
    {
      park: "Kenai Fjords",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Exit_Glacier_Jul09.JPG/400px-Exit_Glacier_Jul09.JPG",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Exit_Glacier_Jul09.JPG/800px-Exit_Glacier_Jul09.JPG",
      location: "Alaska",
      latitude: "59.92°N",
      longitude: "149.65°W",
      dateEstablished: "December 2, 1980",
      areaAcres: "669,650.05",
      areakm2: "2,710.0",
      recreationVisitors2019: "356,601",
      description:
        "Near Seward on the Kenai Peninsula, this park protects the Harding Icefield and at least 38 glaciers and fjords stemming from it. The only area accessible to the public by road is Exit Glacier; the rest must be viewed or reached from boat tours.",
    },
    {
      park: "Kings Canyon",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/KingsCanyonNP.JPG/400px-KingsCanyonNP.JPG",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/KingsCanyonNP.JPG/800px-KingsCanyonNP.JPG",
      location: "California",
      latitude: "36.80°N",
      longitude: "118.55°W",
      dateEstablished: "March 4, 1940",
      areaAcres: "461,901.20",
      areakm2: "1,869.2",
      recreationVisitors2019: "632,110",
      description:
        "Home to several giant sequoia groves and the General Grant Tree, the world's second largest measured tree, this park also features part of the Kings River, sculptor of the dramatic granite canyon that is its namesake, and the San Joaquin River, as well as Boyden Cave. Although Kings Canyon National Park was designated as such in 1940, it subsumed General Grant National Park, which had been established on October 1, 1890 as the United States' fourth national park.",
    },
    {
      park: "Kobuk Valley",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Agie_River.jpg/400px-Agie_River.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Agie_River.jpg",
      location: "Alaska",
      latitude: "67.55°N",
      longitude: "159.28°W",
      dateEstablished: "December 2, 1980",
      areaAcres: "1,750,716.16",
      areakm2: "7,084.9",
      recreationVisitors2019: "15,766",
      description:
        "Kobuk Valley protects 61 miles (98 km) of the Kobuk River and three regions of sand dunes. Created by glaciers, the Great Kobuk, Little Kobuk, and Hunt River Sand Dunes can reach 100 feet (30 m) high and 100 °F (38 °C), and they are the largest dunes in the Arctic. Twice a year, half a million caribou migrate through the dunes and across river bluffs that expose well-preserved ice age fossils.",
    },
    {
      park: "Lake Clark",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lake_Clark_National_Park.jpg/400px-Lake_Clark_National_Park.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Lake_Clark_National_Park.jpg",
      location: "Alaska",
      latitude: "60.97°N",
      longitude: "153.42°W",
      dateEstablished: "December 2, 1980",
      areaAcres: "2,619,816.49",
      areakm2: "10,602.0",
      recreationVisitors2019: "17,157",
      description:
        "The region around Lake Clark features four active volcanoes, including Mount Redoubt, as well as an abundance of rivers, glaciers, and waterfalls. Temperate rainforests, a tundra plateau, and three mountain ranges complete the landscape.",
    },
    {
      park: "Lassen Volcanic",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Lassen_Peak_from_the_summit_of_Brokeoff_Mountain-1200px.jpg/400px-Lassen_Peak_from_the_summit_of_Brokeoff_Mountain-1200px.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Lassen_Peak_from_the_summit_of_Brokeoff_Mountain-1200px.jpg",
      location: "California",
      latitude: "40.49°N",
      longitude: "121.51°W",
      dateEstablished: "August 9, 1916",
      areaAcres: "106,589.02",
      areakm2: "431.4",
      recreationVisitors2019: "517,039",
      description:
        "Lassen Peak, the largest lava dome volcano in the world, is joined by all three other types of volcanoes in this park: shield, cinder cone, and composite. Though Lassen itself last erupted in 1915, most of the rest of the park is continuously active. Numerous hydrothermal features, including fumaroles, boiling pools, and bubbling mud pots, are heated by molten rock from beneath the peak.",
    },
    {
      park: "Mammoth Cave",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mammoth_Cave_National_Park_007.jpg/400px-Mammoth_Cave_National_Park_007.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mammoth_Cave_National_Park_007.jpg/800px-Mammoth_Cave_National_Park_007.jpg",
      location: "Kentucky",
      latitude: "37.18°N",
      longitude: "86.10°W",
      dateEstablished: "July 1, 1941",
      areaAcres: "54,011.91",
      areakm2: "218.6",
      recreationVisitors2019: "551,590",
      description:
        "With more than 400 miles (640 km) of passageways explored, Mammoth Cave is the world's longest known cave system. Subterranean wildlife includes eight bat species, Kentucky cave shrimp, Northern cavefish, and cave salamanders. Above ground, the park provides recreation on the Green River, 70 miles of hiking trails, and plenty of sinkholes and springs.",
    },
    {
      park: "Mesa Verde",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mesa_Verde_National_Park_Cliff_Palace_Right_Part_2006_09_12.jpg/400px-Mesa_Verde_National_Park_Cliff_Palace_Right_Part_2006_09_12.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mesa_Verde_National_Park_Cliff_Palace_Right_Part_2006_09_12.jpg/800px-Mesa_Verde_National_Park_Cliff_Palace_Right_Part_2006_09_12.jpg",
      location: "Colorado",
      latitude: "37.18°N",
      longitude: "108.49°W",
      dateEstablished: "June 29, 1906",
      areaAcres: "52,485.17",
      areakm2: "212.4",
      recreationVisitors2019: "556,203",
      description:
        "This area constitutes over 4,000 archaeological sites of the Ancestral Puebloan people, who lived here and elsewhere in the Four Corners region for at least 700 years. Cliff dwellings built in the 12th and 13th centuries include Cliff Palace, which has 150 rooms and 23 kivas, and the Balcony House, with its many passages and tunnels.",
    },
    {
      park: "Mount Rainier",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mount_Rainier_from_west.jpg/400px-Mount_Rainier_from_west.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mount_Rainier_from_west.jpg/800px-Mount_Rainier_from_west.jpg",
      location: "Washington",
      latitude: "46.85°N",
      longitude: "121.75°W",
      dateEstablished: "March 2, 1899",
      areaAcres: "236,381.64",
      areakm2: "956.6",
      recreationVisitors2019: "1,501,621",
      description:
        "Mount Rainier, an active stratovolcano, is the most prominent peak in the Cascades and is covered by 26 named glaciers including Carbon Glacier and Emmons Glacier, the largest in the contiguous United States. The mountain is popular for climbing, and more than half of the park is covered by subalpine and alpine forests and meadows seasonally in bloom with wildflowers. Paradise on the south slope is the snowiest place on Earth where snowfall is measured regularly. The Longmire visitor center is the start of the Wonderland Trail, which encircles the mountain.",
    },
    {
      park: "New River Gorge",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/New_River_Gorge_Bridge.jpg/400px-New_River_Gorge_Bridge.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/New_River_Gorge_Bridge.jpg/800px-New_River_Gorge_Bridge.jpg",
      location: "West Virginia",
      latitude: "38.07°N",
      longitude: "81.08°W",
      dateEstablished: "December 27, 2020",
      areaAcres: "7,021",
      areakm2: "28.4",
      recreationVisitors2019: "–",
      description:
        "The New River Gorge in southern West Virginia is the deepest river gorge in the Appalachian Mountains and east of the Mississippi River. The protected area stretches for 53 miles (85 km) from just downstream of Hinton to Hawks Nest State Park near Ansted. The park is rich in cultural and natural history and offers an abundance of scenic and recreational opportunities. New River Gorge is also home to some of the country's best whitewater rafting, mainly from the Cunard put-in to the Fayette Station take-out.",
    },
    {
      park: "North Cascades",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Cascade_pass.jpg/400px-Cascade_pass.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Cascade_pass.jpg",
      location: "Washington",
      latitude: "48.70°N",
      longitude: "121.20°W",
      dateEstablished: "October 2, 1968",
      areaAcres: "504,780.94",
      areakm2: "2,042.8",
      recreationVisitors2019: "38,208",
      description:
        "This complex includes two geographically distinct units of the national park, as well as Ross Lake and Lake Chelan National Recreation Areas. The highly glaciated mountains are spectacular examples of Cascade geology. Popular hiking and climbing areas include Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak.",
    },
    {
      park: "Olympic",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Acer_macrophyllum_in_Hoh_Rain_Forest.jpg/400px-Acer_macrophyllum_in_Hoh_Rain_Forest.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Acer_macrophyllum_in_Hoh_Rain_Forest.jpg/800px-Acer_macrophyllum_in_Hoh_Rain_Forest.jpg",
      location: "Washington",
      latitude: "47.97°N",
      longitude: "123.50°W",
      dateEstablished: "June 29, 1938",
      areaAcres: "922,649.41",
      areakm2: "3,733.8",
      recreationVisitors2019: "3,245,806",
      description:
        "Situated on the Olympic Peninsula, this park includes a wide range of ecosystems from Pacific shoreline to temperate rainforests to the alpine slopes of the Olympic Mountains, the tallest of which is Mount Olympus. The Hoh Rainforest and Quinault Rainforest are the wettest area in the contiguous United States, with the Hoh receiving an average of almost 12 ft (3.7 m) of rain every year.",
    },
    {
      park: "Petrified Forest",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/PAINTED_DESERT_BADLANDS.jpg/400px-PAINTED_DESERT_BADLANDS.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/PAINTED_DESERT_BADLANDS.jpg/800px-PAINTED_DESERT_BADLANDS.jpg",
      location: "Arizona",
      latitude: "35.07°N",
      longitude: "109.78°W",
      dateEstablished: "December 9, 1962",
      areaAcres: "221,390.21",
      areakm2: "895.9",
      recreationVisitors2019: "643,588",
      description:
        "This portion of the Chinle Formation has a large concentration of 225-million-year-old petrified wood. The surrounding Painted Desert features eroded cliffs of red-hued volcanic rock called bentonite. Dinosaur fossils and over 350 Native American sites are also protected in this park.",
    },
    {
      park: "Pinnacles",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pinnacles_National_Park.jpg/400px-Pinnacles_National_Park.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pinnacles_National_Park.jpg/800px-Pinnacles_National_Park.jpg",
      location: "California",
      latitude: "36.48°N",
      longitude: "121.16°W",
      dateEstablished: "January 10, 2013",
      areaAcres: "26,685.73",
      areakm2: "108.0",
      recreationVisitors2019: "177,224",
      description:
        "Named for the eroded leftovers of a portion of an extinct volcano, the park's massive black and gold monoliths of andesite and rhyolite are a popular destination for rock climbers. Hikers have access to trails crossing the Coast Range wilderness. The park is home to the endangered California condor (Gymnogyps californianus) and one of the few locations in the world where these extremely rare birds can be seen in the wild. Pinnacles also supports a dense population of prairie falcons, and more than 13 species of bat which populate its talus caves.",
    },
    {
      park: "Redwood",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Redwood_National_Park%2C_fog_in_the_forest.jpg/400px-Redwood_National_Park%2C_fog_in_the_forest.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Redwood_National_Park%2C_fog_in_the_forest.jpg/800px-Redwood_National_Park%2C_fog_in_the_forest.jpg",
      location: "California",
      latitude: "41.30°N",
      longitude: "124.00°W",
      dateEstablished: "October 2, 1968",
      areaAcres: "138,999.37",
      areakm2: "562.5",
      recreationVisitors2019: "504,722",
      description:
        "This park and the co-managed state parks protect almost half of all remaining coastal redwoods, the tallest trees on earth. There are three large river systems in this very seismically active area, and 37 miles (60 km) of protected coastline reveal tide pools and seastacks. The prairie, estuary, coast, river, and forest ecosystems contain a wide variety of animal and plant species.",
    },
    {
      park: "Rocky Mountain",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg/400px-Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg/800px-Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg",
      location: "Colorado",
      latitude: "40.40°N",
      longitude: "105.58°W",
      dateEstablished: "January 26, 1915",
      areaAcres: "265,807.25",
      areakm2: "1,075.7",
      recreationVisitors2019: "4,670,053",
      description:
        "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m).",
    },
    {
      park: "Saguaro",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Saguaronationalparl17102008.jpg/400px-Saguaronationalparl17102008.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Saguaronationalparl17102008.jpg/800px-Saguaronationalparl17102008.jpg",
      location: "Arizona",
      latitude: "32.25°N",
      longitude: "110.50°W",
      dateEstablished: "October 14, 1994",
      areaAcres: "91,715.72",
      areakm2: "371.2",
      recreationVisitors2019: "1,020,226",
      description:
        "Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.",
    },
    {
      park: "Sequoia",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Giant_Forest.jpg/400px-Giant_Forest.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Giant_Forest.jpg/800px-Giant_Forest.jpg",
      location: "California",
      latitude: "36.43°N",
      longitude: "118.68°W",
      dateEstablished: "September 25, 1890",
      areaAcres: "404,062.63",
      areakm2: "1,635.2",
      recreationVisitors2019: "1,246,053",
      description:
        "This park protects the Giant Forest, which boasts some of the world's largest trees, the General Sherman being the largest measured tree in the park. Other features include over 240 caves, a long segment of the Sierra Nevada including the tallest mountain in the contiguous United States, and Moro Rock, a large granite dome.",
    },
    {
      park: "Shenandoah",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg/400px-Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg/800px-Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg",
      location: "Virginia",
      latitude: "38.53°N",
      longitude: "78.35°W",
      dateEstablished: "December 26, 1935",
      areaAcres: "199,223.77",
      areakm2: "806.2",
      recreationVisitors2019: "1,425,507",
      description:
        "Shenandoah's Blue Ridge Mountains are covered by hardwood forests that teem with a wide variety of wildlife. The Skyline Drive and Appalachian Trail run the entire length of this narrow park, along with more than 500 miles (800 km) of hiking trails passing scenic overlooks and cataracts of the Shenandoah River.",
    },
    {
      park: "Theodore Roosevelt",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Theodore_Roosevelt_National_Park.jpg/400px-Theodore_Roosevelt_National_Park.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Theodore_Roosevelt_National_Park.jpg",
      location: "North Dakota",
      latitude: "46.97°N",
      longitude: "103.45°W",
      dateEstablished: "November 10, 1978",
      areaAcres: "70,446.89",
      areakm2: "285.1",
      recreationVisitors2019: "691,658",
      description:
        "This region that enticed and influenced President Theodore Roosevelt consists of a park of three units in the northern badlands. Besides Roosevelt's historic cabin, there are numerous scenic drives and backcountry hiking opportunities. Wildlife includes American bison, pronghorn, bighorn sheep, and wild horses.",
    },
    {
      park: "Virgin Islands",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/St_John_Trunk_Bay_1.jpg/400px-St_John_Trunk_Bay_1.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/St_John_Trunk_Bay_1.jpg/800px-St_John_Trunk_Bay_1.jpg",
      location: "U.S. Virgin Islands",
      latitude: "18.33°N",
      longitude: "64.73°W",
      dateEstablished: "August 2, 1956",
      areaAcres: "15,052.53",
      areakm2: "60.9",
      recreationVisitors2019: "133,398",
      description:
        "This island park on Saint John preserves Taíno archaeological sites and the ruins of sugar plantations from Columbus's time, as well as all the natural environs. Surrounding the pristine beaches are mangrove forests, seagrass beds, and coral reefs.",
    },
    {
      park: "Voyageurs",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Voyageurs_National_Park.jpg/400px-Voyageurs_National_Park.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Voyageurs_National_Park.jpg/800px-Voyageurs_National_Park.jpg",
      location: "Minnesota",
      latitude: "48.50°N",
      longitude: "92.88°W",
      dateEstablished: "April 8, 1975",
      areaAcres: "218,222.35",
      areakm2: "883.1",
      recreationVisitors2019: "232,974",
      description:
        "This park protecting four lakes near the Canada–US border is a site for canoeing, kayaking, and fishing. The park also preserves a history populated by Ojibwe Native Americans, French fur traders called voyageurs, and gold miners. Formed by glaciers, the region features tall bluffs, rock gardens, islands, bays, and several historic buildings.",
    },
    {
      park: "White Sands",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/White_Sands_New_Mexico_USA.jpg/400px-White_Sands_New_Mexico_USA.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/White_Sands_New_Mexico_USA.jpg/800px-White_Sands_New_Mexico_USA.jpg",
      location: "New Mexico",
      latitude: "32.78°N",
      longitude: "106.17°W",
      dateEstablished: "December 20, 2019",
      areaAcres: "146,344.31",
      areakm2: "592.2",
      recreationVisitors2019: "608,785",
      description:
        "Located in the mountain-ringed Tularosa Basin, White Sands consists of the southern part of a 275-square-mile (710 km2) field of white sand dunes composed of gypsum crystals—the world's largest gypsum dunefield. The park is completely within the White Sands Missile Range and is subject to closure when tests are conducted.",
    },
    {
      park: "Wind Cave",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Wind_Cave_lower.jpg/400px-Wind_Cave_lower.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Wind_Cave_lower.jpg/800px-Wind_Cave_lower.jpg",
      location: "South Dakota",
      latitude: "43.57°N",
      longitude: "103.48°W",
      dateEstablished: "January 9, 1903",
      areaAcres: "33,970.84",
      areakm2: "137.5",
      recreationVisitors2019: "615,350",
      description:
        "Wind Cave is distinctive for its calcite fin formations called boxwork, a unique formation rarely found elsewhere, and needle-like growths called frostwork. It is one of the longest caves in the world and creates a wind as air pressure changes. Above ground is a mixed-grass prairie with animals such as bison, black-footed ferrets, and prairie dogs and ponderosa pine forests home to cougars and elk. The cave is culturally significant to the Lakota people as a creation site.",
    },
    {
      park: "Wrangell–St. Elias",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/MountJarvis.jpg/400px-MountJarvis.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/MountJarvis.jpg/800px-MountJarvis.jpg",
      location: "Alaska",
      latitude: "61.00°N",
      longitude: "142.00°W",
      dateEstablished: "December 2, 1980",
      areaAcres: "8,323,146.48",
      areakm2: "33,682.6",
      recreationVisitors2019: "74,518",
      description:
        "An over 8 million acres (32,375 km2) plot of mountainous country—the largest national park in the system—protects the convergence of the Alaska, Chugach, and Wrangell-Saint Elias Ranges, which include many of the continent's tallest mountains and volcanoes, including the 18,008-foot Mount Saint Elias. More than a quarter of the park is covered with glaciers, including the tidewater Hubbard Glacier, piedmont Malaspina Glacier, and valley Nabesna Glacier.",
    },
    {
      park: "Yellowstone",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Grand_Prismatic_Spring_and_Midway_Geyser_Basin_from_above.jpg/400px-Grand_Prismatic_Spring_and_Midway_Geyser_Basin_from_above.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Grand_Prismatic_Spring_and_Midway_Geyser_Basin_from_above.jpg/800px-Grand_Prismatic_Spring_and_Midway_Geyser_Basin_from_above.jpg",
      location: "Wyoming, Montana, Idaho",
      latitude: "44.60°N",
      longitude: "110.50°W",
      dateEstablished: "March 1, 1872",
      areaAcres: "2,219,790.71",
      areakm2: "8,983.2",
      recreationVisitors2019: "4,020,288",
      description:
        "Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly erupting geysers, the best-known being Old Faithful. The yellow-hued Grand Canyon of the Yellowstone River contains several high waterfalls, and four mountain ranges traverse the park. More than 60 mammal species including timber wolves, grizzly bears, black bears, lynxes, bison, and elk, make this park one of the best wildlife viewing spots in the country.",
    },
    {
      park: "Yosemite",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/YosemitePark2_amk.jpg/400px-YosemitePark2_amk.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/YosemitePark2_amk.jpg/800px-YosemitePark2_amk.jpg",
      location: "California",
      latitude: "37.83°N",
      longitude: "119.50°W",
      dateEstablished: "October 1, 1890",
      areaAcres: "761,747.50",
      areakm2: "3,082.7",
      recreationVisitors2019: "4,422,861",
      description:
        "Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park's centerpiece, the glacier-carved Yosemite Valley, and from its vertical walls drop Yosemite Falls, one of North America's tallest waterfalls at 2,425 feet (739 m) high. Three giant sequoia groves, along with a pristine wilderness in the heart of the Sierra Nevada, are home to a wide variety of rare plant and animal species.",
    },
    {
      park: "Zion",
      smallImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Angels_Landing.jpg/400px-Angels_Landing.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Angels_Landing.jpg/800px-Angels_Landing.jpg",
      location: "Utah",
      latitude: "37.30°N",
      longitude: "113.05°W",
      dateEstablished: "November 19, 1919",
      areaAcres: "147,242.66",
      areakm2: "595.9",
      recreationVisitors2019: "4,488,268",
      description:
        "Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert, this park contains sandstone features such as mesas, rock towers, and canyons, including the Virgin River Narrows. The various sandstone formations and the forks of the Virgin River create a wilderness divided into four ecosystems: desert, riparian, woodland, and coniferous forest.",
    },
  ];

  await Promise.all(
    userList.map((user) => {
      return User.create(user);
    })
  );

  await Promise.all(
    nationalParks.map((park) => {
      return Park.create(park);
    })
  );

  await Promise.all(
    VisitedParksList.map((park) => {
      return VisitedParks.create(park);
    })
  );

  console.log(green("Seeding success!"));
  db.close();
};

seed().catch((err) => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});

module.exports = {
  seed,
};
