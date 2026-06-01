function addEvent(name) {
    console.log(name + " Added");
}

function registerUser(user) {
    console.log(user + " Registered");
}

function filterEventsByCategory(events, callback) {
    return events.filter(callback);
}

function registrationCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = registrationCounter();

console.log(counter());
console.log(counter());

