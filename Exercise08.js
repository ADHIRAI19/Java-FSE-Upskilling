function registerEvent() {
    alert("Registration Successful");
}

function filterCategory() {
    let value = document.getElementById("category").value;
    console.log(value);
}

document.addEventListener("keydown", function (event) {
    console.log(event.key);
});

