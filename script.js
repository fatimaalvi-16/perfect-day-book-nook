// NIGHT MODE

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("night");

    if (document.body.classList.contains("night")) {

        themeButton.innerText = "☀️ Day Mode";

        document.getElementById("timeText").innerText =
            "A quiet night for reading... 🌙";

    } else {

        themeButton.innerText = "🌙 Night Mode";

        document.getElementById("timeText").innerText =
            "A peaceful morning... ☀️";
    }

});


// BOOK POPUP

function openBook(genre) {

    const title = document.getElementById("bookTitle");
    const description = document.getElementById("bookDescription");
    const popup = document.getElementById("bookPopup");

    title.innerText = genre + " 📖";

    if (genre === "Fantasy") {

        description.innerText =
            "Escape into magical worlds filled with mysterious kingdoms, enchanted forests and unforgettable adventures. ✨";

    } else if (genre === "Mystery") {

        description.innerText =
            "A perfect choice for solving mysteries, following clues and trying to figure out the ending before the characters do. 🔍";

    } else if (genre === "Adventure") {

        description.innerText =
            "Pack your imaginary bags and get ready for a journey full of discoveries, challenges and exciting places. 🗺️";

    } else if (genre === "Romance") {

        description.innerText =
            "A soft little corner for stories about friendship, feelings and characters finding their way to each other. 💗";

    } else if (genre === "Classics") {

        description.innerText =
            "Stories that have stayed loved for generations and still have something interesting to say. 🌷";

    } else if (genre === "Thriller") {

        description.innerText =
            "For when you want suspense, unexpected twists and a story that makes you say 'ONE MORE CHAPTER.' 🕯️";

    } else if (genre === "Poetry") {

        description.innerText =
            "A quiet collection of words, emotions and tiny moments turned into something beautiful. 🦋";
    }

    popup.style.display = "flex";
}


// CLOSE BOOK

function closeBook() {

    document.getElementById("bookPopup").style.display = "none";

}


// LAMP

function toggleLamp() {

    const lamp = document.getElementById("lamp");

    if (lamp.innerText === "💡") {

        lamp.innerText = "🔆";

    } else {

        lamp.innerText = "💡";

    }

}


// MUG

function showDrink() {

    alert("☕ Your hot chocolate is ready! Perfect reading fuel.");

}


// PERFECT DAY

function chooseMood(mood) {

    const result = document.getElementById("result");

    if (mood === "cozy") {

        result.innerText =
            "☕ Your perfect day: soft blankets, hot chocolate, rain outside and a good book in your hands.";

    } else if (mood === "adventure") {

        result.innerText =
            "🗺️ Your perfect day: exploring somewhere new, discovering hidden places and ending the day with a great adventure novel.";

    } else if (mood === "peaceful") {

        result.innerText =
            "🌸 Your perfect day: a slow morning, flowers by the window, soft music and an afternoon spent reading.";

    } else if (mood === "magical") {

        result.innerText =
            "🪄 Your perfect day: a mysterious library, enchanted books, fairy lights and a fantasy world waiting to be discovered.";
    }

}
