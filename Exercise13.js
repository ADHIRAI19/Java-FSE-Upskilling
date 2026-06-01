function registerUser() {
    console.log("Step 1");

    let user = {
        name: "John"
    };

    console.log(user);

    debugger;

    console.log("Step 2");

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

registerUser();

