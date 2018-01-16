var playname = localStorage.getItem("playerName");

var roomArray = [
	{
		image:src="MainStreet.jpg",
		title:'Street', ///0
		text: ' After a long day of doing nothing but relax you start heading back to your hotel. As you walk with the hordes of people who all seem to be rushing to somewhere or other you notice someone gesturing to you from a nearby alleyway, as you make eye contact they start gesturing more frantically for you to come over.',
		choices:[
			{
				text:'Ignore him and keep walking',
				index:2
			},
			{
				text:'Walk over to him',
				index:1
			},
		]
	},
	{
		image:src="Alley.jpg",
		title:'Alleyway', ///1
		text:"As you start walking towards the man he looks a lot more relaxed. As soon as you're within earshot he starts talking, \"Thank you so much for not ignoring me, I have a message for you...\" he then pauses suddenly as if the weight of the world rests on what he says next, \"My boss wants to meet you and offer you a job...I don't know the details so don't bother asking and just follow me.\"",
		choices:[
			{
				text:'Accept',
				index:3
			},
			{
				text:'Walk away',
				index:2
			},
		]
	},
	{
		image:src="MainStreet.jpg",
		title:'Street', ///2
		text:'You remember the last time you tried to help someone as crazy looking as him and that ended with three dead clowns, a horde of genetically modified cats and you getting chased off a planet so you decide to keep walking. As you turn and keep walking you notice out of the corner of your eye the man using his his phone. As you approach your hotel two shady looking men grab you and give you an injection which makes you feel extremely tired and slowly pass out.',
		choices:[
			{
				text:'Wake up',
				index:4
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///3
		text:'"Sure." you respond bluntly. "Follow me then." the strange man says and leads you to a car which takes you out of the nice area you were in before and to a rough looking area about an hour away. After the journey he leads you to a strange looking building and gestures to the door which leads to the basement.',
		choices:[
			{
				text:'Follow Him',
				index:9
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///4
		text:'You wake up in rough looking basement type room with only one door, a small window letting some light in, a larger metal set of drawers and a chair.',
		choices:[
			{
				text:'Investigate window',
				index:5
			},
			{
				text:'Investigate drawers',
				index:6
			},
			{
				text:'Investigate chair',
				index:7
			},
			{
				text:'Investigate door',
				index:8
			},
			{
				text:'Finish looking around',
				index:9
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///5
		text:'Looking out of the window you can see that you have gone from the nice area you were staying at to a extremely rough area of Lazdona and you start to wonder how long you were passed out.',
		choices:[
			{
				text:'Look at something else',
				index:4
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///6
		text:"The drawers are unlocked so you open them and see that they contain all you would need to torture someone, the items range from rusty blades, hammers, garrote wire and other painful looking items. You weren't wearing anything that would allow you to hide any of them so you decide not to take any also it would help not to anger who ever wanted you here.",
		choices:[
			{
				text:'Look at something else',
				index:4
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///7
		text:"The chair is a simple chair but it seems to have blood splatter on it...",
		choices:[
			{
				text:'Look at something else',
				index:4
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///8
		text:"The door is solid metal and doesn't seem to have a handle on the side you're on.",
		choices:[
			{
				text:'Look at something else',
				index:4
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///9
		text:'"After way too much waiting around the door opens and a well dressed woman with a shaved head and two heavily armed robot bodyguards enter the room. "Now ' + playname + ' lets get right down to business, I want you to kill Aaron Wardson, the current head of the Trini technology company."',
		choices:[
			{
				text:'Accept',
				index:10
			},
			{
				text:'Ask why',
				index:11
			},
			{
				text:'refuse',
				index:12
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///10
		text:'"Alright I will do it." you say calmly. "I thought I would have to be more....persuasive." the mysterious woman said menacingly. "Here is his schedule, decide how to take care of it however you want."',
		choices:[
			{
				text:'Leave and plan your attack',
				index:15
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///11
		text:'"Why do you want him dead?" you ask hoping that you will get an answer. "Why does anyone do anything..." she responds "For more power. so will you do it or not?"',
		choices:[
			{
				text:'Accept',
				index:10
			},
			{
				text:'refuse',
				index:12
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///12
		text:'"No." you say defiantly and starting to walk towards the door. "Fine I will just have to be a bit more persuasive...Restrain him." the two robot bodyguards then spring into action and grab you and move you to the chair where they hold you in place.',
		choices:[
			{
				text:'Torture time',
				index:13
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///13
		text:'As the robots hold you in place the mysterious woman shows that she is not afraid to get her hands dirty and starts by hitting you with all her strength in the face and stomach which winds you and starts to make your vision go blurry.Then she grabs the hammer and starts swinging at your ribs trying to break them. "Now then...Want to give me a new answer?" she asks menacingly',
		choices:[
			{
				text:'Accept',
				index:10
			},
			{
				text:'Refuse Again',
				index:14
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement', ///14
		text:'"No..." you say weakly but still defiant. "Fine then...You brought this upon yourself" she says bringing the knife out of the set of drawers and in one quick movement slits your throat.',
		choices:[
			{
				text:'Die',
				index:51
			},
		]
	},
	{
		image:src="Basement(JamesCheong).jpg",
		title:'Basement/Hotel', ///15
		text:'As the mysterious woman leaves she leaves the door open for you to leave as well. After you wait for a few minutes to make sure she has gone you step outside into the street and head back your hotel to think about your next move',
		choices:[
			{
				text:'Proceed with the job',
				index:17
			},
			{
				text:'Research the mysterious woman',
				index:16
			},
		]
	},
	{
		image:src="Hotel.jpg",
		title:'Hotel', ///16
		text:'You decide that is probably best if you know more about who you are working for so you head back to your hotel through the back alleys of Lazdona. Once you are back at your hotel you start scouring the net for any trace of her, after about an hour you find out that she is Diane Rezal, the ninth richest person on the planet. You wonder why her goal is power when there are eight people above her in the planets hierarchy.',
		choices:[
			{
				text:'Proceed with the job',
				index:17
			},
			{
				text:'Dig Deeper',
				index:18
			},
		]
	},
	{
		image:src="Hotel.jpg",
		title:'Hotel', ///17
		text:"After Diane Rezal's display of dominance and power you decide that you may as well go through with the assassination and then leave the planet as quickly as possible.",
		choices:[
			{
				text:'Head to Aaron Wardson’s next location',
				index:22
			},
		]
	},
	{
		image:src="Hotel.jpg",
		title:'Hotel', ///18
		text:'You get the feeling that there is more to Diane Rezal than is public so you reach out to a few old contacts you have to see if they know anything about her and one comes back with information that she has deep ties to the criminal underground and has earned most of her money and business through less than legal means.',
		choices:[
			{
				text:'Try and betray her',
				index:19
			},
			{
				text:'Proceed with job',
				index:17
			},
		]
	},
	{
		image:src="Hotel.jpg",
		title:'Hotel', ///19
		text:"You realise that you just can't go through with this, you realise that Aaron Wardson doesn't have any criminal ties and that he just knew where to invest his money and what companies to take over. You know it would be better for the planet if Diane Rezal didn't have any control over it.",
		choices:[
			{
				text:'Head to her office',
				index:21
			},
			{
				text:'Ask where she will be from your contacts',
				index:20
			},
		]
	},
	{
		image:src="Hotel.jpg",
		title:'Hotel', ///20
		text:"Your contact comes through for you again and tells you she will personally be overseeing a weapons deal at the docks that you could mess with and potentially take her out.",
		choices:[
			{
				text:'Head there now and set a trap',
				index:37
			},
			{
				text:'Head to the black market to buy and gun to assault the deal',
				index:32
			},
		]
	},
	{
		image:src="DianesOffice.jpg",
		title:'Dianes office', ///21
		text:'As you head to her office and step inside you realise you have made a grave mistake since her security consists entirely of the same robots you saw before and they immediately recognise you and grab you. After dragging you up to the roof a pre recorded message plays, "Seems you can not be trusted...oh well I can find someone else." and a few seconds after the message ends they throw you off the top of the skyscraper.',
		choices:[
			{
				text:'Die',
				index:51
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///22
		text:"Through the information Diane gave you, you know that Aaron Wardson will be hosting an event at one of his nearby offices celebrating the anniversary of opening that office branch. Once you arrive there you realise that security is extremely tight but you could definitely sneak in but he also has a car ready at the back that you could sabotage.",
		choices:[
			{
				text:'Sneak in',
				index:23
			},
			{
				text:'Set a trap',
				index:24
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///23
		text:"After sneaking in through one of the kitchen doors you start thinking about how to go about killing Aaron Wardson. You could walk straight up to him, kill him then run but that would be very messy or you could use the extremely conveniently placed and rare Calarian spice which in high doses could kill people to poison all the food but potentially kill way more people.",
		choices:[
			{
				text:'poison',
				index:26
			},
			{
				text:'Approach Aaron',
				index:27
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///24
		text:"As you quietly approach the vehicle you see that is an old X-C4R which had a fatal flaw where if two simple wires were swapped around as soon as the car started the engine would explode.",
		choices:[
			{
				text:'Sneak in',
				index:23
			},
			{
				text:'Swap wires',
				index:25
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///25
		text:"As you get under the X-C4R and swap the wires around you feel as if this is too easy and quickly move to a nearby alley to wait and see what happens. A few hours later Aaron Wardson leaves the event and enters his car which then starts to move away and your heart drops for a moment but then BOOM! the X-C4R explodes and prompts you to run to the nearest spaceport.",
		choices:[
			{
				text:'Escape',
				index:50
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///26
		text:"At the right moment an hour later you throw as much Calarian spice into all the dishes as possible without making the food look bad. Not long after the food is taken out to the guests you start hearing screams and as you poke your head out of the door you realise that absolutely everyone had been eating the food and while you had succeeded at your mission you had killed a lot of innocent people and before you knew it the security had entered the kitchen to arrest everyone there.",
		choices:[
			{
				text:'Surrender',
				index:46
			},
			{
				text:'Approach Aaron',
				index:27
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///27
		text:"As you approach him you start to realise that what you're doing is so wrong and start to have second thoughts.",
		choices:[
			{
				text:'Back out',
				index:28
			},
			{
				text:'Keep going',
				index:29
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///28
		text:"You really can't do this so you rush out of the office and into a nearby back alley where you start to hyperventilate, but before you can get any rest once of Diane's robots approaches you almost knowingly and shoots you immediately.",
		choices:[
			{
				text:'Die',
				index:51
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///29
		text:"It's do or die you think to yourself and in one swift movement get behind Aaron and snap his neck, in the moments of shock immediately after you run out of the building by going through the kitchen and out of the back door knowing that after killing a man in the middle of a crowded room there is no way you're getting out of this alive.",
		choices:[
			{
				text:'Head to the spaceport',
				index:30
			},
			{
				text:'Head to Dianes office',
				index:31
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///30
		text:"Aaron's security was clearly top notch because once you get to the spaceport they are waiting for you and shoot on sight.",
		choices:[
			{
				text:'Die',
				index:51
			},
		]
	},
	{
		image:src="AaronsOffice.jpg",
		title:'Aaron’s office', ///31
		text:"After a lot of running and hiding you can see Diane's office but much to your despair the Robot bodyguards immediately start shooting at you and attract the attention of Aaron's security teams who also start shooting at you. 'I'm fucked.' you think to yourself before getting shot to pieces.",
		choices:[
			{
				text:'Die',
				index:51
			},
		]
	},
	{
		image:src="Blackmarket.jpg",
		title:'Blackmarket', ///32
		text:"As you walk into the black market you feel a thousand suspicious eyes fix themselves on you as you approach the weapons vendor and ask him from the best gun he has, he gestures to a large looking laser rifle and immediately asks to be paid 500,000 credits.",
		choices:[
			{
				text:'Pay him',
				index:34
			},
			{
				text:'Threaten him for it',
				index:33
			},
		]
	},
	{
		image:src="Blackmarket.jpg",
		title:'Blackmarket', ///33
		text:"The second you show even a little bit of aggression to one of their own the entire market opens fire on you, killing you instantly.",
		choices:[
			{
				text:'Die',
				index:51
			},
		]
	},
	{
		image:src="Blackmarket.jpg",
		title:'Blackmarket/Docks', ///34
		text:"After paying him the money you take your gun and immediately head for the docks. When you arrive you see Diane talking with some other people with her robot bodyguards beside her.",
		choices:[
			{
				text:'Just shoot her',
				index:35
			},
			{
				text:'Shoot everyone',
				index:36
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///35
		text:"As you shoot diane her robot bodyguards immediately turn on you and start firing as sirens start up from all around you as you start to run and realise that the police are here.",
		choices:[
			{
				text:'Run towards police',
				index:40
			},
			{
				text:'Dive into the water',
				index:41
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///36
		text:"After everyone is dead you hear sirens.",
		choices:[
			{
				text:'try to escape',
				index:47
			},
			{
				text:'surrender',
				index:48
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///37
		text:"You head to the location at the docks that you contact gave you and realise that there is a crane moving shipping containers that you could use to drop one on Diane when she arrives to make the deal.",
		choices:[
			{
				text:'Head to blackmarket',
				index:32
			},
			{
				text:'Wait for the deal to start',
				index:38
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///38
		text:"As you sit at your perch in the controls of the crane you see a bunch of rough looking men and women pull up in two cars and wait with weapons drawn, you can see that they favour laser pistols so it was wise that you decided not to engage. after about another hour you see a armoured van pull up and Diane exits the driver's seat followed by some human bodyguards this time, as she stops to start talking to her buyers you think about your next move.",
		choices:[
			{
				text:'Drop the container now',
				index:39
			},
			{
				text:'Wait a little longer',
				index:44
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///39
		text:"As you drop the container you see Diane's two robot bodyguards exit the back of the van and with lighting fast speed they notice the falling container and start shooting at the controls. As you dive out of the controls and land on one of the highly stacked containers you see Diane get crushed by the container and start to make your escape, but much to your despair you hear sirens coming your way. You realise the sale was a setup and Diane would have been arrested anyway but you made your choice and it's now time to deal with the consequences.",
		choices:[
			{
				text:'Run towards police',
				index:40
			},
			{
				text:'Dive into the water',
				index:41
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///40
		text:"As you keep running you realise that the police have been shouting for you to stop but before you can they open fire and kill you.",
		choices:[
			{
				text:'Die',
				index:51
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///41
		text:"As you dive into the water to avoid the robots chasing you and the police ahead of you the police and robots don't engage the police which must mean that the police must think they're chasing you because it was the right thing to do and not for Diane's revenge from beyond the grave. Once underwater you need to make a choice, swim fast or try to dodge the shots coming from the police.",
		choices:[
			{
				text:'Swim fast',
				index:42
			},
			{
				text:'Try to dodge',
				index:43
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///42
		text:"Swimming fast was the best idea and you manage to escape the range of the police's weapons but as you climb back onto dry land you notice the police may have stopped firing but didn't lose you and had all their weapons focused on you.",
		choices:[
			{
				text:'Surrender',
				index:48
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///43
		text:"Dodging was not a good idea, there were way too many police officers there and you get shot almost to pieces and sadly die.",
		choices:[
			{
				text:'Die',
				index:51
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///44
		text:"After waiting just a little bit longer you see that Diane is joined by her robot bodyguards after getting out of the van.",
		choices:[
			{
				text:'Drop the container',
				index:45
			},
			{
				text:"Don't drop the container yet",
				index:46
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///45
		text:"The container drops crushing Diane and the robotic bodyguards but before you can react the people who were supposed to be buying the weapons put there fingers to their ears as if they were using earpieces and then you realise the entire thing was a setup and sirens start blaring from all around.",
		choices:[
			{
				text:'try to escape',
				index:47
			},
			{
				text:"surrender",
				index:48
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///46
		text:"Before you can drop the container the robotic bodyguards start scanning the area and notice you and start firing on you ferociously killing you.",
		choices:[
			{
				text:'Die',
				index:51
			},
		]
	},
	{
		image:src="Docks.jpg",
		title:'Docks', ///47
		text:"Running as fast as you can you manage see small unsecured boat that you quickly hop into and speed away towards the spaceport as you need to leave now or you will end up being killed or sent to jail.",
		choices:[
			{
				text:'Escape',
				index:50
			},
		]
	},
	{
		image:src="Police(JanDitlev).jpg",
		title:'Surrender', ///48
		text:"You know that the laws on this planet are dictated by those in charge and most of them have good morals so you won't be killed if you give them the information you had on Diane. You decide that it would be best to surrender and explain to the police that what you were doing was for the greater good. Much to your despair they throw you in jail without a trial and make it very clear you won't be getting out for a very long time.",
		choices:[
			{
				text:'Jail',
				index:49
			},
		]
	},
	{
		image:src="Jail.jpg",
		title:'Jail', ///49
		text:"Unfortunately you didn't get the quick death you wanted or to live your life free, instead you just rotted in prison",
		choices:[
			{
				text:'Restart',
				index:0
			},
		]
	},
	{
		image:src="Spaceport.jpg",
		title:'Spaceport', ///50
		text:"you successfully manage to make it to the spaceport and get the last seat on the next flight to anywhere.",
		choices:[
			{
				text:'Restart',
				index:0
			},
		]
	},
	{
		title:'Death', ///51
		text:"You died.",
		choices:[
			{
				text:'Restart',
				index:0
			},
		]
	},
]
