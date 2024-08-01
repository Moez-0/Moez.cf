const about = `
                    I’m a software engineering student specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                Hello! My name is Moez and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught
                    me a lot about HTML & CSS! I'm currently living in Tunisia. I 've worked as a freelancer on Fiverr for the last 4 years mainly building java plugins and doing graphic design, But I want to expand my knowledge and move into bigger things and projects such as web
                    dev and Machine Learning.`;
const roles = ["Sofware Engineering Student", "Web Developer", "Programming & Graphic Design Enthusiast", "Machine Learning Enthusiast", "Overall Nerd"];
const skills = [
  { id: "1", title: "Firebase", image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L2pvYjk0Ny0xMDQtcC5wbmc.png" },
  { id: "2", title: "Node JS", image: "url2" },
  { id: "3", title: "Figma", image: "url3" },
  { id: "4", title: "HTML5", image: "url4" },
  { id: "5", title: "Sanity", image: "url5" },
  { id: "6", title: "GraphQL", image: "url6" },
  { id: "7", title: "Typescript", image: "url7" },
  { id: "8", title: "Redux", image: "url8" },
  { id: "9", title: "React JS", image: "url9" },
  { id: "10", title: "Javascript", image: "url10" },
  { id: "11", title: "mongoDB", image: "url11" },
  { id: "12", title: "git", image: "url12" },
  { id: "13", title: "Python", image: "url13" },
  { id: "14", title: "React Native", image: "url14" },
  { id: "15", title: "CSS3 / SCSS / TailwindCSS", image: "url15" },
];
const projects = [
  { id: "1", title: "Card Game Simulation", image: "./assets/card.png", description: "This Python code simulates several card games using Monte Carlo simulations. The code defines a set of card games and calculates the win probability and expected winnings per play for each game.", url: "https://github.com/Moez-0/Card-Game-Simulation" },
  { id: "2", title: "BoxUp", image: "./assets/boxup.png", description: "Our website offers a streamlined solution for generating professional-quality PDFs featuring customizable QR codes and barcodes, all based on your data. Whether you're managing inventory, creating event tickets, or organizing any other data-driven content, our tool makes it easy to turn your information into actionable barcodes and QR codes.", url: "https://github.com/Moez-0/QR_V2-main" },
  { id: "3", title: "404 Page Tetris game themed", image: "./assets/tetris.png", description: "A 404 error not found tetris themed game play when you find yourself in the wrong path", url: "https://github.com/Moez-0/404-Tetris" },
];
const achievements = [
  { id: "1", title: "La Nuit de l'Info - Coding Hackathon", image: "url1", description: "Labyrinth Team Polytechnique Monastir", url: "https://www.nuitdelinfo.com/inscription/equipes/416" },

];
const email = "business@moez.eu.org";

let aboutSectionHTML,
  whoAmISectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  achievementsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
  websiteSectionHTML,
  manifestoSectionHTML,
  secretSectionHTML;

const getAbout = () => {
  const renderData = `<div class="command-result"><p class="about-text">${about}</p><div>`;
  return renderData;
};

const getRoles = () => {
  let renderData = `<div class="command-result">`;
  roles.forEach((role) => {
    renderData += `<li class="data-li">${role}</li>`;
  });
  renderData += "</div>";
  return renderData;
};

const getSkills = () => {
  let renderData = `<div class="command-result">`;
  skills.forEach((skill) => {
    renderData += `<li class="data-li">${skill.title}</li>`;
  });
  renderData += "</div>";
  return renderData;
};

const getProjects = () => {
  let renderData = `<div class="command-result"><table class="data-table">`;
  projects.forEach((project) => {
    renderData += `<tr>
    <th class="data-name-th"><a href="${project.url}" target="_blank" class="data-link">${project.title}</a></th>
    <td class="data-description-td">${project.description}</td>
    <td class="data-image-td"><img src="${project.image}" height="50" widh="50" alt="${project.title}" class="data-image"></td>
  </tr>`;
  });
  renderData += "</table></div>";
  return renderData;
};

const getAchievements = () => {
  let renderData = `<div class="command-result"><table class="data-table">`;
  achievements.forEach((achievement) => {
    renderData += `<tr>
      <th class="data-name-th"><a href="${achievement.url}" target="_blank" class="data-link">${achievement.title}</a></th>
      <td class="data-description-td">${achievement.description}</td>
    </tr>`;
  });
  renderData += "</table></div>";
  return renderData;
};

const getContact = () => {
  let renderData = `<div class="command-result"><dl>`;
  const contacts = [
    { contactTitle: "email", contactPlace: email },
    { contactTitle: "github", contactPlace: "@Moez-0" },
    { contactTitle: "instagram", contactPlace: "I am not dependent on the approval of others." },
    { contactTitle: "twitter", contactPlace: "No time to meddle in other people's lives" },
  ];
  contacts.forEach((item) => {
    renderData += `<dt class="data-dt">${item.contactTitle}<dt><dd class="data-dd"> - ${item.contactPlace}</dd>`;
  });
  renderData += "</dl></div>";
  return renderData;
};

const getHelp = () => {
  let renderData = `<div class="command-result"><dl>`;
  const availableCommands = [
    { command: "whoami", description: "What I do" },
    { command: "about", description: "Get to know the idiot behind all of this" },
    { command: "skills", description: "What technologies I use" },
    { command: "projects", description: "The list of projects I made" },
    { command: "Achievements", description: "Looking Forward to filling this up :)" },
    { command: "website", description: "My portfolio site but with GUI and a full interface" },
    { command: "contact", description: "Wanna talk to this guy ??" },
    { command: "manifesto", description: "A personal statement to be seen" },
    { command: "secret", description: "Caesar is a title of imperial character. It derives from the cognomen of the Roman dictator Julius Caesar. The name of whom I love most is what uncovers the secrets of it all" },
    { command: "clear", description: "Clears the terminal of all output" },
    { command: "cmd/ctrl + k", description: "Keyboard shortcut to clear the terminal" },
  ];
  availableCommands.forEach((cmd) => {
    renderData += `<dt class="data-dt">${cmd.command}<dt><dd class="data-dd"> - ${cmd.description}</dd>`;
  });
  renderData += "</dl></div>";
  return renderData;
};

const website = "https://moez.eu.org/home";

const getWebsite = () => {
  const renderData = `<div class="command-result">Redirecting you to my portfolio website <a href="${website}" target="_blank" class="data-link">${website}</a> ...</div>`;
  return renderData;
};

const manifesto = "https://moez.eu.org/manifesto";

const getManifesto = () => {
  const renderData = `<div class="command-result">Redirecting you to my manifesto <a href="${manifesto}" target="_blank" class="data-link">${manifesto}</a> ...</div>`;
  return renderData;
}

const getSecret = (password) => {
  const correctPassword = "htluf";
  if (password === correctPassword) {
    const renderData = `<div class="command-result">Ah, you’ve uncovered the Caesar cipher! It’s a 'cryptic' achievement, but the next step is in french cipher beacause my baby speaks it HINT : chappe </br>  </br><img src="./assets/chappe.png" id="ch" ></img></div>`;
    return renderData;
  } else {
    const renderData = `<div class="command-result">Incorrect password. Try again! Hint : My girl</div>`;
    return renderData;
  }
}



aboutSectionHTML = getAbout();
whoAmISectionHTML = getRoles();
skillsSectionHTML = getSkills();
projectsSectionHTML = getProjects();
achievementsSectionHTML = getAchievements();
contactSectionHTML = getContact();
helpSectionHTML = getHelp();
websiteSectionHTML = getWebsite();
manifestoSectionHTML = getManifesto();

export {
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
};
