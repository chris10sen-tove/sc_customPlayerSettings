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

  // Logic for handling captions
  captionsOption.addEventListener("click", function() {
    const captionsMenu = player.$(".vjs-menu.vjs-lock-showing");
    const captionsOffItem = captionsMenu.querySelector(".vjs-menu-item.vjs-selected");
    const captionsLanguageItem = captionsMenu.querySelector(".vjs-menu-item.vjs-subtitles-menu-item");

    // Handle captions based on their states
    if (captionsOffItem.getAttribute("aria-checked") === "true") {
      // Captions are currently off, you can turn them on or switch to a specific language
      console.log("Captions are currently off.");
    } else if (captionsLanguageItem.getAttribute("aria-checked") === "true") {
      // A specific language is selected
      const language = captionsLanguageItem.querySelector(".vjs-menu-item-text").innerText;
      console.log("Selected captions language: " + language);
    }
  });

  // Logic for handling audio tracks
  audioTrackOption.addEventListener("click", function() {
    const audioTracksMenu = player.$(".vjs-menu");
    const mainAudioTrackItem = audioTracksMenu.querySelector(".vjs-menu-item.vjs-main-menu-item");
    const descriptiveAudioTrackItem = audioTracksMenu.querySelector(".vjs-menu-item.vjs-alternative-menu-item");

    // Handle audio tracks based on their states
    if (mainAudioTrackItem.getAttribute("aria-checked") === "true") {
      // Main audio track is selected
      console.log("Main audio track is selected.");
    } else if (descriptiveAudioTrackItem.getAttribute("aria-checked") === "true") {
      // Descriptive audio track is selected
      console.log("Descriptive audio track is selected.");
    }
  });
});
