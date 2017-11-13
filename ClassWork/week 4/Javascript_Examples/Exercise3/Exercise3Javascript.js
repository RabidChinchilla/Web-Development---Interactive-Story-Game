var isLightOn = false;
function ToggleLight()
{
	if (isLightOn === true){
		document.getElementById("lightBulb").src="img/bulb-on.png";
	}
	else{
		document.getElementById("lightBulb").src="img/bulb-off.png";
	}
}
