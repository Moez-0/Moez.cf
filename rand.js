
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function complimentGenerator() {
    const her = document.getElementById("her");

    // Array of compliments
const allCompliments= [
"You give me sense of euphoria ",
"I wanna wrap my arms around your back",
	"Eye contact with you always feels like foreplay",
"thank u for making me smile when I wasn't planning to tho , I enjoy our talks honestly",
        "Your intelligence is a constant inspiration.",
"Mazbrek",
        "I love the way you make me see the world differently.",
        "You have a fantastic sense of humor.",
"Mazbrek",
        "Your positive energy is contagious.",
"The more i know u the more i realize how magnetic u are",
        "Your creativity knows no bounds.",
"I love your voice",
        "I appreciate the unique perspective you bring to every conversation.",
        "Your passion is evident in everything you do.",
"Literally been thinking about u all day",
"I'd never regret anythin with u",
        "You have a captivating presence.",
        "Your thoughtfulness always makes my day.",
"I love your voice",
        "I'm constantly amazed by your talents.",
        "Your sense of style is impeccable.",
"I'd never regret anythin with u",
        "I'm grateful for the joy you bring into my life.",
"Thank u for getting me excited again",
        "Your strength, both mentally and emotionally, is commendable.",
"I wanna wrap my arms around your back",
        "You have a way of making people feel seen and heard.",
        "I admire the way you handle challenges with grace.",
"Mazbrek",
        "Your sense of adventure is exhilarating.",
        "You have a heart of gold.",
"Eye contact with you always feels like foreplay",
        "Your dedication to personal growth is admirable.",
"Literally been thinking about u all day",
        "Your honesty and authenticity are refreshing.",
"I'd never regret anythin with u",
        "Your positive attitude is a beacon of light.",
"I love your voice",
        "You have an incredible ability to make others feel valued.",
        "Your wisdom far surpasses your years.",
"Your very presence makes me want to be tender",
"I want to eat you out ,",
        "Your perseverance in pursuing your goals is inspiring.",
"thank u for making me smile when I wasn't planning to tho , I enjoy our talks honestly",
        "Your sense of humor never fails to brighten my day.",
"I'd never regret anythin with u",
"Your very presence makes me want to be tender",
"Literally been thinking about u all day",
        "Your gentle spirit is a calming presence.",
        "Your ability to see the beauty in the little things is a gift.",
"You give me sense of euphoria ",
"Your very presence makes me want to be tender",
        "Your friendship is one of the greatest blessings in my life.",
"You give me sense of euphoria ",
        "Your dedication to making a difference is admirable.",
"Eye contact with you always feels like foreplay",
        "Your commitment to personal excellence is inspiring.",
"thank u for making me smile when I wasn't planning to tho , I enjoy our talks honestly",
        "I'm grateful for your unwavering support and encouragement.",
"I love making you tense",
        "Your sense of adventure and willingness to try new things is admirable.",
"Mazbrek",
        "Your dedication to your passions is truly inspiring.",
"I wanna wrap my arms around your back",
        "Your authenticity is a rare and beautiful trait.",
"I love your voice",
        "Your courage to be yourself is truly admirable.",
"I love making you tense",
"I want to eat you out ,",

        "Your sense of humor and wit make every moment more enjoyable.",
"I love making you tense",



"I want to eat you out ,",
        "Your sense of humor and wit make every moment more enjoyable.",
"I want to eat you out ,",

"Do you know how many times I’ve mentally stripped you",
        "Your authenticity and genuine nature make you a true gem."
    ];


    // Array to store used compliments
    let usedCompliments = JSON.parse(localStorage.getItem('usedCompliments')) || [];

    // Filter out used compliments
    const availableCompliments = allCompliments.filter(compliment => !usedCompliments.includes(compliment));

    // Check if there are compliments left to display
    if (availableCompliments.length === 0) {
        her.innerHTML = "<h1 id='her'>Wait for the next list for another day ;) <h1>";
        return;  // Exit the function if all compliments have been used
    }

    // Get a random index
    const randomIndex = getRandomInt(0, availableCompliments.length - 1);

    // Get the compliment at the random index
    const randomCompliment = availableCompliments[randomIndex];

    // Display the compliment
    her.innerHTML = "<h1 id='her'>" + randomCompliment + "<h1>";

    // Add the used compliment to the array
    usedCompliments.push(randomCompliment);

    // Save used compliments to local storage
    localStorage.setItem('usedCompliments', JSON.stringify(usedCompliments));
}

// Example usage:
complimentGenerator();

