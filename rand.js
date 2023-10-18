
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function complimentGenerator() {
    const her = document.getElementById("her");
    const compliments = [
        "You light up every room you enter.",
        "Your smile is contagious and brightens my day.",
        "I love the way your eyes sparkle.",
        "You have a heart of gold.",
        "Your kindness is truly inspiring.",
        "You're the most beautiful person inside and out.",
        "I appreciate your intelligence and how you challenge me to think.",
        "Your laugh is music to my ears.",
        "I'm grateful for your unwavering support.",
        "You make every day better just by being in it.",
        "Your strength and resilience amaze me.",
        "I love the way you make me feel when I'm with you.",
        "You have a unique and captivating charm.",
        "Your warmth is comforting.",
        "I cherish the way you make me laugh.",
        "You're the best thing that has ever happened to me.",
        "I'm thankful for the joy you bring into my life.",
        "Your positive energy is contagious.",
        "You have a way of making everyone around you feel special.",
        "I love the way you handle challenges with grace.",
        "You're incredibly talented, and I admire your skills.",
        "Your passion for life is invigorating.",
        "I admire your dedication and hard work.",
        "You're a true gem, and I feel lucky to have you.",
        "Your presence makes everything better.",
        "I appreciate how you always find the good in people.",
        "You have a wonderful sense of humor.",
        "I love the way you make the ordinary feel extraordinary.",
        "You're the reason behind my smiles.",
        "Your optimism is contagious.",
        "I love the way you make me feel loved and cherished.",
        "You have a magnetic personality.",
        "You're the missing piece to my puzzle.",
        "Your love is my greatest treasure.",
        "I'm grateful for the beautiful memories we've created together.",
        "You're the reason I believe in love.",
        "Your beauty is beyond compare.",
        "You're the queen of my heart.",
        "I'm thankful for the laughter and joy you bring into my life.",
        "Your compassion for others is inspiring.",
        "I love the way you make every moment memorable.",
        "You're my favorite person to be around.",
        "Your intelligence is a major turn-on.",
        "I appreciate your willingness to always lend a helping hand.",
        "You have a way of turning ordinary moments into extraordinary memories.",
        "Your love is like a soothing balm to my soul.",
        "You're the epitome of grace and elegance.",
        "I'm grateful for the way you make me feel loved and accepted.",
        "Your positive attitude is contagious.",
        "You're the anchor in the storms of life.",
        "I appreciate your honesty and authenticity.",
        "You're a rare and precious find.",
        "Your inner beauty shines brighter than any outer glow.",
        "I love the way you make me feel like I can conquer the world.",
        "Your love is my greatest blessing.",
        "You have a heart as pure as gold.",
        "I'm thankful for your unwavering loyalty.",
        "You make my heart skip a beat.",
        "Your love is the fuel that keeps me going.",
        "You're the most amazing person I know.",
        "I love the way you light up when you talk about your passions.",
        "You have a way of making ordinary days extraordinary.",
        "Your touch is electric.",
        "I'm grateful for the joy you bring into my life every day.",
        "You're the sunshine on my darkest days.",
        "Your generosity knows no bounds.",
        "You're the one I've been searching for.",
        "Your love is like a gentle breeze on a hot day.",
        "I love the way you make my heart race.",
        "You're the one I want by my side for all of life's journeys.",
        "Your love is my greatest strength.",
        "I appreciate your ability to find joy in the little things.",
        "You're the one I want to grow old with.",
        "Your love is my greatest joy.",
        "I appreciate your ability to make me feel important.",
        "You're the reason I look forward to the future.",
        "Your love is the foundation of my happiness.",
        "I'm grateful for your endless patience.",
        "You have a heart of gold and a spirit to match.",
        "Your love is like a beacon guiding me through life.",
        "I love the way you make even mundane tasks fun.",
        "You're the one who completes me.",
        "Your love is my favorite melody.",
        "I appreciate your ability to make me feel like the luckiest person alive."
        // Add more compliments as needed
    ];

    const randomIndex = getRandomInt(0, compliments.length - 1);
    const randomCompliment = compliments[randomIndex];

    her.innerHTML = "<h1 id='her'>" + randomCompliment + "<h1>";
}

// Example usage:
complimentGenerator();
