function OnLoad()
{
	SelectRoom(0);
}

function SelectRoom(roomIndex)
{
	document.getElementById("roomImage").src = roomArray[roomIndex].image;

	document.getElementById("roomTitle").innerHTML = roomArray[roomIndex].title;
	document.getElementById("roomText").innerHTML = roomArray[roomIndex].text;

	document.getElementById("roomChoices").innerHTML = "";



  //document.getElementById("playname").innerHTML = playname;

	for(var i = 0; i < roomArray[roomIndex].choices.length; i++)
	{
		var options = "<button type='button' onClick='SelectRoom(" + roomArray[roomIndex]["choices"][i]["index"] + ")'>" + roomArray[roomIndex]["choices"][i]["text"] + "</button>" + "<p>   </p>";
		//square brackets specify each item down the list
		document.getElementById("roomChoices").innerHTML += options;
	}
}
