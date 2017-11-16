function CreatePlayer()
{
  var playername = document.getElementById("playername").value;
  var playercolor = document.getElementById("playercolour").value;
  var health = document.getElementById("playerhealth").value;
  var playerweapon = document.getElementById("playerweapon").value;

  document.getElementById("name").innerHTML = playername;
  document.getElementById("colour").style.backgroundColor = playercolor;
  document.getElementById("health").innerHTML = health;

  if( playerweapon == 1 )
  {
    document.getElementById("weapon").innerHTML = "Crossbow of much hurting";
  }
  else if( playerweapon == 2 )
  {
    document.getElementById("weapon").innerHTML = "Broadsword of so slicing";
  }
  else if( playerweapon == 3)
  {
    document.getElementById("weapon").innerHTML = "Wand of amaze magics";
  }

}
