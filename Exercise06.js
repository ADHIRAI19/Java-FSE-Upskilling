let events = [];

events.push("Music Festival");
events.push("Workshop");
events.push("Music Night");

let musicEvents = events.filter(event =>
    event.includes("Music")
);

console.log(musicEvents);

let cards = events.map(event =>
    "Workshop on " + event
);

console.log(cards);

