function StorePlayerData()
{
  localStorage.setItem("playername", document.forms[0]["playername"].value);
  var playname = localStorage.getItem("playerName")
}

function OnLoad(){
  var playname = localStorage.getItem("playerName")
  document.getElementById("playname").innerHTML = playname;
}
