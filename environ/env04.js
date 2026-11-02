let environmentTitle = "The Listening Ridge";

let environmentElements = [
    "mist",
    "pine trunks",
    "moonlit trail",
    "cold air",
    "scratched signs",
    "distant owl calls"
];

let mainEntity = {
    name: "The Lantern",
    type: "forest signal",
    mood: "watchful",
    isMoving: true,
    favoriteElement: environmentElements[2]
};

let trailChecks = 0;

function showEnvironmentOutput(content) {
    $("#environment-output").html(content);
}

function tuneTimeOfDay(timeOfDay) {
    let chosenTime = timeOfDay.trim().toLowerCase();

    if (chosenTime === "day") {
        $("body").removeClass("night-mode").addClass("day-mode");
        $(".ridge").attr("aria-label", "The Listening Ridge during the day");
        $(".sun-or-moon").text("☀");
        $(".stars").text("☁　·　☁　·　☁");
        $(".ridge-caption").text("Sunlight catches the mist. The Lantern blinks in the bright morning air.");
        showEnvironmentOutput("<h2>Day on the ridge</h2><p>The owls rest, birdsong fills the pines, and the Lantern looks almost sleepy.</p>");
    } else if (chosenTime === "night") {
        $("body").removeClass("day-mode").addClass("night-mode");
        $(".ridge").attr("aria-label", "The Listening Ridge at night");
        $(".sun-or-moon").text("☾");
        $(".stars").text("✦　·　✧　·　✦");
        $(".ridge-caption").text("Mist curls around the moonlit trail. The Lantern is watchful.");
        showEnvironmentOutput("<h2>Night on the ridge</h2><p>The Lantern glows softly while distant owls call through the trees.</p>");
    } else {
        showEnvironmentOutput("<h2>The ridge stays as it is</h2><p>Please enter <strong>day</strong> or <strong>night</strong> to tune the scene.</p>");
    }
}

$("#tune-time").click(function () {
    let timeOfDay = prompt("Should the ridge shift to day or night?");
    if (timeOfDay !== null) {
        tuneTimeOfDay(timeOfDay);
    }
});

$("#show-title").click(function () {
    showEnvironmentOutput(
        "<h2>" + environmentTitle + "</h2>" +
        "<p>A ridge where the fog curls between the trees and every sound feels intentional.</p>"
    );
});

$("#show-elements").click(function () {
    let list = "<h2>Forest elements</h2><ul>";
    for (let i = 0; i < environmentElements.length; i++) {
        list = list + "<li>" + environmentElements[i] + "</li>";
    }
    list = list + "</ul>";
    showEnvironmentOutput(list);
});

$("#show-entity").click(function () {
    showEnvironmentOutput(
        "<h2>Main entity</h2>" +
        "<p>" + mainEntity.name + " is a " + mainEntity.type + ".</p>" +
        "<p>Its mood is " + mainEntity.mood + ", and it prefers " + mainEntity.favoriteElement + ".</p>" +
        "<p>It is moving: " + mainEntity.isMoving + ".</p>"
    );
});

$("#count-clicks").click(function () {
    trailChecks = trailChecks + 1;
    showEnvironmentOutput(
        "<h2>Trail checks</h2>" +
        "<p>You inspected the ridge " + trailChecks + " times.</p>" +
        "<p>The forest is still " + mainEntity.mood + ", and the " + mainEntity.name + " watches from the " + mainEntity.favoriteElement + ".</p>"
    );
});
