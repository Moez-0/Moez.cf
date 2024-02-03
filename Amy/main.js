function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '💗';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 300);


document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("my_audio");
    
    // Function to play audio
    function playAudio() {
        audio.play();
        // Remove the event listener after the first user interaction to avoid conflicts
        document.removeEventListener("click", playAudio);
    }

    // Add click event listener to play audio on user interaction
    document.addEventListener("click", playAudio);
});
