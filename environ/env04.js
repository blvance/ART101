const $ridge = $("#ridge-scene");
const $status = $("#status");

function toggleLantern() {
    const isAwake = !$ridge.hasClass("awake");

    $ridge.toggleClass("awake", isAwake);
    $("#wake-button").text(isAwake ? "Let the Lantern rest" : "Wake the Lantern");
    $status.text(
        isAwake
            ? "The Lantern wakes. A warm glow spills across the path."
            : "The Lantern dims. The ridge returns to its quiet."
    );
}

$("#lantern, #wake-button").click(toggleLantern);

$("#trail-marker").hover(
    function () {
        $("#whisper").stop(true, true).fadeTo(180, 1);
        $status.text("The old marker has something to tell you.");
    },
    function () {
        $("#whisper").stop(true, true).fadeTo(180, 0);
        $status.text("The trail falls quiet again.");
    }
);

function toggleFireflies() {
    const firefliesOn = !$ridge.hasClass("fireflies-called");

    $ridge.toggleClass("fireflies-called", firefliesOn);
    $("#firefly-button").attr("aria-pressed", firefliesOn);
    $status.text(
        firefliesOn
            ? "You call softly. The fireflies gather along the ridge."
            : "The fireflies drift back into the dark."
    );
}

$("#firefly-button").click(toggleFireflies);

$(document).keydown(function (event) {
    if (event.key.toLowerCase() === "f" && !event.repeat) {
        toggleFireflies();
    }
});

$("#moon").dblclick(function () {
    const eclipse = !$ridge.hasClass("eclipse");

    $ridge.toggleClass("eclipse", eclipse);
    $status.text(
        eclipse
            ? "The moon slips behind the clouds. Something glimmers below."
            : "The moon returns, pale over the listening ridge."
    );
});