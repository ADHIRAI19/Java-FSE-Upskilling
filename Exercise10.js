const eventData = {
    name: "Music Festival",
    date: "10-06-2026"
};

const { name, date } = eventData;

console.log(name);
console.log(date);

function displayEvent(title = "Default Event") {
    console.log(title);
}

displayEvent();

const events = ["Music", "Sports"];

const clonedEvents = [...events];

console.log(clonedEvents);

