var isLightOn = false;
function ToggleLight()
{
	if (isLightOn = false)
	{
		document.getElementById("lightBulb").src="img/bulb-on.png";
		isLightOn = true;
	}
	else if (isLightOn = true)
	{
		document.getElementById("lightBulb").src="img/bulb-off.png";
		isLightOn = false;
	}
}

function AddNumbers(param1, param2)
{
	console.log(param1 + param2)
	answer = param3
	document.getElementById("numbers").innerHTML = param3;
}
