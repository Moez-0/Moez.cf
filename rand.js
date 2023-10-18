function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function complimentGenerator() {
    const her = document.getElementById("her");
    const compliments = [
	"Eye contact with you always feels like foreplay",
        "Your intelligence is a constant inspiration.",
        "I love the way you make me see the world differently.",
        "You have a fantastic sense of humor.",
        "Your positive energy is contagious.",
"Do you know how many times I’ve mentally stripped you",
        "Your creativity knows no bounds.",
        "I appreciate the unique perspective you bring to every conversation.",
        "Your passion is evident in everything you do.",
        "You have a captivating presence.",
        "Your thoughtfulness always makes my day.",
        "I'm constantly amazed by your talents.",
        "Your sense of style is impeccable.",
        "I'm grateful for the joy you bring into my life.",
        "Your determination is truly inspiring.",
        "Your optimism is like a ray of sunshine.",
"Do you know how many times I’ve mentally stripped you",
        "Your strength, both mentally and emotionally, is commendable.",
        "You have a way of making people feel seen and heard.",
        "I admire the way you handle challenges with grace.",
        "Your sense of adventure is exhilarating.",
        "You have a heart of gold.",
"Eye contact with you always feels like foreplay",
        "Your dedication to personal growth is admirable.",
        "Your honesty and authenticity are refreshing.",
        "Your positive attitude is a beacon of light.",
        "You have an incredible ability to make others feel valued.",
        "Your wisdom far surpasses your years.",
"Your very presence makes me want to be tender",
"I want to eat you out until I’ve memorized every single pink fold of flesh",
        "Your perseverance in pursuing your goals is inspiring.",
        "Your sense of humor never fails to brighten my day.",
"Your very presence makes me want to be tender",
        "Your gentle spirit is a calming presence.",
        "Your ability to see the beauty in the little things is a gift.",
"Your very presence makes me want to be tender",
        "Your friendship is one of the greatest blessings in my life.",
        "Your dedication to making a difference is admirable.",
"Eye contact with you always feels like foreplay",
        "Your commitment to personal excellence is inspiring.",
        "I'm grateful for your unwavering support and encouragement.",
"Do you know how many times I’ve mentally stripped you",
        "Your sense of adventure and willingness to try new things is admirable.",
        "Your dedication to your passions is truly inspiring.",
        "Your authenticity is a rare and beautiful trait.",
        "Your courage to be yourself is truly admirable.",
        "I appreciate the way you always find the silver lining.",
"I want to eat you out until I’ve memorized every single pink fold of flesh",
"Do you know how many times I’ve mentally stripped you",
        "Your sense of humor and wit make every moment more enjoyable.",
"Do you know how many times I’ve mentally stripped you",
"Do you know how many times I’ve mentally stripped you",

"I want to eat you out until I’ve memorized every single pink fold of flesh",
        "Your sense of humor and wit make every moment more enjoyable.",
"I want to eat you out until I’ve memorized every single pink fold of flesh",

"Do you know how many times I’ve mentally stripped you",
        "Your authenticity and genuine nature make you a true gem."
    ];

    const randomIndex = getRandomInt(0, compliments.length - 1);
    const randomCompliment = compliments[randomIndex];

    her.innerHTML = "<h1 id='her'>" + randomCompliment + "<h1>";
}

// Example usage:
complimentGenerator();
