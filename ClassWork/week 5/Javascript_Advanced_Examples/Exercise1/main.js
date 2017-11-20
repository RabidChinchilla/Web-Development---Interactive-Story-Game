var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	for(var i = 0; i < weaponsArray.length; i++){
		var tagWeapon = "<option value='" + i + "'>" + weaponsArray[i] + "</option>";
		document.forms[0]["weapons"].innerHTML += tagWeapon;
	}
}


function SelectWeapon()
{
	var s = document.forms[0]["weapons"].value;
	//alert(weaponsArray[s]);
	document.getElementById("currentWeapon").innerHTML = weaponsArray[s];
}
