let textInput = document.getElementById("textarea");
let form = document.querySelector("form");
let color = document.getElementById("favcolor");

const storedColor = localStorage.getItem("favoriteColor");

if (storedColor) {
    console.log("stored color: ${storedColor}");

    color.value = storedColor;
}

form.addEventListener("input", event => {
    event.preventDefault();
    textInput.value = "Hello World";
    console.log("Hello World");

    const selectedColor = event.target.value;

    console.log("Selected color: ${selectedColor}")

    localStorage.setItem("favoriteColor", selectedColor);

});