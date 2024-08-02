import {
  aboutSectionHTML,
  whoAmISectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  achievementsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
  manifesto,
  manifestoSectionHTML,
  website,
  websiteSectionHTML,
  getSecret,
  getRandomKafkaLetter,
  playlistSectionHTML,
  playlist,
  getRandomArtPicture,
  getKitty,
  getDestruct,
  getRandomVideo,
} from "./commands.js";

const command = document.getElementById("command");
const commandOutput = document.getElementById("command-output");
const settingsButton = document.getElementById("settings");
const settingsModal = document.getElementById("settings-modal");
const closeButton = document.querySelector(".close-button");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const languageSelect = document.getElementById("language-select");


const commandHistory = [];
let historyIndex = 0;

const commandsList = [
  "help",
  "whoami",
  "about",
  "skills",
  "projects",
  "achievements",
  "website",
  "contact",
  "secret",
  "manifesto",
  "clear",
  "kafka",
  "playlist",
  "art",
  "kitty",
  "destruct",
  "interesting",
];

const focusOnCommandInput = () => {
  command.focus();
};

document.addEventListener("keydown", focusOnCommandInput);

const downKeyIsPressed = (event) => {
  return event.which == 38 && historyIndex > 0;
};

const upKeyIsPressed = (event) => {
  return event.which == 40 && historyIndex < commandHistory.length - 1;
};

const clearKeyIsPressed = (event) => {
  return (event.metaKey || event.ctrlKey) && event.which == 75;
};

const tabKeyIsPressed = (event) => {
  return event.which == 9;
};

const getPreviouslyExecutedCommand = () => {
  historyIndex--;
  command.value = commandHistory[historyIndex];
};

const getNextExecutedCommand = () => {
  historyIndex++;
  command.value = commandHistory[historyIndex];
};

const enterKeyIsPressed = (event) => {
  return event.which == 13;
};

const showExecutedCommand = () => {
  const typedCommand = `<div class="input-container">
        <span class="input-label">></span>
        <span class="input-command">${command.value}</span>
      </div>`;

  commandOutput.innerHTML += typedCommand;
};

const redirectToGUIWebsite = (link) => {
  setTimeout(() => {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.click();
  }, 2000);
};

const showCommandNotFound = () => {
  return `<div class="command-result">
          <span class="command-not-found">${command.value}</span>
          : command not found. Type 'help' to view a list of available commands.
        </div>`;
};

const emptyCommandInput = () => {
  command.value = "";
};

const scrollToBottomEnd = () => {
  window.scrollTo(0, document.body.scrollHeight);
};

const showCommandOutput = (output) => {
  commandOutput.innerHTML += output;
};

const executeCommand = () => {
  const userEnteredCommand = command.value.trim().toLowerCase();

  switch (userEnteredCommand) {
    case "help":
      showCommandOutput(helpSectionHTML);
      addCommandToHistory();
      break;
    case "whoami":
      showCommandOutput(whoAmISectionHTML);
      addCommandToHistory();
      break;
    case "about":
      showCommandOutput(aboutSectionHTML);
      addCommandToHistory();
      break;
    case "skills":
      showCommandOutput(skillsSectionHTML);
      addCommandToHistory();
      break;
    case "projects":
      showCommandOutput(projectsSectionHTML);
      addCommandToHistory();
      break;
    case "achievements":
      showCommandOutput(achievementsSectionHTML);
      addCommandToHistory();
      break;
    case "website":
      showCommandOutput(websiteSectionHTML);
      addCommandToHistory();
      redirectToGUIWebsite(website);
      break;
    case "contact":
      showCommandOutput(contactSectionHTML);
      addCommandToHistory();
      break;
    case "secret":
      const enteredPassword = prompt("Enter the secret password:");
      const secretOutput = getSecret(enteredPassword);
      showCommandOutput(secretOutput);
      addCommandToHistory();
      break;
    case "manifesto":
      showCommandOutput(manifestoSectionHTML);
      addCommandToHistory();
      redirectToGUIWebsite(manifesto);
      break;
    case "clear":
      emptyTerminal();
      addCommandToHistory();
      break;
    case "kitty":
        showCommandOutput(getKitty());
        addCommandToHistory();
        break;
    case "kafka":
      showCommandOutput(getRandomKafkaLetter());
      addCommandToHistory();
      break;
    case "playlist":
        showCommandOutput(playlistSectionHTML);
        addCommandToHistory();
        redirectToGUIWebsite(playlist);
        break;
    case "art":
      showCommandOutput(getRandomArtPicture());
      addCommandToHistory();
      break;
    case "destruct":
      showCommandOutput(getDestruct());
      addCommandToHistory();
      break
    case "interesting":
      showCommandOutput(getRandomVideo());
      addCommandToHistory();
      break
    default:
      commandOutput.innerHTML += showCommandNotFound();
  }
  resetHistoryIndex();
  emptyCommandInput();
  scrollToBottomEnd();
  return;
};

const evaluateCommandInput = (event) => {
  if (downKeyIsPressed(event)) {
    getPreviouslyExecutedCommand();
    return;
  }

  if (upKeyIsPressed(event)) {
    getNextExecutedCommand();
    return;
  }

  if (enterKeyIsPressed(event)) {
    showExecutedCommand();
    executeCommand();
    return;
  }

  if (clearKeyIsPressed(event)) {
    resetHistoryIndex();
    emptyTerminal();
  }

  if (tabKeyIsPressed(event)) {
    event.preventDefault();
    suggestCommand();
  }
};

const suggestCommand = () => {
  const currentInput = command.value.trim().toLowerCase();
  const suggestedCommand = commandsList.find(cmd => cmd.startsWith(currentInput));
  if (suggestedCommand) {
    command.value = suggestedCommand;
  }
};

command.addEventListener("keydown", evaluateCommandInput);

const addCommandToHistory = () => {
  commandHistory.push(command.value);
};

const resetHistoryIndex = () => {
  historyIndex = commandHistory.length;
};

const emptyTerminal = () => {
  commandOutput.innerHTML = "";
};




const toggleSettingsModal = () => {
  settingsModal.classList.toggle("show-modal");
};

const windowOnClick = (event) => {
  if (event.target === settingsModal) {
    toggleSettingsModal();
  }
};

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

const changeLanguage = () => {
  const selectedLanguage = languageSelect.value;

};



settingsButton.addEventListener("click", toggleSettingsModal);
closeButton.addEventListener("click", toggleSettingsModal);
window.addEventListener("click", windowOnClick);
darkModeToggle.addEventListener("change", toggleDarkMode);
languageSelect.addEventListener("change", changeLanguage);

  document.getElementById('mute-sound-toggle').addEventListener('change', function() {
    const audio = document.getElementById('background-music');
    audio.muted = this.checked;
  });
