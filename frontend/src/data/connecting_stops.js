const connectingStops = [
  {
    "name": "esplanade",
    "routeCount": 135
  },
  {
    "name": "howrah station",
    "routeCount": 113
  },
  {
    "name": "barabazar",
    "routeCount": 91
  },
  {
    "name": "dalhousie",
    "routeCount": 76
  },
  {
    "name": "shyambazar",
    "routeCount": 57
  },
  {
    "name": "rabindra sadan",
    "routeCount": 53
  },
  {
    "name": "sealdah station",
    "routeCount": 53
  },
  {
    "name": "ultadanga",
    "routeCount": 50
  },
  {
    "name": "park street",
    "routeCount": 46
  },
  {
    "name": "moulali more",
    "routeCount": 46
  },
  {
    "name": "laketown",
    "routeCount": 45
  },
  {
    "name": "maidan",
    "routeCount": 44
  },
  {
    "name": "chandni market",
    "routeCount": 44
  },
  {
    "name": "howrah maidan",
    "routeCount": 44
  },
  {
    "name": "m.g. road",
    "routeCount": 41
  },
  {
    "name": "kestopur",
    "routeCount": 39
  },
  {
    "name": "baguiati",
    "routeCount": 39
  },
  {
    "name": "gariahat",
    "routeCount": 37
  },
  {
    "name": "wellington",
    "routeCount": 37
  },
  {
    "name": "mominpore",
    "routeCount": 37
  },
  {
    "name": "airport gate 1",
    "routeCount": 36
  },
  {
    "name": "rashbehari",
    "routeCount": 35
  },
  {
    "name": "minto park",
    "routeCount": 35
  },
  {
    "name": "hastings",
    "routeCount": 34
  },
  {
    "name": "kalighat",
    "routeCount": 34
  },
  {
    "name": "babughat",
    "routeCount": 33
  },
  {
    "name": "majherhat",
    "routeCount": 33
  },
  {
    "name": "hazra more",
    "routeCount": 33
  },
  {
    "name": "science city",
    "routeCount": 33
  },
  {
    "name": "sreebhumi",
    "routeCount": 32
  },
  {
    "name": "dumdum park",
    "routeCount": 31
  },
  {
    "name": "sovabazar",
    "routeCount": 31
  },
  {
    "name": "kaikhali",
    "routeCount": 31
  },
  {
    "name": "kidderpore",
    "routeCount": 30
  },
  {
    "name": "behala 14 no.",
    "routeCount": 30
  },
  {
    "name": "maniktala",
    "routeCount": 30
  },
  {
    "name": "rajabazar",
    "routeCount": 29
  },
  {
    "name": "girish park",
    "routeCount": 29
  },
  {
    "name": "fort william",
    "routeCount": 28
  },
  {
    "name": "behala chowrasta",
    "routeCount": 28
  },
  {
    "name": "khanna cinema",
    "routeCount": 28
  },
  {
    "name": "park circus",
    "routeCount": 27
  },
  {
    "name": "college street",
    "routeCount": 26
  },
  {
    "name": "central metro",
    "routeCount": 26
  },
  {
    "name": "chiria more",
    "routeCount": 26
  },
  {
    "name": "rajballavpara",
    "routeCount": 26
  },
  {
    "name": "haldiram",
    "routeCount": 26
  },
  {
    "name": "college more",
    "routeCount": 25
  },
  {
    "name": "belgachia",
    "routeCount": 25
  },
  {
    "name": "bhowanipore",
    "routeCount": 24
  },
  {
    "name": "chingrighata",
    "routeCount": 24
  },
  {
    "name": "madhyamgram chowmatha",
    "routeCount": 24
  },
  {
    "name": "sakher bazar",
    "routeCount": 23
  },
  {
    "name": "birati more",
    "routeCount": 23
  },
  {
    "name": "shilpara",
    "routeCount": 22
  },
  {
    "name": "p.t.s. more",
    "routeCount": 22
  },
  {
    "name": "rabindra sarovar",
    "routeCount": 22
  },
  {
    "name": "4 no. bridge",
    "routeCount": 22
  },
  {
    "name": "beck bagan",
    "routeCount": 22
  },
  {
    "name": "b.t. college",
    "routeCount": 22
  },
  {
    "name": "narkelbagan",
    "routeCount": 22
  },
  {
    "name": "taratala",
    "routeCount": 21
  },
  {
    "name": "deshapriya park",
    "routeCount": 21
  },
  {
    "name": "dhakuria",
    "routeCount": 21
  },
  {
    "name": "ballygunge phari",
    "routeCount": 21
  },
  {
    "name": "barasat",
    "routeCount": 21
  },
  {
    "name": "dakshineshwar",
    "routeCount": 21
  },
  {
    "name": "thakurpukur",
    "routeCount": 20
  },
  {
    "name": "golpark",
    "routeCount": 20
  },
  {
    "name": "karunamoyee",
    "routeCount": 20
  },
  {
    "name": "c.i.t. road",
    "routeCount": 20
  },
  {
    "name": "chinar park",
    "routeCount": 20
  },
  {
    "name": "kankurgachi",
    "routeCount": 20
  },
  {
    "name": "dhulagarh",
    "routeCount": 20
  },
  {
    "name": "ekbalpur",
    "routeCount": 19
  },
  {
    "name": "joka bridge",
    "routeCount": 19
  },
  {
    "name": "alampur",
    "routeCount": 19
  },
  {
    "name": "ruby hospital",
    "routeCount": 18
  },
  {
    "name": "topsia",
    "routeCount": 18
  },
  {
    "name": "belepole",
    "routeCount": 18
  },
  {
    "name": "dunlop more",
    "routeCount": 17
  },
  {
    "name": "sinthee more",
    "routeCount": 17
  },
  {
    "name": "chittaranjan hospital",
    "routeCount": 17
  },
  {
    "name": "bishnupur",
    "routeCount": 17
  },
  {
    "name": "vivekananda road",
    "routeCount": 17
  },
  {
    "name": "airport gate 3",
    "routeCount": 17
  },
  {
    "name": "moulali",
    "routeCount": 16
  },
  {
    "name": "hatibagan",
    "routeCount": 16
  },
  {
    "name": "bonhooghly",
    "routeCount": 16
  },
  {
    "name": "tobin road",
    "routeCount": 16
  },
  {
    "name": "bangur avenue",
    "routeCount": 16
  },
  {
    "name": "ranihati",
    "routeCount": 16
  },
  {
    "name": "pailan",
    "routeCount": 15
  },
  {
    "name": "ballygunge station",
    "routeCount": 15
  },
  {
    "name": "mallick bazar",
    "routeCount": 15
  },
  {
    "name": "ahiritola",
    "routeCount": 15
  },
  {
    "name": "r.g.kar hospital",
    "routeCount": 15
  },
  {
    "name": "patipukur",
    "routeCount": 15
  },
  {
    "name": "kalindi more",
    "routeCount": 15
  },
  {
    "name": "chapadali more",
    "routeCount": 15
  },
  {
    "name": "khanna",
    "routeCount": 15
  },
  {
    "name": "tikiapara",
    "routeCount": 15
  },
  {
    "name": "belilious road",
    "routeCount": 15
  },
  {
    "name": "ramnagar",
    "routeCount": 14
  },
  {
    "name": "mukundapur",
    "routeCount": 14
  },
  {
    "name": "bakultala",
    "routeCount": 14
  },
  {
    "name": "tollygunge",
    "routeCount": 14
  },
  {
    "name": "b.b.d. bag",
    "routeCount": 14
  },
  {
    "name": "jadavpur 8b",
    "routeCount": 14
  },
  {
    "name": "diamond plaza",
    "routeCount": 14
  },
  {
    "name": "kalikapur",
    "routeCount": 14
  },
  {
    "name": "mallick fatak",
    "routeCount": 14
  },
  {
    "name": "bhabani bhawan",
    "routeCount": 13
  },
  {
    "name": "e.m. bypass",
    "routeCount": 13
  },
  {
    "name": "brace bridge",
    "routeCount": 13
  },
  {
    "name": "alipore court",
    "routeCount": 13
  },
  {
    "name": "rathtala more",
    "routeCount": 13
  },
  {
    "name": "b.k.paul more",
    "routeCount": 13
  },
  {
    "name": "beleghata",
    "routeCount": 13
  },
  {
    "name": "newtown",
    "routeCount": 13
  },
  {
    "name": "golabarai ps / pilkhana more",
    "routeCount": 13
  },
  {
    "name": "kazipara more / avani mall",
    "routeCount": 13
  },
  {
    "name": "shibpur bazar",
    "routeCount": 13
  },
  {
    "name": "shanpur more",
    "routeCount": 13
  },
  {
    "name": "ankurhati",
    "routeCount": 13
  },
  {
    "name": "mohanpur",
    "routeCount": 13
  },
  {
    "name": "carry road",
    "routeCount": 13
  },
  {
    "name": "jhinjhira bazar",
    "routeCount": 12
  },
  {
    "name": "medical college",
    "routeCount": 12
  },
  {
    "name": "tollygunge phari",
    "routeCount": 12
  },
  {
    "name": "amtala",
    "routeCount": 12
  },
  {
    "name": "khariberia",
    "routeCount": 12
  },
  {
    "name": "bhasha 14no.",
    "routeCount": 12
  },
  {
    "name": "jorabagan",
    "routeCount": 12
  },
  {
    "name": "barabazar / posta bazar",
    "routeCount": 12
  },
  {
    "name": "bikash bhawan",
    "routeCount": 12
  },
  {
    "name": "gouripur",
    "routeCount": 12
  },
  {
    "name": "pts",
    "routeCount": 12
  },
  {
    "name": "bataitala phari",
    "routeCount": 12
  },
  {
    "name": "santragachi",
    "routeCount": 12
  },
  {
    "name": "bowbazar",
    "routeCount": 11
  },
  {
    "name": "acropolis mall",
    "routeCount": 11
  },
  {
    "name": "wipro more",
    "routeCount": 11
  },
  {
    "name": "lokenath mandir",
    "routeCount": 11
  },
  {
    "name": "kamarhati",
    "routeCount": 11
  },
  {
    "name": "building more",
    "routeCount": 11
  },
  {
    "name": "nicco park",
    "routeCount": 11
  },
  {
    "name": "ajaynagar",
    "routeCount": 11
  },
  {
    "name": "dunlop",
    "routeCount": 11
  },
  {
    "name": "danesh shaikh lane",
    "routeCount": 11
  },
  {
    "name": "amtala phari",
    "routeCount": 11
  },
  {
    "name": "narayana hospital",
    "routeCount": 11
  },
  {
    "name": "doltala",
    "routeCount": 11
  },
  {
    "name": "dakbungalow more",
    "routeCount": 11
  },
  {
    "name": "malapara",
    "routeCount": 11
  },
  {
    "name": "alipore zoo",
    "routeCount": 10
  },
  {
    "name": "fatehpur",
    "routeCount": 10
  },
  {
    "name": "baghajatin",
    "routeCount": 10
  },
  {
    "name": "bosepukur",
    "routeCount": 10
  },
  {
    "name": "garia station",
    "routeCount": 10
  },
  {
    "name": "s.d.f. more",
    "routeCount": 10
  },
  {
    "name": "sishu mangal",
    "routeCount": 10
  },
  {
    "name": "sarisha more",
    "routeCount": 10
  },
  {
    "name": "shirakole",
    "routeCount": 10
  },
  {
    "name": "derozio college",
    "routeCount": 10
  },
  {
    "name": "reckjuani",
    "routeCount": 10
  },
  {
    "name": "rajarhat chowmatha",
    "routeCount": 10
  },
  {
    "name": "ghatakpukur",
    "routeCount": 10
  },
  {
    "name": "baishnabghata",
    "routeCount": 10
  },
  {
    "name": "rajchandrapur",
    "routeCount": 10
  },
  {
    "name": "bally halt",
    "routeCount": 10
  },
  {
    "name": "dasnagar",
    "routeCount": 10
  },
  {
    "name": "colony more",
    "routeCount": 10
  },
  {
    "name": "mathpukur",
    "routeCount": 10
  },
  {
    "name": "wipro",
    "routeCount": 10
  },
  {
    "name": "exide",
    "routeCount": 10
  }
]

export default connectingStops;