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
