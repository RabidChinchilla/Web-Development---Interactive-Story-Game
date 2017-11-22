
function StorePlayerData()
{
	localStorage.setItem("playerName",document.forms[0]["playername"].value);
	localStorage.setItem("playerHealth",document.forms[0]["playerhealth"].value);
	localStorage.setItem("playerColour",document.forms[0]["playercolour"].value);
}

function OnLoad() {
	var name = localStorage.getItem("playerName");
	var health = localStorage.getItem("playerHealth");
	var colour = localStorage.getItem("playerColour");

	document.getElementById("playername").innerHTML = name;
	document.getElementById("playerhealth").innerHTML = health;
	document.getElementById("playercolour").style.color = colour;
}
