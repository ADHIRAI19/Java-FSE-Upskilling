const events = [
    { name: "Music Festival", seats: 10 },
    { name: "Old Event", seats: 0 }
];

events.forEach(event => {
    if (event.seats > 0) {
        console.log(event.name);
    }
});

try {
    let seats = 5;

    if (seats <= 0) {
        throw "No Seats Available";
    }

    seats--;
    console.log("Registration Successful");

} catch (error) {
    console.log(error);
}

