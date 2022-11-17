var data = {
    count: 36,
    next: "https://swapi.dev/api/starships/?page=2",
    previous: null,
    results: [{
      cargo_capacity: "3000000",
      consumables: "1 year",
      cost_in_credits: "3500000",
      created: "2014-12-10T14:20:33.369000Z",
      crew: "30-165",
      edited: "2014-12-20T21:23:49.867000Z",
      films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/"],
      hyperdrive_rating: "2.0",
      length: "150",
      manufacturer: "Corellian Engineering Corporation",
      max_atmosphering_speed: "950",
      MGLT: "60",
      model: "CR90 corvette",
      name: "CR90 corvette",
      passengers: "600",
      pilots: [],
      starship_class: "corvette",
      url: "https://swapi.dev/api/starships/2/"
    }, {
      cargo_capacity: "36000000",
      consumables: "2 years",
      cost_in_credits: "150000000",
      created: "2014-12-10T15:08:19.848000Z",
      crew: "47,060",
      edited: "2014-12-20T21:23:49.870000Z",
      films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/"],
      hyperdrive_rating: "2.0",
      length: "1,600",
      manufacturer: "Kuat Drive Yards",
      max_atmosphering_speed: "975",
      MGLT: "60",
      model: "Imperial I-class Star Destroyer",
      name: "Star Destroyer",
      passengers: "n/a",
      pilots: ["https://swapi.dev/api/people/13/"],
      starship_class: "Star Destroyer",
      url: "https://swapi.dev/api/starships/3/"
    }, {
      cargo_capacity: "180000",
      consumables: "1 month",
      cost_in_credits: "240000",
      created: "2014-12-10T15:48:00.586000Z",
      crew: "5",
      edited: "2014-12-20T21:23:49.873000Z",
      films: ["https://swapi.dev/api/films/1/"],
      hyperdrive_rating: "1.0",
      length: "38",
      manufacturer: "Sienar Fleet Systems, Cyngus Spaceworks",
      max_atmosphering_speed: "1000",
      MGLT: "70",
      model: "Sentinel-class landing craft",
      name: "Sentinel-class landing craft",
      passengers: "75",
      pilots: [],
      starship_class: "landing craft",
      url: "https://swapi.dev/api/starships/5/"
    }, {
      cargo_capacity: "1000000000000",
      consumables: "3 years",
      cost_in_credits: "1000000000000",
      created: "2014-12-10T16:36:50.509000Z",
      crew: "342,953",
      edited: "2014-12-20T21:26:24.783000Z",
      films: ["https://swapi.dev/api/films/1/"],
      hyperdrive_rating: "4.0",
      length: "120000",
      manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
      max_atmosphering_speed: "n/a",
      MGLT: "10",
      model: "DS-1 Orbital Battle Station",
      name: "Death Star",
      passengers: "843,342",
      pilots: [],
      starship_class: "Deep Space Mobile Battlestation",
      url: "https://swapi.dev/api/starships/9/"
    }, {
      cargo_capacity: "100000",
      consumables: "2 months",
      cost_in_credits: "100000",
      created: "2014-12-10T16:59:45.094000Z",
      crew: "4",
      edited: "2014-12-20T21:23:49.880000Z",
      films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/"],
      hyperdrive_rating: "0.5",
      length: "34.37",
      manufacturer: "Corellian Engineering Corporation",
      max_atmosphering_speed: "1050",
      MGLT: "75",
      model: "YT-1300 light freighter",
      name: "Millennium Falcon",
      passengers: "6",
      pilots: ["https://swapi.dev/api/people/13/", "https://swapi.dev/api/people/14/", "https://swapi.dev/api/people/25/", "https://swapi.dev/api/people/31/"],
      starship_class: "Light freighter",
      url: "https://swapi.dev/api/starships/10/"
    }]
  };


for (var i of data['results']){
    // console.log(i);
    if(i.pilots.length > 0){
        for (var pilot of i.pilots){
            console.log(pilot);
        }
    }
}
