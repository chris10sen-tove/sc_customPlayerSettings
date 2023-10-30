videojs.registerPlugin('customSettingsButton', function() {
  const player = this;
  const settingsButton = document.createElement("button");
  settingsButton.className = "vjs-control vjs-button vjs-settings-button";
  settingsButton.innerHTML = "<span class='cog-icon'></span> Settings";

  // Create the settings menu
  const settingsMenu = document.createElement("div");
  settingsMenu.className = "settings-menu";
  settingsMenu.style.display = "none";
  
  const captionsOption = document.createElement("div");
  captionsOption.className = "menu-item";
  captionsOption.innerText = "Captions";
  
  const audioTrackOption = document.createElement("div");
  audioTrackOption.className = "menu-item";
  audioTrackOption.innerText = "Audio Track";
  
  settingsMenu.appendChild(captionsOption);
  settingsMenu.appendChild(audioTrackOption);

  // Insert the button and menu into the control bar
  const controlBar = player.$(".vjs-control-bar");
  const insertBeforeNode = player.$(".vjs-volume-panel");

  controlBar.insertBefore(settingsButton, insertBeforeNode);
  controlBar.appendChild(settingsMenu);

  settingsButton.addEventListener("click", function() {
    settingsMenu.style.display = settingsMenu.style.display === "block" ? "none" : "block";
  });

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
