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
} from "./commands.js";

const command = document.getElementById("command");
const commandOutput = document.getElementById("command-output");

const commandHistory = [];
let historyIndex = 0;

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