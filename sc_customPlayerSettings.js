videojs.registerPlugin('combineSettingsButton', function () {
  var vPlayer = this;
  var settingsButton = document.createElement("div");
  settingsButton.className = "vjs-settings-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button";
  settingsButton.innerHTML = "<button class='vjs-settings-button vjs-menu-button vjs-menu-button-popup vjs-button' type='button' aria-disabled='false' title='Settings' aria-haspopup='true' aria-expanded='false'><span class='vjs-icon-placeholder' aria-hidden='true'><i class='fa fa-cog'></i></span><span class='vjs-control-text' aria-live='polite'>Settings</span></button>";

  var captionsButton = vPlayer.$(".vjs-subs-caps-button");
  var audioButton = vPlayer.$(".vjs-audio-button");

  if (captionsButton) {
    captionsButton.style.display = "none";
  }
  if (audioButton) {
    audioButton.style.display = "none";
  }

  var controlBar = vPlayer.$(".vjs-control-bar");
  var insertBeforeNode = vPlayer.$(".vjs-volume-panel");

  controlBar.insertBefore(settingsButton, insertBeforeNode);

  var settingsMenu = document.createElement("div");
  settingsMenu.className = "vjs-menu";
  settingsMenu.innerHTML = "<ul class='vjs-menu-content' role='menu'>" +
    "<li class='vjs-menu-item vjs-texttrack-settings' tabindex='-1' role='menuitem' aria-disabled='false'>" +
    "<span class='vjs-menu-item-text'>captions settings</span>" +
    "<span class='vjs-control-text' aria-live='polite'>, opens captions settings dialog</span></li>" +
    "<li class='vjs-menu-item vjs-selected' tabindex='-1' role='menuitemradio' aria-disabled='false' aria-checked='true'>" +
    "<span class='vjs-menu-item-text'>captions off</span>" +
    "<span class='vjs-control-text' aria-live='polite'>, selected</span></li>" +
    "<li class='vjs-menu-item vjs-subtitles-menu-item' tabindex='-1' role='menuitemradio' aria-disabled='false' aria-checked='false'>" +
    "<span class='vjs-menu-item-text'>English</span>" +
    "<span class='vjs-control-text' aria-live='polite'></span></li>" +
    "<li class='vjs-menu-item vjs-main-menu-item' tabindex='-1' role='menuitemradio' aria-disabled='false' aria-checked='true'>" +
    "<span class='vjs-menu-item-text'>en (Main)</span>" +
    "<span class='vjs-control-text' aria-live='polite'>, selected</span></li>" +
    "<li class='vjs-menu-item vjs-alternative-menu-item' tabindex='-1' role='menuitemradio' aria-disabled='false' aria-checked='false'>" +
    "<span class='vjs-menu-item-text'>en (Descriptive)</span>" +
    "<span class='vjs-control-text' aria-live='polite'></span></li></ul>";

  settingsButton.appendChild(settingsMenu);

  settingsButton.addEventListener("click", function () {
    settingsMenu.style.display = (settingsMenu.style.display === 'block') ? 'none' : 'block';
  });
});
