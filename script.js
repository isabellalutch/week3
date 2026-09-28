
let happyButton = document.getElementById("happyButton");
let sadButton = document.getElementById("sadButton");

happyButton.addEventListener("click", function() {
    document.getElementById("title").innerHTML = "That's good";
    document.getElementById("message").innerHTML =
        "I hope you have a great day";
    document.getElementById("moodBox").innerHTML = "Happy Mood";
    document.getElementById("moodBox").style.backgroundColor = "lightyellow";

});
sadButton.addEventListener("click", function() {
    document.getElementById("title").innerHTML = "Oh no";
    document.getElementById("message").innerHTML =
        "Find something that makes you happy.";
    document.getElementById("moodBox").innerHTML = "Sad Mood";
    document.getElementById("moodBox").style.backgroundColor = "lightblue";

});
document.addEventListener("keydown", function(event) {
    if (event.key == "s" || event.key == "S") {
        document.getElementById("keyboardMessage").innerHTML =
            "Good job, you found the secret message";
        document.getElementById("keyboardMessage").style.fontSize = "24px";

    }

});
window.addEventListener("resize", function() {

    if (window.innerWidth < 800) {
        document.body.style.backgroundColor = "lightgray";
    } else {
        document.body.style.backgroundColor = "#f5f5f5";
    }

});
document.getElementById("windowSize").innerHTML =
    "The browser window is " + window.innerWidth + " pixels wide.";