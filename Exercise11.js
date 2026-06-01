document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let form = e.target;

    let name = form.elements["username"].value;
    let email = form.elements["email"].value;

    if (name === "" || email === "") {
        document.getElementById("error").innerHTML = "All fields required";
        return;
    }

    alert("Registration Successful");
});

