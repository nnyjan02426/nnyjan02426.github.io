// font controll
let fontSizePercentage = 100;
$("body").css("font-size", fontSizePercentage + "%");
$("#increase-font").click(function () {
    fontSizePercentage += 10;
    $("body").css("font-size", fontSizePercentage + "%");
})
$("#default-font").click(function () {
    fontSizePercentage = 100;
    $("body").css("font-size", fontSizePercentage + "%");
})
$("#decrease-font").click(function () {
    if (fontSizePercentage <= 50) return;
    fontSizePercentage -= 10;
    $("body").css("font-size", fontSizePercentage + "%");
})

// color-box
document.querySelector("#color-box > p").textContent = "try changing the color of this box!";
document.querySelector('#color-input > button').addEventListener('click', function () {
    const colorValue = document.querySelector('#color-input > input').value;
    const validInput = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(colorValue);

    if (validInput) {
        document.getElementById('color-box').style.backgroundColor = colorValue; // Change the box color
        document.querySelector("#color-box > p").textContent = "";
    } else {
        alert('Invalid input.\nPlease enter a valid hex color code.\n(e.g., #2a321f).');
    }
});

// quote
document.getElementById("quote-text").textContent = "click on the button to get a random quote!";
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("quote-button");
    const quote = document.getElementById("quote-text");
    const cite = document.getElementById("quote-cite");

    async function updateQuote() {
        const response = await fetch("https://quoteslate.vercel.app/api/quotes/random");
        const json = await response.json();
        if (response.ok) {
            quote.textContent = json.quote;
            cite.textContent = "- " + json.author;
        } else {
            quote.textContent = "An error occured";
            console.log(data);
        }
    }

    button.addEventListener("click", updateQuote);
})

// Get the last modified date of website
document.getElementById("last-modified").textContent = document.lastModified;
