
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random () {
	her = document.getElementById("her");
	list = ["YOU ARE SO HOT BRO","BOI WHAT THE HELL BOI","YOU GET 0 HOES","NVM YOU ARE SO GAY","I LOVE SEA FOOD ","HOES ?","DAMN YOU CHEATING ON ME ?","BITCHES MAD","I HATE YOU BITCH","JSJSJSH","YAATKJ SAABA","BRO WHAT","DAMN","BITCHES","MOEZ SO HOT ESSLEM NO"];
	console.log(her);
	r = getRandomInt(0,list.length-1);
	her.innerHTML = "<h1 id='her'>"+list[r]+"<h1>";
}
