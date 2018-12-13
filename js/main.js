/* Menu */
$(document).ready(function () {
    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
});

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

/* Random title words instead of lucioball = RL */
/*
var textToDisplay = ["LÚCIOBALL IS ROCKET LEAGUE. CHANGE MY MIND.", "Science will reveal the truth",
    "Tu stultus es", "What a save!", "Boo boo doo de doo", "Lorem ipsum dolor sit amet",
    "undefined", "Stupidity is not a right.", "What a victory-challenged.",
    "We will do as promised, give us a while.", "Chat disabled for 3 seconds",
    "This sentence is false.", "Soyuz nerushimy respublik svobodnykh", "Make America Great Britain again!"];
var randInt = Math.floor(Math.random() * textToDisplay.length);

var item = textToDisplay[randInt].toUpperCase();

var bigBoldText = document.getElementById("uselessText");

bigBoldText.textContent = item;
*/
/* Collapse */

var coll = document.getElementsByClassName("category");
var Q = document.getElementsByClassName("Q");

var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

for (i = 0; i < Q.length; i++) {
    Q[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// DO NOT DELETE THIS. THIS IS FOR THE FAQS' ANSWERS.
// DO NOT DELETE THIS. THIS IS FOR THE FAQS' ANSWERS.
// DO NOT DELETE THIS. THIS IS FOR THE FAQS' ANSWERS.
// DO NOT DELETE THIS. THIS IS FOR THE FAQS' ANSWERS.
// DO NOT DELETE THIS. THIS IS FOR THE FAQS' ANSWERS.

var acc = document.getElementsByClassName("accordion");
var j;

for (j = 0; j < acc.length; j++) {
    acc[j].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

/* Search */

var input = document.getElementById("input-text");
var hsearch = document.getElementById("h-search");
var btn = document.getElementById("btn");

$(document).ready(function () {
    var url = window.location.search;
    var search = url.replace("?search=", "");
    var decode = decodeURIComponent(search);
    hsearch.textContent = "Search: " + decode;
});

input.addEventListener('keypress', function (e) {
    if (e.which === 13) {
        hsearch.textContent = "Search: " + input.value;
        e.preventDefault();
    }
});

btn.onclick = function (e) {
    hsearch.textContent = "Search: " + input.value;
    e.preventDefault();
}