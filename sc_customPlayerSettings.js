document.addEventListener("DOMContentLoaded", function() {
    const settingsButton = document.getElementById("settings-button");
    const settingsMenu = document.getElementById("settings-menu");

    settingsButton.addEventListener("click", function() {
        settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
    });

    const captionsOption = document.getElementById("captions");
    const audioTrackOption = document.getElementById("audio-track");

    // Add functionality for the "Captions" and "Audio Track" options here
    captionsOption.addEventListener("click", function() {
        // Add your logic for captions here
        console.log("Captions clicked");
    });

    audioTrackOption.addEventListener("click", function() {
        // Add your logic for audio track here
        console.log("Audio Track clicked");
    });
});
