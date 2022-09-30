console.log("conneted");
const data = [
  {
    id: 1,
    name: "PRAGUE CARNIVAL (MASOPUST) - FESTIVAL & PARADE",
    date: "2022-02-26",
    description:
      "Prague Carnival (Masopust) traces its roots back to medieval times, and is a celebration of human joy and gregariousness. Set hours for the various events are not generally adhered to, everything is far too free spirited for that! Just spend time in the Lesser Town and if you see colourfully dressed people and hear loud music, you know the carnival has arrived. The Masks Parade is the most celebrated element of Prague Carnival. It starts at U \u010cern\u00e9ho vola pub at Loretanske namesti near Prague Castle, winds down through the Lesser Town, and should arrive at Kampa Island around 3-4pm, where a party is held with live music and festival food and drinks on sale.",
    image_url:
      "http://www.progetto.cz/wp-content/uploads/2015/10/33-Masopust.jpg",
  },
  {
    id: 2,
    name: "ICE RINK BY CHARLES BRIDGE",
    date: "2022-02-15",
    description:
      "Open-air ice rink right next to Charles Bridge. Skate rental and heated bar with food and drinks available",
    image_url:
      "https://www.praguest.com/images/sampledata/sports/iceskating/ovocnytrh/estate-theatre.jpg",
  },
  {
    id: 3,
    name: "ST MATHEW'S FAIR",
    date: "2022-03-20",
    description:
      "The oldest reference to the St. Mathew's fair dates from the 16th century. It is one of the most popular fairs in the Czech Republic, with 120 rides and attractions to enjoy, from swing carousels to bumper cars and shooting galleries.",
    image_url:
      "https://www.welcometoprague.eu/storage/upload/images/Entertainmet/Fair_large.jpg",
  },
  {
    id: 4,
    name: "FOOTBALL WORLD CUP 2022: WHERE TO WATCH IN PRAGUE",
    date: "2022-11-22",
    description:
      "The 2022 World Cup may be held in Qatar, but Prague is a good city to watch the live television coverage in. Prague draws visitors from around the world, and many combine a city break with watching their nation's fortunes on the big screen. Watch all the action at one of the city's lively sports bars. Even better, the top matches are shown on huge outdoor screens at the Old Town Square and Wenceslas Square.",
    image_url:
      "https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/bn14hjq39c3kq46yybox",
  },
  {
    id: 5,
    name: "PRAGUE GAMES - FLOORBALL TOURNAMENT",
    date: "2022-07-14",
    description:
      "Prague Games is an international tournament for young players of the fast-growing sport of floorball.",
    image_url:
      "https://media.istockphoto.com/photos/floorball-player-with-stick-and-ball-picture-id917598096?k=20&m=917598096&s=170667a&w=0&h=OY3KLOsBl45BXIDcWI29l2I4qGNh4HWLNqGJUKyHbAI=",
  },
  {
    id: 6,
    name: "PRAGUE MARATHON",
    date: "2022-05-08",
    description:
      "The Prague Marathon enjoys one of the most beautiful courses in the world. The race winds through the historic city centre, over bridges and along the Vltava River. The race is on Sunday, but the build up starts on Saturday with a weekend of activities, including relay and corporate team marathons.",
    image_url:
      "http://www.progetto.cz/wp-content/uploads/2018/03/20-prague-half-marathon-2.jpg",
  },
];
const url = "https://test-api.codingbootcamp.cz/api/1f3309ad/events";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const fetchData = async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  }
};

fetchData();
const featHtml = document.querySelector(".container");

const event1 = new api_event("test", "desription", "2022-09-02", "link");
const feat1 = new api_event(
  data[0].name,
  data[0].description,
  data[0].date,
  data[0].image_url,
  true
);
const feattest = feat1.render();
featHtml.appendChild(feattest);
//add class="list"

const listClass = document.createElement("div");
listClass.className = "list";
featHtml.appendChild(listClass);
const listHtml = document.querySelector(".list");

// const temp = event1.render();
data.forEach((item, index) => {
  if (index > 0) {
    const eventName = item.name;
    const evenDate = item.date;
    const evenDescription = item.description;
    const evenImage = item.image_url;
    const eventItem = new api_event(
      eventName,
      evenDescription,
      evenDate,
      evenImage
    );
    const evenHtml = eventItem.render();
    listHtml.appendChild(evenHtml);
  }
});
