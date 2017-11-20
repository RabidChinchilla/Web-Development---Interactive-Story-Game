var weaponsArray = [
	'Broadsword',
	'Crossbow',
	'Magic staff'
];


function OnLoad()
{
	for(var i = 0; i < weaponsArray.length; i++){
		var tagWeapon = "<option value='(i + 1)'>"weaponsArray[i]"</option>"
	}
}


function SelectWeapon()
{

}
