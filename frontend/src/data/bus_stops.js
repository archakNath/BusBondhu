const busStops = [
  {
    "name": "ramnagar",
    "location": null,
    "routes": [
      "route1",
      "route12",
      "route12 (Shuttle)",
      "route12A",
      "route12B (Shuttle)",
      "route1A",
      "route1B",
      "route241",
      "route42A",
      "route42B",
      "routeDN28",
      "routeMM7",
      "routeS-123",
      "routeS-161"
    ]
  },
  {
    "name": "mukundapur",
    "location": null,
    "routes": [
      "route1",
      "route1A",
      "route240/1",
      "route24A/1",
      "routeS-101/1",
      "routeS-106",
      "routeS-124",
      "routeSD-16",
      "routeAmta - Mukundapur",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria Station - Bagbazar",
      "routeGaria Station - Kolkata Station",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "bnr",
    "location": null,
    "routes": [
      "route1",
      "route12"
    ]
  },
  {
    "name": "kidderpore",
    "location": null,
    "routes": [
      "route1",
      "route12",
      "route12 (Shuttle)",
      "route12A",
      "route12AD",
      "route12B (Shuttle)",
      "route12C",
      "route12C/1",
      "route12C/1A",
      "route13",
      "route17",
      "route18A",
      "route18D",
      "route1A",
      "route222",
      "route227",
      "route235",
      "route241",
      "route259",
      "route37",
      "route3D",
      "route42A",
      "route75",
      "route83",
      "routeKB12",
      "routeM-14",
      "routeRT-10",
      "routeS-123",
      "routeS-126",
      "routeS-161"
    ]
  },
  {
    "name": "bhabani bhawan",
    "location": null,
    "routes": [
      "route1",
      "route1A",
      "route210",
      "route228",
      "route80A",
      "routeS-121",
      "routeS-129",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-26",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "alipore zoo",
    "location": null,
    "routes": [
      "route1",
      "route1A",
      "route230",
      "route260",
      "route77A",
      "route77A (No Bata)",
      "routeRT-21",
      "routeS-121",
      "routeS-129",
      "routesd-24"
    ]
  },
  {
    "name": "hazra",
    "location": null,
    "routes": [
      "route1",
      "route3B",
      "route3C/1",
      "routeDN12/1",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "rashbehari",
    "location": null,
    "routes": [
      "route1",
      "route12C/1B",
      "route13C",
      "route17",
      "route18B/1",
      "route18C",
      "route1A",
      "route1B",
      "route205A",
      "route208",
      "route21",
      "route21/1",
      "route228",
      "route234/1",
      "route37A",
      "route3B",
      "route3C/1",
      "route40A",
      "route40B",
      "route41",
      "route41B",
      "route42B",
      "route45B",
      "route47/1",
      "route47B",
      "route80A",
      "route80B",
      "routeS-107/1",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-131",
      "routeS-135",
      "routeSD-4",
      "routeSD-8"
    ]
  },
  {
    "name": "gariahat",
    "location": null,
    "routes": [
      "route1",
      "route13C",
      "route18B/1",
      "route18C",
      "route205A",
      "route212",
      "route218",
      "route223",
      "route234",
      "route240",
      "route240/1",
      "route37A",
      "route3C/1",
      "route3C/2",
      "route42B",
      "route45",
      "route45A",
      "route80B",
      "routeKB15",
      "routeKB17",
      "routeM10 (AC Corporate)",
      "routeS-101",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-107",
      "routeS-107/1",
      "routeS-108",
      "routeS-109",
      "routeS-110",
      "routeS-124",
      "routeS-131",
      "routeSD-16",
      "routeSD-8",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "kasba post office",
    "location": null,
    "routes": [
      "route1",
      "route212",
      "routeKB15",
      "routeS-108",
      "routeSD-8"
    ]
  },
  {
    "name": "haltu",
    "location": null,
    "routes": [
      "route1"
    ]
  },
  {
    "name": "safuipara",
    "location": null,
    "routes": [
      "route1"
    ]
  },
  {
    "name": "e.m. bypass",
    "location": null,
    "routes": [
      "route1",
      "route1A",
      "route1B",
      "route240/1",
      "route24A/1",
      "route47B",
      "routeRT-42",
      "routeS-106",
      "routeS-124",
      "routeS-131",
      "routeSD-16",
      "routeAmta - Newtown",
      "routeBarasat (titumir Bus Stand) - Santragachi"
    ]
  },
  {
    "name": "badartala",
    "location": null,
    "routes": [
      "route12",
      "route12 (Shuttle)",
      "route12A"
    ]
  },
  {
    "name": "rajabazar",
    "location": null,
    "routes": [
      "route12",
      "route12C/2",
      "route202",
      "route204/1",
      "route213A",
      "route217",
      "route227",
      "route230",
      "route234",
      "route240/1",
      "route260",
      "route30B",
      "route30C/1",
      "route30D",
      "route34C",
      "route3C/1",
      "route3D",
      "route44",
      "route44A",
      "route46B",
      "route79D",
      "routeK4",
      "routeKB21",
      "routeS-165",
      "routeS-178",
      "routeGaria Station - Bagbazar",
      "routeMalancha - Kolkata Station",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "metiabruz",
    "location": null,
    "routes": [
      "route12",
      "route12 (Shuttle)",
      "route12A",
      "route241"
    ]
  },
  {
    "name": "taratala",
    "location": null,
    "routes": [
      "route12",
      "route12AD",
      "route12C",
      "route13",
      "route13A",
      "route13C",
      "route1B",
      "route21/1",
      "route259",
      "route37",
      "route3D",
      "route42B",
      "route77A",
      "route77A (No Bata)",
      "routeKB12",
      "routeM-14",
      "routeSD-14",
      "routeSD-27",
      "routeSD-30",
      "routeSD-4",
      "routeSD-5"
    ]
  },
  {
    "name": "hastings",
    "location": null,
    "routes": [
      "route12",
      "route12 (Shuttle)",
      "route12A",
      "route12AD",
      "route12B (Shuttle)",
      "route12C",
      "route12C/1",
      "route12C/1A",
      "route13",
      "route17",
      "route18A",
      "route18D",
      "route222",
      "route227",
      "route235",
      "route241",
      "route259",
      "route37",
      "route3D",
      "route75",
      "route83",
      "routeK11",
      "routeKB15",
      "routeM-14",
      "routeRT-10",
      "routeRT-42",
      "routeS-123",
      "routeS-126",
      "routeS-161",
      "routeBarasat - Santragachi",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeKadamtala - Newtown",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "babughat",
    "location": null,
    "routes": [
      "route12",
      "route12 (Shuttle)",
      "route12A",
      "route205",
      "route205A",
      "route213",
      "route214",
      "route217",
      "route217A",
      "route217B",
      "route218",
      "route228",
      "route237",
      "route239 (White Board)",
      "route239 (Yellow Board)",
      "route259",
      "route30B",
      "route30C",
      "route30C/1",
      "route30D",
      "route40A",
      "route40B",
      "route75",
      "route78/1",
      "route79D",
      "route83",
      "routeDN17",
      "routeM-14",
      "routeRT-10",
      "routeS-139",
      "routeS-158",
      "routeS-161",
      "routeSD-26"
    ]
  },
  {
    "name": "esplanade",
    "location": null,
    "routes": [
      "route12",
      "route12 (Shuttle)",
      "route12AD",
      "route12B (Shuttle)",
      "route12C",
      "route12C/1",
      "route12C/1A",
      "route12C/1B",
      "route13",
      "route13A",
      "route17",
      "route18A",
      "route18D",
      "route205",
      "route205A",
      "route208",
      "route210",
      "route212",
      "route213",
      "route214A",
      "route217",
      "route217A",
      "route217B",
      "route218",
      "route222",
      "route228",
      "route230",
      "route234/1",
      "route235",
      "route237",
      "route239 (White Board)",
      "route239 (Yellow Board)",
      "route241",
      "route242",
      "route24A",
      "route24A/1",
      "route253",
      "route260",
      "route30A",
      "route30B",
      "route30C",
      "route30C/1",
      "route30D",
      "route34B",
      "route34C",
      "route37",
      "route37A",
      "route39",
      "route3B",
      "route3C/1",
      "route3C/2",
      "route3D",
      "route40A",
      "route40B",
      "route41",
      "route41B",
      "route43",
      "route46",
      "route46B",
      "route47/1",
      "route47B",
      "route52",
      "route54",
      "route55",
      "route55A",
      "route57",
      "route59",
      "route73",
      "route75",
      "route77A",
      "route77A (No Bata)",
      "route78",
      "route78/1",
      "route79D",
      "route80A",
      "route80B",
      "route83",
      "routeDN17",
      "routeRT-1",
      "routeRT-10",
      "routeRT-11",
      "routeRT-11A",
      "routeRT-18",
      "routeRT-1A",
      "routeRT-2",
      "routeRT-21",
      "routeRT-26",
      "routeRT-27",
      "routeRT-27A",
      "routeRT-3",
      "routeRT-30",
      "routeRT-31",
      "routeRT-32",
      "routeRT-38",
      "routeRT-39",
      "routeRT-3A",
      "routeRT-6",
      "routeRT-6A",
      "routeRT-8",
      "routeS-101",
      "routeS-101/1",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-107",
      "routeS-107/1",
      "routeS-108",
      "routeS-109",
      "routeS-110",
      "routeS-111",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-121",
      "routeS-123",
      "routeS-124",
      "routeS-125",
      "routeS-126",
      "routeS-128",
      "routeS-129",
      "routeS-135",
      "routeS-161",
      "routeS-166",
      "routeS-167",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routesd-24",
      "routeSD-26",
      "routeSD-82",
      "routeSD-9",
      "routeBargachia - Sealdah Court",
      "routeDhulagarh - Sealdah",
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "wellington",
    "location": null,
    "routes": [
      "route12",
      "route205A",
      "route213",
      "route217",
      "route217B",
      "route218",
      "route230",
      "route235",
      "route239 (White Board)",
      "route239 (Yellow Board)",
      "route24A",
      "route24A/1",
      "route253",
      "route260",
      "route30B",
      "route30C/1",
      "route30D",
      "route34B",
      "route34C",
      "route39",
      "route3C/1",
      "route3C/2",
      "route3D",
      "route46",
      "route46B",
      "route78/1",
      "route79D",
      "routeRT-27",
      "routeRT-27A",
      "routeS-108",
      "routeS-110",
      "routeS-125",
      "routeS-128",
      "routeS-166",
      "routeS-167",
      "routesd-24",
      "routeDhulagarh - Sealdah"
    ]
  },
  {
    "name": "moulali",
    "location": null,
    "routes": [
      "route12",
      "route3C/1",
      "route3D",
      "routeDN17",
      "routeK4",
      "routeKB12",
      "routeKB17",
      "routeKB21",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeDhulagarh - Sealdah",
      "routeGaria Station - Bagbazar",
      "routeMalancha - Kolkata Station",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "sealdah.",
    "location": null,
    "routes": [
      "route12"
    ]
  },
  {
    "name": "bichali ghat",
    "location": null,
    "routes": [
      "route12 (Shuttle)",
      "route12A",
      "route241",
      "route42A",
      "route42B",
      "routeS-123",
      "routeS-161"
    ]
  },
  {
    "name": "fatehpur 28 no",
    "location": null,
    "routes": [
      "route12 (Shuttle)"
    ]
  },
  {
    "name": "howrah station",
    "location": null,
    "routes": [
      "route12A",
      "route12AD",
      "route12C",
      "route12C/1",
      "route12C/1A",
      "route12C/1B",
      "route12C/2",
      "route17",
      "route18A",
      "route18D",
      "route208",
      "route212",
      "route215",
      "route215/1",
      "route215A",
      "route215A/1",
      "route219",
      "route219/1",
      "route24",
      "route24A",
      "route24A/1",
      "route24B",
      "route259",
      "route28",
      "route37",
      "route37A",
      "route39A/2",
      "route41",
      "route41B",
      "route44",
      "route44/1",
      "route44A",
      "route51",
      "route52",
      "route54",
      "route55",
      "route55A",
      "route56",
      "route57",
      "route57A",
      "route59",
      "route61",
      "route63",
      "route69",
      "route71",
      "route72",
      "route73",
      "route75",
      "route80",
      "routeE43",
      "routeE53",
      "routeL238",
      "routeM-14",
      "routeRT-1",
      "routeRT-10",
      "routeRT-11",
      "routeRT-11A",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-18",
      "routeRT-1A",
      "routeRT-2",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-21",
      "routeRT-24",
      "routeRT-25",
      "routeRT-26",
      "routeRT-27",
      "routeRT-27A",
      "routeRT-29",
      "routeRT-3",
      "routeRT-30",
      "routeRT-31",
      "routeRT-32",
      "routeRT-34",
      "routert-35",
      "routeRT-38",
      "routeRT-39",
      "routeRT-3A",
      "routeRT-5",
      "routeRT-6",
      "routeRT-6A",
      "routeRT-7",
      "routeRT-8",
      "routeS-107",
      "routeS-107/1",
      "routeS-108",
      "routeS-110",
      "routeS-111",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-121",
      "routeS-123",
      "routeS-124",
      "routeS-125",
      "routeS-126",
      "routeS-128",
      "routeS-129",
      "routeS-135",
      "routeS-165",
      "routeS-166",
      "routeS-168",
      "routeS-173",
      "routeS-175",
      "routeS-176",
      "routeS-180",
      "routeS-185",
      "routeS-186",
      "routeS-189",
      "routeBandar - Howrah Station",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "rajabagan",
    "location": null,
    "routes": [
      "route12A"
    ]
  },
  {
    "name": "mudiali more",
    "location": null,
    "routes": [
      "route12A",
      "route42A"
    ]
  },
  {
    "name": "h.m.g. college",
    "location": null,
    "routes": [
      "route12A",
      "route42A"
    ]
  },
  {
    "name": "fatehpur",
    "location": null,
    "routes": [
      "route12A",
      "route210",
      "route42A",
      "route83",
      "routeSD-14",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "garden reach",
    "location": null,
    "routes": [
      "route12A",
      "route12B (Shuttle)",
      "route241",
      "route42A",
      "routeS-123",
      "routeS-161"
    ]
  },
  {
    "name": "babubazar",
    "location": null,
    "routes": [
      "route12A",
      "route12B (Shuttle)",
      "route12C",
      "route227",
      "route241",
      "route42A",
      "routeS-123",
      "routeS-126",
      "routeS-161"
    ]
  },
  {
    "name": "princep ghat",
    "location": null,
    "routes": [
      "route12A",
      "route259",
      "routeM-14",
      "routeRT-10",
      "routeS-161"
    ]
  },
  {
    "name": "barabazar",
    "location": null,
    "routes": [
      "route12A",
      "route12AD",
      "route12C",
      "route12C/1",
      "route12C/1A",
      "route12C/1B",
      "route12C/2",
      "route17",
      "route18A",
      "route18D",
      "route208",
      "route212",
      "route215",
      "route215/1",
      "route215A/1",
      "route219",
      "route219/1",
      "route24",
      "route24A",
      "route24A/1",
      "route24B",
      "route259",
      "route28",
      "route37",
      "route37A",
      "route39A/2",
      "route41",
      "route41B",
      "route44",
      "route44/1",
      "route44A",
      "route52",
      "route54",
      "route55",
      "route55A",
      "route57",
      "route59",
      "route71",
      "route72",
      "route73",
      "route75",
      "routeL238",
      "routeM-14",
      "routeRT-1",
      "routeRT-10",
      "routeRT-11",
      "routeRT-11A",
      "routeRT-18",
      "routeRT-1A",
      "routeRT-2",
      "routeRT-20A",
      "routeRT-21",
      "routeRT-25",
      "routeRT-26",
      "routeRT-27",
      "routeRT-27A",
      "routeRT-3",
      "routeRT-30",
      "routeRT-31",
      "routeRT-32",
      "routeRT-38",
      "routeRT-39",
      "routeRT-3A",
      "routeRT-6",
      "routeRT-6A",
      "routeRT-8",
      "routeS-107",
      "routeS-107/1",
      "routeS-108",
      "routeS-110",
      "routeS-111",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-121",
      "routeS-123",
      "routeS-124",
      "routeS-125",
      "routeS-126",
      "routeS-128",
      "routeS-129",
      "routeS-135",
      "routeS-165",
      "routeS-166",
      "routeS-172",
      "routeS-173",
      "routeS-175",
      "routeS-186",
      "routeBarrackpore Station - Howrah Station",
      "routeBashirhat - Gadiara",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "akra fatak",
    "location": null,
    "routes": [
      "route12AD",
      "route241",
      "routeSD-27"
    ]
  },
  {
    "name": "santoshpur station",
    "location": null,
    "routes": [
      "route12AD",
      "route241",
      "routeSD-27"
    ]
  },
  {
    "name": "nature park",
    "location": null,
    "routes": [
      "route12AD",
      "route1B",
      "route42B",
      "routeSD-27"
    ]
  },
  {
    "name": "jhinjhira bazar",
    "location": null,
    "routes": [
      "route12AD",
      "route13",
      "route13A",
      "route13C",
      "route259",
      "route42B",
      "route77A",
      "route77A (No Bata)",
      "routeM-14",
      "routeS-126",
      "routeSD-27",
      "routeSD-30"
    ]
  },
  {
    "name": "brace bridge",
    "location": null,
    "routes": [
      "route12AD",
      "route12C",
      "route13",
      "route13A",
      "route13C",
      "route259",
      "route42B",
      "route77A",
      "route77A (No Bata)",
      "routeM-14",
      "routeS-126",
      "routeSD-27",
      "routeSD-30"
    ]
  },
  {
    "name": "majherhat",
    "location": null,
    "routes": [
      "route12AD",
      "route12C/1",
      "route12C/1A",
      "route13",
      "route13A",
      "route13C",
      "route18A",
      "route18B/1",
      "route18C",
      "route18D",
      "route210",
      "route222",
      "route235",
      "route259",
      "route37",
      "route75",
      "route77A",
      "route77A (No Bata)",
      "route83",
      "routeM-14",
      "routeRT-21",
      "routeS-121",
      "routeS-129",
      "routeS-131",
      "routeS-178",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-26",
      "routeSD-8",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "mominpore",
    "location": null,
    "routes": [
      "route12AD",
      "route12C/1",
      "route12C/1A",
      "route13",
      "route13A",
      "route13C",
      "route17",
      "route18A",
      "route18B/1",
      "route18C",
      "route18D",
      "route210",
      "route222",
      "route235",
      "route259",
      "route37",
      "route3D",
      "route42A",
      "route75",
      "route77A",
      "route77A (No Bata)",
      "route83",
      "routeKB12",
      "routeM-14",
      "routeRT-21",
      "routeS-121",
      "routeS-129",
      "routeS-131",
      "routeS-178",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-26",
      "routeSD-8",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "ekbalpur",
    "location": null,
    "routes": [
      "route12AD",
      "route12C/1",
      "route12C/1A",
      "route13",
      "route17",
      "route18A",
      "route18D",
      "route222",
      "route235",
      "route259",
      "route37",
      "route3D",
      "route42A",
      "route75",
      "route77A",
      "route77A (No Bata)",
      "route83",
      "routeM-14",
      "routeRT-21"
    ]
  },
  {
    "name": "fort william",
    "location": null,
    "routes": [
      "route12AD",
      "route12B (Shuttle)",
      "route12C",
      "route12C/1A",
      "route13",
      "route17",
      "route18A",
      "route18D",
      "route210",
      "route228",
      "route241",
      "route37",
      "route75",
      "route77A",
      "route77A (No Bata)",
      "route80A",
      "route83",
      "routeRT-21",
      "routeS-121",
      "routeS-123",
      "routeS-126",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routesd-24",
      "routeSD-26",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "dalhousie",
    "location": null,
    "routes": [
      "route12AD",
      "route12C",
      "route12C/1",
      "route12C/1A",
      "route12C/1B",
      "route12C/2",
      "route13",
      "route17",
      "route18A",
      "route18D",
      "route205",
      "route205A",
      "route208",
      "route212",
      "route214",
      "route217A",
      "route24A",
      "route24A/1",
      "route37",
      "route37A",
      "route39",
      "route41",
      "route41B",
      "route47/1",
      "route52",
      "route54",
      "route55",
      "route55A",
      "route57",
      "route59",
      "route73",
      "route75",
      "routeRT-1",
      "routeRT-10",
      "routeRT-11",
      "routeRT-11A",
      "routeRT-18",
      "routeRT-1A",
      "routeRT-2",
      "routeRT-21",
      "routeRT-26",
      "routeRT-27",
      "routeRT-27A",
      "routeRT-3",
      "routeRT-30",
      "routeRT-31",
      "routeRT-32",
      "routeRT-38",
      "routeRT-39",
      "routeRT-3A",
      "routeRT-6",
      "routeRT-6A",
      "routeRT-8",
      "routeS-107",
      "routeS-107/1",
      "routeS-108",
      "routeS-110",
      "routeS-111",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-121",
      "routeS-123",
      "routeS-124",
      "routeS-125",
      "routeS-126",
      "routeS-128",
      "routeS-129",
      "routeS-135",
      "routeS-139",
      "routeS-158",
      "routeS-161",
      "routeS-165",
      "routeS-166",
      "routeS-173",
      "routeS-175"
    ]
  },
  {
    "name": "kamal talkies",
    "location": null,
    "routes": [
      "route12B (Shuttle)",
      "route241",
      "route42B",
      "routeS-123",
      "routeS-161"
    ]
  },
  {
    "name": "pailan",
    "location": null,
    "routes": [
      "route12C",
      "route12C/1A",
      "route12C/1B",
      "route210",
      "route235",
      "route83",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-27",
      "routeSD-5",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "joka bridge",
    "location": null,
    "routes": [
      "route12C",
      "route12C/1A",
      "route12C/1B",
      "route210",
      "route235",
      "route75",
      "route83",
      "routeS-131",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-26",
      "routeSD-27",
      "routeSD-5",
      "routeSD-8",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "thakurpukur",
    "location": null,
    "routes": [
      "route12C",
      "route12C/1A",
      "route210",
      "route235",
      "route40B",
      "route75",
      "route83",
      "routeS-131",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-26",
      "routeSD-27",
      "routeSD-4",
      "routeSD-5",
      "routeSD-8",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "shilpara",
    "location": null,
    "routes": [
      "route12C",
      "route12C/1A",
      "route21",
      "route21/1",
      "route210",
      "route235",
      "route75",
      "route83",
      "routeRT-21",
      "routeS-131",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-26",
      "routeSD-27",
      "routeSD-4",
      "routeSD-5",
      "routeSD-8",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "sakher bazar",
    "location": null,
    "routes": [
      "route12C",
      "route12C/1A",
      "route21",
      "route21/1",
      "route210",
      "route222",
      "route235",
      "route75",
      "route83",
      "routeRT-21",
      "routeS-131",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-26",
      "routeSD-27",
      "routeSD-4",
      "routeSD-5",
      "routeSD-8",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "behala chowrasta",
    "location": null,
    "routes": [
      "route12C",
      "route12C/1",
      "route12C/1A",
      "route18A",
      "route18B/1",
      "route18C",
      "route18D",
      "route21/1",
      "route210",
      "route222",
      "route235",
      "route75",
      "route83",
      "routeRT-21",
      "routeS-121",
      "routeS-131",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-26",
      "routeSD-27",
      "routeSD-4",
      "routeSD-5",
      "routeSD-8",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "behala 14 no.",
    "location": null,
    "routes": [
      "route12C",
      "route12C/1",
      "route12C/1A",
      "route18A",
      "route18B/1",
      "route18C",
      "route18D",
      "route21/1",
      "route210",
      "route222",
      "route235",
      "route3D",
      "route75",
      "route83",
      "routeRT-21",
      "routeS-121",
      "routeS-131",
      "routeS-178",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-26",
      "routeSD-27",
      "routeSD-4",
      "routeSD-5",
      "routeSD-8",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "hide road",
    "location": null,
    "routes": [
      "route12C",
      "routeS-126"
    ]
  },
  {
    "name": "b.n.r. hospital",
    "location": null,
    "routes": [
      "route12C",
      "route227"
    ]
  },
  {
    "name": "shibrampur",
    "location": null,
    "routes": [
      "route12C/1",
      "route18A",
      "route18B/1"
    ]
  },
  {
    "name": "shakuntala park",
    "location": null,
    "routes": [
      "route12C/1",
      "route18A",
      "route18B/1"
    ]
  },
  {
    "name": "bakultala",
    "location": null,
    "routes": [
      "route12C/1",
      "route18A",
      "route18B/1",
      "route18C",
      "route18D",
      "route59",
      "route61",
      "route69",
      "route80",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-24"
    ]
  },
  {
    "name": "p.t.s. more",
    "location": null,
    "routes": [
      "route12C/1",
      "route210",
      "route222",
      "route227",
      "route228",
      "route230",
      "route235",
      "route260",
      "route77A",
      "route77A (No Bata)",
      "route80A",
      "routeRT-21",
      "routeRT-42",
      "routeS-121",
      "routeS-129",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routesd-24",
      "routeSD-26",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "rabindra sadan",
    "location": null,
    "routes": [
      "route12C/1",
      "route12C/1B",
      "route13A",
      "route205",
      "route208",
      "route21",
      "route21/1",
      "route212",
      "route222",
      "route227",
      "route230",
      "route234/1",
      "route235",
      "route260",
      "route37A",
      "route3B",
      "route3C/1",
      "route3C/2",
      "route3D",
      "route40A",
      "route40B",
      "route41",
      "route41B",
      "route47/1",
      "route47B",
      "route80B",
      "routeRT-1A",
      "routeRT-42",
      "routeS-101",
      "routeS-101/1",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-107",
      "routeS-107/1",
      "routeS-109",
      "routeS-111",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-124",
      "routeS-129",
      "routeS-135",
      "routeS-178",
      "routeBarasat - Santragachi",
      "routeBargachia - Sealdah Court",
      "routeDhulagarh - Unitech",
      "routeGadiara - Rajarhat",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "maidan",
    "location": null,
    "routes": [
      "route12C/1",
      "route12C/1B",
      "route13A",
      "route205",
      "route208",
      "route212",
      "route222",
      "route230",
      "route234/1",
      "route235",
      "route260",
      "route37A",
      "route3B",
      "route3C/1",
      "route3C/2",
      "route3D",
      "route40A",
      "route40B",
      "route41",
      "route41B",
      "route47/1",
      "route47B",
      "route80B",
      "routeRT-11A",
      "routeRT-1A",
      "routeRT-31",
      "routeRT-32",
      "routeS-101",
      "routeS-101/1",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-107",
      "routeS-107/1",
      "routeS-109",
      "routeS-111",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-124",
      "routeS-129",
      "routeS-135",
      "routeDhulagarh - Sealdah"
    ]
  },
  {
    "name": "park street",
    "location": null,
    "routes": [
      "route12C/1",
      "route12C/1B",
      "route13A",
      "route205",
      "route208",
      "route212",
      "route222",
      "route230",
      "route234/1",
      "route235",
      "route260",
      "route37A",
      "route3B",
      "route3C/1",
      "route3C/2",
      "route3D",
      "route40A",
      "route40B",
      "route41",
      "route41B",
      "route47/1",
      "route47B",
      "route80B",
      "routeRT-11A",
      "routeRT-1A",
      "routeRT-31",
      "routeRT-32",
      "routeS-101",
      "routeS-101/1",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-107",
      "routeS-107/1",
      "routeS-109",
      "routeS-111",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-124",
      "routeS-129",
      "routeS-135",
      "routeBargachia - Sealdah Court",
      "routeDhulagarh - Sealdah",
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "thakurpukur 3a",
    "location": null,
    "routes": [
      "route12C/1B"
    ]
  },
  {
    "name": "cancer hospital",
    "location": null,
    "routes": [
      "route12C/1B",
      "route40B"
    ]
  },
  {
    "name": "kalitala housing",
    "location": null,
    "routes": [
      "route12C/1B",
      "route40B",
      "routeS-117"
    ]
  },
  {
    "name": "kabardanga",
    "location": null,
    "routes": [
      "route12C/1B",
      "route40A",
      "route40B",
      "routeS-117"
    ]
  },
  {
    "name": "keorapukur",
    "location": null,
    "routes": [
      "route12C/1B",
      "route40A",
      "route40B",
      "routeS-117"
    ]
  },
  {
    "name": "haridevpur",
    "location": null,
    "routes": [
      "route12C/1B",
      "route40A",
      "route40B",
      "routeS-117"
    ]
  },
  {
    "name": "tollygunge",
    "location": null,
    "routes": [
      "route12C/1B",
      "route205",
      "route205A",
      "route208",
      "route228",
      "route40B",
      "route41",
      "route41B",
      "route47/1",
      "route80A",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeSD-5"
    ]
  },
  {
    "name": "rabindra sarovar",
    "location": null,
    "routes": [
      "route12C/1B",
      "route205",
      "route205A",
      "route208",
      "route21",
      "route21/1",
      "route228",
      "route234/1",
      "route40A",
      "route40B",
      "route41",
      "route41B",
      "route42B",
      "route45B",
      "route47/1",
      "route47B",
      "route80A",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-135",
      "routeSD-4"
    ]
  },
  {
    "name": "kalighat",
    "location": null,
    "routes": [
      "route12C/1B",
      "route13A",
      "route13C",
      "route17",
      "route18B/1",
      "route18C",
      "route204/1",
      "route205",
      "route208",
      "route21",
      "route21/1",
      "route228",
      "route234/1",
      "route37A",
      "route3B",
      "route3C/1",
      "route40A",
      "route40B",
      "route41",
      "route41B",
      "route42A",
      "route45B",
      "route47/1",
      "route47B",
      "route80A",
      "route80B",
      "routeS-107/1",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-131",
      "routeS-135",
      "routeS-178",
      "routeSD-8"
    ]
  },
  {
    "name": "hazra more",
    "location": null,
    "routes": [
      "route12C/1B",
      "route13A",
      "route13C",
      "route17",
      "route18B/1",
      "route18C",
      "route204/1",
      "route205",
      "route208",
      "route21",
      "route21/1",
      "route228",
      "route234/1",
      "route37A",
      "route40A",
      "route40B",
      "route41",
      "route41B",
      "route42A",
      "route45B",
      "route47/1",
      "route47B",
      "route80A",
      "route80B",
      "routeS-107/1",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-131",
      "routeS-135",
      "routeS-178",
      "routeSD-16",
      "routeSD-8"
    ]
  },
  {
    "name": "bhowanipore",
    "location": null,
    "routes": [
      "route12C/1B",
      "route13A",
      "route205",
      "route208",
      "route21",
      "route21/1",
      "route234/1",
      "route37A",
      "route3B",
      "route3C/1",
      "route40A",
      "route40B",
      "route41",
      "route41B",
      "route47/1",
      "route47B",
      "route80B",
      "routeS-107/1",
      "routeS-112",
      "routeS-113",
      "routeS-117",
      "routeS-135",
      "routeS-178",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "aquatica",
    "location": null,
    "routes": [
      "route12C/2"
    ]
  },
  {
    "name": "thakdari",
    "location": null,
    "routes": [
      "route12C/2"
    ]
  },
  {
    "name": "kestopur",
    "location": null,
    "routes": [
      "route12C/2",
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route215",
      "route217",
      "route217A",
      "route217B",
      "route237",
      "route253",
      "route30C",
      "route30C/1",
      "route44",
      "route44/1",
      "route45",
      "route45A",
      "route46",
      "route46B",
      "route79D",
      "route91C",
      "routeDN16/1",
      "routeDN17",
      "routeDN21",
      "routeKB21",
      "routeL238",
      "routeS-151",
      "routeS-152",
      "routeS-172",
      "routeS-175",
      "routeS-184",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBashirhat - Gadiara",
      "routeBerachampa - Saltlake Karunamoyee",
      "routeBoyra - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "dumdum park",
    "location": null,
    "routes": [
      "route12C/2",
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route215",
      "route217",
      "route217A",
      "route217B",
      "route237",
      "route253",
      "route30C",
      "route30C/1",
      "route44",
      "route44/1",
      "route45",
      "route45A",
      "route46",
      "route46B",
      "route79D",
      "route91C",
      "routeKB21",
      "routeL238",
      "routeS-151",
      "routeS-152",
      "routeS-172",
      "routeS-175",
      "routeS-184",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "laketown",
    "location": null,
    "routes": [
      "route12C/2",
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route215",
      "route215/1",
      "route217",
      "route217A",
      "route217B",
      "route221",
      "route223",
      "route237",
      "route253",
      "route30C",
      "route30C/1",
      "route44",
      "route44/1",
      "route45",
      "route45A",
      "route46",
      "route46B",
      "route47B",
      "route79D",
      "route91C",
      "routeDN-8",
      "routeDN16/1",
      "routeDN17",
      "routeKB16",
      "routeKB21",
      "routeL238",
      "routeM10 (AC Corporate)",
      "routeS-151",
      "routeS-152",
      "routeS-172",
      "routeS-175",
      "routeS-184",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBashirhat - Gadiara",
      "routeBerachampa - Saltlake Karunamoyee",
      "routeBoyra - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "sreebhumi",
    "location": null,
    "routes": [
      "route12C/2",
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route215",
      "route217",
      "route217A",
      "route217B",
      "route221",
      "route223",
      "route237",
      "route253",
      "route30C/1",
      "route44",
      "route44/1",
      "route45",
      "route45A",
      "route46",
      "route46B",
      "route79D",
      "route91C",
      "routeDN-8",
      "routeDN17",
      "routeL238",
      "routeS-151",
      "routeS-152",
      "routeS-172",
      "routeS-175",
      "routeS-184",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia"
    ]
  },
  {
    "name": "ultadanga",
    "location": null,
    "routes": [
      "route12C/2",
      "route201",
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route215",
      "route215A",
      "route215A/1",
      "route217",
      "route217A",
      "route217B",
      "route221",
      "route223",
      "route237",
      "route253",
      "route260",
      "route30C/1",
      "route32A",
      "route44",
      "route44/1",
      "route44A",
      "route45",
      "route45A",
      "route46",
      "route46B",
      "route79D",
      "route91C",
      "routeDN-8",
      "routeDN21",
      "routeKB22",
      "routeL238",
      "routeM10 (AC Corporate)",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-29",
      "routeRT-5",
      "routeS-151",
      "routeS-152",
      "routeS-172",
      "routeS-175",
      "routeS-184",
      "routeBagnan - Eco Space",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBashirhat - Gadiara",
      "routeBerachampa - Saltlake Karunamoyee",
      "routeBoyra - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "khanna cinema",
    "location": null,
    "routes": [
      "route12C/2",
      "route201",
      "route202",
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route215A",
      "route215A/1",
      "route217",
      "route217A",
      "route227",
      "route230",
      "route234",
      "route240/1",
      "route260",
      "route30B",
      "route30C/1",
      "route30D",
      "route32A",
      "route34C",
      "route44A",
      "route91C",
      "routeL238",
      "routeRT-20",
      "routeRT-29",
      "routeRT-5",
      "routeS-172",
      "routeS-175"
    ]
  },
  {
    "name": "maniktala",
    "location": null,
    "routes": [
      "route12C/2",
      "route202",
      "route215",
      "route215A/1",
      "route217",
      "route227",
      "route230",
      "route234",
      "route237",
      "route240/1",
      "route260",
      "route30B",
      "route30C/1",
      "route30D",
      "route34C",
      "route3C/1",
      "route3D",
      "route44A",
      "route46",
      "route46B",
      "route79D",
      "routeK4",
      "routeKB21",
      "routeL238",
      "routeRT-20A",
      "routeS-151",
      "routeS-152",
      "routeS-172",
      "routeS-184",
      "routeMalancha - Kolkata Station"
    ]
  },
  {
    "name": "sealdah station",
    "location": null,
    "routes": [
      "route12C/2",
      "route13",
      "route202",
      "route204/1",
      "route21",
      "route21/1",
      "route213",
      "route213A",
      "route217",
      "route217B",
      "route221",
      "route223",
      "route227",
      "route230",
      "route234",
      "route235",
      "route239 (White Board)",
      "route239 (Yellow Board)",
      "route24",
      "route240",
      "route240/1",
      "route24A",
      "route24B",
      "route253",
      "route260",
      "route28",
      "route30C/1",
      "route30D",
      "route34C",
      "route39A/2",
      "route44",
      "route44/1",
      "route44A",
      "route45",
      "route45A",
      "route45B",
      "route46B",
      "route47/1",
      "route71",
      "route72",
      "route79D",
      "routeRT-25",
      "routeS-165",
      "routeS-166",
      "routeS-167",
      "routeS-173",
      "routeS-178",
      "routeS-186",
      "routesd-24",
      "routeBargachia - Sealdah Court",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "college street",
    "location": null,
    "routes": [
      "route12C/2",
      "route13",
      "route215",
      "route217A",
      "route219",
      "route234/1",
      "route24",
      "route240",
      "route24B",
      "route28",
      "route34B",
      "route39A/2",
      "route3C/2",
      "route44",
      "route44/1",
      "route44A",
      "route46",
      "route47/1",
      "route71",
      "route72",
      "route78/1",
      "routeRT-25",
      "routeS-158",
      "routeS-165",
      "routeS-173",
      "routeS-186"
    ]
  },
  {
    "name": "medical college",
    "location": null,
    "routes": [
      "route12C/2",
      "route13",
      "route217A",
      "route234/1",
      "route34B",
      "route3B",
      "route46",
      "route47/1",
      "route78/1",
      "routeS-158",
      "routeS-165",
      "routeS-173"
    ]
  },
  {
    "name": "bowbazar",
    "location": null,
    "routes": [
      "route12C/2",
      "route13",
      "route217A",
      "route234/1",
      "route34B",
      "route46",
      "route47/1",
      "route78/1",
      "routeS-158",
      "routeS-165",
      "routeS-173"
    ]
  },
  {
    "name": "central metro",
    "location": null,
    "routes": [
      "route12C/2",
      "route13",
      "route214",
      "route214A",
      "route217A",
      "route222",
      "route234/1",
      "route237",
      "route242",
      "route30A",
      "route30C",
      "route43",
      "route47/1",
      "route47B",
      "route78",
      "routeS-139",
      "routeS-151",
      "routeS-152",
      "routeS-158",
      "routeS-159",
      "routeS-161",
      "routeS-163",
      "routeS-165",
      "routeS-173",
      "routeS-175",
      "routeS-184"
    ]
  },
  {
    "name": "parnasree",
    "location": null,
    "routes": [
      "route13",
      "routeS-129"
    ]
  },
  {
    "name": "s.m.nagar",
    "location": null,
    "routes": [
      "route13A"
    ]
  },
  {
    "name": "b.b.d. bag",
    "location": null,
    "routes": [
      "route13A",
      "routeS-101",
      "routeS-101/1",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-109",
      "routeS-151",
      "routeS-152",
      "routeS-159",
      "routeS-163",
      "routeS-167",
      "routeS-184"
    ]
  },
  {
    "name": "sarkarpool",
    "location": null,
    "routes": [
      "route13A",
      "route13C",
      "route259",
      "route77A",
      "route77A (No Bata)",
      "routeM-14",
      "routeS-126",
      "routeSD-30"
    ]
  },
  {
    "name": "alipore court",
    "location": null,
    "routes": [
      "route13A",
      "route13C",
      "route17",
      "route18B/1",
      "route18C",
      "route204/1",
      "route42A",
      "routeS-121",
      "routeS-129",
      "routeS-131",
      "routeS-178",
      "routeSD-16",
      "routeSD-8"
    ]
  },
  {
    "name": "old dakghar",
    "location": null,
    "routes": [
      "route13C"
    ]
  },
  {
    "name": "baghajatin",
    "location": null,
    "routes": [
      "route13C",
      "route218",
      "route45",
      "route45A",
      "route45B",
      "route80B",
      "routeKB17",
      "routeS-101",
      "routeS-102",
      "routeS-135"
    ]
  },
  {
    "name": "mollargate",
    "location": null,
    "routes": [
      "route13C",
      "route259",
      "route77A",
      "route77A (No Bata)",
      "routeM-14",
      "routeS-126",
      "routeSD-30"
    ]
  },
  {
    "name": "rampur quarter",
    "location": null,
    "routes": [
      "route13C",
      "route259",
      "route77A",
      "route77A (No Bata)",
      "routeM-14",
      "routeS-126",
      "routeSD-30"
    ]
  },
  {
    "name": "s.m. nagar",
    "location": null,
    "routes": [
      "route13C",
      "route259",
      "route77A",
      "route77A (No Bata)",
      "routeM-14",
      "routeS-126",
      "routeSD-30"
    ]
  },
  {
    "name": "deshapriya park",
    "location": null,
    "routes": [
      "route13C",
      "route18B/1",
      "route18C",
      "route1B",
      "route205A",
      "route212",
      "route221",
      "route234",
      "route37A",
      "route3C/2",
      "route42B",
      "route80B",
      "routeKB15",
      "routeM10 (AC Corporate)",
      "routeS-107/1",
      "routeS-111",
      "routeS-124",
      "routeS-131",
      "routeSD-4",
      "routeSD-8",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "golpark",
    "location": null,
    "routes": [
      "route13C",
      "route1B",
      "route218",
      "route221",
      "route223",
      "route234",
      "route240",
      "route37A",
      "route45",
      "route45A",
      "route80B",
      "routeS-101",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-110",
      "routeS-124",
      "routeSD-16",
      "routeSD-4"
    ]
  },
  {
    "name": "dhakuria",
    "location": null,
    "routes": [
      "route13C",
      "route1B",
      "route218",
      "route223",
      "route234",
      "route240",
      "route37",
      "route37A",
      "route45",
      "route45A",
      "route80B",
      "routeKB17",
      "routeS-101",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-110",
      "routeS-124",
      "routeSD-16",
      "routeSD-4"
    ]
  },
  {
    "name": "jadavpur 8b",
    "location": null,
    "routes": [
      "route13C",
      "route1B",
      "route218",
      "route45",
      "route45A",
      "route45B",
      "route80B",
      "routeKB17",
      "routeS-101",
      "routeS-102",
      "routeS-106",
      "routeS-135",
      "routeSD-16",
      "routeSD-4"
    ]
  },
  {
    "name": "chetla",
    "location": null,
    "routes": [
      "route17"
    ]
  },
  {
    "name": "greenfield city",
    "location": null,
    "routes": [
      "route18A"
    ]
  },
  {
    "name": "dakghar (bagmari)",
    "location": null,
    "routes": [
      "route18B/1"
    ]
  },
  {
    "name": "china mandir",
    "location": null,
    "routes": [
      "route18B/1"
    ]
  },
  {
    "name": "moynagarh",
    "location": null,
    "routes": [
      "route18B/1"
    ]
  },
  {
    "name": "sarada park",
    "location": null,
    "routes": [
      "route18B/1"
    ]
  },
  {
    "name": "ballygunge station",
    "location": null,
    "routes": [
      "route18B/1",
      "route18C",
      "route212",
      "route240/1",
      "route3C/1",
      "route3C/2",
      "route42B",
      "routeM10 (AC Corporate)",
      "routeS-107",
      "routeS-107/1",
      "routeS-108",
      "routeS-109",
      "routeS-131",
      "routeSD-8",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "kasba ps",
    "location": null,
    "routes": [
      "route18B/1",
      "route18C",
      "route240/1",
      "route42B",
      "routeKB15",
      "routeS-107",
      "routeS-107/1",
      "routeS-131"
    ]
  },
  {
    "name": "bosepukur",
    "location": null,
    "routes": [
      "route18B/1",
      "route18C",
      "route240/1",
      "route42B",
      "routeKB15",
      "routeS-107",
      "routeS-107/1",
      "routeS-131",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "acropolis mall",
    "location": null,
    "routes": [
      "route18B/1",
      "route18C",
      "route240/1",
      "route42B",
      "route47B",
      "routeKB15",
      "routeM10 (AC Corporate)",
      "routeS-107",
      "routeS-107/1",
      "routeS-131",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "ruby hospital",
    "location": null,
    "routes": [
      "route18B/1",
      "route18C",
      "route240/1",
      "route24A/1",
      "route42B",
      "route47B",
      "routeKB15",
      "routeM10 (AC Corporate)",
      "routeS-101/1",
      "routeS-107",
      "routeS-107/1",
      "routeS-131",
      "routeAmta - Mukundapur",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeGaria - Ultodanga",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "kestor more",
    "location": null,
    "routes": [
      "route18C"
    ]
  },
  {
    "name": "anandapur",
    "location": null,
    "routes": [
      "route18C",
      "route3C/1",
      "route3C/2",
      "route42B",
      "routeKB15",
      "routeS-107",
      "routeS-107/1"
    ]
  },
  {
    "name": "sarsuna",
    "location": null,
    "routes": [
      "route18C",
      "route18D"
    ]
  },
  {
    "name": "suryasen nagar",
    "location": null,
    "routes": [
      "route18D"
    ]
  },
  {
    "name": "tollygunge phari",
    "location": null,
    "routes": [
      "route1A",
      "route1B",
      "route21",
      "route21/1",
      "route234/1",
      "route37",
      "route40A",
      "route42B",
      "route45B",
      "route47B",
      "routeS-135",
      "routeSD-4"
    ]
  },
  {
    "name": "jadavpur ps",
    "location": null,
    "routes": [
      "route1A",
      "route223",
      "route234",
      "route240",
      "route37",
      "route47B",
      "routeKB17",
      "routeS-110",
      "routeS-124"
    ]
  },
  {
    "name": "8b",
    "location": null,
    "routes": [
      "route1A"
    ]
  },
  {
    "name": "santoshpur",
    "location": null,
    "routes": [
      "route1A",
      "route1B",
      "routeMM3",
      "routeMM5",
      "routeS-106",
      "routeSD-16"
    ]
  },
  {
    "name": "ajoynagar",
    "location": null,
    "routes": [
      "route1A",
      "route1B",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "nayabad",
    "location": null,
    "routes": [
      "route1B",
      "routeS-106"
    ]
  },
  {
    "name": "garia station",
    "location": null,
    "routes": [
      "route1B",
      "route240/1",
      "route45A",
      "route45B",
      "routeS-101/1",
      "routeS-112",
      "routeS-124",
      "routeGaria Station - Bagbazar",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara"
    ]
  },
  {
    "name": "nimta",
    "location": null,
    "routes": [
      "route201"
    ]
  },
  {
    "name": "mahisbathan",
    "location": null,
    "routes": [
      "route201",
      "routeDN47",
      "routeBarasat - Santragachi",
      "routeDhulagarh - Newtown",
      "routeRajchandrapur - Saltlake Karunamoyee",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "culture more",
    "location": null,
    "routes": [
      "route201",
      "routeDN-2"
    ]
  },
  {
    "name": "badamtala",
    "location": null,
    "routes": [
      "route201",
      "routeDN-2"
    ]
  },
  {
    "name": "belghoria station",
    "location": null,
    "routes": [
      "route201",
      "routeDN-2"
    ]
  },
  {
    "name": "rathtala more",
    "location": null,
    "routes": [
      "route201",
      "route214",
      "route214A",
      "route230",
      "route234",
      "route234/1",
      "route56",
      "route78",
      "route78/1",
      "route81/1",
      "routeDN-2",
      "routeS-180",
      "routeS-185"
    ]
  },
  {
    "name": "dunlop more",
    "location": null,
    "routes": [
      "route201",
      "route214",
      "route214A",
      "route222",
      "route230",
      "route234",
      "route234/1",
      "route32A",
      "route56",
      "route78",
      "route78/1",
      "route79",
      "route81/1",
      "routeDN-2",
      "routeS-159",
      "routeS-180",
      "routeS-185"
    ]
  },
  {
    "name": "bonhooghly tobin road",
    "location": null,
    "routes": [
      "route201"
    ]
  },
  {
    "name": "sinthee more",
    "location": null,
    "routes": [
      "route201",
      "route214",
      "route214A",
      "route222",
      "route230",
      "route234",
      "route234/1",
      "route32A",
      "route34B",
      "route34C",
      "route78",
      "route78/1",
      "routeS-158",
      "routeS-159",
      "routeS-180",
      "routeS-185",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "chiria more",
    "location": null,
    "routes": [
      "route201",
      "route202",
      "route214",
      "route214A",
      "route222",
      "route230",
      "route234",
      "route234/1",
      "route30A",
      "route32A",
      "route34B",
      "route34C",
      "route78",
      "route78/1",
      "routeDN46",
      "routeK4",
      "routeS-158",
      "routeS-159",
      "routeS-168",
      "routeS-180",
      "routeS-185",
      "routeBagnan - Eco Space",
      "routeBarrackpore Station - Howrah Station",
      "routeMadhyamgram Chowmatha - Howrah",
      "routeNaktala (garia) - Dakshineshwar",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "shyambazar",
    "location": null,
    "routes": [
      "route201",
      "route202",
      "route211A",
      "route214",
      "route214A",
      "route215/1",
      "route219",
      "route219/1",
      "route222",
      "route227",
      "route230",
      "route234",
      "route234/1",
      "route240",
      "route240/1",
      "route30A",
      "route30B",
      "route30C",
      "route30D",
      "route32A",
      "route34B",
      "route34C",
      "route47B",
      "route78",
      "route78/1",
      "route79B",
      "route91",
      "route91A",
      "route91B",
      "route91C",
      "route93",
      "routeDN18",
      "routeDN46",
      "routeK1",
      "routeK4",
      "routeKB16",
      "routeKB22",
      "routeRT-7",
      "routeS-139",
      "routeS-158",
      "routeS-159",
      "routeS-161",
      "routeS-163",
      "routeS-168",
      "routeS-176",
      "routeS-180",
      "routeS-185",
      "routeS-189",
      "routeBagnan - Eco Space",
      "routeGaria Station - Bagbazar",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeMadhyamgram Chowmatha - Howrah",
      "routeMalancha - Kolkata Station",
      "routeNaktala (garia) - Dakshineshwar",
      "routePolerhat - Shyambazar",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "saltlake p.n.b.",
    "location": null,
    "routes": [
      "route201",
      "route215A",
      "route215A/1",
      "route260",
      "route32A",
      "route44A",
      "routeDN-8",
      "routeRT-29",
      "routeRT-5"
    ]
  },
  {
    "name": "saltlake 4no. tank",
    "location": null,
    "routes": [
      "route201",
      "route215A",
      "routeDN-8",
      "routeRT-29",
      "routeRT-5"
    ]
  },
  {
    "name": "baisakhi more",
    "location": null,
    "routes": [
      "route201",
      "route215A",
      "routeDN-8",
      "routeRT-29",
      "routeRT-5"
    ]
  },
  {
    "name": "purta bhawan",
    "location": null,
    "routes": [
      "route201",
      "routeDN-8",
      "routeRT-29",
      "routeRT-5"
    ]
  },
  {
    "name": "karunamoyee",
    "location": null,
    "routes": [
      "route201",
      "route215A",
      "route215A/1",
      "route239 (White Board)",
      "route260",
      "route44A",
      "routeDN-8",
      "routeDN46",
      "routeDN47",
      "routeK1",
      "routeKB16",
      "routeKB17",
      "routeKB22",
      "routeRT-29",
      "routeRT-5",
      "routeS-167",
      "routeS-173",
      "routeS-184",
      "routeBagnan - Eco Space",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "wipro more",
    "location": null,
    "routes": [
      "route201",
      "route215A",
      "route215A/1",
      "route260",
      "route32A",
      "route44A",
      "routeDN-8",
      "routeRT-29",
      "routeRT-5",
      "routeS-184",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "s.d.f. more",
    "location": null,
    "routes": [
      "route201",
      "route215A",
      "route215A/1",
      "route239 (Yellow Board)",
      "route32A",
      "routeDN-8",
      "routeRT-29",
      "routeRT-42",
      "routeRT-5",
      "routeS-184"
    ]
  },
  {
    "name": "college more",
    "location": null,
    "routes": [
      "route201",
      "route215A",
      "route215A/1",
      "route239 (Yellow Board)",
      "route260",
      "route32A",
      "route44A",
      "routeDN-8",
      "routeDN47",
      "routeK1",
      "routeKB16",
      "routeKB22",
      "routeRT-29",
      "routeRT-42",
      "routeRT-5",
      "routeS-184",
      "routeAmta - Newtown",
      "routeBagnan - Eco Space",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeDhulagarh - Newtown",
      "routeGadiara - Rajarhat",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "nagerbazar",
    "location": null,
    "routes": [
      "route202",
      "route219",
      "route219/1",
      "route221",
      "route3C/1",
      "route3C/2",
      "routeDN18",
      "routeS-168"
    ]
  },
  {
    "name": "science city",
    "location": null,
    "routes": [
      "route202",
      "route213",
      "route213A",
      "route24A/1",
      "routeDN16/1",
      "routeM10 (AC Corporate)",
      "routeRT-42",
      "routeS-101/1",
      "routeS-186",
      "routesd-24",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Unitech",
      "routeGadiara - Rajarhat",
      "routeGaria - Ultodanga",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing",
      "routeMalancha - Kolkata Station",
      "routeMatapara - Newtown",
      "routeNaktala (garia) - Dakshineshwar",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "dumdum station",
    "location": null,
    "routes": [
      "route202",
      "routeS-168"
    ]
  },
  {
    "name": "moulali more",
    "location": null,
    "routes": [
      "route202",
      "route204/1",
      "route205A",
      "route21",
      "route21/1",
      "route213",
      "route213A",
      "route217",
      "route217B",
      "route218",
      "route221",
      "route223",
      "route227",
      "route230",
      "route234",
      "route235",
      "route239 (White Board)",
      "route239 (Yellow Board)",
      "route240",
      "route240/1",
      "route24A",
      "route24A/1",
      "route253",
      "route260",
      "route30C/1",
      "route30D",
      "route34C",
      "route39",
      "route39A/2",
      "route45",
      "route45A",
      "route45B",
      "route46B",
      "route72",
      "route79D",
      "routeRT-27",
      "routeRT-27A",
      "routeS-108",
      "routeS-110",
      "routeS-125",
      "routeS-128",
      "routeS-166",
      "routeS-167",
      "routeS-178",
      "routeS-186",
      "routesd-24"
    ]
  },
  {
    "name": "mallick bazar",
    "location": null,
    "routes": [
      "route202",
      "route205A",
      "route21",
      "route21/1",
      "route221",
      "route223",
      "route227",
      "route230",
      "route234",
      "route240/1",
      "route39A/2",
      "route45B",
      "routeS-108",
      "routeS-125",
      "routeS-178"
    ]
  },
  {
    "name": "park circus",
    "location": null,
    "routes": [
      "route202",
      "route205A",
      "route218",
      "route223",
      "route240",
      "route240/1",
      "route39A/2",
      "route45",
      "route45A",
      "route72",
      "routeK4",
      "routeKB17",
      "routeRT-27",
      "routeRT-42",
      "routeS-101/1",
      "routeS-108",
      "routeS-110",
      "routeS-125",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeDhulagarh - Unitech",
      "routeGadiara - Rajarhat",
      "routeMalancha - Kolkata Station",
      "routeRajabazar - Hasnabad",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "4 no. bridge",
    "location": null,
    "routes": [
      "route202",
      "route204/1",
      "route213A",
      "route24A/1",
      "route39",
      "routeKB21",
      "routeRT-42",
      "routeS-128",
      "routeS-186",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeDhulagarh - Newtown",
      "routeGadiara - Rajarhat",
      "routeKadamtala - Newtown",
      "routeMalancha - Kolkata Station",
      "routeMatapara - Newtown",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "topsia more",
    "location": null,
    "routes": [
      "route202",
      "route213",
      "route213A",
      "route24A/1",
      "routeRT-42",
      "routeS-101/1",
      "routeS-186",
      "routesd-24"
    ]
  },
  {
    "name": "chetla park",
    "location": null,
    "routes": [
      "route204/1"
    ]
  },
  {
    "name": "sishu mangal",
    "location": null,
    "routes": [
      "route204/1",
      "route212",
      "route221",
      "route234",
      "route42A",
      "route45B",
      "routeS-107",
      "routeS-111",
      "routeS-124",
      "routeSD-16"
    ]
  },
  {
    "name": "garcha",
    "location": null,
    "routes": [
      "route204/1"
    ]
  },
  {
    "name": "ballygunge phari",
    "location": null,
    "routes": [
      "route204/1",
      "route205A",
      "route218",
      "route223",
      "route240",
      "route240/1",
      "route42A",
      "route45",
      "route45A",
      "routeKB17",
      "routeS-101",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-107",
      "routeS-108",
      "routeS-109",
      "routeS-110",
      "routeSD-16",
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "broad street",
    "location": null,
    "routes": [
      "route204/1"
    ]
  },
  {
    "name": "c.i.t. road",
    "location": null,
    "routes": [
      "route204/1",
      "route213A",
      "route240",
      "route24A/1",
      "route39",
      "route45",
      "route45A",
      "route72",
      "routeKB12",
      "routeKB17",
      "routeRT-27",
      "routeRT-27A",
      "routeS-110",
      "routeS-128",
      "routeS-186",
      "routeMalancha - Kolkata Station",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "chittaranjan hospital",
    "location": null,
    "routes": [
      "route204/1",
      "route213A",
      "route240",
      "route24A/1",
      "route39",
      "route45",
      "route45A",
      "route72",
      "routeRT-27",
      "routeRT-27A",
      "routeS-110",
      "routeS-128",
      "routeS-186",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "bansdroni",
    "location": null,
    "routes": [
      "route205",
      "route205A",
      "route228",
      "route80A",
      "routeS-112",
      "routeS-113",
      "routeSD-5"
    ]
  },
  {
    "name": "netaji nagar",
    "location": null,
    "routes": [
      "route205",
      "route205A",
      "route228",
      "route41",
      "route41B",
      "route80A",
      "routeS-112",
      "routeS-113",
      "routeSD-5"
    ]
  },
  {
    "name": "ranikuthi",
    "location": null,
    "routes": [
      "route205",
      "route205A",
      "route228",
      "route41",
      "route41B",
      "route80A",
      "routeS-112",
      "routeS-113",
      "routeSD-5"
    ]
  },
  {
    "name": "malancha cinema",
    "location": null,
    "routes": [
      "route205",
      "route205A",
      "route228",
      "route41",
      "route41B",
      "route80A",
      "routeS-112",
      "routeS-113",
      "routeSD-5"
    ]
  },
  {
    "name": "quest mall",
    "location": null,
    "routes": [
      "route205A",
      "route218",
      "route223",
      "route240",
      "route45",
      "route45A",
      "routeS-108",
      "routeS-110"
    ]
  },
  {
    "name": "chandni market",
    "location": null,
    "routes": [
      "route205A",
      "route213",
      "route214A",
      "route217",
      "route217B",
      "route218",
      "route222",
      "route230",
      "route234/1",
      "route235",
      "route237",
      "route239 (White Board)",
      "route239 (Yellow Board)",
      "route242",
      "route24A",
      "route24A/1",
      "route253",
      "route260",
      "route30A",
      "route30B",
      "route30C",
      "route30C/1",
      "route30D",
      "route34B",
      "route34C",
      "route39",
      "route3B",
      "route43",
      "route46",
      "route46B",
      "route47B",
      "route78",
      "route78/1",
      "route79D",
      "routeRT-27",
      "routeRT-27A",
      "routeS-108",
      "routeS-110",
      "routeS-125",
      "routeS-128",
      "routeS-166",
      "routeS-167",
      "routesd-24",
      "routeDhulagarh - Sealdah"
    ]
  },
  {
    "name": "kudghat",
    "location": null,
    "routes": [
      "route208"
    ]
  },
  {
    "name": "barisha",
    "location": null,
    "routes": [
      "route21",
      "route21/1"
    ]
  },
  {
    "name": "m.l.gupta road",
    "location": null,
    "routes": [
      "route21"
    ]
  },
  {
    "name": "muchipara",
    "location": null,
    "routes": [
      "route21"
    ]
  },
  {
    "name": "siriti more",
    "location": null,
    "routes": [
      "route21",
      "route40A"
    ]
  },
  {
    "name": "n.s.h.m. campus",
    "location": null,
    "routes": [
      "route21",
      "route40A"
    ]
  },
  {
    "name": "mahabirtala",
    "location": null,
    "routes": [
      "route21",
      "route21/1",
      "route37",
      "route40A",
      "route42B",
      "routeSD-4",
      "routeSD-5"
    ]
  },
  {
    "name": "minto park",
    "location": null,
    "routes": [
      "route21",
      "route21/1",
      "route212",
      "route221",
      "route227",
      "route230",
      "route234",
      "route3C/2",
      "route45B",
      "routeKB12",
      "routeKB15",
      "routeRT-1A",
      "routeRT-42",
      "routeS-101",
      "routeS-101/1",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-107",
      "routeS-109",
      "routeS-111",
      "routeS-124",
      "routeS-178",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Unitech",
      "routeGadiara - Rajarhat",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "beck bagan",
    "location": null,
    "routes": [
      "route21",
      "route21/1",
      "route221",
      "route227",
      "route230",
      "route234",
      "route45B",
      "routeRT-42",
      "routeS-101",
      "routeS-101/1",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-109",
      "routeS-178",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Unitech",
      "routeGaria Station - Bagbazar",
      "routeMatapara - Newtown",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "new alipore",
    "location": null,
    "routes": [
      "route21/1",
      "route37",
      "route3B",
      "route42B",
      "routeSD-4",
      "routeSD-5"
    ]
  },
  {
    "name": "raichak",
    "location": null,
    "routes": [
      "route210"
    ]
  },
  {
    "name": "raichak more",
    "location": null,
    "routes": [
      "route210",
      "routeSD-11",
      "routeSD-11/1"
    ]
  },
  {
    "name": "sarisha more",
    "location": null,
    "routes": [
      "route210",
      "routeM-15",
      "routeM-16",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "dostipur",
    "location": null,
    "routes": [
      "route210",
      "route83",
      "routeSD-14",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-27",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "shirakole",
    "location": null,
    "routes": [
      "route210",
      "route83",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-27",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "amtala",
    "location": null,
    "routes": [
      "route210",
      "route235",
      "route83",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-27",
      "routeSD-29",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "bishnupur",
    "location": null,
    "routes": [
      "route210",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route235",
      "route83",
      "route91",
      "route91A",
      "route91B",
      "route91C",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-27",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "khariberia",
    "location": null,
    "routes": [
      "route210",
      "route235",
      "route83",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-27",
      "routeSD-5",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "bhasha 14no.",
    "location": null,
    "routes": [
      "route210",
      "route235",
      "route83",
      "routeSD-14",
      "routeSD-16",
      "routeSD-18",
      "routeSD-19",
      "routeSD-22/1",
      "routeSD-27",
      "routeSD-5",
      "routeSD-82",
      "routeSD-9"
    ]
  },
  {
    "name": "ahiritola",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route215A",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-29",
      "routeRT-5",
      "routeRT-7",
      "routeS-176",
      "routeS-180",
      "routeS-185",
      "routeS-189"
    ]
  },
  {
    "name": "kharibari",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route93",
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "b.k.paul more",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route215A",
      "routeRT-20",
      "routeRT-29",
      "routeRT-5",
      "routeRT-7",
      "routeS-176",
      "routeS-180",
      "routeS-185",
      "routeS-189"
    ]
  },
  {
    "name": "sovabazar",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route214",
      "route214A",
      "route215/1",
      "route215A",
      "route219/1",
      "route222",
      "route242",
      "route30A",
      "route30C",
      "route43",
      "route47B",
      "route78",
      "routeRT-20",
      "routeRT-29",
      "routeRT-5",
      "routeRT-7",
      "routeS-139",
      "routeS-159",
      "routeS-161",
      "routeS-163",
      "routeS-168",
      "routeS-175",
      "routeS-176",
      "routeS-180",
      "routeS-185",
      "routeS-189",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "hatibagan",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route215A",
      "route217A",
      "route219",
      "route234/1",
      "route240",
      "route34B",
      "route3C/2",
      "route78/1",
      "routeRT-20",
      "routeRT-29",
      "routeRT-5",
      "routeS-158",
      "routeS-175"
    ]
  },
  {
    "name": "baguiati",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route215",
      "route217",
      "route217A",
      "route217B",
      "route237",
      "route253",
      "route30C",
      "route30C/1",
      "route44",
      "route44/1",
      "route45",
      "route45A",
      "route46",
      "route46B",
      "route79D",
      "route91C",
      "routeDN16/1",
      "routeDN17",
      "routeDN21",
      "routeKB21",
      "routeL238",
      "routeM10 (AC Corporate)",
      "routeS-151",
      "routeS-152",
      "routeS-172",
      "routeS-175",
      "routeS-184",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBashirhat - Gadiara",
      "routeBerachampa - Saltlake Karunamoyee",
      "routeBoyra - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "lokenath mandir",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route215",
      "route217B",
      "route46B",
      "routeMM3",
      "routeS-151",
      "routeBerachampa - Saltlake Karunamoyee",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "chinar park",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route215",
      "route217B",
      "route46B",
      "route91B",
      "route91C",
      "routeDN-2/1",
      "routeDN47",
      "routeS-151",
      "routeS-184",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeBarasat - Santragachi",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBerachampa - Saltlake Karunamoyee",
      "routeDeulti - Saltlake Karunamoyee",
      "routePolerhat - Shyambazar",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "salua bazar",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route217B",
      "route91B",
      "route91C",
      "routeS-151"
    ]
  },
  {
    "name": "derozio college",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route217B",
      "route91B",
      "route91C",
      "routeS-151",
      "routeBerachampa - Saltlake Karunamoyee",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "reckjuani",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route91",
      "route91A",
      "route91B",
      "route91C",
      "routeBerachampa - Saltlake Karunamoyee",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "rajarhat chowmatha",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211(Blue Board)",
      "route211(Yellow Board)",
      "route211A",
      "route91",
      "route91A",
      "route91B",
      "route91C",
      "routeBerachampa - Saltlake Karunamoyee",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "kalaberia",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211A",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "langolpota",
    "location": null,
    "routes": [
      "route211 (White Board)",
      "route211A"
    ]
  },
  {
    "name": "mahishgari",
    "location": null,
    "routes": [
      "route211 (White Board)"
    ]
  },
  {
    "name": "shikharpur",
    "location": null,
    "routes": [
      "route211(Blue Board)",
      "route91",
      "route91B",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "lauhati",
    "location": null,
    "routes": [
      "route211(Blue Board)",
      "route91",
      "route91A",
      "route91B",
      "route91C",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "vedic village",
    "location": null,
    "routes": [
      "route211(Blue Board)",
      "route91",
      "route91B",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "patharghata",
    "location": null,
    "routes": [
      "route211(Yellow Board)"
    ]
  },
  {
    "name": "kalur more",
    "location": null,
    "routes": [
      "route211(Yellow Board)"
    ]
  },
  {
    "name": "gangraguri",
    "location": null,
    "routes": [
      "route211(Yellow Board)"
    ]
  },
  {
    "name": "rajballavpara",
    "location": null,
    "routes": [
      "route211A",
      "route214",
      "route214A",
      "route215/1",
      "route219/1",
      "route222",
      "route240",
      "route240/1",
      "route30A",
      "route30C",
      "route43",
      "route47B",
      "route78",
      "route79B",
      "route93",
      "routeRT-7",
      "routeS-139",
      "routeS-159",
      "routeS-161",
      "routeS-163",
      "routeS-168",
      "routeS-176",
      "routeS-180",
      "routeS-185",
      "routeS-189",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "r.g.kar hospital",
    "location": null,
    "routes": [
      "route211A",
      "route215/1",
      "route219",
      "route219/1",
      "route227",
      "route30B",
      "route30C",
      "route30D",
      "route47B",
      "route79B",
      "route91",
      "route91A",
      "route91B",
      "route93",
      "routeMalancha - Kolkata Station"
    ]
  },
  {
    "name": "belgachia",
    "location": null,
    "routes": [
      "route211A",
      "route215/1",
      "route219",
      "route219/1",
      "route227",
      "route30B",
      "route30C",
      "route30D",
      "route3B",
      "route3C/1",
      "route3C/2",
      "route3D",
      "route47B",
      "route57",
      "route57A",
      "route79B",
      "route91",
      "route91A",
      "route91B",
      "route93",
      "routeDN18",
      "routeKB16",
      "routeM-10",
      "routeRT-18",
      "routeRT-30"
    ]
  },
  {
    "name": "patipukur",
    "location": null,
    "routes": [
      "route211A",
      "route215/1",
      "route219",
      "route219/1",
      "route227",
      "route30B",
      "route30C",
      "route30D",
      "route47B",
      "route79B",
      "route91",
      "route91A",
      "route91B",
      "route93",
      "routeKB16"
    ]
  },
  {
    "name": "kalindi more",
    "location": null,
    "routes": [
      "route211A",
      "route215/1",
      "route219",
      "route219/1",
      "route227",
      "route30B",
      "route30C",
      "route30D",
      "route47B",
      "route79B",
      "route91",
      "route91A",
      "route91B",
      "route93",
      "routeKB16"
    ]
  },
  {
    "name": "palbazar (jadavpur station)",
    "location": null,
    "routes": [
      "route212"
    ]
  },
  {
    "name": "garfa road",
    "location": null,
    "routes": [
      "route212",
      "routeSD-4"
    ]
  },
  {
    "name": "sapuipara",
    "location": null,
    "routes": [
      "route212",
      "route47B",
      "routeS-124",
      "routeSD-4"
    ]
  },
  {
    "name": "ramlal bazar",
    "location": null,
    "routes": [
      "route212"
    ]
  },
  {
    "name": "haltu bazar",
    "location": null,
    "routes": [
      "route212",
      "routeSD-8"
    ]
  },
  {
    "name": "lansdowne",
    "location": null,
    "routes": [
      "route212",
      "route221",
      "route234",
      "route45B",
      "routeKB15",
      "routeRT-1A",
      "routeS-107",
      "routeS-111",
      "routeS-124"
    ]
  },
  {
    "name": "ghatakpukur",
    "location": null,
    "routes": [
      "route213",
      "route213A",
      "routeDN16/1",
      "routesd-24",
      "routeSD-3",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "nalmuri",
    "location": null,
    "routes": [
      "route213",
      "route213A",
      "routeDN16/1",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "borali ghat",
    "location": null,
    "routes": [
      "route213",
      "route213A",
      "routeDN16/1",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "paglarhat",
    "location": null,
    "routes": [
      "route213",
      "route213A",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "bhojerhat",
    "location": null,
    "routes": [
      "route213",
      "route213A",
      "routeDN16/1",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "kantatala",
    "location": null,
    "routes": [
      "route213",
      "route213A",
      "routeDN16/1",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "kolkata leather complex",
    "location": null,
    "routes": [
      "route213",
      "route213A",
      "routeDN16/1",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "bantala bazar",
    "location": null,
    "routes": [
      "route213",
      "route213A",
      "routesd-24",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "chowbagha",
    "location": null,
    "routes": [
      "route213",
      "route213A",
      "routeDN16/1",
      "routesd-24",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "tangra more",
    "location": null,
    "routes": [
      "route213",
      "route24",
      "route24A",
      "routesd-24"
    ]
  },
  {
    "name": "palmer bazar",
    "location": null,
    "routes": [
      "route213",
      "route24",
      "route24A",
      "routeS-166",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "sajirhat",
    "location": null,
    "routes": [
      "route214",
      "routeDN43",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "boardghar",
    "location": null,
    "routes": [
      "route214",
      "routeDN43",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "muragacha",
    "location": null,
    "routes": [
      "route214",
      "routeDN43"
    ]
  },
  {
    "name": "ghola bazar",
    "location": null,
    "routes": [
      "route214",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "sodepur station",
    "location": null,
    "routes": [
      "route214",
      "route56",
      "route78/1",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "kamarhati",
    "location": null,
    "routes": [
      "route214",
      "route214A",
      "route230",
      "route56",
      "route78",
      "route78/1",
      "route81/1",
      "routeDN43",
      "routeMM3",
      "routeBarrackpore Station - Howrah Station",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "bonhooghly",
    "location": null,
    "routes": [
      "route214",
      "route214A",
      "route222",
      "route230",
      "route234",
      "route234/1",
      "route32A",
      "route34B",
      "route43",
      "route78",
      "route78/1",
      "routeK4",
      "routeS-159",
      "routeS-180",
      "routeS-185",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "tobin road",
    "location": null,
    "routes": [
      "route214",
      "route214A",
      "route222",
      "route230",
      "route234",
      "route234/1",
      "route32A",
      "route34C",
      "route78",
      "route78/1",
      "routeK4",
      "routeS-159",
      "routeS-180",
      "routeS-185",
      "routeBarrackpore Station - Howrah Station",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "girish park",
    "location": null,
    "routes": [
      "route214",
      "route214A",
      "route215",
      "route215/1",
      "route215A/1",
      "route219/1",
      "route222",
      "route237",
      "route242",
      "route30A",
      "route30C",
      "route3B",
      "route43",
      "route47B",
      "route78",
      "routeL238",
      "routeRT-20A",
      "routeS-139",
      "routeS-151",
      "routeS-152",
      "routeS-159",
      "routeS-161",
      "routeS-163",
      "routeS-172",
      "routeS-175",
      "routeS-184",
      "routeBarrackpore Station - Howrah Station",
      "routeBashirhat - Gadiara",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "m.g. road",
    "location": null,
    "routes": [
      "route214",
      "route214A",
      "route215",
      "route215/1",
      "route215A/1",
      "route219",
      "route219/1",
      "route222",
      "route237",
      "route24",
      "route242",
      "route24B",
      "route28",
      "route30A",
      "route30C",
      "route39A/2",
      "route3B",
      "route43",
      "route44",
      "route44/1",
      "route44A",
      "route47B",
      "route71",
      "route72",
      "route78",
      "routeL238",
      "routeRT-20A",
      "routeRT-25",
      "routeS-139",
      "routeS-151",
      "routeS-152",
      "routeS-159",
      "routeS-161",
      "routeS-163",
      "routeS-172",
      "routeS-175",
      "routeS-184",
      "routeS-186",
      "routeBarrackpore Station - Howrah Station",
      "routeBashirhat - Gadiara",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "sodepur girja",
    "location": null,
    "routes": [
      "route214A",
      "route78",
      "route81/1"
    ]
  },
  {
    "name": "moonbeam",
    "location": null,
    "routes": [
      "route215",
      "route46B"
    ]
  },
  {
    "name": "akankha more",
    "location": null,
    "routes": [
      "route215",
      "route46B",
      "routeDN-2/1",
      "routeDN47",
      "routeS-184",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "city center 2",
    "location": null,
    "routes": [
      "route215",
      "route46B",
      "routeDN-2/1",
      "routeDN47",
      "routeS-184",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeBarasat - Santragachi",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kankurgachi",
    "location": null,
    "routes": [
      "route215",
      "route217B",
      "route221",
      "route223",
      "route237",
      "route253",
      "route44",
      "route44/1",
      "route45",
      "route45A",
      "route46",
      "route46B",
      "route79D",
      "routeDN17",
      "routeKB17",
      "routeRT-20A",
      "routeS-151",
      "routeS-152",
      "routeS-184",
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "vivekananda road",
    "location": null,
    "routes": [
      "route215",
      "route215A/1",
      "route217A",
      "route219",
      "route234/1",
      "route237",
      "route240",
      "route34B",
      "route46",
      "route78/1",
      "routeL238",
      "routeRT-20A",
      "routeS-151",
      "routeS-152",
      "routeS-158",
      "routeS-172",
      "routeS-184"
    ]
  },
  {
    "name": "sector v (saltlake)",
    "location": null,
    "routes": [
      "route215A",
      "route215A/1",
      "route32A",
      "route44A",
      "routeDN-8",
      "routeRT-29",
      "routeRT-5"
    ]
  },
  {
    "name": "saltlake 9no. tank",
    "location": null,
    "routes": [
      "route215A",
      "routeS-184"
    ]
  },
  {
    "name": "206 bus stand",
    "location": null,
    "routes": [
      "route215A"
    ]
  },
  {
    "name": "saltlake 7no. tank",
    "location": null,
    "routes": [
      "route215A"
    ]
  },
  {
    "name": "jorabagan",
    "location": null,
    "routes": [
      "route215A",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-29",
      "routeRT-5",
      "routeRT-7",
      "routeS-168",
      "routeS-176",
      "routeS-180",
      "routeS-185",
      "routeS-189"
    ]
  },
  {
    "name": "malapara / nimtala ghat",
    "location": null,
    "routes": [
      "route215A"
    ]
  },
  {
    "name": "barabazar / posta bazar",
    "location": null,
    "routes": [
      "route215A",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-29",
      "routeRT-5",
      "routeRT-7",
      "routeS-168",
      "routeS-176",
      "routeS-180",
      "routeS-185",
      "routeS-189"
    ]
  },
  {
    "name": "bikash bhawan",
    "location": null,
    "routes": [
      "route215A/1",
      "route239 (White Board)",
      "route260",
      "route44A",
      "routeK1",
      "routeKB16",
      "routeKB17",
      "routeKB22",
      "routeS-167",
      "routeS-173",
      "routeBerachampa - Saltlake Karunamoyee",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "city center 1",
    "location": null,
    "routes": [
      "route215A/1",
      "route260",
      "route44A",
      "routeK1",
      "routeKB16",
      "routeBerachampa - Saltlake Karunamoyee",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "saltlake c.a. block",
    "location": null,
    "routes": [
      "route215A/1",
      "route260",
      "route32A",
      "route44A",
      "routeRT-20A"
    ]
  },
  {
    "name": "beraberi",
    "location": null,
    "routes": [
      "route217",
      "route91",
      "route91A"
    ]
  },
  {
    "name": "narayanpur",
    "location": null,
    "routes": [
      "route217",
      "route217A",
      "route91",
      "route91A",
      "routeDN12/1",
      "routeDN21",
      "routeSD-94"
    ]
  },
  {
    "name": "bablatala",
    "location": null,
    "routes": [
      "route217",
      "route217A",
      "route91",
      "route91A"
    ]
  },
  {
    "name": "kalipark",
    "location": null,
    "routes": [
      "route217",
      "route217A",
      "route91",
      "route91A",
      "routeBerachampa - Saltlake Karunamoyee",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "gopalpur house",
    "location": null,
    "routes": [
      "route217",
      "route217A",
      "route91",
      "route91A"
    ]
  },
  {
    "name": "dashadrone",
    "location": null,
    "routes": [
      "route217",
      "route217A",
      "route91",
      "route91A",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "kaikhali",
    "location": null,
    "routes": [
      "route217",
      "route217A",
      "route237",
      "route253",
      "route45",
      "route45A",
      "route46",
      "route79D",
      "route91",
      "route91A",
      "route91B",
      "route91C",
      "routeDN-2/1",
      "routeDN17",
      "routeDN47",
      "routeKB21",
      "routeL238",
      "routeS-151",
      "routeS-175",
      "routeS-184",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBashirhat - Gadiara",
      "routeBoyra - Saltlake Karunamoyee",
      "routeDeulti - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "haldiram",
    "location": null,
    "routes": [
      "route217",
      "route217A",
      "route237",
      "route253",
      "route45",
      "route45A",
      "route46",
      "route79D",
      "route91B",
      "route91C",
      "routeDN-2/1",
      "routeDN16/1",
      "routeDN17",
      "routeKB21",
      "routeL238",
      "routeS-151",
      "routeS-175",
      "routeS-184",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBashirhat - Gadiara",
      "routeBoyra - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "hedua more",
    "location": null,
    "routes": [
      "route217A",
      "route219",
      "route234/1",
      "route240",
      "route34B",
      "route78/1",
      "routeS-158"
    ]
  },
  {
    "name": "phoolbagan",
    "location": null,
    "routes": [
      "route217B",
      "route221",
      "route223",
      "route253",
      "route44",
      "route44/1",
      "route45",
      "route45A",
      "routeS-165"
    ]
  },
  {
    "name": "beleghata",
    "location": null,
    "routes": [
      "route217B",
      "route221",
      "route223",
      "route239 (White Board)",
      "route239 (Yellow Board)",
      "route253",
      "route44/1",
      "route45",
      "route45A",
      "route45B",
      "routeS-167",
      "routeS-173",
      "routeGaria Station - Kolkata Station"
    ]
  },
  {
    "name": "baruipur",
    "location": null,
    "routes": [
      "route218",
      "routeSD-29",
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "shibanipith",
    "location": null,
    "routes": [
      "route218"
    ]
  },
  {
    "name": "baruipur hospital",
    "location": null,
    "routes": [
      "route218"
    ]
  },
  {
    "name": "baruipur station",
    "location": null,
    "routes": [
      "route218",
      "routeSD-29"
    ]
  },
  {
    "name": "padmapukur",
    "location": null,
    "routes": [
      "route218",
      "routeK4",
      "routeKB15",
      "routeSD-29",
      "routeMalancha - Kolkata Station",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "khasmallick",
    "location": null,
    "routes": [
      "route218"
    ]
  },
  {
    "name": "harinavi",
    "location": null,
    "routes": [
      "route218",
      "routeS-113",
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "rajpur bazar",
    "location": null,
    "routes": [
      "route218",
      "routeS-113"
    ]
  },
  {
    "name": "narendrapur",
    "location": null,
    "routes": [
      "route218",
      "routeS-113",
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "kamalgazi",
    "location": null,
    "routes": [
      "route218",
      "routeKB17",
      "routeS-113",
      "routeSD-5",
      "routeBarasat - Baruipur",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "mahamayatala",
    "location": null,
    "routes": [
      "route218",
      "route228",
      "routeS-113",
      "routeSD-5",
      "routeBarasat - Baruipur",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "garia metro",
    "location": null,
    "routes": [
      "route218",
      "route228",
      "route45A",
      "route80A",
      "route80B",
      "routeS-112",
      "routeS-113",
      "routeSD-5"
    ]
  },
  {
    "name": "ramgarh",
    "location": null,
    "routes": [
      "route218",
      "route45",
      "route45A",
      "route45B",
      "route80B",
      "routeS-101",
      "routeS-102",
      "routeS-135"
    ]
  },
  {
    "name": "mallickbazar",
    "location": null,
    "routes": [
      "route218"
    ]
  },
  {
    "name": "diamond plaza",
    "location": null,
    "routes": [
      "route219",
      "route219/1",
      "route221",
      "route223",
      "route30B",
      "route30D",
      "route3C/1",
      "route3C/2",
      "route79B",
      "route91",
      "route91A",
      "route91B",
      "route93",
      "routeDN-8"
    ]
  },
  {
    "name": "bangur avenue",
    "location": null,
    "routes": [
      "route219",
      "route219/1",
      "route221",
      "route223",
      "route227",
      "route30B",
      "route30D",
      "route3C/1",
      "route3C/2",
      "route79B",
      "route91",
      "route91A",
      "route91B",
      "route93",
      "routeDN-8",
      "routeKB16"
    ]
  },
  {
    "name": "southern avenue",
    "location": null,
    "routes": [
      "route221",
      "routeSD-4"
    ]
  },
  {
    "name": "b.t. college",
    "location": null,
    "routes": [
      "route223",
      "route253",
      "route79B",
      "route79D",
      "route93",
      "routeDN-2",
      "routeDN-8",
      "routeDN-9/1",
      "routeDN16/1",
      "routeDN17",
      "routeDN18",
      "routeDN44",
      "routeDN47",
      "routeKB21",
      "routeL238",
      "routeM10 (AC Corporate)",
      "routeS-175",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "golf green",
    "location": null,
    "routes": [
      "route223",
      "route234",
      "route234/1",
      "route240",
      "routeS-110"
    ]
  },
  {
    "name": "michael nagar",
    "location": null,
    "routes": [
      "route223",
      "route253",
      "route79B",
      "route79D",
      "route93",
      "routeDN47",
      "routeS-175",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "birati more",
    "location": null,
    "routes": [
      "route223",
      "route237",
      "route253",
      "route30B",
      "route79B",
      "route79D",
      "route93",
      "routeDN-2",
      "routeDN-8",
      "routeDN-9/1",
      "routeDN16/1",
      "routeDN17",
      "routeDN18",
      "routeDN44",
      "routeKB21",
      "routeL238",
      "routeS-175",
      "routeS-184",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "airport gate 3",
    "location": null,
    "routes": [
      "route223",
      "route237",
      "route253",
      "route30B",
      "route79B",
      "route79D",
      "route93",
      "routeDN-2/1",
      "routeDN-8",
      "routeDN-9/1",
      "routeDN16/1",
      "routeDN47",
      "routeKB21",
      "routeL238",
      "routeS-175",
      "routeS-184",
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "airport gate 1.",
    "location": null,
    "routes": [
      "route223"
    ]
  },
  {
    "name": "central jail",
    "location": null,
    "routes": [
      "route223",
      "route30B",
      "route30D",
      "route79B",
      "route91",
      "route91A",
      "route91B",
      "route93",
      "routeDN-8"
    ]
  },
  {
    "name": "nager bazar",
    "location": null,
    "routes": [
      "route223",
      "route30B",
      "route30D",
      "route79B",
      "route91",
      "route91A",
      "route91B",
      "route93",
      "routeDN-8"
    ]
  },
  {
    "name": "south city",
    "location": null,
    "routes": [
      "route223",
      "route234",
      "route240",
      "route37",
      "route45B",
      "route47B",
      "routeS-110",
      "routeS-135"
    ]
  },
  {
    "name": "lake gardens",
    "location": null,
    "routes": [
      "route223",
      "route234",
      "route234/1",
      "route240",
      "route37",
      "route45B",
      "route47B",
      "routeS-110",
      "routeS-135"
    ]
  },
  {
    "name": "doordarshan bhawan",
    "location": null,
    "routes": [
      "route223",
      "route234",
      "route234/1",
      "route240",
      "routeS-110"
    ]
  },
  {
    "name": "naktala",
    "location": null,
    "routes": [
      "route228",
      "route80A",
      "routeS-112",
      "routeS-113",
      "routeSD-5"
    ]
  },
  {
    "name": "barasat",
    "location": null,
    "routes": [
      "route23",
      "route79B",
      "route81",
      "route81/1",
      "route87",
      "route87A",
      "route88",
      "routeDN-2",
      "routeDN-5",
      "routeDN-8",
      "routeDN-9/1",
      "routeDN16/1",
      "routeDN21",
      "routeL238",
      "routeM10 (AC Corporate)",
      "routeMM6/1",
      "routeBarasat - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "boalghata",
    "location": null,
    "routes": [
      "route23"
    ]
  },
  {
    "name": "chapadali more",
    "location": null,
    "routes": [
      "route23",
      "route253",
      "route79B",
      "route81",
      "route81/1",
      "route87",
      "route87A",
      "route88",
      "routeDN-2",
      "routeDN-5",
      "routeDN-9/1",
      "routeDN19",
      "routeDN28",
      "routeL238",
      "routeMM6"
    ]
  },
  {
    "name": "kazipara depot",
    "location": null,
    "routes": [
      "route23",
      "route253"
    ]
  },
  {
    "name": "kadambagachi",
    "location": null,
    "routes": [
      "route23",
      "route253",
      "routeDN18",
      "routeDN28",
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "goakhali more",
    "location": null,
    "routes": [
      "route23",
      "route253"
    ]
  },
  {
    "name": "golabari more",
    "location": null,
    "routes": [
      "route23",
      "route253",
      "routeDN28"
    ]
  },
  {
    "name": "pakdaha",
    "location": null,
    "routes": [
      "route23"
    ]
  },
  {
    "name": "aminpur",
    "location": null,
    "routes": [
      "route23",
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "paltadanga",
    "location": null,
    "routes": [
      "route23"
    ]
  },
  {
    "name": "shasan bazar",
    "location": null,
    "routes": [
      "route23"
    ]
  },
  {
    "name": "mithpukuria",
    "location": null,
    "routes": [
      "route23"
    ]
  },
  {
    "name": "majlishpur",
    "location": null,
    "routes": [
      "route23"
    ]
  },
  {
    "name": "agarpara station",
    "location": null,
    "routes": [
      "route230"
    ]
  },
  {
    "name": "belgharia",
    "location": null,
    "routes": [
      "route234"
    ]
  },
  {
    "name": "belgharia station",
    "location": null,
    "routes": [
      "route234/1",
      "routeS-180",
      "routeS-185"
    ]
  },
  {
    "name": "anwar shah road",
    "location": null,
    "routes": [
      "route234/1",
      "route37",
      "route45B",
      "route47B",
      "routeS-135"
    ]
  },
  {
    "name": "rajabazar (saltlake)",
    "location": null,
    "routes": [
      "route235",
      "route47/1",
      "route71"
    ]
  },
  {
    "name": "birati tantkal",
    "location": null,
    "routes": [
      "route237"
    ]
  },
  {
    "name": "birati station",
    "location": null,
    "routes": [
      "route237",
      "routeDN-2",
      "routeS-184"
    ]
  },
  {
    "name": "airport gate 1",
    "location": null,
    "routes": [
      "route237",
      "route253",
      "route30B",
      "route45",
      "route45A",
      "route46",
      "route79B",
      "route79D",
      "route91",
      "route91A",
      "route91B",
      "route93",
      "routeDN-2/1",
      "routeDN-8",
      "routeDN16/1",
      "routeDN18",
      "routeDN21",
      "routeDN47",
      "routeKB21",
      "routeL238",
      "routeM10 (AC Corporate)",
      "routeS-151",
      "routeS-175",
      "routeS-184",
      "routeAmta - Airport Gate 1",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBashirhat - Gadiara",
      "routeBoyra - Saltlake Karunamoyee",
      "routeDeulti - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "saltlake 12no. tank",
    "location": null,
    "routes": [
      "route239 (White Board)",
      "routeS-167"
    ]
  },
  {
    "name": "sushrut hospital",
    "location": null,
    "routes": [
      "route239 (White Board)",
      "route32A",
      "routeS-167",
      "routeDhulagarh - Newtown"
    ]
  },
  {
    "name": "saltlake 14no. tank",
    "location": null,
    "routes": [
      "route239 (White Board)",
      "route32A",
      "routeS-167"
    ]
  },
  {
    "name": "saltlake 16no. tank",
    "location": null,
    "routes": [
      "route239 (White Board)",
      "routeS-167"
    ]
  },
  {
    "name": "building more",
    "location": null,
    "routes": [
      "route239 (White Board)",
      "route239 (Yellow Board)",
      "route45B",
      "routeKB12",
      "routeS-167",
      "routeAmta - Newtown",
      "routeGadiara - Rajarhat",
      "routeGaria - Ultodanga",
      "routeGaria Station - Paikpara",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "shapoorji",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "routeDN-2/1",
      "routeKB16"
    ]
  },
  {
    "name": "sukhobrishti more",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "routeDN-2/1"
    ]
  },
  {
    "name": "karigari bhawan",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "routeDN-2/1",
      "routeK1",
      "routeKB16"
    ]
  },
  {
    "name": "u.e.m. campus",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "routeDN-2/1"
    ]
  },
  {
    "name": "unitech gate 1",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "route260",
      "routeDN-2/1",
      "routeKB17"
    ]
  },
  {
    "name": "narkelbagan",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "route260",
      "routeDN46",
      "routeDN47",
      "routeK1",
      "routeKB12",
      "routeKB16",
      "routeKB17",
      "routeKB22",
      "routeRT-42",
      "routeS-184",
      "routeAmta - Newtown",
      "routeBagnan - Eco Space",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeBarasat - Santragachi",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeDeulti - Saltlake Karunamoyee",
      "routeDhulagarh - Newtown",
      "routeGadiara - Rajarhat",
      "routeMatapara - Newtown",
      "routeRajchandrapur - Saltlake Karunamoyee",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "axis mall",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "route260",
      "routeKB22",
      "routeRT-42",
      "routeS-184",
      "routeDhulagarh - Newtown",
      "routeMatapara - Newtown",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "newtown",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "route260",
      "routeDN46",
      "routeKB12",
      "routeRT-42",
      "routeS-184",
      "routeAmta - Newtown",
      "routeBagnan - Eco Space",
      "routeDhulagarh - Newtown",
      "routeGadiara - Rajarhat",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "d.l.f. 1",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "route260",
      "routeRT-42",
      "routeS-184"
    ]
  },
  {
    "name": "nicco park",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "routeRT-42",
      "routeAmta - Newtown",
      "routeBarasat - Santragachi",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeDeulti - Saltlake Karunamoyee",
      "routeDhulagarh - Unitech",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "chingrighata",
    "location": null,
    "routes": [
      "route239 (Yellow Board)",
      "routeDN16/1",
      "routeKB12",
      "routeM10 (AC Corporate)",
      "routeRT-42",
      "routeAmta - Newtown",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Unitech",
      "routeGadiara - Rajarhat",
      "routeGaria - Ultodanga",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeNaktala (garia) - Dakshineshwar",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "topsia",
    "location": null,
    "routes": [
      "route24",
      "route24A",
      "routeKB21",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeDhulagarh - Newtown",
      "routeGadiara - Rajarhat",
      "routeKadamtala - Newtown",
      "routeMalancha - Kolkata Station",
      "routeMatapara - Newtown",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bandha ghat",
    "location": null,
    "routes": [
      "route24",
      "route24A",
      "routeRT-1",
      "routeRT-2"
    ]
  },
  {
    "name": "christopher road",
    "location": null,
    "routes": [
      "route24",
      "route24A"
    ]
  },
  {
    "name": "panchkari more",
    "location": null,
    "routes": [
      "route24",
      "route24A"
    ]
  },
  {
    "name": "r.n.chowdhury road",
    "location": null,
    "routes": [
      "route24",
      "route24A",
      "routeS-166"
    ]
  },
  {
    "name": "howrah maidan",
    "location": null,
    "routes": [
      "route24",
      "route24A",
      "route52",
      "route55",
      "route55A",
      "route57",
      "route59",
      "route61",
      "route63",
      "route69",
      "route71",
      "route72",
      "route73",
      "route75",
      "route80",
      "routeE43",
      "routeE53",
      "routeRT-11A",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-21",
      "routeRT-24",
      "routeRT-26",
      "routeRT-27",
      "routeRT-27A",
      "routeRT-29",
      "routeRT-3",
      "routeRT-31",
      "routeRT-32",
      "routeRT-34",
      "routert-35",
      "routeRT-38",
      "routeRT-3A",
      "routeRT-6",
      "routeRT-6A",
      "routeRT-8",
      "routeS-135",
      "routeS-172",
      "routeS-176",
      "routeS-180",
      "routeS-189",
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "pilkhana more",
    "location": null,
    "routes": [
      "route24",
      "route24A"
    ]
  },
  {
    "name": "salkia chowrasta",
    "location": null,
    "routes": [
      "route24",
      "route24A",
      "routeRT-1",
      "routeRT-2"
    ]
  },
  {
    "name": "bagbazar",
    "location": null,
    "routes": [
      "route240",
      "route240/1",
      "route242",
      "route43",
      "route79B",
      "route93",
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "kalikapur",
    "location": null,
    "routes": [
      "route240/1",
      "route24A/1",
      "route47B",
      "routeDN28",
      "routeS-101/1",
      "routeS-124",
      "routeSD-3",
      "routeAmta - Mukundapur",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria Station - Bagbazar",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "ajaynagar",
    "location": null,
    "routes": [
      "route240/1",
      "routeS-101/1",
      "routeS-106",
      "routeS-124",
      "routeSD-16",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria - Ultodanga",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "hiland park",
    "location": null,
    "routes": [
      "route240/1",
      "routeS-101/1",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria - Ultodanga",
      "routeGaria Station - Bagbazar",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "patuli more",
    "location": null,
    "routes": [
      "route240/1",
      "route45B",
      "routeS-101/1"
    ]
  },
  {
    "name": "dhalai bridge",
    "location": null,
    "routes": [
      "route240/1",
      "route45A",
      "route45B",
      "routeS-101/1",
      "routeS-112",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara"
    ]
  },
  {
    "name": "bartala bazar",
    "location": null,
    "routes": [
      "route241"
    ]
  },
  {
    "name": "cossipore",
    "location": null,
    "routes": [
      "route242",
      "route43"
    ]
  },
  {
    "name": "bibibazar",
    "location": null,
    "routes": [
      "route242",
      "route43"
    ]
  },
  {
    "name": "chitpur bridge",
    "location": null,
    "routes": [
      "route242",
      "route43"
    ]
  },
  {
    "name": "howrah fire station",
    "location": null,
    "routes": [
      "route24A/1"
    ]
  },
  {
    "name": "v.i.p. bazar",
    "location": null,
    "routes": [
      "route24A/1",
      "route39A/2",
      "routeS-101/1"
    ]
  },
  {
    "name": "bashirhat",
    "location": null,
    "routes": [
      "route253",
      "route72",
      "route72A",
      "routeDN12",
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "trimohini",
    "location": null,
    "routes": [
      "route253"
    ]
  },
  {
    "name": "kholapota",
    "location": null,
    "routes": [
      "route253",
      "routeDN12",
      "routeDN12/1",
      "routeDN13",
      "routeDN13A",
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "gopalpur",
    "location": null,
    "routes": [
      "route253"
    ]
  },
  {
    "name": "matia bridge",
    "location": null,
    "routes": [
      "route253"
    ]
  },
  {
    "name": "swarupnagar",
    "location": null,
    "routes": [
      "route253",
      "routeDN35",
      "routeDN38"
    ]
  },
  {
    "name": "berachampa",
    "location": null,
    "routes": [
      "route253",
      "routeDN18",
      "routeDN28",
      "routeMM6/1",
      "routeBashirhat - Gadiara",
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "deganga",
    "location": null,
    "routes": [
      "route253",
      "routeDN18",
      "routeDN28",
      "routeBashirhat - Gadiara",
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kartikpur",
    "location": null,
    "routes": [
      "route253",
      "routeDN28",
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "madhyamgram chowmatha",
    "location": null,
    "routes": [
      "route253",
      "route79B",
      "route79D",
      "route93",
      "routeDN-2",
      "routeDN-8",
      "routeDN-9/1",
      "routeDN16/1",
      "routeDN17",
      "routeDN18",
      "routeDN21",
      "routeDN43",
      "routeDN44",
      "routeDN47",
      "routeL238",
      "routeM10 (AC Corporate)",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBashirhat - Gadiara",
      "routeBoyra - Saltlake Karunamoyee",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "doltala more",
    "location": null,
    "routes": [
      "route253",
      "route79B",
      "route79D",
      "route93"
    ]
  },
  {
    "name": "akta bazar",
    "location": null,
    "routes": [
      "route259"
    ]
  },
  {
    "name": "akra station",
    "location": null,
    "routes": [
      "route259"
    ]
  },
  {
    "name": "dakghar",
    "location": null,
    "routes": [
      "route259",
      "route77A",
      "route77A (No Bata)",
      "routeS-126",
      "routeSD-30"
    ]
  },
  {
    "name": "sinthee",
    "location": null,
    "routes": [
      "route30A",
      "routeBagnan - Eco Space"
    ]
  },
  {
    "name": "gouripur",
    "location": null,
    "routes": [
      "route30B",
      "routeDN16/1",
      "routeDN17",
      "routeDN44",
      "routeDN47",
      "routeKB21",
      "routeM10 (AC Corporate)",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "sealdah station moulali more",
    "location": null,
    "routes": [
      "route30B"
    ]
  },
  {
    "name": "hatiara",
    "location": null,
    "routes": [
      "route30C",
      "route30C/1"
    ]
  },
  {
    "name": "hela battala",
    "location": null,
    "routes": [
      "route30C",
      "route30C/1",
      "routeDN19",
      "routeDN47"
    ]
  },
  {
    "name": "jyangra",
    "location": null,
    "routes": [
      "route30C",
      "route30C/1"
    ]
  },
  {
    "name": "ashwini nagar",
    "location": null,
    "routes": [
      "route30C",
      "route30C/1"
    ]
  },
  {
    "name": "dumdum canton",
    "location": null,
    "routes": [
      "route30D"
    ]
  },
  {
    "name": "dakshineshwar",
    "location": null,
    "routes": [
      "route32A",
      "route43",
      "route56",
      "route79",
      "route81/1",
      "routeDN-2",
      "routeDN-2/1",
      "routeDN-9/1",
      "routeDN43",
      "routeDN44",
      "routeK4",
      "routeMM3",
      "routeS-158",
      "routeAmta - Airport Gate 1",
      "routeBagnan - Eco Space",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeDeulti - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeNaktala (garia) - Dakshineshwar",
      "routeRajchandrapur - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "labony estate",
    "location": null,
    "routes": [
      "route32A",
      "routeRT-20A",
      "routeS-173"
    ]
  },
  {
    "name": "saltlake 13no. tank",
    "location": null,
    "routes": [
      "route32A",
      "routeRT-20A",
      "routeS-173"
    ]
  },
  {
    "name": "saltlake stadium",
    "location": null,
    "routes": [
      "route32A",
      "routeM10 (AC Corporate)",
      "routeRT-20A",
      "routeS-173",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "dunlop",
    "location": null,
    "routes": [
      "route34B",
      "routeDN43",
      "routeDN46",
      "routeK4",
      "routeMM3",
      "routeBagnan - Eco Space",
      "routeBarrackpore Station - Howrah Station",
      "routeMadhyamgram Chowmatha - Howrah",
      "routeNaktala (garia) - Dakshineshwar",
      "routeRajchandrapur - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "baranagar bazar",
    "location": null,
    "routes": [
      "route34B",
      "route43",
      "routeS-158"
    ]
  },
  {
    "name": "hind cinema",
    "location": null,
    "routes": [
      "route34B",
      "route78/1"
    ]
  },
  {
    "name": "noapara",
    "location": null,
    "routes": [
      "route34C",
      "routeDN47",
      "routeMM3",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "picnic garden",
    "location": null,
    "routes": [
      "route39",
      "route42A",
      "routeS-125",
      "routeS-128"
    ]
  },
  {
    "name": "high court",
    "location": null,
    "routes": [
      "route39"
    ]
  },
  {
    "name": "colony bazar",
    "location": null,
    "routes": [
      "route39",
      "route39A/2",
      "routeS-128"
    ]
  },
  {
    "name": "kustia more",
    "location": null,
    "routes": [
      "route39",
      "route39A/2",
      "route42A"
    ]
  },
  {
    "name": "bondel gate",
    "location": null,
    "routes": [
      "route39",
      "route39A/2",
      "route42A",
      "routeS-125",
      "routeS-128"
    ]
  },
  {
    "name": "milk colony",
    "location": null,
    "routes": [
      "route3B",
      "route3D"
    ]
  },
  {
    "name": "durgapur bridge",
    "location": null,
    "routes": [
      "route3B"
    ]
  },
  {
    "name": "central",
    "location": null,
    "routes": [
      "route3B"
    ]
  },
  {
    "name": "shobhabazar",
    "location": null,
    "routes": [
      "route3B"
    ]
  },
  {
    "name": "shyambazar 5 point",
    "location": null,
    "routes": [
      "route3B",
      "route3C/1",
      "route3C/2",
      "route3D"
    ]
  },
  {
    "name": "rg kar",
    "location": null,
    "routes": [
      "route3B",
      "route3C/1",
      "route3C/2",
      "route3D"
    ]
  },
  {
    "name": "ruby",
    "location": null,
    "routes": [
      "route3C/1",
      "route3C/2",
      "routeGaria Station - Bagbazar",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "kasba",
    "location": null,
    "routes": [
      "route3C/1",
      "route3C/2"
    ]
  },
  {
    "name": "sealdah",
    "location": null,
    "routes": [
      "route3C/1",
      "route3D",
      "routeKB21",
      "routeDhulagarh - Sealdah",
      "routeGaria Station - Bagbazar",
      "routeRajabazar (dankuni) - Baburhat",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "khanna",
    "location": null,
    "routes": [
      "route3C/1",
      "route3D",
      "routeDN46",
      "routeK1",
      "routeK4",
      "routeKB16",
      "routeKB21",
      "routeKB22",
      "routeBagnan - Eco Space",
      "routeGaria Station - Bagbazar",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeMalancha - Kolkata Station",
      "routeNaktala (garia) - Dakshineshwar",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "shishu mangal",
    "location": null,
    "routes": [
      "route3C/2"
    ]
  },
  {
    "name": "sakherbazar (behala)",
    "location": null,
    "routes": [
      "route3D"
    ]
  },
  {
    "name": "pts",
    "location": null,
    "routes": [
      "route3D",
      "routeKB15",
      "routeBarasat - Santragachi",
      "routeBargachia - Sealdah Court",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeGadiara - Rajarhat",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "julpia",
    "location": null,
    "routes": [
      "route40A",
      "routeSD-29"
    ]
  },
  {
    "name": "nepalgunge",
    "location": null,
    "routes": [
      "route40A"
    ]
  },
  {
    "name": "bakeshwar",
    "location": null,
    "routes": [
      "route40A"
    ]
  },
  {
    "name": "mallickpur",
    "location": null,
    "routes": [
      "route40A",
      "routeM-16",
      "routeSD-30"
    ]
  },
  {
    "name": "sajnaberia",
    "location": null,
    "routes": [
      "route40A"
    ]
  },
  {
    "name": "mittirchak",
    "location": null,
    "routes": [
      "route40A"
    ]
  },
  {
    "name": "layalka",
    "location": null,
    "routes": [
      "route41"
    ]
  },
  {
    "name": "bijoygarh",
    "location": null,
    "routes": [
      "route41"
    ]
  },
  {
    "name": "gandhi colony",
    "location": null,
    "routes": [
      "route41"
    ]
  },
  {
    "name": "garcha road",
    "location": null,
    "routes": [
      "route42A",
      "routeS-107",
      "routeSD-16"
    ]
  },
  {
    "name": "alambazar",
    "location": null,
    "routes": [
      "route43",
      "routeDN44",
      "routeMM3",
      "routeS-158",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "deshbandhu road",
    "location": null,
    "routes": [
      "route43",
      "routeS-158"
    ]
  },
  {
    "name": "s.d.f more",
    "location": null,
    "routes": [
      "route44A"
    ]
  },
  {
    "name": "baishnabghata",
    "location": null,
    "routes": [
      "route45",
      "route45B",
      "routeKB17",
      "routeS-102",
      "routeS-135",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria - Ultodanga",
      "routeKamalgazi - Dankuni Housing",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "dhanmath",
    "location": null,
    "routes": [
      "route47B"
    ]
  },
  {
    "name": "saheed nagar",
    "location": null,
    "routes": [
      "route47B",
      "routeS-124"
    ]
  },
  {
    "name": "pardankuni",
    "location": null,
    "routes": [
      "route51"
    ]
  },
  {
    "name": "delhi road",
    "location": null,
    "routes": [
      "route51"
    ]
  },
  {
    "name": "dankuni housing",
    "location": null,
    "routes": [
      "route51",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "rajchandrapur",
    "location": null,
    "routes": [
      "route51",
      "route79",
      "route81/1",
      "routeDN-9/1",
      "routeAmta - Airport Gate 1",
      "routeBagnan - Eco Space",
      "routeDeulti - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeRajchandrapur - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "bally halt",
    "location": null,
    "routes": [
      "route51",
      "route79",
      "route81/1",
      "routeDN-9/1",
      "routeAmta - Airport Gate 1",
      "routeBagnan - Eco Space",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeRajchandrapur - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "ballykhal",
    "location": null,
    "routes": [
      "route51",
      "route54",
      "route56",
      "routeRT-10"
    ]
  },
  {
    "name": "belurmath",
    "location": null,
    "routes": [
      "route51",
      "route54",
      "route56",
      "routeRT-10",
      "routeRT-11"
    ]
  },
  {
    "name": "don bosco",
    "location": null,
    "routes": [
      "route51",
      "route54",
      "route56",
      "routeRT-10",
      "routeRT-11"
    ]
  },
  {
    "name": "bandha ghat / salkia chowrasta",
    "location": null,
    "routes": [
      "route51",
      "route54",
      "route56",
      "routeRT-10",
      "routeRT-11",
      "routeRT-25"
    ]
  },
  {
    "name": "golabarai ps / pilkhana more",
    "location": null,
    "routes": [
      "route51",
      "route54",
      "route56",
      "route57A",
      "routeRT-1",
      "routeRT-10",
      "routeRT-11",
      "routeRT-18",
      "routeRT-1A",
      "routeRT-2",
      "routeRT-25",
      "routeRT-30",
      "routeRT-39"
    ]
  },
  {
    "name": "ramrajatala",
    "location": null,
    "routes": [
      "route52"
    ]
  },
  {
    "name": "natun rasta",
    "location": null,
    "routes": [
      "route52",
      "routeRT-26"
    ]
  },
  {
    "name": "dalalpukur",
    "location": null,
    "routes": [
      "route52"
    ]
  },
  {
    "name": "surkikal",
    "location": null,
    "routes": [
      "route52"
    ]
  },
  {
    "name": "shyamasree",
    "location": null,
    "routes": [
      "route52"
    ]
  },
  {
    "name": "kalibabu bazar",
    "location": null,
    "routes": [
      "route52"
    ]
  },
  {
    "name": "mallick fatak / kadamtala",
    "location": null,
    "routes": [
      "route52"
    ]
  },
  {
    "name": "botanical garden (b garden)",
    "location": null,
    "routes": [
      "route55",
      "routeRT-6",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "shalimar station",
    "location": null,
    "routes": [
      "route55",
      "routeRT-6"
    ]
  },
  {
    "name": "bataitala phari",
    "location": null,
    "routes": [
      "route55",
      "route59",
      "route61",
      "route69",
      "route80",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-24",
      "routeRT-6",
      "routeRT-6A"
    ]
  },
  {
    "name": "kazipara more / avani mall",
    "location": null,
    "routes": [
      "route55",
      "route59",
      "route61",
      "route69",
      "route80",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-24",
      "routeRT-6",
      "routeRT-6A",
      "routeRT-8"
    ]
  },
  {
    "name": "shibpur bazar",
    "location": null,
    "routes": [
      "route55",
      "route59",
      "route61",
      "route69",
      "route80",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-24",
      "routeRT-6",
      "routeRT-6A",
      "routeRT-8"
    ]
  },
  {
    "name": "mallick fatak",
    "location": null,
    "routes": [
      "route55",
      "route55A",
      "route59",
      "route61",
      "route69",
      "route80",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-24",
      "routeRT-6",
      "routeRT-6A",
      "routeRT-8"
    ]
  },
  {
    "name": "shibpur td",
    "location": null,
    "routes": [
      "route55A"
    ]
  },
  {
    "name": "ruiya purbapara",
    "location": null,
    "routes": [
      "route56"
    ]
  },
  {
    "name": "doperia",
    "location": null,
    "routes": [
      "route56"
    ]
  },
  {
    "name": "kalyan nagar",
    "location": null,
    "routes": [
      "route56",
      "route78/1"
    ]
  },
  {
    "name": "rashmoni more",
    "location": null,
    "routes": [
      "route56",
      "route78/1"
    ]
  },
  {
    "name": "kona more",
    "location": null,
    "routes": [
      "route57",
      "route57A",
      "route79",
      "routeRT-18",
      "routeRT-30",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "biradingi more",
    "location": null,
    "routes": [
      "route57",
      "route57A",
      "routeRT-18",
      "routeRT-30"
    ]
  },
  {
    "name": "tikiapara",
    "location": null,
    "routes": [
      "route57",
      "route63",
      "route72",
      "route73",
      "route75",
      "routeRT-26",
      "routeRT-27",
      "routeRT-29",
      "routeRT-3",
      "routeRT-31",
      "routeRT-34",
      "routert-35",
      "routeRT-38",
      "routeRT-3A",
      "routeRT-5"
    ]
  },
  {
    "name": "belilious road",
    "location": null,
    "routes": [
      "route57",
      "route63",
      "route72",
      "route73",
      "route75",
      "routeRT-26",
      "routeRT-27",
      "routeRT-29",
      "routeRT-3",
      "routeRT-31",
      "routeRT-34",
      "routert-35",
      "routeRT-38",
      "routeRT-3A",
      "routeRT-5"
    ]
  },
  {
    "name": "chanditala",
    "location": null,
    "routes": [
      "route57A",
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "kalipur more",
    "location": null,
    "routes": [
      "route57A"
    ]
  },
  {
    "name": "jagadishpur",
    "location": null,
    "routes": [
      "route57A",
      "routeRT-30"
    ]
  },
  {
    "name": "chamrail",
    "location": null,
    "routes": [
      "route57A",
      "routeRT-30"
    ]
  },
  {
    "name": "eksara more",
    "location": null,
    "routes": [
      "route57A"
    ]
  },
  {
    "name": "bamangachhi",
    "location": null,
    "routes": [
      "route57A",
      "routeDN35",
      "routeDN44",
      "routeMN6",
      "routeRT-18",
      "routeRT-30",
      "routeRT-39",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "salkia chowrasta / bandha ghat",
    "location": null,
    "routes": [
      "route57A",
      "routeRT-18",
      "routeRT-1A",
      "routeRT-30",
      "routeRT-39"
    ]
  },
  {
    "name": "danesh shaikh lane",
    "location": null,
    "routes": [
      "route59",
      "route61",
      "route69",
      "route80",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-24",
      "routeRT-42",
      "routeRT-6A"
    ]
  },
  {
    "name": "amtala phari",
    "location": null,
    "routes": [
      "route59",
      "route61",
      "route69",
      "route80",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-24",
      "routeRT-42",
      "routeRT-6A"
    ]
  },
  {
    "name": "narayana hospital",
    "location": null,
    "routes": [
      "route59",
      "route61",
      "route69",
      "route80",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A",
      "routeRT-24",
      "routeRT-42",
      "routeRT-6A"
    ]
  },
  {
    "name": "alampur",
    "location": null,
    "routes": [
      "route61",
      "route79",
      "routeE43",
      "routeE53",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBagnan - Eco Space",
      "routeBashirhat - Gadiara",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeDhulagarh - Unitech",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "argori more",
    "location": null,
    "routes": [
      "route61"
    ]
  },
  {
    "name": "andul bazar",
    "location": null,
    "routes": [
      "route61",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20"
    ]
  },
  {
    "name": "mourigram",
    "location": null,
    "routes": [
      "route61",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A"
    ]
  },
  {
    "name": "chunavati",
    "location": null,
    "routes": [
      "route61",
      "route80",
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A"
    ]
  },
  {
    "name": "hanskhali pole",
    "location": null,
    "routes": [
      "route61",
      "route80"
    ]
  },
  {
    "name": "domjur",
    "location": null,
    "routes": [
      "route63",
      "routeK11",
      "routeRT-34",
      "routert-35",
      "routeBargachia - Sealdah Court"
    ]
  },
  {
    "name": "makardaha",
    "location": null,
    "routes": [
      "route63",
      "routeK11",
      "routeRT-31",
      "routeRT-34",
      "routert-35"
    ]
  },
  {
    "name": "katlia more",
    "location": null,
    "routes": [
      "route63",
      "routeRT-31",
      "routeRT-34",
      "routert-35"
    ]
  },
  {
    "name": "salap more",
    "location": null,
    "routes": [
      "route63",
      "route79",
      "routeRT-31",
      "routeRT-34",
      "routert-35"
    ]
  },
  {
    "name": "bankra bazar",
    "location": null,
    "routes": [
      "route63",
      "routeRT-31",
      "routeRT-34",
      "routert-35"
    ]
  },
  {
    "name": "japani gate",
    "location": null,
    "routes": [
      "route63",
      "routeE43",
      "routeE53",
      "routeRT-27",
      "routeRT-31",
      "routeRT-34",
      "routert-35",
      "routeRT-5"
    ]
  },
  {
    "name": "baltikuri",
    "location": null,
    "routes": [
      "route63"
    ]
  },
  {
    "name": "dasnagar",
    "location": null,
    "routes": [
      "route63",
      "route73",
      "routeE43",
      "routeE53",
      "routeRT-27",
      "routeRT-31",
      "routeRT-34",
      "routert-35",
      "routeRT-38",
      "routeRT-5"
    ]
  },
  {
    "name": "shanpur more",
    "location": null,
    "routes": [
      "route63",
      "route72",
      "route73",
      "route75",
      "routeRT-26",
      "routeRT-27",
      "routeRT-3",
      "routeRT-31",
      "routeRT-34",
      "routert-35",
      "routeRT-38",
      "routeRT-3A",
      "routeRT-5"
    ]
  },
  {
    "name": "tulshiberia",
    "location": null,
    "routes": [
      "route64"
    ]
  },
  {
    "name": "kulgachia",
    "location": null,
    "routes": [
      "route64",
      "routeDeulti - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kamina more",
    "location": null,
    "routes": [
      "route64"
    ]
  },
  {
    "name": "mahishrekha",
    "location": null,
    "routes": [
      "route64"
    ]
  },
  {
    "name": "bagnan",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68",
      "route76",
      "route78",
      "routeBagnan - Eco Space",
      "routeDeulti - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "shibgunge",
    "location": null,
    "routes": [
      "route67"
    ]
  },
  {
    "name": "khalore more",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "antila bridge",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "bantul more",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68"
    ]
  },
  {
    "name": "nuntia more",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68"
    ]
  },
  {
    "name": "mugkalyan",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "noul bazar",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68"
    ]
  },
  {
    "name": "deorah more",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68"
    ]
  },
  {
    "name": "shasati more",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68"
    ]
  },
  {
    "name": "belpukur",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68",
      "routeSD-11",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "hoglashi more",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "route68",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "kanthalibar",
    "location": null,
    "routes": [
      "route67",
      "route67B"
    ]
  },
  {
    "name": "shyampur",
    "location": null,
    "routes": [
      "route67",
      "route67B",
      "routeBashirhat - Gadiara",
      "routeGadiara - Rajarhat",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "narikelabar",
    "location": null,
    "routes": [
      "route67"
    ]
  },
  {
    "name": "bhagabanpur",
    "location": null,
    "routes": [
      "route67",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "58 gate",
    "location": null,
    "routes": [
      "route67B",
      "routeBashirhat - Gadiara",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "kharuberia",
    "location": null,
    "routes": [
      "route67B"
    ]
  },
  {
    "name": "garchumuk",
    "location": null,
    "routes": [
      "route67B",
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "kamalpur",
    "location": null,
    "routes": [
      "route68"
    ]
  },
  {
    "name": "shrikole more",
    "location": null,
    "routes": [
      "route68"
    ]
  },
  {
    "name": "radhapur",
    "location": null,
    "routes": [
      "route68"
    ]
  },
  {
    "name": "sankrail",
    "location": null,
    "routes": [
      "route69",
      "route77",
      "routeRT-24"
    ]
  },
  {
    "name": "chapatala",
    "location": null,
    "routes": [
      "route69",
      "routeRT-24"
    ]
  },
  {
    "name": "rajgunge",
    "location": null,
    "routes": [
      "route69",
      "routeRT-24"
    ]
  },
  {
    "name": "radhadashi",
    "location": null,
    "routes": [
      "route69",
      "routeRT-24"
    ]
  },
  {
    "name": "podra bazar",
    "location": null,
    "routes": [
      "route69",
      "routeRT-24"
    ]
  },
  {
    "name": "nazirgunge",
    "location": null,
    "routes": [
      "route69",
      "routeRT-24"
    ]
  },
  {
    "name": "amta",
    "location": null,
    "routes": [
      "route70",
      "route76",
      "route77",
      "routeE43",
      "routeE53",
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "uluberia",
    "location": null,
    "routes": [
      "route70",
      "routeBagnan - Eco Space",
      "routeDeulti - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "bhandargacha",
    "location": null,
    "routes": [
      "route70",
      "route77",
      "routeE43",
      "routeE53"
    ]
  },
  {
    "name": "panpur more",
    "location": null,
    "routes": [
      "route70",
      "route77",
      "route87A",
      "routeDN-5"
    ]
  },
  {
    "name": "shiberhana",
    "location": null,
    "routes": [
      "route70"
    ]
  },
  {
    "name": "bargram more",
    "location": null,
    "routes": [
      "route70"
    ]
  },
  {
    "name": "karatberia",
    "location": null,
    "routes": [
      "route70"
    ]
  },
  {
    "name": "neemdighi",
    "location": null,
    "routes": [
      "route70"
    ]
  },
  {
    "name": "dumurjola",
    "location": null,
    "routes": [
      "route72"
    ]
  },
  {
    "name": "ichapur more",
    "location": null,
    "routes": [
      "route72",
      "route75",
      "route85",
      "routeRT-26",
      "routeRT-3",
      "routeRT-3A"
    ]
  },
  {
    "name": "nazat",
    "location": null,
    "routes": [
      "route72",
      "routeDN12/1"
    ]
  },
  {
    "name": "bhabla station",
    "location": null,
    "routes": [
      "route72",
      "route72A"
    ]
  },
  {
    "name": "pifa bazar",
    "location": null,
    "routes": [
      "route72",
      "route72A"
    ]
  },
  {
    "name": "bhebia chowmatha",
    "location": null,
    "routes": [
      "route72",
      "route72A",
      "routeDN12/1",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "rajapur",
    "location": null,
    "routes": [
      "route72",
      "routeE43"
    ]
  },
  {
    "name": "kharampur",
    "location": null,
    "routes": [
      "route72"
    ]
  },
  {
    "name": "akhratala",
    "location": null,
    "routes": [
      "route72"
    ]
  },
  {
    "name": "metekhali",
    "location": null,
    "routes": [
      "route72"
    ]
  },
  {
    "name": "dhamakhali",
    "location": null,
    "routes": [
      "route72A",
      "routeDN16/1",
      "routeMM7",
      "routesd-85",
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "nimchi bazar",
    "location": null,
    "routes": [
      "route72A"
    ]
  },
  {
    "name": "chaital ghat",
    "location": null,
    "routes": [
      "route72A",
      "routeMM7",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "malancha",
    "location": null,
    "routes": [
      "route72A",
      "routeDN16/1",
      "routeMM7",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "boyermari",
    "location": null,
    "routes": [
      "route72A",
      "routeDN16/1",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "agarhati",
    "location": null,
    "routes": [
      "route72A",
      "routeDN16/1"
    ]
  },
  {
    "name": "sarberia",
    "location": null,
    "routes": [
      "route72A",
      "routeDN16/1",
      "routeMM7",
      "routesd-24",
      "routesd-85",
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "habra",
    "location": null,
    "routes": [
      "route73",
      "routeDN21",
      "routeMM5"
    ]
  },
  {
    "name": "naihati",
    "location": null,
    "routes": [
      "route73",
      "routeDN-5"
    ]
  },
  {
    "name": "kalyangarh",
    "location": null,
    "routes": [
      "route73",
      "routeDN26",
      "routeMN3"
    ]
  },
  {
    "name": "kachua more",
    "location": null,
    "routes": [
      "route73",
      "routeDN26",
      "routeMN3",
      "routeMN6"
    ]
  },
  {
    "name": "8no. kalibari",
    "location": null,
    "routes": [
      "route73"
    ]
  },
  {
    "name": "magurkhali",
    "location": null,
    "routes": [
      "route73"
    ]
  },
  {
    "name": "iswarigacha",
    "location": null,
    "routes": [
      "route73"
    ]
  },
  {
    "name": "awalsiddhi",
    "location": null,
    "routes": [
      "route73",
      "route87",
      "route88",
      "routeMM5"
    ]
  },
  {
    "name": "adhata more",
    "location": null,
    "routes": [
      "route73",
      "route87",
      "route88"
    ]
  },
  {
    "name": "shikra more",
    "location": null,
    "routes": [
      "route73"
    ]
  },
  {
    "name": "dariapur",
    "location": null,
    "routes": [
      "route73"
    ]
  },
  {
    "name": "nima terasta",
    "location": null,
    "routes": [
      "route73"
    ]
  },
  {
    "name": "hamidpur",
    "location": null,
    "routes": [
      "route73",
      "route87A"
    ]
  },
  {
    "name": "kuliagarh",
    "location": null,
    "routes": [
      "route73"
    ]
  },
  {
    "name": "saheb colony",
    "location": null,
    "routes": [
      "route73",
      "routeDN-5"
    ]
  },
  {
    "name": "kadamtala",
    "location": null,
    "routes": [
      "route75",
      "routeE43",
      "routeE53",
      "routeRT-3",
      "routeKadamtala - Newtown"
    ]
  },
  {
    "name": "raipur",
    "location": null,
    "routes": [
      "route75"
    ]
  },
  {
    "name": "dongaria",
    "location": null,
    "routes": [
      "route75",
      "routeSD-26",
      "routeSD-30"
    ]
  },
  {
    "name": "nodakhali",
    "location": null,
    "routes": [
      "route75",
      "routeSD-26"
    ]
  },
  {
    "name": "bakhrahat",
    "location": null,
    "routes": [
      "route75",
      "routeSD-26"
    ]
  },
  {
    "name": "bibirhat",
    "location": null,
    "routes": [
      "route75",
      "routeSD-26",
      "routeSD-8"
    ]
  },
  {
    "name": "shamukpota",
    "location": null,
    "routes": [
      "route75",
      "routeSD-26",
      "routeSD-8"
    ]
  },
  {
    "name": "shamali",
    "location": null,
    "routes": [
      "route75",
      "routeSD-26",
      "routeSD-8"
    ]
  },
  {
    "name": "rasapunja",
    "location": null,
    "routes": [
      "route75",
      "routeSD-26",
      "routeSD-8"
    ]
  },
  {
    "name": "hanspukur",
    "location": null,
    "routes": [
      "route75",
      "routeSD-26",
      "routeSD-8"
    ]
  },
  {
    "name": "khasnan",
    "location": null,
    "routes": [
      "route76"
    ]
  },
  {
    "name": "udang bazar",
    "location": null,
    "routes": [
      "route76"
    ]
  },
  {
    "name": "agunshi more",
    "location": null,
    "routes": [
      "route76"
    ]
  },
  {
    "name": "harop bazar",
    "location": null,
    "routes": [
      "route76"
    ]
  },
  {
    "name": "khadinan",
    "location": null,
    "routes": [
      "route76"
    ]
  },
  {
    "name": "manikpur",
    "location": null,
    "routes": [
      "route77"
    ]
  },
  {
    "name": "dhulorbandh",
    "location": null,
    "routes": [
      "route77",
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "ranihati",
    "location": null,
    "routes": [
      "route77",
      "route79",
      "routeE43",
      "routeE53",
      "routeRT-13",
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBagnan - Eco Space",
      "routeBashirhat - Gadiara",
      "routeDeulti - Saltlake Karunamoyee",
      "routeGadiara - Rajarhat",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "dhulagarh",
    "location": null,
    "routes": [
      "route77",
      "route79",
      "routeE43",
      "routeE53",
      "routeRT-13",
      "routeRT-13A",
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBagnan - Eco Space",
      "routeBashirhat - Gadiara",
      "routeDeulti - Saltlake Karunamoyee",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeDhulagarh - Unitech",
      "routeGadiara - Rajarhat",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "batanagar",
    "location": null,
    "routes": [
      "route77A",
      "routeS-126"
    ]
  },
  {
    "name": "bata more",
    "location": null,
    "routes": [
      "route77A",
      "route77A (No Bata)",
      "routeS-126",
      "routeSD-30"
    ]
  },
  {
    "name": "birlapur",
    "location": null,
    "routes": [
      "route77A (No Bata)"
    ]
  },
  {
    "name": "calcium more",
    "location": null,
    "routes": [
      "route77A (No Bata)",
      "routeSD-30"
    ]
  },
  {
    "name": "birla more",
    "location": null,
    "routes": [
      "route77A (No Bata)",
      "routeSD-30"
    ]
  },
  {
    "name": "charial more",
    "location": null,
    "routes": [
      "route77A (No Bata)",
      "routeSD-30"
    ]
  },
  {
    "name": "budge budge",
    "location": null,
    "routes": [
      "route77A (No Bata)",
      "routeSD-30"
    ]
  },
  {
    "name": "nungi more",
    "location": null,
    "routes": [
      "route77A (No Bata)",
      "routeSD-30"
    ]
  },
  {
    "name": "barrackpore court",
    "location": null,
    "routes": [
      "route78",
      "route81",
      "route85",
      "routeDN19",
      "routeMM5"
    ]
  },
  {
    "name": "titagarh",
    "location": null,
    "routes": [
      "route78",
      "route81/1",
      "routeMM3",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "khardah",
    "location": null,
    "routes": [
      "route78",
      "route81/1",
      "routeMM3",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "joypur",
    "location": null,
    "routes": [
      "route78"
    ]
  },
  {
    "name": "mankur more",
    "location": null,
    "routes": [
      "route78"
    ]
  },
  {
    "name": "patinan",
    "location": null,
    "routes": [
      "route78"
    ]
  },
  {
    "name": "kalyanpur",
    "location": null,
    "routes": [
      "route78"
    ]
  },
  {
    "name": "kulepairi",
    "location": null,
    "routes": [
      "route78"
    ]
  },
  {
    "name": "khalna bazar",
    "location": null,
    "routes": [
      "route78"
    ]
  },
  {
    "name": "khejurdaha",
    "location": null,
    "routes": [
      "route78"
    ]
  },
  {
    "name": "rahara bazar",
    "location": null,
    "routes": [
      "route78/1"
    ]
  },
  {
    "name": "parthapur",
    "location": null,
    "routes": [
      "route78/1"
    ]
  },
  {
    "name": "natagarh",
    "location": null,
    "routes": [
      "route78/1"
    ]
  },
  {
    "name": "indralok more",
    "location": null,
    "routes": [
      "route78/1"
    ]
  },
  {
    "name": "panchla",
    "location": null,
    "routes": [
      "route79",
      "routeBagnan - Eco Space",
      "routeBashirhat - Gadiara",
      "routeDeulti - Saltlake Karunamoyee",
      "routeGadiara - Rajarhat",
      "routeMatapara - Newtown",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "dhamisa",
    "location": null,
    "routes": [
      "route79"
    ]
  },
  {
    "name": "jalan complex",
    "location": null,
    "routes": [
      "route79",
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeDhulagarh - Sealdah",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "ankurhati",
    "location": null,
    "routes": [
      "route79",
      "routeE43",
      "routeE53",
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeDhulagarh - Unitech",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "nibra more",
    "location": null,
    "routes": [
      "route79"
    ]
  },
  {
    "name": "fishery gate",
    "location": null,
    "routes": [
      "route81"
    ]
  },
  {
    "name": "colony more",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "route87",
      "route87A",
      "route88",
      "routeDN-5",
      "routeDN-8",
      "routeDN19",
      "routeDN43",
      "routeDN47"
    ]
  },
  {
    "name": "barbaria",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5"
    ]
  },
  {
    "name": "jagannathpur",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5",
      "routeDN19",
      "routeMM3"
    ]
  },
  {
    "name": "kokapur",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5",
      "routeMM3"
    ]
  },
  {
    "name": "rangapur",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5",
      "routeMM3"
    ]
  },
  {
    "name": "neelgunge",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5"
    ]
  },
  {
    "name": "mathrangi",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5"
    ]
  },
  {
    "name": "chapuria",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5",
      "routeDN19",
      "routeMM3"
    ]
  },
  {
    "name": "debpukur",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5",
      "routeMM3"
    ]
  },
  {
    "name": "mohanpur",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5",
      "routeDN19",
      "routeM-15",
      "routeM-16",
      "routeMM3",
      "routeMM6",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-18",
      "routeSD-19",
      "routeSD-82"
    ]
  },
  {
    "name": "wireless more",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "routeDN-5"
    ]
  },
  {
    "name": "subhash colony",
    "location": null,
    "routes": [
      "route81",
      "route81/1"
    ]
  },
  {
    "name": "barrackpore station",
    "location": null,
    "routes": [
      "route81",
      "route81/1",
      "route85",
      "routeDN19",
      "routeMM3",
      "routeMM5",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "falta",
    "location": null,
    "routes": [
      "route83"
    ]
  },
  {
    "name": "sahararhat",
    "location": null,
    "routes": [
      "route83",
      "routeM-16",
      "routeSD-14",
      "routeSD-30"
    ]
  },
  {
    "name": "belsingha",
    "location": null,
    "routes": [
      "route83",
      "routeSD-14"
    ]
  },
  {
    "name": "harindanga",
    "location": null,
    "routes": [
      "route83",
      "routeSD-14"
    ]
  },
  {
    "name": "dighirpar",
    "location": null,
    "routes": [
      "route83",
      "routeSD-14"
    ]
  },
  {
    "name": "kanchrapara",
    "location": null,
    "routes": [
      "route85",
      "route88"
    ]
  },
  {
    "name": "bagmore",
    "location": null,
    "routes": [
      "route85"
    ]
  },
  {
    "name": "halisahar",
    "location": null,
    "routes": [
      "route85"
    ]
  },
  {
    "name": "boldeghata",
    "location": null,
    "routes": [
      "route85",
      "routeMN6"
    ]
  },
  {
    "name": "garifa road",
    "location": null,
    "routes": [
      "route85"
    ]
  },
  {
    "name": "naihati station",
    "location": null,
    "routes": [
      "route85",
      "route87A"
    ]
  },
  {
    "name": "bhatpara",
    "location": null,
    "routes": [
      "route85",
      "route87A"
    ]
  },
  {
    "name": "kankinara",
    "location": null,
    "routes": [
      "route85",
      "route87A"
    ]
  },
  {
    "name": "jagatdal",
    "location": null,
    "routes": [
      "route85"
    ]
  },
  {
    "name": "authpur",
    "location": null,
    "routes": [
      "route85"
    ]
  },
  {
    "name": "shyamnagar",
    "location": null,
    "routes": [
      "route85",
      "route91A"
    ]
  },
  {
    "name": "palta bazar",
    "location": null,
    "routes": [
      "route85"
    ]
  },
  {
    "name": "jaguli",
    "location": null,
    "routes": [
      "route87"
    ]
  },
  {
    "name": "moyna checkpost",
    "location": null,
    "routes": [
      "route87",
      "route87A",
      "route88"
    ]
  },
  {
    "name": "khilkapur",
    "location": null,
    "routes": [
      "route87",
      "route87A",
      "route88",
      "routeMM3"
    ]
  },
  {
    "name": "mirhati more",
    "location": null,
    "routes": [
      "route87",
      "route87A",
      "route88"
    ]
  },
  {
    "name": "kamdebpur",
    "location": null,
    "routes": [
      "route87",
      "route87A",
      "route88",
      "routeMM5"
    ]
  },
  {
    "name": "amdanga",
    "location": null,
    "routes": [
      "route87",
      "route87A",
      "route88",
      "routeMM5"
    ]
  },
  {
    "name": "rahana bazar",
    "location": null,
    "routes": [
      "route87",
      "route88"
    ]
  },
  {
    "name": "kanchiara",
    "location": null,
    "routes": [
      "route87",
      "route88"
    ]
  },
  {
    "name": "bethpukur",
    "location": null,
    "routes": [
      "route87",
      "route88"
    ]
  },
  {
    "name": "gadamara",
    "location": null,
    "routes": [
      "route87",
      "route88"
    ]
  },
  {
    "name": "kapileshwar",
    "location": null,
    "routes": [
      "route87",
      "route88",
      "routeDN26"
    ]
  },
  {
    "name": "rafipur",
    "location": null,
    "routes": [
      "route87A"
    ]
  },
  {
    "name": "padmalavpur",
    "location": null,
    "routes": [
      "route87A"
    ]
  },
  {
    "name": "rambati",
    "location": null,
    "routes": [
      "route87A"
    ]
  },
  {
    "name": "jaguli more",
    "location": null,
    "routes": [
      "route88"
    ]
  },
  {
    "name": "mondourie",
    "location": null,
    "routes": [
      "route88"
    ]
  },
  {
    "name": "charapole",
    "location": null,
    "routes": [
      "route88"
    ]
  },
  {
    "name": "kampa more",
    "location": null,
    "routes": [
      "route88"
    ]
  },
  {
    "name": "bhangore",
    "location": null,
    "routes": [
      "route91"
    ]
  },
  {
    "name": "bazetaraf",
    "location": null,
    "routes": [
      "route91",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "polerhat",
    "location": null,
    "routes": [
      "route91",
      "routeSD-11/1",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "kashipur",
    "location": null,
    "routes": [
      "route91"
    ]
  },
  {
    "name": "shonepur",
    "location": null,
    "routes": [
      "route91",
      "routeKB22"
    ]
  },
  {
    "name": "kanthalia",
    "location": null,
    "routes": [
      "route91"
    ]
  },
  {
    "name": "haroa bridge",
    "location": null,
    "routes": [
      "route91A"
    ]
  },
  {
    "name": "chandpur",
    "location": null,
    "routes": [
      "route91A"
    ]
  },
  {
    "name": "dhibdhiba",
    "location": null,
    "routes": [
      "route91A"
    ]
  },
  {
    "name": "pirnagar",
    "location": null,
    "routes": [
      "route91A"
    ]
  },
  {
    "name": "payragacha",
    "location": null,
    "routes": [
      "route91A"
    ]
  },
  {
    "name": "dhanpota",
    "location": null,
    "routes": [
      "route91A"
    ]
  },
  {
    "name": "mazompur",
    "location": null,
    "routes": [
      "route91A"
    ]
  },
  {
    "name": "pakapole",
    "location": null,
    "routes": [
      "route91B"
    ]
  },
  {
    "name": "bongaon",
    "location": null,
    "routes": [
      "route92",
      "route92A",
      "route95",
      "route96C",
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "boyra",
    "location": null,
    "routes": [
      "route92",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "motigunge",
    "location": null,
    "routes": [
      "route92",
      "route92A",
      "route95"
    ]
  },
  {
    "name": "ghatboar",
    "location": null,
    "routes": [
      "route92",
      "route92A"
    ]
  },
  {
    "name": "katlamari",
    "location": null,
    "routes": [
      "route92",
      "route92A"
    ]
  },
  {
    "name": "chanda",
    "location": null,
    "routes": [
      "route92",
      "route92A",
      "route95"
    ]
  },
  {
    "name": "ganrapota",
    "location": null,
    "routes": [
      "route92",
      "route92A"
    ]
  },
  {
    "name": "patshimulia",
    "location": null,
    "routes": [
      "route92",
      "route92A"
    ]
  },
  {
    "name": "asharu bazar",
    "location": null,
    "routes": [
      "route92",
      "route92A"
    ]
  },
  {
    "name": "helencha",
    "location": null,
    "routes": [
      "route92",
      "route92A",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bagdah",
    "location": null,
    "routes": [
      "route92",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "meherani",
    "location": null,
    "routes": [
      "route92"
    ]
  },
  {
    "name": "duttaphulia",
    "location": null,
    "routes": [
      "route92A",
      "route96C"
    ]
  },
  {
    "name": "choatia",
    "location": null,
    "routes": [
      "route92A"
    ]
  },
  {
    "name": "sindrani",
    "location": null,
    "routes": [
      "route92A",
      "route96C"
    ]
  },
  {
    "name": "chowmuha",
    "location": null,
    "routes": [
      "route93"
    ]
  },
  {
    "name": "krishnamati",
    "location": null,
    "routes": [
      "route93",
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kemia more",
    "location": null,
    "routes": [
      "route93"
    ]
  },
  {
    "name": "gustia more",
    "location": null,
    "routes": [
      "route93"
    ]
  },
  {
    "name": "kanchantala",
    "location": null,
    "routes": [
      "route93"
    ]
  },
  {
    "name": "badu bazar",
    "location": null,
    "routes": [
      "route93"
    ]
  },
  {
    "name": "habra station",
    "location": null,
    "routes": [
      "route95",
      "routeDN26",
      "routeDN35",
      "routeDN44",
      "routeMM5",
      "routeMN3",
      "routeMN6",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "chapaberia",
    "location": null,
    "routes": [
      "route95",
      "route96C"
    ]
  },
  {
    "name": "chalki bazar",
    "location": null,
    "routes": [
      "route95",
      "route96C"
    ]
  },
  {
    "name": "gopalnagar",
    "location": null,
    "routes": [
      "route95"
    ]
  },
  {
    "name": "pallagram",
    "location": null,
    "routes": [
      "route95"
    ]
  },
  {
    "name": "nahata",
    "location": null,
    "routes": [
      "route95",
      "routeMN3"
    ]
  },
  {
    "name": "nimtala",
    "location": null,
    "routes": [
      "route95",
      "routeSD-3",
      "routeSD-33"
    ]
  },
  {
    "name": "nagarukhra",
    "location": null,
    "routes": [
      "route95",
      "routeMN3"
    ]
  },
  {
    "name": "hapania",
    "location": null,
    "routes": [
      "route95",
      "routeMN3"
    ]
  },
  {
    "name": "jhikra bazar",
    "location": null,
    "routes": [
      "route95"
    ]
  },
  {
    "name": "banbania",
    "location": null,
    "routes": [
      "route95"
    ]
  },
  {
    "name": "sreepally",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "mamudpur",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "goalbagi",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "nataberia",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "malipota",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "bajitpur",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "beri gopalpur",
    "location": null,
    "routes": [
      "route96C",
      "routeMN6"
    ]
  },
  {
    "name": "puratan bongaon",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "angrail",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "barnaberia",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "jhawdanga",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "kahankia",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "pabnapara",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "purandarur",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "subidpur",
    "location": null,
    "routes": [
      "route96C"
    ]
  },
  {
    "name": "nimta bazar",
    "location": null,
    "routes": [
      "routeDN-2",
      "routeS-185"
    ]
  },
  {
    "name": "unitech gate 2",
    "location": null,
    "routes": [
      "routeDN-2/1",
      "routeRT-42",
      "routeS-184",
      "routeDhulagarh - Unitech"
    ]
  },
  {
    "name": "d.l.f. 2",
    "location": null,
    "routes": [
      "routeDN-2/1",
      "routeRT-42",
      "routeS-184"
    ]
  },
  {
    "name": "eco space",
    "location": null,
    "routes": [
      "routeDN-2/1",
      "routeRT-42",
      "routeS-184",
      "routeBagnan - Eco Space",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeDhulagarh - Unitech",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "aliah university",
    "location": null,
    "routes": [
      "routeDN-2/1",
      "routeRT-42",
      "routeS-184",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeDhulagarh - Unitech",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "eco park",
    "location": null,
    "routes": [
      "routeDN-2/1",
      "routeDN46",
      "routeDN47",
      "routeS-184",
      "routeBarasat - Santragachi",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeDeulti - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "nababpur",
    "location": null,
    "routes": [
      "routeDN-2/1"
    ]
  },
  {
    "name": "durganagar",
    "location": null,
    "routes": [
      "routeDN-2/1",
      "routeDN-9/1",
      "routeDN44",
      "routeAmta - Airport Gate 1",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "mathkal",
    "location": null,
    "routes": [
      "routeDN-2/1",
      "routeDN-9/1"
    ]
  },
  {
    "name": "dunlop bridge",
    "location": null,
    "routes": [
      "routeDN-2/1",
      "routeDN-9/1",
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kundubari",
    "location": null,
    "routes": [
      "routeDN-5"
    ]
  },
  {
    "name": "babanpur",
    "location": null,
    "routes": [
      "routeDN-5"
    ]
  },
  {
    "name": "kayrapur",
    "location": null,
    "routes": [
      "routeDN-5"
    ]
  },
  {
    "name": "muthurapur",
    "location": null,
    "routes": [
      "routeDN-5"
    ]
  },
  {
    "name": "kowgachi",
    "location": null,
    "routes": [
      "routeDN-5"
    ]
  },
  {
    "name": "hansia",
    "location": null,
    "routes": [
      "routeDN-5"
    ]
  },
  {
    "name": "basudebpur",
    "location": null,
    "routes": [
      "routeDN-5"
    ]
  },
  {
    "name": "gurdah",
    "location": null,
    "routes": [
      "routeDN-5"
    ]
  },
  {
    "name": "keutia",
    "location": null,
    "routes": [
      "routeDN-5"
    ]
  },
  {
    "name": "banstala",
    "location": null,
    "routes": [
      "routeDN-5",
      "routeMN6"
    ]
  },
  {
    "name": "dogachia",
    "location": null,
    "routes": [
      "routeDN-5",
      "routeDN12",
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bongaon motigunge bus stand",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "bongaon 78e bus stand",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "bongaon 1 no. railgate bazar",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN44"
    ]
  },
  {
    "name": "golaknagar",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "kalupur",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN35",
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "mondolpara",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "debipur",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN44",
      "routeSD-39",
      "routeSD-53",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "chandpara bazar",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bokchora",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN44",
      "routeMM7",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "gaighata p.s.",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "amkola",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "matikumra",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "shripur mallikpur",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "hatkhola bazar",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "gobardanga goipur",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "kumorpally",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "gobardanga bazar",
    "location": null,
    "routes": [
      "routeDN12",
      "routeMN6"
    ]
  },
  {
    "name": "nakpul",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN35",
      "routeMN6"
    ]
  },
  {
    "name": "machhlandapur station",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN12/1",
      "routeDN35"
    ]
  },
  {
    "name": "biswashati bazar",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "shimulpur senbari",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "magra bazar",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "bagjola bazar",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN21"
    ]
  },
  {
    "name": "haidarpur",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "rudrapur",
    "location": null,
    "routes": [
      "routeDN12",
      "routeDN12/1"
    ]
  },
  {
    "name": "baduria bazar",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "taragunia",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "gadarati",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "maitrobagan",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "basirhat 72 bus stand",
    "location": null,
    "routes": [
      "routeDN12"
    ]
  },
  {
    "name": "joygachi",
    "location": null,
    "routes": [
      "routeDN12/1"
    ]
  },
  {
    "name": "payragachi",
    "location": null,
    "routes": [
      "routeDN12/1"
    ]
  },
  {
    "name": "nakpul bazar",
    "location": null,
    "routes": [
      "routeDN12/1"
    ]
  },
  {
    "name": "bagjola",
    "location": null,
    "routes": [
      "routeDN12/1",
      "routeMM6/1"
    ]
  },
  {
    "name": "jangalpur",
    "location": null,
    "routes": [
      "routeDN12/1",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "baduria",
    "location": null,
    "routes": [
      "routeDN12/1",
      "routeDN18",
      "routeDN21"
    ]
  },
  {
    "name": "harispur",
    "location": null,
    "routes": [
      "routeDN12/1"
    ]
  },
  {
    "name": "trimohani",
    "location": null,
    "routes": [
      "routeDN12/1"
    ]
  },
  {
    "name": "basirhat chowmatha",
    "location": null,
    "routes": [
      "routeDN12/1"
    ]
  },
  {
    "name": "bhyabla halt",
    "location": null,
    "routes": [
      "routeDN12/1",
      "routeMM7"
    ]
  },
  {
    "name": "pifa",
    "location": null,
    "routes": [
      "routeDN12/1"
    ]
  },
  {
    "name": "murarishah chowmatha",
    "location": null,
    "routes": [
      "routeDN12/1",
      "routeMM7"
    ]
  },
  {
    "name": "dakshin akhratala",
    "location": null,
    "routes": [
      "routeDN12/1"
    ]
  },
  {
    "name": "mitekhali",
    "location": null,
    "routes": [
      "routeDN12/1"
    ]
  },
  {
    "name": "boshirhat boardghat",
    "location": null,
    "routes": [
      "routeDN13"
    ]
  },
  {
    "name": "hakimpur",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "sadarpur",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "madartala",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "kendua bazar",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "malatipur",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "korapara",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "ghoraras beltala",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "gopalpur more",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "harishpur",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "basirhat trimohini",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "basirhat puratan bazar",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "basirhat court",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "sangrampur",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN38"
    ]
  },
  {
    "name": "biramnagar",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN38"
    ]
  },
  {
    "name": "gandharbapur",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN38"
    ]
  },
  {
    "name": "katiahat bazar",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "aturia",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN28",
      "routeDN38"
    ]
  },
  {
    "name": "goaldaha",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "gokulpur",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "tentulia",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN35"
    ]
  },
  {
    "name": "hathatgange",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN35",
      "routeDN38"
    ]
  },
  {
    "name": "swarupnagar bdo office",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "malangapara",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN35"
    ]
  },
  {
    "name": "jorabattala",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "sarapul",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN35",
      "routeDN38"
    ]
  },
  {
    "name": "dakbungalow bazar",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "nirman",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A"
    ]
  },
  {
    "name": "duttapara",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN35"
    ]
  },
  {
    "name": "bithari",
    "location": null,
    "routes": [
      "routeDN13",
      "routeDN13A",
      "routeDN35"
    ]
  },
  {
    "name": "haroa (upto kholapota)",
    "location": null,
    "routes": [
      "routeDN13A"
    ]
  },
  {
    "name": "barasat dakbunglow",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeDN43"
    ]
  },
  {
    "name": "doltala",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeDN17",
      "routeDN18",
      "routeDN44",
      "routeDN47",
      "routeM10 (AC Corporate)",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "airport gate 2",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeDN47",
      "routeKB21",
      "routeAmta - Airport Gate 1",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBoyra - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "airport gate 4",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeDN47",
      "routeKB21"
    ]
  },
  {
    "name": "tegharia",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeS-172",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia"
    ]
  },
  {
    "name": "ultodanga",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeDN17",
      "routeKB16",
      "routeKB21",
      "routeGaria - Ultodanga"
    ]
  },
  {
    "name": "bengal chemical",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeMM3",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria - Ultodanga",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "mani square",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeM10 (AC Corporate)",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "kadapara",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeS-173",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria - Ultodanga",
      "routeGaria Station - Kolkata Station"
    ]
  },
  {
    "name": "mathpukur",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeRT-42",
      "routeS-166",
      "routeBarasat - Santragachi",
      "routeDhulagarh - Newtown",
      "routeGaria - Ultodanga",
      "routeKamalgazi - Dankuni Housing",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "bantala",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "bamanghata",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "paglahat",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeRajabazar (dankuni) - Baburhat"
    ]
  },
  {
    "name": "bamunia",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routesd-24"
    ]
  },
  {
    "name": "chandipur",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeDN35",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "ghoshpur",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routesd-24",
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "ghusighata",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "bamanpukur",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeRajabazar (dankuni) - Baburhat",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "kushangra",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routesd-24",
      "routeRajabazar (dankuni) - Baburhat"
    ]
  },
  {
    "name": "minakhan",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routesd-24",
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeMalancha - Kolkata Station",
      "routeRajabazar (dankuni) - Baburhat",
      "routeRajabazar - Hasnabad",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "joygram",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routesd-24",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "mathbari",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeMM7",
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "rajbari",
    "location": null,
    "routes": [
      "routeDN16/1"
    ]
  },
  {
    "name": "shirishtala",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeKB16"
    ]
  },
  {
    "name": "kanmari more",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeMM7",
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "fakirtala",
    "location": null,
    "routes": [
      "routeDN16/1"
    ]
  },
  {
    "name": "rampur",
    "location": null,
    "routes": [
      "routeDN16/1",
      "routeMM7",
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "barasat titumir bus stand",
    "location": null,
    "routes": [
      "routeDN17",
      "routeDN28",
      "routeDN35",
      "routeMN3",
      "routeMN6"
    ]
  },
  {
    "name": "dakbungalow more",
    "location": null,
    "routes": [
      "routeDN17",
      "routeDN21",
      "routeDN44",
      "routeDN47",
      "routeM10 (AC Corporate)",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "sukantanagar",
    "location": null,
    "routes": [
      "routeDN17",
      "routeKB21"
    ]
  },
  {
    "name": "michaelnagar",
    "location": null,
    "routes": [
      "routeDN17",
      "routeDN44",
      "routeKB21",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia"
    ]
  },
  {
    "name": "bankra",
    "location": null,
    "routes": [
      "routeDN17",
      "routeE43",
      "routeE53",
      "routeKB21",
      "routeRT-27"
    ]
  },
  {
    "name": "sarat colony",
    "location": null,
    "routes": [
      "routeDN17",
      "routeKB21"
    ]
  },
  {
    "name": "airport (covers all the gates)",
    "location": null,
    "routes": [
      "routeDN17"
    ]
  },
  {
    "name": "teghoria",
    "location": null,
    "routes": [
      "routeDN17",
      "routeKB21",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "fulbagan",
    "location": null,
    "routes": [
      "routeDN17"
    ]
  },
  {
    "name": "beleghata cit more",
    "location": null,
    "routes": [
      "routeDN17",
      "routeBarasat (titumir Bus Stand) - Santragachi"
    ]
  },
  {
    "name": "sarkarbazar",
    "location": null,
    "routes": [
      "routeDN17"
    ]
  },
  {
    "name": "sales tax",
    "location": null,
    "routes": [
      "routeDN17",
      "routeKB12",
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "munshibazar",
    "location": null,
    "routes": [
      "routeDN17"
    ]
  },
  {
    "name": "sealdah court",
    "location": null,
    "routes": [
      "routeDN17",
      "routeKB12",
      "routeBargachia - Sealdah Court",
      "routeDhulagarh - Sealdah",
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "nrs hospital",
    "location": null,
    "routes": [
      "routeDN17",
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "akashbani bhaban",
    "location": null,
    "routes": [
      "routeDN17"
    ]
  },
  {
    "name": "rg kar hospital",
    "location": null,
    "routes": [
      "routeDN18",
      "routeKB22",
      "routeGaria Station - Kolkata Station"
    ]
  },
  {
    "name": "barasat champadali",
    "location": null,
    "routes": [
      "routeDN18",
      "routeDN21",
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "golabari",
    "location": null,
    "routes": [
      "routeDN18",
      "routeMM6",
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "beliaghata bazar",
    "location": null,
    "routes": [
      "routeDN18"
    ]
  },
  {
    "name": "jadurhati",
    "location": null,
    "routes": [
      "routeDN18",
      "routeMM6/1"
    ]
  },
  {
    "name": "raghunathpur",
    "location": null,
    "routes": [
      "routeDN18"
    ]
  },
  {
    "name": "barrackpore cantonment",
    "location": null,
    "routes": [
      "routeDN19",
      "routeMM5"
    ]
  },
  {
    "name": "barrackpore chiria more",
    "location": null,
    "routes": [
      "routeDN19",
      "routeMM3"
    ]
  },
  {
    "name": "nonachandanpukur",
    "location": null,
    "routes": [
      "routeDN19",
      "routeMM3",
      "routeMM5"
    ]
  },
  {
    "name": "wireless gate",
    "location": null,
    "routes": [
      "routeDN19",
      "routeMM3",
      "routeMM5"
    ]
  },
  {
    "name": "gheedah",
    "location": null,
    "routes": [
      "routeDN19"
    ]
  },
  {
    "name": "mathrangi more",
    "location": null,
    "routes": [
      "routeDN19"
    ]
  },
  {
    "name": "nilgunge hat",
    "location": null,
    "routes": [
      "routeDN19"
    ]
  },
  {
    "name": "kazibari",
    "location": null,
    "routes": [
      "routeDN19"
    ]
  },
  {
    "name": "saltlake karunamoyee",
    "location": null,
    "routes": [
      "routeDN21",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeBerachampa - Saltlake Karunamoyee",
      "routeBoyra - Saltlake Karunamoyee",
      "routeDeulti - Saltlake Karunamoyee",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "mogra",
    "location": null,
    "routes": [
      "routeDN21"
    ]
  },
  {
    "name": "kumra - kashipur",
    "location": null,
    "routes": [
      "routeDN21"
    ]
  },
  {
    "name": "koipukur",
    "location": null,
    "routes": [
      "routeDN21"
    ]
  },
  {
    "name": "banipur",
    "location": null,
    "routes": [
      "routeDN21"
    ]
  },
  {
    "name": "ashoknagar",
    "location": null,
    "routes": [
      "routeDN21",
      "routeMM5"
    ]
  },
  {
    "name": "guma",
    "location": null,
    "routes": [
      "routeDN21"
    ]
  },
  {
    "name": "lakshmipool",
    "location": null,
    "routes": [
      "routeDN21"
    ]
  },
  {
    "name": "bira",
    "location": null,
    "routes": [
      "routeDN21"
    ]
  },
  {
    "name": "duttapukur",
    "location": null,
    "routes": [
      "routeDN21",
      "routeDN35",
      "routeDN44",
      "routeMM3",
      "routeMN3",
      "routeMN6",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "banumgachi",
    "location": null,
    "routes": [
      "routeDN21"
    ]
  },
  {
    "name": "vip road",
    "location": null,
    "routes": [
      "routeDN21"
    ]
  },
  {
    "name": "gaighata (habra)",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "kalyani (jagulia)",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "joygachhi",
    "location": null,
    "routes": [
      "routeDN26",
      "routeDN35",
      "routeDN44",
      "routeMN6",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "habra mansabari",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "radha chemical more",
    "location": null,
    "routes": [
      "routeDN26",
      "routeMN6"
    ]
  },
  {
    "name": "kankpul school",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "kankpul more",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "daulatpur",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "sendanga",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "pumlia bazar",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "noorpur",
    "location": null,
    "routes": [
      "routeDN26",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-9"
    ]
  },
  {
    "name": "shrikrishnapur",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "amragachhi",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "rajberia",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "jaguli anandapur",
    "location": null,
    "routes": [
      "routeDN26"
    ]
  },
  {
    "name": "haroa",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "kazipara",
    "location": null,
    "routes": [
      "routeDN28",
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "ctc depot",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "shimultala",
    "location": null,
    "routes": [
      "routeDN28",
      "routeSD-5"
    ]
  },
  {
    "name": "bamunmura",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "pirgacha",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "goakhali",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "bokunda",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "baidyapur kanchkal",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "beliaghata bridge",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "biswanathpur",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "debaloy hadipur post office",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "hadipur colony",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "haroa railgate",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "hamadama",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "adampur",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "piyara",
    "location": null,
    "routes": [
      "routeDN28"
    ]
  },
  {
    "name": "nabatkati",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "kazipara railgate",
    "location": null,
    "routes": [
      "routeDN35",
      "routeMN3",
      "routeMN6"
    ]
  },
  {
    "name": "mondongathi",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "bira joypul chowmatha",
    "location": null,
    "routes": [
      "routeDN35",
      "routeMN3"
    ]
  },
  {
    "name": "guma chowmatha",
    "location": null,
    "routes": [
      "routeDN35",
      "routeDN44",
      "routeMN3",
      "routeMN6",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "khosdelpur",
    "location": null,
    "routes": [
      "routeDN35",
      "routeDN44",
      "routeMN3",
      "routeMN6",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "ashoknagar railgate",
    "location": null,
    "routes": [
      "routeDN35",
      "routeMN6"
    ]
  },
  {
    "name": "ashoknagar 5 no. more",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "habra deshbandhu park",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "saptapally more",
    "location": null,
    "routes": [
      "routeDN35",
      "routeDN44",
      "routeMN6",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "chongda more",
    "location": null,
    "routes": [
      "routeDN35",
      "routeDN44",
      "routeMN6",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "sonpukur",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "natunhat",
    "location": null,
    "routes": [
      "routeDN35",
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "bergum",
    "location": null,
    "routes": [
      "routeDN35",
      "routeMN6"
    ]
  },
  {
    "name": "jamtala boropole",
    "location": null,
    "routes": [
      "routeDN35",
      "routeMN6"
    ]
  },
  {
    "name": "mandalpur",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "chatra bazar",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "benar more",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "kayosa bazar",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "ramchandrapur bazar",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "mallickbari",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "nandibari",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "goalbathan",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "nityanandakati",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "balti",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "mallickpur tematha",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "hirghata",
    "location": null,
    "routes": [
      "routeDN35"
    ]
  },
  {
    "name": "bashirhat (malancha)",
    "location": null,
    "routes": [
      "routeDN38"
    ]
  },
  {
    "name": "taranipur",
    "location": null,
    "routes": [
      "routeDN38"
    ]
  },
  {
    "name": "kefayetkati",
    "location": null,
    "routes": [
      "routeDN38"
    ]
  },
  {
    "name": "katiahat",
    "location": null,
    "routes": [
      "routeDN38"
    ]
  },
  {
    "name": "tentulia bazar",
    "location": null,
    "routes": [
      "routeDN38",
      "routeSD-11/1"
    ]
  },
  {
    "name": "raghabkati",
    "location": null,
    "routes": [
      "routeDN38"
    ]
  },
  {
    "name": "gobindapur",
    "location": null,
    "routes": [
      "routeDN38"
    ]
  },
  {
    "name": "barasat moyna check post",
    "location": null,
    "routes": [
      "routeDN43"
    ]
  },
  {
    "name": "sodpur traffic more",
    "location": null,
    "routes": [
      "routeDN43"
    ]
  },
  {
    "name": "kanchkal",
    "location": null,
    "routes": [
      "routeDN43"
    ]
  },
  {
    "name": "ghola",
    "location": null,
    "routes": [
      "routeDN43"
    ]
  },
  {
    "name": "apc college",
    "location": null,
    "routes": [
      "routeDN43",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "hridaypur",
    "location": null,
    "routes": [
      "routeDN43",
      "routeM10 (AC Corporate)",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "yogendranath high school",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "panchpota school more",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "mondonpara",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "chandpara b.d.o. office",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "gaighata bazar",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bagna more",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "dharampur",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kolashim bazar",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kulpukur",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "hatthuba",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "ashoknagar station",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bira chowmatha",
    "location": null,
    "routes": [
      "routeDN44",
      "routeMN6",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "joypul bazar",
    "location": null,
    "routes": [
      "routeDN44",
      "routeMN6",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "mondonkathi",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "airport gate 3 gate",
    "location": null,
    "routes": [
      "routeDN44"
    ]
  },
  {
    "name": "belghoria expressway",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "pramodnagar",
    "location": null,
    "routes": [
      "routeDN44",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "baranagar road station",
    "location": null,
    "routes": [
      "routeDN44",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "belgharia teachers' colony",
    "location": null,
    "routes": [
      "routeDN46"
    ]
  },
  {
    "name": "nilgunge road",
    "location": null,
    "routes": [
      "routeDN46"
    ]
  },
  {
    "name": "rathtala",
    "location": null,
    "routes": [
      "routeDN46",
      "routeMM3",
      "routeSD-11/1",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "sinthi",
    "location": null,
    "routes": [
      "routeDN46",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "bidhannagar road station",
    "location": null,
    "routes": [
      "routeDN46",
      "routeGaria Station - Kolkata Station"
    ]
  },
  {
    "name": "hudco",
    "location": null,
    "routes": [
      "routeDN46",
      "routeKB16",
      "routeKB17",
      "routeKB22",
      "routeBoyra - Saltlake Karunamoyee",
      "routeGaria - Ultodanga",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "pnb",
    "location": null,
    "routes": [
      "routeDN46",
      "routeKB22",
      "routeBerachampa - Saltlake Karunamoyee",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "baisakhi",
    "location": null,
    "routes": [
      "routeDN46"
    ]
  },
  {
    "name": "sector v",
    "location": null,
    "routes": [
      "routeDN46",
      "routeKB12",
      "routeKB16",
      "routeBarasat - Santragachi",
      "routeDeulti - Saltlake Karunamoyee",
      "routeDhulagarh - Unitech"
    ]
  },
  {
    "name": "nazrul tirtha",
    "location": null,
    "routes": [
      "routeDN46",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeDhulagarh - Newtown"
    ]
  },
  {
    "name": "barasat algaria",
    "location": null,
    "routes": [
      "routeDN47"
    ]
  },
  {
    "name": "moyna",
    "location": null,
    "routes": [
      "routeDN47"
    ]
  },
  {
    "name": "kathgola",
    "location": null,
    "routes": [
      "routeDN47",
      "routeMM3"
    ]
  },
  {
    "name": "birati",
    "location": null,
    "routes": [
      "routeDN47",
      "routeM10 (AC Corporate)",
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "nawabpur",
    "location": null,
    "routes": [
      "routeDN47",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "jatragachi",
    "location": null,
    "routes": [
      "routeDN47",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "new town",
    "location": null,
    "routes": [
      "routeDN47",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeDhulagarh - Unitech"
    ]
  },
  {
    "name": "dlf",
    "location": null,
    "routes": [
      "routeDN47",
      "routeKB12",
      "routeKB16"
    ]
  },
  {
    "name": "godrej waterside",
    "location": null,
    "routes": [
      "routeDN47",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "technopolis",
    "location": null,
    "routes": [
      "routeDN47",
      "routeK1",
      "routeAmta - Newtown",
      "routeBagnan - Eco Space",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeDeulti - Saltlake Karunamoyee",
      "routeDhulagarh - Newtown",
      "routeGadiara - Rajarhat",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "wipro",
    "location": null,
    "routes": [
      "routeDN47",
      "routeKB16",
      "routeKB17",
      "routeKB22",
      "routeBagnan - Eco Space",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeDhulagarh - Newtown",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "tank no.10",
    "location": null,
    "routes": [
      "routeDN47",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "dihibhurshut",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "shanpur",
    "location": null,
    "routes": [
      "routeE43",
      "routeE53"
    ]
  },
  {
    "name": "salap",
    "location": null,
    "routes": [
      "routeE43",
      "routeE53",
      "routeK11",
      "routeAmta - Airport Gate 1",
      "routeBagnan - Eco Space",
      "routeBandar - Howrah Station",
      "routeBargachia - Sealdah Court",
      "routeDeulti - Saltlake Karunamoyee",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "nibra crossing",
    "location": null,
    "routes": [
      "routeE43",
      "routeE53",
      "routeDhulagarh - Newtown",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "gabberia",
    "location": null,
    "routes": [
      "routeE43",
      "routeE53",
      "routeSD-11/1",
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "manikpir",
    "location": null,
    "routes": [
      "routeE43",
      "routeE53",
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kaltala",
    "location": null,
    "routes": [
      "routeE43",
      "routeE53",
      "routesd-24",
      "routeSD-33",
      "routeSD-63",
      "routeSD-64"
    ]
  },
  {
    "name": "betai bandar more",
    "location": null,
    "routes": [
      "routeE43",
      "routeE53"
    ]
  },
  {
    "name": "khorop",
    "location": null,
    "routes": [
      "routeE43",
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "sehagori more",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "thaliya",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "nischintapur",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "binala",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "manashatala",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "shaoraberia",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "barda",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "chitrasenpur",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "kumarchak",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "purpat",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "udainarayanpur",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "kurchi",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "al ameen mission",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "lebutala",
    "location": null,
    "routes": [
      "routeE43"
    ]
  },
  {
    "name": "narit",
    "location": null,
    "routes": [
      "routeE53"
    ]
  },
  {
    "name": "jayanti",
    "location": null,
    "routes": [
      "routeE53"
    ]
  },
  {
    "name": "paschim gazipur",
    "location": null,
    "routes": [
      "routeE53"
    ]
  },
  {
    "name": "hatisala",
    "location": null,
    "routes": [
      "routeK1",
      "routeKB22"
    ]
  },
  {
    "name": "kolkata station",
    "location": null,
    "routes": [
      "routeK1",
      "routeKB22",
      "routeGaria Station - Kolkata Station",
      "routeMalancha - Kolkata Station",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "i.t.c. infotech",
    "location": null,
    "routes": [
      "routeK1"
    ]
  },
  {
    "name": "hajratala",
    "location": null,
    "routes": [
      "routeK1",
      "routeKB16"
    ]
  },
  {
    "name": "natunpukur",
    "location": null,
    "routes": [
      "routeK1",
      "routeKB16"
    ]
  },
  {
    "name": "sirishbagan",
    "location": null,
    "routes": [
      "routeK1"
    ]
  },
  {
    "name": "unitech gate no. 1",
    "location": null,
    "routes": [
      "routeK1"
    ]
  },
  {
    "name": "newtown bus stand",
    "location": null,
    "routes": [
      "routeK1",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "phillips more",
    "location": null,
    "routes": [
      "routeK1"
    ]
  },
  {
    "name": "w.i.p.r.o.",
    "location": null,
    "routes": [
      "routeK1"
    ]
  },
  {
    "name": "10 no. tank",
    "location": null,
    "routes": [
      "routeK1",
      "routeKB16"
    ]
  },
  {
    "name": "bidhannagar college",
    "location": null,
    "routes": [
      "routeK1",
      "routeKB22",
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "p.n.b. more",
    "location": null,
    "routes": [
      "routeK1"
    ]
  },
  {
    "name": "hudco more",
    "location": null,
    "routes": [
      "routeK1"
    ]
  },
  {
    "name": "ultadanga station",
    "location": null,
    "routes": [
      "routeK1",
      "routeGaria Station - Paikpara",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "gouribari",
    "location": null,
    "routes": [
      "routeK1",
      "routeKB16",
      "routeKB21",
      "routeGaria Station - Paikpara",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "r.g kar hospital",
    "location": null,
    "routes": [
      "routeK1",
      "routeKB16"
    ]
  },
  {
    "name": "rabinrasadan (exide)",
    "location": null,
    "routes": [
      "routeK11"
    ]
  },
  {
    "name": "pg hospital",
    "location": null,
    "routes": [
      "routeK11",
      "routeKB12",
      "routeBargachia - Sealdah Court",
      "routeDhulagarh - Newtown",
      "routeGadiara - Rajarhat",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "vidyasagar setu",
    "location": null,
    "routes": [
      "routeK11",
      "routeRT-42",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeDhulagarh - Sealdah",
      "routeMatapara - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "toll plaza",
    "location": null,
    "routes": [
      "routeK11",
      "routeBarasat - Santragachi",
      "routeDhulagarh - Sealdah",
      "routeGadiara - Rajarhat",
      "routeKadamtala - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "belepole",
    "location": null,
    "routes": [
      "routeK11",
      "routeKB15",
      "routeRT-26",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBandar - Howrah Station",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBargachia - Sealdah Court",
      "routeBashirhat - Gadiara",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeDhulagarh - Unitech",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "santragachi",
    "location": null,
    "routes": [
      "routeK11",
      "routeRT-26",
      "routeAmta - Newtown",
      "routeBandar - Howrah Station",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBashirhat - Gadiara",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeDhulagarh - Unitech",
      "routeGadiara - Rajarhat",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "unsani",
    "location": null,
    "routes": [
      "routeK11",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "kona xing",
    "location": null,
    "routes": [
      "routeK11"
    ]
  },
  {
    "name": "domjur bdo office",
    "location": null,
    "routes": [
      "routeK11"
    ]
  },
  {
    "name": "anandapalit",
    "location": null,
    "routes": [
      "routeK4"
    ]
  },
  {
    "name": "philips more",
    "location": null,
    "routes": [
      "routeK4",
      "routeAmta - Newtown",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "prachi cinema hall",
    "location": null,
    "routes": [
      "routeK4"
    ]
  },
  {
    "name": "jagat cinema hall",
    "location": null,
    "routes": [
      "routeK4"
    ]
  },
  {
    "name": "sukea street",
    "location": null,
    "routes": [
      "routeK4",
      "routeKB21"
    ]
  },
  {
    "name": "sahitya parishad",
    "location": null,
    "routes": [
      "routeK4",
      "routeKB21"
    ]
  },
  {
    "name": "fariapukur",
    "location": null,
    "routes": [
      "routeK4",
      "routeGaria Station - Kolkata Station"
    ]
  },
  {
    "name": "rabindra bharati university",
    "location": null,
    "routes": [
      "routeK4"
    ]
  },
  {
    "name": "sinthir more",
    "location": null,
    "routes": [
      "routeK4"
    ]
  },
  {
    "name": "indian statistical institute",
    "location": null,
    "routes": [
      "routeK4"
    ]
  },
  {
    "name": "sabedabagan",
    "location": null,
    "routes": [
      "routeK4",
      "routeMM3"
    ]
  },
  {
    "name": "tantipara",
    "location": null,
    "routes": [
      "routeK4",
      "routeMM7"
    ]
  },
  {
    "name": "alambazar more",
    "location": null,
    "routes": [
      "routeK4"
    ]
  },
  {
    "name": "behala rabindranagar",
    "location": null,
    "routes": [
      "routeKB12"
    ]
  },
  {
    "name": "unitech",
    "location": null,
    "routes": [
      "routeKB12",
      "routeKB16",
      "routeKB22",
      "routeBagnan - Eco Space",
      "routeBally Halt - Saltlake Karunamoyee",
      "routeDhulagarh - Unitech",
      "routeKadamtala - Newtown",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "exide",
    "location": null,
    "routes": [
      "routeKB12",
      "routeKB15",
      "routeAmta - Newtown",
      "routeBargachia - Sealdah Court",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeGadiara - Rajarhat",
      "routeKadamtala - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "mullickbazar",
    "location": null,
    "routes": [
      "routeKB12"
    ]
  },
  {
    "name": "alochaya",
    "location": null,
    "routes": [
      "routeKB12"
    ]
  },
  {
    "name": "tata medical",
    "location": null,
    "routes": [
      "routeKB12",
      "routeKB17",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "santragachi bus terminal",
    "location": null,
    "routes": [
      "routeKB15"
    ]
  },
  {
    "name": "bijan setu",
    "location": null,
    "routes": [
      "routeKB15"
    ]
  },
  {
    "name": "manoharpukur",
    "location": null,
    "routes": [
      "routeKB15"
    ]
  },
  {
    "name": "shishumangal hospital",
    "location": null,
    "routes": [
      "routeKB15"
    ]
  },
  {
    "name": "beltala",
    "location": null,
    "routes": [
      "routeKB15",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "south calcutta girls' college",
    "location": null,
    "routes": [
      "routeKB15"
    ]
  },
  {
    "name": "chakraberia road xing",
    "location": null,
    "routes": [
      "routeKB15"
    ]
  },
  {
    "name": "rowland road xing",
    "location": null,
    "routes": [
      "routeKB15"
    ]
  },
  {
    "name": "camac street",
    "location": null,
    "routes": [
      "routeKB15",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "p.g hospital",
    "location": null,
    "routes": [
      "routeKB15"
    ]
  },
  {
    "name": "shibpur toll plaza",
    "location": null,
    "routes": [
      "routeKB15",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBarasat - Botanical Garden (b Garden)",
      "routeDhulagarh - Newtown",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "carry road",
    "location": null,
    "routes": [
      "routeKB15",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBarasat - Santragachi",
      "routeBarasat (titumir Bus Stand) - Santragachi",
      "routeBargachia - Sealdah Court",
      "routeDhulagarh - Newtown",
      "routeDhulagarh - Sealdah",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "betore",
    "location": null,
    "routes": [
      "routeKB15",
      "routeBargachia - Sealdah Court",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bakshara",
    "location": null,
    "routes": [
      "routeKB15",
      "routeBargachia - Sealdah Court"
    ]
  },
  {
    "name": "santragachi station",
    "location": null,
    "routes": [
      "routeKB15",
      "routeBargachia - Sealdah Court",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "sukhobrishti",
    "location": null,
    "routes": [
      "routeKB16"
    ]
  },
  {
    "name": "infospace",
    "location": null,
    "routes": [
      "routeKB16"
    ]
  },
  {
    "name": "new town bus stand",
    "location": null,
    "routes": [
      "routeKB16",
      "routeDhulagarh - Newtown"
    ]
  },
  {
    "name": "mahishbathan",
    "location": null,
    "routes": [
      "routeKB16",
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "nabadiganta",
    "location": null,
    "routes": [
      "routeKB16"
    ]
  },
  {
    "name": "ibm",
    "location": null,
    "routes": [
      "routeKB16",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "mayukh bhaban",
    "location": null,
    "routes": [
      "routeKB16"
    ]
  },
  {
    "name": "central park",
    "location": null,
    "routes": [
      "routeKB16",
      "routeKB22",
      "routeS-173"
    ]
  },
  {
    "name": "ca island",
    "location": null,
    "routes": [
      "routeKB16",
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "2 no. tank",
    "location": null,
    "routes": [
      "routeKB16"
    ]
  },
  {
    "name": "pnb more",
    "location": null,
    "routes": [
      "routeKB16",
      "routeKB17"
    ]
  },
  {
    "name": "duttabagan",
    "location": null,
    "routes": [
      "routeKB16"
    ]
  },
  {
    "name": "sonarpur station",
    "location": null,
    "routes": [
      "routeKB17",
      "routeSD-5"
    ]
  },
  {
    "name": "garia bus stand",
    "location": null,
    "routes": [
      "routeKB17"
    ]
  },
  {
    "name": "sulekha",
    "location": null,
    "routes": [
      "routeKB17"
    ]
  },
  {
    "name": "sealdah stn",
    "location": null,
    "routes": [
      "routeKB17"
    ]
  },
  {
    "name": "manicktala",
    "location": null,
    "routes": [
      "routeKB17",
      "routeBashirhat - Gadiara",
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "tank 4",
    "location": null,
    "routes": [
      "routeKB17"
    ]
  },
  {
    "name": "sech bhawan",
    "location": null,
    "routes": [
      "routeKB17"
    ]
  },
  {
    "name": "sec v",
    "location": null,
    "routes": [
      "routeKB17"
    ]
  },
  {
    "name": "newtown bus terminus",
    "location": null,
    "routes": [
      "routeKB17"
    ]
  },
  {
    "name": "science city/chowbagha",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "ganganagar julien day school",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "(zeeshan crossing/darga road)",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "park circus 7 point",
    "location": null,
    "routes": [
      "routeKB21",
      "routeDhulagarh - Newtown",
      "routeGaria Station - Bagbazar",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "mallikbazar",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "nonapukur",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "ripon street",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "jora girja",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "entally market",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "shreebhumi",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "bangur",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "katakhal",
    "location": null,
    "routes": [
      "routeKB21"
    ]
  },
  {
    "name": "jamirgachi",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "cc1",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "tank 10",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "technopolish",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "eastern enclave",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "coal india",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "karigari bhavan",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "gabtola bazar",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "satulia bridge",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "saduli",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "bhogali",
    "location": null,
    "routes": [
      "routeKB22"
    ]
  },
  {
    "name": "diamond harbour",
    "location": null,
    "routes": [
      "routeM-10",
      "routeM-15",
      "routeM-16",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-18",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "raidighi",
    "location": null,
    "routes": [
      "routeM-10"
    ]
  },
  {
    "name": "dalanghata",
    "location": null,
    "routes": [
      "routeM-10",
      "routeM-15",
      "routeM-16",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "hatugunge",
    "location": null,
    "routes": [
      "routeM-10",
      "routeM-15",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "deular more",
    "location": null,
    "routes": [
      "routeM-10",
      "routeM-15"
    ]
  },
  {
    "name": "mandirbazar",
    "location": null,
    "routes": [
      "routeM-10",
      "routeM-15"
    ]
  },
  {
    "name": "ratneshwarpur",
    "location": null,
    "routes": [
      "routeM-10"
    ]
  },
  {
    "name": "pukuria hat",
    "location": null,
    "routes": [
      "routeM-10"
    ]
  },
  {
    "name": "karbala more",
    "location": null,
    "routes": [
      "routeM-10",
      "routeSD-5"
    ]
  },
  {
    "name": "mathurapur station",
    "location": null,
    "routes": [
      "routeM-10",
      "routeSD-51"
    ]
  },
  {
    "name": "south bishnupur",
    "location": null,
    "routes": [
      "routeM-10",
      "routeSD-51"
    ]
  },
  {
    "name": "khotirbazar",
    "location": null,
    "routes": [
      "routeM-10"
    ]
  },
  {
    "name": "lalpur",
    "location": null,
    "routes": [
      "routeM-10",
      "routeSD-51"
    ]
  },
  {
    "name": "krishnachandrapur",
    "location": null,
    "routes": [
      "routeM-10",
      "routeSD-51"
    ]
  },
  {
    "name": "kashinagar",
    "location": null,
    "routes": [
      "routeM-10",
      "routeSD-51"
    ]
  },
  {
    "name": "companir thek",
    "location": null,
    "routes": [
      "routeM-10"
    ]
  },
  {
    "name": "mayramahal",
    "location": null,
    "routes": [
      "routeM-10"
    ]
  },
  {
    "name": "dakghar (chattabazar)",
    "location": null,
    "routes": [
      "routeM-14"
    ]
  },
  {
    "name": "falta sector 1",
    "location": null,
    "routes": [
      "routeM-15"
    ]
  },
  {
    "name": "bijaygunge bazar (lakshmikantapur)",
    "location": null,
    "routes": [
      "routeM-15"
    ]
  },
  {
    "name": "khandalia",
    "location": null,
    "routes": [
      "routeM-15"
    ]
  },
  {
    "name": "haridashpur",
    "location": null,
    "routes": [
      "routeM-15"
    ]
  },
  {
    "name": "bhadura",
    "location": null,
    "routes": [
      "routeM-15",
      "routeM-16"
    ]
  },
  {
    "name": "goundia raghunathpur",
    "location": null,
    "routes": [
      "routeM-15",
      "routeM-16"
    ]
  },
  {
    "name": "dhukrijhara",
    "location": null,
    "routes": [
      "routeM-15",
      "routeM-16"
    ]
  },
  {
    "name": "pateswari mandir",
    "location": null,
    "routes": [
      "routeM-15",
      "routeM-16"
    ]
  },
  {
    "name": "pitambara",
    "location": null,
    "routes": [
      "routeM-15",
      "routeM-16"
    ]
  },
  {
    "name": "sarisha 246 more",
    "location": null,
    "routes": [
      "routeM-15"
    ]
  },
  {
    "name": "kalagachia",
    "location": null,
    "routes": [
      "routeM-15",
      "routeM-16",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-18",
      "routeSD-19",
      "routeSD-82"
    ]
  },
  {
    "name": "kapathat",
    "location": null,
    "routes": [
      "routeM-15",
      "routeM-16",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-18",
      "routeSD-19",
      "routeSD-82"
    ]
  },
  {
    "name": "leninnagar",
    "location": null,
    "routes": [
      "routeM-15",
      "routeM-16",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-18",
      "routeSD-19",
      "routeSD-82"
    ]
  },
  {
    "name": "noongola",
    "location": null,
    "routes": [
      "routeM-15",
      "routeM-16",
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-18",
      "routeSD-19",
      "routeSD-82"
    ]
  },
  {
    "name": "mandabtala",
    "location": null,
    "routes": [
      "routeM-15"
    ]
  },
  {
    "name": "anchna",
    "location": null,
    "routes": [
      "routeM-15"
    ]
  },
  {
    "name": "brindabanpur",
    "location": null,
    "routes": [
      "routeM-15"
    ]
  },
  {
    "name": "ramnarayanpurramnarayanpur",
    "location": null,
    "routes": [
      "routeM-15"
    ]
  },
  {
    "name": "burul",
    "location": null,
    "routes": [
      "routeM-16",
      "routeSD-26"
    ]
  },
  {
    "name": "radhanagar",
    "location": null,
    "routes": [
      "routeM-16"
    ]
  },
  {
    "name": "burul bazar",
    "location": null,
    "routes": [
      "routeM-16",
      "routeSD-26"
    ]
  },
  {
    "name": "chandua bazar",
    "location": null,
    "routes": [
      "routeM-16",
      "routeSD-26"
    ]
  },
  {
    "name": "bisalakshmitala",
    "location": null,
    "routes": [
      "routeM-16",
      "routeSD-26",
      "routeSD-30"
    ]
  },
  {
    "name": "uttar ramkrishnapur",
    "location": null,
    "routes": [
      "routeM-16"
    ]
  },
  {
    "name": "rasbehari",
    "location": null,
    "routes": [
      "routeM10 (AC Corporate)"
    ]
  },
  {
    "name": "lake mall",
    "location": null,
    "routes": [
      "routeM10 (AC Corporate)"
    ]
  },
  {
    "name": "beliaghata",
    "location": null,
    "routes": [
      "routeM10 (AC Corporate)",
      "routeMM6"
    ]
  },
  {
    "name": "new barrackpore",
    "location": null,
    "routes": [
      "routeM10 (AC Corporate)",
      "routeS-175",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "kashimpur",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "shibalaya",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "mirhati",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "daripukur",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "hela battala more",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "satabharat",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "nababharati",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "talikhola",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "barbadia",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "bishnu cotton mill",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "barasat state university",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "subhash nagar",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "nilgunge hut",
    "location": null,
    "routes": [
      "routeMM3",
      "routeMM5"
    ]
  },
  {
    "name": "nilgunge",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "sahebbagan gate",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "matharani more",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "nilgunge depot",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "calcutta technical school",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "boro kanthalia more",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "talpukur",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "sodepur",
    "location": null,
    "routes": [
      "routeMM3",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "panihati",
    "location": null,
    "routes": [
      "routeMM3",
      "routeBarrackpore Station - Howrah Station",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "agarpara",
    "location": null,
    "routes": [
      "routeMM3",
      "routeBarrackpore Station - Howrah Station",
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "alpan diary",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "prabartak jute mill",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "rubber factory",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "saraswati press",
    "location": null,
    "routes": [
      "routeMM3"
    ]
  },
  {
    "name": "madhabpur",
    "location": null,
    "routes": [
      "routeMM5",
      "routeBagnan - Eco Space"
    ]
  },
  {
    "name": "beraberia",
    "location": null,
    "routes": [
      "routeMM5"
    ]
  },
  {
    "name": "lalkuthi",
    "location": null,
    "routes": [
      "routeMM5",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "barrackpore chiriamore",
    "location": null,
    "routes": [
      "routeMM5",
      "routeBarrackpore Station - Howrah Station"
    ]
  },
  {
    "name": "jafarpur(barasat)",
    "location": null,
    "routes": [
      "routeMM6"
    ]
  },
  {
    "name": "chakla(sohai)",
    "location": null,
    "routes": [
      "routeMM6"
    ]
  },
  {
    "name": "banamalipur",
    "location": null,
    "routes": [
      "routeMM6"
    ]
  },
  {
    "name": "barasat depot",
    "location": null,
    "routes": [
      "routeMM6"
    ]
  },
  {
    "name": "kadambagacchi",
    "location": null,
    "routes": [
      "routeMM6"
    ]
  },
  {
    "name": "tona",
    "location": null,
    "routes": [
      "routeMM6"
    ]
  },
  {
    "name": "jafarpur",
    "location": null,
    "routes": [
      "routeMM6/1"
    ]
  },
  {
    "name": "bashirhat court",
    "location": null,
    "routes": [
      "routeMM7"
    ]
  },
  {
    "name": "nimchi",
    "location": null,
    "routes": [
      "routeMM7"
    ]
  },
  {
    "name": "bhebia",
    "location": null,
    "routes": [
      "routeMM7"
    ]
  },
  {
    "name": "tentultala",
    "location": null,
    "routes": [
      "routeMM7",
      "routeSD-51"
    ]
  },
  {
    "name": "hasnabad",
    "location": null,
    "routes": [
      "routeMN2",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "lebukhali",
    "location": null,
    "routes": [
      "routeMN2"
    ]
  },
  {
    "name": "hingalganj",
    "location": null,
    "routes": [
      "routeMN2"
    ]
  },
  {
    "name": "barasat district hospital",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "mandalganthi",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "bamangachi chowmatha",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "ashokenagar railgate",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "sherpur kalibari",
    "location": null,
    "routes": [
      "routeMN3",
      "routeMN6"
    ]
  },
  {
    "name": "8 no. kalibari more",
    "location": null,
    "routes": [
      "routeMN3",
      "routeMN6"
    ]
  },
  {
    "name": "habra manasabari",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "nagarukhra more",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "banbania chowmatha",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "kajla",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "jhikra battala",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "singa",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "haripara",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "kashtodanga",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "chouberia chowrasta",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "fulbari",
    "location": null,
    "routes": [
      "routeMN3"
    ]
  },
  {
    "name": "ashoknagar chowrangi",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "kalyangarh more",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "manasabari bazar",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "sanpukur bazar",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "khatura bazar",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "jamdani",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "madhusankati",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "gazna bazar",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "sutia",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "panchpota",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "acharipara",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "purandarpur",
    "location": null,
    "routes": [
      "routeMN6"
    ]
  },
  {
    "name": "rabindra sadan (diamond park)",
    "location": null,
    "routes": [
      "routeRT-11A"
    ]
  },
  {
    "name": "hanskhali",
    "location": null,
    "routes": [
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-20A"
    ]
  },
  {
    "name": "malapara",
    "location": null,
    "routes": [
      "routeRT-13",
      "routeRT-13A",
      "routeRT-20",
      "routeRT-29",
      "routeRT-5",
      "routeRT-7",
      "routeS-168",
      "routeS-176",
      "routeS-180",
      "routeS-185",
      "routeS-189"
    ]
  },
  {
    "name": "fatickgachi",
    "location": null,
    "routes": [
      "routeRT-13A"
    ]
  },
  {
    "name": "satyabala",
    "location": null,
    "routes": [
      "routeRT-1A"
    ]
  },
  {
    "name": "sishu mangal (kasba)",
    "location": null,
    "routes": [
      "routeRT-1A"
    ]
  },
  {
    "name": "saltlake p.n.b",
    "location": null,
    "routes": [
      "routeRT-20A"
    ]
  },
  {
    "name": "malipanchghara",
    "location": null,
    "routes": [
      "routeRT-25"
    ]
  },
  {
    "name": "baksara",
    "location": null,
    "routes": [
      "routeRT-26",
      "routeDhulagarh - Sealdah",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "park circus (ruby hospital)",
    "location": null,
    "routes": [
      "routeRT-27A"
    ]
  },
  {
    "name": "baluhati",
    "location": null,
    "routes": [
      "routeRT-30"
    ]
  },
  {
    "name": "rabindra sadan (kidderpore)",
    "location": null,
    "routes": [
      "routeRT-31"
    ]
  },
  {
    "name": "rabindra sadan (parnasree)",
    "location": null,
    "routes": [
      "routeRT-32"
    ]
  },
  {
    "name": "purash",
    "location": null,
    "routes": [
      "routeRT-34"
    ]
  },
  {
    "name": "ghoradaha",
    "location": null,
    "routes": [
      "routeRT-34"
    ]
  },
  {
    "name": "munshirhat",
    "location": null,
    "routes": [
      "routeRT-34"
    ]
  },
  {
    "name": "baragachia",
    "location": null,
    "routes": [
      "routeRT-34",
      "routert-35"
    ]
  },
  {
    "name": "hantal",
    "location": null,
    "routes": [
      "routert-35"
    ]
  },
  {
    "name": "bhattanagar",
    "location": null,
    "routes": [
      "routeRT-39"
    ]
  },
  {
    "name": "liluah station",
    "location": null,
    "routes": [
      "routeRT-39"
    ]
  },
  {
    "name": "kamardanga",
    "location": null,
    "routes": [
      "routeRT-3A"
    ]
  },
  {
    "name": "mandirtala",
    "location": null,
    "routes": [
      "routeRT-42",
      "routeRT-8",
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "metropolitan",
    "location": null,
    "routes": [
      "routeRT-42",
      "routeGaria Station - Kolkata Station"
    ]
  },
  {
    "name": "howrah maidan (amtala phari)",
    "location": null,
    "routes": [
      "routeRT-7"
    ]
  },
  {
    "name": "garia more",
    "location": null,
    "routes": [
      "routeS-101"
    ]
  },
  {
    "name": "gurusaday road",
    "location": null,
    "routes": [
      "routeS-101",
      "routeS-102",
      "routeS-103",
      "routeS-104",
      "routeS-106",
      "routeS-109"
    ]
  },
  {
    "name": "patuli",
    "location": null,
    "routes": [
      "routeS-102",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria - Ultodanga",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "jadavpur",
    "location": null,
    "routes": [
      "routeS-103"
    ]
  },
  {
    "name": "jodhpur park",
    "location": null,
    "routes": [
      "routeS-104"
    ]
  },
  {
    "name": "daspara",
    "location": null,
    "routes": [
      "routeS-106"
    ]
  },
  {
    "name": "kasba rathtala",
    "location": null,
    "routes": [
      "routeS-108"
    ]
  },
  {
    "name": "lake road",
    "location": null,
    "routes": [
      "routeS-111"
    ]
  },
  {
    "name": "matiabruz",
    "location": null,
    "routes": [
      "routeS-123",
      "routeS-161"
    ]
  },
  {
    "name": "peerless hospital",
    "location": null,
    "routes": [
      "routeS-124",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria - Ultodanga",
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "rabindra nagar",
    "location": null,
    "routes": [
      "routeS-129"
    ]
  },
  {
    "name": "behala ps",
    "location": null,
    "routes": [
      "routeS-129"
    ]
  },
  {
    "name": "tangra",
    "location": null,
    "routes": [
      "routeS-166",
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "dhapa road",
    "location": null,
    "routes": [
      "routeS-166"
    ]
  },
  {
    "name": "saltlake",
    "location": null,
    "routes": [
      "routeS-167",
      "routeS-173"
    ]
  },
  {
    "name": "beadon street",
    "location": null,
    "routes": [
      "routeS-168"
    ]
  },
  {
    "name": "subhash sarobar",
    "location": null,
    "routes": [
      "routeS-173"
    ]
  },
  {
    "name": "saltlake 206",
    "location": null,
    "routes": [
      "routeS-184"
    ]
  },
  {
    "name": "uttar panchannagram",
    "location": null,
    "routes": [
      "routeS-186",
      "routeGaria - Ultodanga",
      "routeGaria Station - Kolkata Station",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "patharpratima",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50"
    ]
  },
  {
    "name": "uttar chandipur",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "kachuberia",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "kulpi",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "dakshin ramkrishnapur",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "chakdulalpur",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "karanjali",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "ongc more",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "natun rastar more",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "kakdwip station (bamuner more)",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "kakdwip bus stand",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50",
      "routeSD-82"
    ]
  },
  {
    "name": "kajoler more",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50"
    ]
  },
  {
    "name": "hospital more",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50"
    ]
  },
  {
    "name": "gangadharpur",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50"
    ]
  },
  {
    "name": "addhabazar",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-19",
      "routeSD-50"
    ]
  },
  {
    "name": "milan more",
    "location": null,
    "routes": [
      "routeSD-11",
      "routeSD-11/1",
      "routeSD-19",
      "routeSD-50",
      "routeSD-51"
    ]
  },
  {
    "name": "ramganga",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "tantirhat",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "dayarampur bazar",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "lakshmikantapur station",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "bhagabatipur",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "siddhiberia",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "patharberia more",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "jamalpur more",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "jagadishpur hospital",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "dholahat more",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "dakshin birampur",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "chowdhury chak",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "sarasberia",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "brahmaner more",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "gurudaspur hospital more",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "jashoda more",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "indranarayanpur",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "ramganga bdo office",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "dhrubabazar",
    "location": null,
    "routes": [
      "routeSD-11/1"
    ]
  },
  {
    "name": "nainan",
    "location": null,
    "routes": [
      "routeSD-22/1"
    ]
  },
  {
    "name": "kalatalahat",
    "location": null,
    "routes": [
      "routeSD-22/1"
    ]
  },
  {
    "name": "sonakhali",
    "location": null,
    "routes": [
      "routesd-24"
    ]
  },
  {
    "name": "agrahati",
    "location": null,
    "routes": [
      "routesd-24"
    ]
  },
  {
    "name": "gabbuni",
    "location": null,
    "routes": [
      "routesd-24",
      "routesd-85"
    ]
  },
  {
    "name": "charabidya",
    "location": null,
    "routes": [
      "routesd-24",
      "routesd-85"
    ]
  },
  {
    "name": "atharobanki",
    "location": null,
    "routes": [
      "routesd-24",
      "routesd-85"
    ]
  },
  {
    "name": "dhuri bazar",
    "location": null,
    "routes": [
      "routesd-24",
      "routesd-85"
    ]
  },
  {
    "name": "amjhara",
    "location": null,
    "routes": [
      "routesd-24",
      "routesd-85"
    ]
  },
  {
    "name": "kanthalberia",
    "location": null,
    "routes": [
      "routesd-24",
      "routeSD-33",
      "routeSD-63",
      "routeSD-64",
      "routesd-85"
    ]
  },
  {
    "name": "bhangankhali",
    "location": null,
    "routes": [
      "routesd-24",
      "routeSD-33",
      "routeSD-63"
    ]
  },
  {
    "name": "narayantala",
    "location": null,
    "routes": [
      "routesd-24",
      "routeSD-33",
      "routeSD-63"
    ]
  },
  {
    "name": "kultali",
    "location": null,
    "routes": [
      "routesd-24",
      "routeSD-33",
      "routeSD-39",
      "routeSD-53",
      "routeSD-63"
    ]
  },
  {
    "name": "uttar sonakhali",
    "location": null,
    "routes": [
      "routesd-24",
      "routeSD-33",
      "routeSD-63"
    ]
  },
  {
    "name": "mashat market",
    "location": null,
    "routes": [
      "routeSD-27"
    ]
  },
  {
    "name": "usthi",
    "location": null,
    "routes": [
      "routeSD-27"
    ]
  },
  {
    "name": "adharmanik",
    "location": null,
    "routes": [
      "routeSD-27"
    ]
  },
  {
    "name": "bagaria",
    "location": null,
    "routes": [
      "routeSD-27"
    ]
  },
  {
    "name": "pirtala",
    "location": null,
    "routes": [
      "routeSD-29"
    ]
  },
  {
    "name": "ghatur more",
    "location": null,
    "routes": [
      "routeSD-29"
    ]
  },
  {
    "name": "gobra more",
    "location": null,
    "routes": [
      "routeSD-29"
    ]
  },
  {
    "name": "jalilpur",
    "location": null,
    "routes": [
      "routeSD-29"
    ]
  },
  {
    "name": "balakhali",
    "location": null,
    "routes": [
      "routeSD-29"
    ]
  },
  {
    "name": "dhopagachi",
    "location": null,
    "routes": [
      "routeSD-29"
    ]
  },
  {
    "name": "kalyanpur panchayat",
    "location": null,
    "routes": [
      "routeSD-29"
    ]
  },
  {
    "name": "sonarpur",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "ghasiara",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "ramchandrapur",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "arapanch",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "natagachi",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "tematha",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "makrampur",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "prasadpur",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "sundia",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "chandaneshwar",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "jhautala",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "sobedatala",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "patkelpota",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "sondalia bablatala",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "badir more",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "situri",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "kalitala",
    "location": null,
    "routes": [
      "routeSD-3",
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "bodra",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "saihati",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": "jagulgachi",
    "location": null,
    "routes": [
      "routeSD-3"
    ]
  },
  {
    "name": ": sujapur",
    "location": null,
    "routes": [
      "routeSD-30"
    ]
  },
  {
    "name": "mohirampur",
    "location": null,
    "routes": [
      "routeSD-30"
    ]
  },
  {
    "name": "canning",
    "location": null,
    "routes": [
      "routeSD-33",
      "routeSD-63",
      "routeSD-64",
      "routesd-85"
    ]
  },
  {
    "name": "jharkhali",
    "location": null,
    "routes": [
      "routeSD-33"
    ]
  },
  {
    "name": "canning station",
    "location": null,
    "routes": [
      "routeSD-33",
      "routeSD-63",
      "routeSD-64",
      "routesd-85"
    ]
  },
  {
    "name": "matla bridge",
    "location": null,
    "routes": [
      "routeSD-33",
      "routeSD-63",
      "routeSD-64",
      "routesd-85"
    ]
  },
  {
    "name": "dockghat",
    "location": null,
    "routes": [
      "routeSD-33",
      "routeSD-63",
      "routeSD-64",
      "routesd-85"
    ]
  },
  {
    "name": "sonakhali bus stand",
    "location": null,
    "routes": [
      "routeSD-33",
      "routeSD-63"
    ]
  },
  {
    "name": "basanti chowmatha",
    "location": null,
    "routes": [
      "routeSD-33",
      "routeSD-63"
    ]
  },
  {
    "name": "shibganj bazar",
    "location": null,
    "routes": [
      "routeSD-33"
    ]
  },
  {
    "name": "sunderban chowmatha",
    "location": null,
    "routes": [
      "routeSD-33"
    ]
  },
  {
    "name": "jyotishpur",
    "location": null,
    "routes": [
      "routeSD-33"
    ]
  },
  {
    "name": "bashiram bazar",
    "location": null,
    "routes": [
      "routeSD-33"
    ]
  },
  {
    "name": "hiranmoypur",
    "location": null,
    "routes": [
      "routeSD-33"
    ]
  },
  {
    "name": "nafargange",
    "location": null,
    "routes": [
      "routeSD-33"
    ]
  },
  {
    "name": "kumirmari bazar",
    "location": null,
    "routes": [
      "routeSD-33"
    ]
  },
  {
    "name": "sahidnagar",
    "location": null,
    "routes": [
      "routeSD-33"
    ]
  },
  {
    "name": "joynagar",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "kishorimohonpur",
    "location": null,
    "routes": [
      "routeSD-39"
    ]
  },
  {
    "name": "duttabazar",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "nimpith",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "tulsighata",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "mollarchak",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "priyor more",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "kholakhali hat",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "jalaberia",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "naskarpara",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "jamtala",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "mandalerhat",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "sankizahan",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "kantamari",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "dakshin durgapur",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "petkulchand bazar",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "bhasa panchrasta bazar",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "bhubaneshwari",
    "location": null,
    "routes": [
      "routeSD-39",
      "routeSD-53"
    ]
  },
  {
    "name": "bindopur",
    "location": null,
    "routes": [
      "routeSD-39"
    ]
  },
  {
    "name": "lakshmi more",
    "location": null,
    "routes": [
      "routeSD-39"
    ]
  },
  {
    "name": "maipith bazar",
    "location": null,
    "routes": [
      "routeSD-39"
    ]
  },
  {
    "name": "baikunthapur",
    "location": null,
    "routes": [
      "routeSD-39"
    ]
  },
  {
    "name": "palbazar",
    "location": null,
    "routes": [
      "routeSD-4"
    ]
  },
  {
    "name": "power house",
    "location": null,
    "routes": [
      "routeSD-5"
    ]
  },
  {
    "name": "iimc hospital",
    "location": null,
    "routes": [
      "routeSD-5"
    ]
  },
  {
    "name": "mission pally",
    "location": null,
    "routes": [
      "routeSD-5"
    ]
  },
  {
    "name": "gurudaspur",
    "location": null,
    "routes": [
      "routeSD-51"
    ]
  },
  {
    "name": "ferry ghat",
    "location": null,
    "routes": [
      "routeSD-51"
    ]
  },
  {
    "name": "subhasnagar",
    "location": null,
    "routes": [
      "routeSD-51"
    ]
  },
  {
    "name": "kautala",
    "location": null,
    "routes": [
      "routeSD-51"
    ]
  },
  {
    "name": "maipith",
    "location": null,
    "routes": [
      "routeSD-53"
    ]
  },
  {
    "name": "madhabpur more",
    "location": null,
    "routes": [
      "routeSD-53"
    ]
  },
  {
    "name": "manikpir more",
    "location": null,
    "routes": [
      "routeSD-53"
    ]
  },
  {
    "name": "binodpur",
    "location": null,
    "routes": [
      "routeSD-53"
    ]
  },
  {
    "name": "maipith coastal",
    "location": null,
    "routes": [
      "routeSD-53"
    ]
  },
  {
    "name": "gadkhali",
    "location": null,
    "routes": [
      "routeSD-63"
    ]
  },
  {
    "name": "kalidanga",
    "location": null,
    "routes": [
      "routeSD-63"
    ]
  },
  {
    "name": "chandkhali",
    "location": null,
    "routes": [
      "routeSD-63"
    ]
  },
  {
    "name": "matgaran",
    "location": null,
    "routes": [
      "routeSD-63"
    ]
  },
  {
    "name": "dakshin battala",
    "location": null,
    "routes": [
      "routeSD-63"
    ]
  },
  {
    "name": "masjidbati",
    "location": null,
    "routes": [
      "routeSD-63"
    ]
  },
  {
    "name": "chunakhali",
    "location": null,
    "routes": [
      "routeSD-64"
    ]
  },
  {
    "name": "panikhali",
    "location": null,
    "routes": [
      "routeSD-64"
    ]
  },
  {
    "name": "nirdeshkhali",
    "location": null,
    "routes": [
      "routeSD-64"
    ]
  },
  {
    "name": "10 no. majhipara",
    "location": null,
    "routes": [
      "routeSD-64"
    ]
  },
  {
    "name": "baria",
    "location": null,
    "routes": [
      "routeSD-64"
    ]
  },
  {
    "name": "bagulakhali",
    "location": null,
    "routes": [
      "routeSD-64"
    ]
  },
  {
    "name": "nandi bagan",
    "location": null,
    "routes": [
      "routeSD-8"
    ]
  },
  {
    "name": "kakdwip",
    "location": null,
    "routes": [
      "routeSD-82",
      "routeSD-94"
    ]
  },
  {
    "name": "- raichak more",
    "location": null,
    "routes": [
      "routeSD-9"
    ]
  },
  {
    "name": "bakkhali",
    "location": null,
    "routes": [
      "routeSD-94"
    ]
  },
  {
    "name": "ukilerhat",
    "location": null,
    "routes": [
      "routeSD-94"
    ]
  },
  {
    "name": "namkhana station",
    "location": null,
    "routes": [
      "routeSD-94"
    ]
  },
  {
    "name": "sibanagar",
    "location": null,
    "routes": [
      "routeSD-94"
    ]
  },
  {
    "name": "10 mile bazar",
    "location": null,
    "routes": [
      "routeSD-94"
    ]
  },
  {
    "name": "frasergunje",
    "location": null,
    "routes": [
      "routeSD-94"
    ]
  },
  {
    "name": "amrabati",
    "location": null,
    "routes": [
      "routeSD-94"
    ]
  },
  {
    "name": "chakhna",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kalatala",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "asuttola",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "vandergacha",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown"
    ]
  },
  {
    "name": "10 no. pole",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "manikpir bazar",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "jala biswanathpur",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "mallikbagan",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kona expressway crossing (nibra)",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeDhulagarh - Sealdah",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "kona high road",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1"
    ]
  },
  {
    "name": "joypur bill",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "bamondanga",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1"
    ]
  },
  {
    "name": "thakuranichak kalitala",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1"
    ]
  },
  {
    "name": "sahebbagan",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "bally bridge",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1"
    ]
  },
  {
    "name": "dunlop (baranagar road station)",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1"
    ]
  },
  {
    "name": "pramodnagar mathkal",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1"
    ]
  },
  {
    "name": "belgharia expressway",
    "location": null,
    "routes": [
      "routeAmta - Airport Gate 1",
      "routeDeulti - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "santragachhi station",
    "location": null,
    "routes": [
      "routeAmta - Mukundapur",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "p.t.s.",
    "location": null,
    "routes": [
      "routeAmta - Mukundapur",
      "routeAmta - Newtown",
      "routeBarasat (titumir Bus Stand) - Santragachi"
    ]
  },
  {
    "name": "p.g. hospital",
    "location": null,
    "routes": [
      "routeAmta - Mukundapur",
      "routeBarasat (titumir Bus Stand) - Santragachi"
    ]
  },
  {
    "name": "rabindra sadan (exide more)",
    "location": null,
    "routes": [
      "routeAmta - Mukundapur",
      "routeBarasat (titumir Bus Stand) - Santragachi"
    ]
  },
  {
    "name": "vip bazar",
    "location": null,
    "routes": [
      "routeAmta - Mukundapur",
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria - Ultodanga",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "p.g. hospital/rabindra sadan",
    "location": null,
    "routes": [
      "routeAmta - Newtown"
    ]
  },
  {
    "name": "tata cancer hospital",
    "location": null,
    "routes": [
      "routeAmta - Newtown"
    ]
  },
  {
    "name": "bagnan thana more",
    "location": null,
    "routes": [
      "routeBagnan - Eco Space"
    ]
  },
  {
    "name": "bagnan library more",
    "location": null,
    "routes": [
      "routeBagnan - Eco Space"
    ]
  },
  {
    "name": "om dayal",
    "location": null,
    "routes": [
      "routeBagnan - Eco Space"
    ]
  },
  {
    "name": "decathlon",
    "location": null,
    "routes": [
      "routeBagnan - Eco Space"
    ]
  },
  {
    "name": "kona expressway more",
    "location": null,
    "routes": [
      "routeBagnan - Eco Space"
    ]
  },
  {
    "name": "kona",
    "location": null,
    "routes": [
      "routeBagnan - Eco Space"
    ]
  },
  {
    "name": "city centre",
    "location": null,
    "routes": [
      "routeBagnan - Eco Space"
    ]
  },
  {
    "name": "bally ghat",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee",
      "routeDeulti - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "prafulla nagar",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "pramod nagar",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "mathkol",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee",
      "routeKamalgazi - Dankuni Housing",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "eco tourism park",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "westin",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "tata medical center",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "rabindra tirtha",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee",
      "routeKadamtala - Newtown"
    ]
  },
  {
    "name": "home town",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "eastern club (east enclave housing complex)",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "nabadiganta bus terminus",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee",
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "ring road",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "gp block",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "fire brigade",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "sdf",
    "location": null,
    "routes": [
      "routeBally Halt - Saltlake Karunamoyee",
      "routeBarasat - Santragachi",
      "routeGadiara - Rajarhat",
      "routeKadamtala - Newtown",
      "routeMatapara - Newtown",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeSantragachi - Newtown",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bandar",
    "location": null,
    "routes": [
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "gourhati",
    "location": null,
    "routes": [
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "arambag",
    "location": null,
    "routes": [
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "purshura",
    "location": null,
    "routes": [
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "champadanga",
    "location": null,
    "routes": [
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "gajar more",
    "location": null,
    "routes": [
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "shiakhala",
    "location": null,
    "routes": [
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "dankuni",
    "location": null,
    "routes": [
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "kona expressway",
    "location": null,
    "routes": [
      "routeBandar - Howrah Station"
    ]
  },
  {
    "name": "najrul tirtha",
    "location": null,
    "routes": [
      "routeBarasat - Santragachi",
      "routeKadamtala - Newtown"
    ]
  },
  {
    "name": "barasat (titumir bus stand)",
    "location": null,
    "routes": [
      "routeBarasat (titumir Bus Stand) - Santragachi"
    ]
  },
  {
    "name": "bratachari ashram (baguiati big bazar)",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur",
      "routeBarasat - Garia"
    ]
  },
  {
    "name": "joramandir",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "beleghata building more",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeDhulagarh - Newtown",
      "routeKamalgazi - Dankuni Housing",
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "kendua",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur",
      "routeBarasat - Garia"
    ]
  },
  {
    "name": "garia",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur",
      "routeBarasat - Garia",
      "routeGaria - Ultodanga",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "mandir gate",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "rajpur",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "gazipur",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur",
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "chouhati",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "haraharitala",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "lalbari",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "kedar ashram",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "atlas more",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "malancha phari",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "langalberia",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "khashmallik",
    "location": null,
    "routes": [
      "routeBarasat - Baruipur"
    ]
  },
  {
    "name": "hridaypur more",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "b. t. college",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "s. d. f.",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "e. m. bypass",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "v. i. p. bazer",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "rash behari avenue",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "rashbehari crossing ( kalighat )",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "rabindra sadan ( exide more)",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "p. g. hospital",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "p. t. s.",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "nabanna",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)",
      "routeBashirhat - Gadiara",
      "routeDhulagarh - Sealdah"
    ]
  },
  {
    "name": "betaitala",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "shalimar",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "b.e. college",
    "location": null,
    "routes": [
      "routeBarasat - Botanical Garden (b Garden)"
    ]
  },
  {
    "name": "bargachia",
    "location": null,
    "routes": [
      "routeBargachia - Sealdah Court"
    ]
  },
  {
    "name": "makardah",
    "location": null,
    "routes": [
      "routeBargachia - Sealdah Court"
    ]
  },
  {
    "name": "nibra",
    "location": null,
    "routes": [
      "routeBargachia - Sealdah Court",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "khejurtala",
    "location": null,
    "routes": [
      "routeBargachia - Sealdah Court",
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "new market",
    "location": null,
    "routes": [
      "routeBargachia - Sealdah Court",
      "routeDhulagarh - Sealdah"
    ]
  },
  {
    "name": "moulai",
    "location": null,
    "routes": [
      "routeBargachia - Sealdah Court"
    ]
  },
  {
    "name": "gadiara",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara",
      "routeGadiara - Rajarhat"
    ]
  },
  {
    "name": "howrah station (30 min stop)",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "howrah court",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "foreshore road",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "phuleshwar",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "nimdighi",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "uluberia checkpost",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "gourhati more",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "mahishali jagadishpur more",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "dhulasimla",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "mohani more",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "morshal",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "gujarpur",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "chaulkhola",
    "location": null,
    "routes": [
      "routeBashirhat - Gadiara"
    ]
  },
  {
    "name": "shahidullah college",
    "location": null,
    "routes": [
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "berachampa crossing",
    "location": null,
    "routes": [
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "sondalia station",
    "location": null,
    "routes": [
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kamduni more",
    "location": null,
    "routes": [
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "langalpota",
    "location": null,
    "routes": [
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "salua",
    "location": null,
    "routes": [
      "routeBerachampa - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kilkhana",
    "location": null,
    "routes": [
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "vaishali",
    "location": null,
    "routes": [
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "purbanchal",
    "location": null,
    "routes": [
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "post office",
    "location": null,
    "routes": [
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "gobinda khatik road",
    "location": null,
    "routes": [
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "arupota",
    "location": null,
    "routes": [
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "paschim chowbhaga",
    "location": null,
    "routes": [
      "routeBotanical Garden (b Garden) - Dhamakhali",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "jaygram",
    "location": null,
    "routes": [
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "arsadmiya ghat",
    "location": null,
    "routes": [
      "routeBotanical Garden (b Garden) - Dhamakhali"
    ]
  },
  {
    "name": "nunchapota",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "changabottala",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "5 no. kalimath",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "asharu",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bonchakhali bazar",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "pathshimuliya bazar",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "kalambagan market",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "garapota",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "chandabazar",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "dharmapukuria",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "manigaon",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "ghatbaor",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bongaon paikpara",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "college ghat",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "1 no. railgate bazar",
    "location": null,
    "routes": [
      "routeBoyra - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "deulti",
    "location": null,
    "routes": [
      "routeDeulti - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "barunda",
    "location": null,
    "routes": [
      "routeDeulti - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "don bosco more",
    "location": null,
    "routes": [
      "routeDhulagarh - Newtown"
    ]
  },
  {
    "name": "hindu kabristan crossing ( tiljala )",
    "location": null,
    "routes": [
      "routeDhulagarh - Newtown",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "amri hospital",
    "location": null,
    "routes": [
      "routeDhulagarh - Newtown",
      "routeGadiara - Rajarhat"
    ]
  },
  {
    "name": "gd island",
    "location": null,
    "routes": [
      "routeDhulagarh - Newtown",
      "routeGadiara - Rajarhat",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "dhulagarh toll plaza",
    "location": null,
    "routes": [
      "routeDhulagarh - Sealdah"
    ]
  },
  {
    "name": "new karola",
    "location": null,
    "routes": [
      "routeDhulagarh - Sealdah"
    ]
  },
  {
    "name": "pg hospital/rabindra sadan",
    "location": null,
    "routes": [
      "routeDhulagarh - Sealdah"
    ]
  },
  {
    "name": "jivandeep",
    "location": null,
    "routes": [
      "routeDhulagarh - Sealdah"
    ]
  },
  {
    "name": "kona express",
    "location": null,
    "routes": [
      "routeDhulagarh - Unitech"
    ]
  },
  {
    "name": "vidyasaagar setu",
    "location": null,
    "routes": [
      "routeDhulagarh - Unitech"
    ]
  },
  {
    "name": "narkel bagan",
    "location": null,
    "routes": [
      "routeDhulagarh - Unitech"
    ]
  },
  {
    "name": "rajarhat",
    "location": null,
    "routes": [
      "routeGadiara - Rajarhat"
    ]
  },
  {
    "name": "gurjorpur",
    "location": null,
    "routes": [
      "routeGadiara - Rajarhat"
    ]
  },
  {
    "name": "laxmi bazar",
    "location": null,
    "routes": [
      "routeGadiara - Rajarhat"
    ]
  },
  {
    "name": "58-gate",
    "location": null,
    "routes": [
      "routeGadiara - Rajarhat"
    ]
  },
  {
    "name": "uluberia station",
    "location": null,
    "routes": [
      "routeGadiara - Rajarhat",
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "susrut hospital",
    "location": null,
    "routes": [
      "routeGadiara - Rajarhat"
    ]
  },
  {
    "name": "garia bazar",
    "location": null,
    "routes": [
      "routeGaria - Ultodanga"
    ]
  },
  {
    "name": "dinabandhu andrews college",
    "location": null,
    "routes": [
      "routeGaria - Ultodanga"
    ]
  },
  {
    "name": "singhabari",
    "location": null,
    "routes": [
      "routeGaria - Ultodanga"
    ]
  },
  {
    "name": "kalikapur avishikta",
    "location": null,
    "routes": [
      "routeGaria - Ultodanga"
    ]
  },
  {
    "name": "panchasayar",
    "location": null,
    "routes": [
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "new garia metro",
    "location": null,
    "routes": [
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "peerless",
    "location": null,
    "routes": [
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "metro cash and carry",
    "location": null,
    "routes": [
      "routeGaria Station - Bagbazar",
      "routeGaria Station - Paikpara"
    ]
  },
  {
    "name": "rajdanga",
    "location": null,
    "routes": [
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "ballygunge",
    "location": null,
    "routes": [
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "central garage",
    "location": null,
    "routes": [
      "routeGaria Station - Bagbazar"
    ]
  },
  {
    "name": "balia",
    "location": null,
    "routes": [
      "routeGaria Station - Kolkata Station"
    ]
  },
  {
    "name": "dhapa",
    "location": null,
    "routes": [
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara"
    ]
  },
  {
    "name": "apollo hospital",
    "location": null,
    "routes": [
      "routeGaria Station - Kolkata Station",
      "routeGaria Station - Paikpara",
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "muchibazar",
    "location": null,
    "routes": [
      "routeGaria Station - Kolkata Station"
    ]
  },
  {
    "name": "paikpara",
    "location": null,
    "routes": [
      "routeGaria Station - Paikpara"
    ]
  },
  {
    "name": "uttar panchannangram",
    "location": null,
    "routes": [
      "routeGaria Station - Paikpara"
    ]
  },
  {
    "name": "metro cash & carry",
    "location": null,
    "routes": [
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "hyatt regency",
    "location": null,
    "routes": [
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "prafullanagar",
    "location": null,
    "routes": [
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "maitypara",
    "location": null,
    "routes": [
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "fci godown",
    "location": null,
    "routes": [
      "routeKamalgazi - Dankuni Housing"
    ]
  },
  {
    "name": "ichapur jaltank",
    "location": null,
    "routes": [
      "routeKadamtala - Newtown"
    ]
  },
  {
    "name": "dumurjola housing complex",
    "location": null,
    "routes": [
      "routeKadamtala - Newtown"
    ]
  },
  {
    "name": "notun rastar more",
    "location": null,
    "routes": [
      "routeKadamtala - Newtown"
    ]
  },
  {
    "name": "darga road",
    "location": null,
    "routes": [
      "routeKadamtala - Newtown",
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "science city milan mela ground stoppage",
    "location": null,
    "routes": [
      "routeKadamtala - Newtown"
    ]
  },
  {
    "name": "howrah",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "madhyamgram station",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "muragachha",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "h.b. town",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "sodepur traffic more",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "belgharia rathtala",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "bonhoogly (isi)",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "sinthi more",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah",
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "tala bridge",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "central avenue",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "howrah bridge",
    "location": null,
    "routes": [
      "routeMadhyamgram Chowmatha - Howrah"
    ]
  },
  {
    "name": "entally",
    "location": null,
    "routes": [
      "routeMalancha - Kolkata Station",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "rajabazar tram depot",
    "location": null,
    "routes": [
      "routeMalancha - Kolkata Station",
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "matapara",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "gohalberia",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "kolia more",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "nabagram",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "dafarpur",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "belari mollah more",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "baganda",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "moubesia",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "kalinagar more",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "gangarampur",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "dompara",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "jamberia bridge",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "khalisani",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "paniarah",
    "location": null,
    "routes": [
      "routeMatapara - Newtown"
    ]
  },
  {
    "name": "muchighata",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "jhikira",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "amragari",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "sehagori",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "shibtala",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "betai bondor more",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "narit more",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "amta college more",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "amta new market",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "amta station",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "chakhana",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "asuthwatala",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "vandergachha",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee",
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "malikbagan",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "rabindrasadan",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "khalpol",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "sarkar bazar",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "rashmoni bazar",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "id hospital",
    "location": null,
    "routes": [
      "routeMuchighata - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "naktala (garia)",
    "location": null,
    "routes": [
      "routeNaktala (garia) - Dakshineshwar"
    ]
  },
  {
    "name": "anantapur",
    "location": null,
    "routes": [
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "rajarhat bishnupur",
    "location": null,
    "routes": [
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "rajarhat bazar",
    "location": null,
    "routes": [
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "indiranagar",
    "location": null,
    "routes": [
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "raigachhi",
    "location": null,
    "routes": [
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "jyangra chowmatha",
    "location": null,
    "routes": [
      "routePolerhat - Shyambazar"
    ]
  },
  {
    "name": "rajabazar (dankuni)",
    "location": null,
    "routes": [
      "routeRajabazar (dankuni) - Baburhat"
    ]
  },
  {
    "name": "baburhat",
    "location": null,
    "routes": [
      "routeRajabazar (dankuni) - Baburhat"
    ]
  },
  {
    "name": "deuli",
    "location": null,
    "routes": [
      "routeRajabazar (dankuni) - Baburhat"
    ]
  },
  {
    "name": "murarisha chowmatha",
    "location": null,
    "routes": [
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "taki",
    "location": null,
    "routes": [
      "routeRajabazar - Hasnabad"
    ]
  },
  {
    "name": "paechar more (owl more)",
    "location": null,
    "routes": [
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "police phari",
    "location": null,
    "routes": [
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "the westin",
    "location": null,
    "routes": [
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "tcs gitanjani park",
    "location": null,
    "routes": [
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "swapnobhor",
    "location": null,
    "routes": [
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "novotel",
    "location": null,
    "routes": [
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "r.s. software",
    "location": null,
    "routes": [
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "techno india",
    "location": null,
    "routes": [
      "routeRajchandrapur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bit college",
    "location": null,
    "routes": [
      "routeShyambazar - Malancha"
    ]
  },
  {
    "name": "kathilabar",
    "location": null,
    "routes": [
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "sasati",
    "location": null,
    "routes": [
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "nuntia",
    "location": null,
    "routes": [
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "bagnan station",
    "location": null,
    "routes": [
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "library more",
    "location": null,
    "routes": [
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "birshibpur",
    "location": null,
    "routes": [
      "routeShyampur - Kolkata Station"
    ]
  },
  {
    "name": "don bosco crossing",
    "location": null,
    "routes": [
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "park circus station",
    "location": null,
    "routes": [
      "routeSantragachi - Newtown"
    ]
  },
  {
    "name": "udanarayanpur",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "garh bhawanipur",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "betai",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "senerdanga",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "islampur",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "gabberia chotopole",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "gabberia hospital",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "bastala",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "sandhipur",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "new kolora",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "dhapa mathpukur",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  },
  {
    "name": "susrut eye hospital",
    "location": null,
    "routes": [
      "routeUdanarayanpur - Saltlake Karunamoyee"
    ]
  }
]

export default busStops;