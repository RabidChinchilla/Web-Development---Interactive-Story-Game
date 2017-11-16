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

<
function AddNumbers()
{
	var x = 10;
	var y = 20;
	var ans = x + y;
	document.getElementById("numbers").innerHTML = ans;
}
