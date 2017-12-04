function StorePlayerData()
{
  localStorage.setItem("playerName", document.forms[0]["playername"].value);
  var playname = localStorage.getItem("playerName")
}

function NameLoad(){
  var playname = localStorage.getItem("playerName")
  document.getElementById("playname").innerHTML = playname;
}
