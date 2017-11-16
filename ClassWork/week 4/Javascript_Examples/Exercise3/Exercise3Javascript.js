var isLightOn = false;
function ToggleLight()
{
<<<<<<< HEAD
	if (isLightOn == false){
		document.getElementById("lightBulb").src="img/bulb-on.png";
		isLightOn = true;
	}
	else if (isLightOn == true){
=======
	if (isLightOn = false)
	{
		document.getElementById("lightBulb").src="img/bulb-on.png";
		isLightOn = true;
	}
	else if (isLightOn = true)
	{
>>>>>>> 7d16f0a667cc7f3722d816dd0274619fc35c5b62
		document.getElementById("lightBulb").src="img/bulb-off.png";
		isLightOn = false;
	}
}

<<<<<<< HEAD
function AddNumbers()
{
	var x = 10;
	var y = 20;
	var ans = x + y;
	document.getElementById("numbers").innerHTML = ans;
=======
function AddNumbers(param1, param2)
{
	console.log(param1 + param2)
	answer = param3
	document.getElementById("numbers").innerHTML = param3;
>>>>>>> 7d16f0a667cc7f3722d816dd0274619fc35c5b62
}
