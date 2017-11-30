function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById("roomTitle").innerHTML = roomArray[roomIndex].title;
	document.getElementById("roomText").innerHTML = roomArray[roomIndex].text;

	document.getElementById("roomChoices").innerHTML = "";

	for(var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		var options = "<button type='button' onClick='SelectRoom(" + roomArray[roomIndex]["choices"][i]["index"] + ")'>" + roomArray[roomIndex]["choices"][i]["text"] + "</button>";
		//square brackets specify each item down the list
		document.getElementById("roomChoices").innerHTML += options;
	}
}
